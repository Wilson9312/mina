import { showModal, showToast, wxRequestPayment } from "../../utils/asyncWX.js"
import { request } from "../../request/index";

//Page Object
Page({
  data: {
    address: {},
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0
  },
  //options(Object)
  onLoad: function (options) {

  },
  onShow: function () {
    // 因为购物车会频繁被打开关闭，所以实时去处理数据比较好

    // 获取缓存中收货地址
    const address = wx.getStorageSync("address");
    this.setData({ address });
    // 获取缓存中购物车数据
    let cart = wx.getStorageSync('cart') || [];
    cart = cart.filter(v => v.checked);

    // 计算 总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      }
    });
    this.setData({
      cart,
      totalPrice,
      totalNum,
      address
    });

  },


  // 点击支付
  async handlePay(e) {
    try {
      // 1 判断有没有用token
      const token = wx.getStorageSync("token");
      // 2 没有token，跳转去认证
      if (!token) {
        wx.navigateTo({
          url: '/pages/auth/index'
        });
        return;
      }
      // 3 创建订单
      // 3.1准备请求头参数
      const header = { Authorization: token };
      // 3.2准备请求体参数
      const order_price = this.data.totalPrice;
      const consignee_addr = this.data.address.all;
      const cart = this.data.cart;
      let goods = [];
      cart.forEach(v => goods.push({
        goods_id: v.goods_id,
        goods_number: v.num,
        goods_price: v.goods_price
      }))
      const orderParams = { order_price, consignee_addr, goods };
      // 4 准备发送请求创建订单获取订单编号
      const { order_number } = await request({ url: "/my/orders/create", method: "POST", data: orderParams, header });
      console.log(order_number);
      // 5 发起预支付接口
      const { pay } = await request({ url: "/my/orders/req_unifiedorder", method: "POST", data: { order_number }, header });
      console.log(pay);
      // 6 调起微信支付
      await wxRequestPayment(pay);
      // 7 查询支付结果
      const res = await request({ url: "/my/orders/chkOrder", method: "POST", data: { order_number }, header });
      await showModal({ content: "支付成功" });
      // 8 支付成功，从购物车中删除已经支付的商品
      let newCart = wx.getStorageSync("cart");
      newCart = newCart.filter(v => !v.checked);
      wx.setStorageSync("cart", newCart);
      // 9 跳转到订单记录，查询订单结果
      wx.navigateTo({
        url: '/pages/order/index'
      });
    } catch (error) {
      console.log("调起支付失败:");
      console.error(error);
      await showModal({ content: "支付失败" });
      wx.navigateTo({
        url: '/pages/order/index'
      });
    }
  }
});

