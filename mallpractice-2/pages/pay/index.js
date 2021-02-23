import { showModal,showToast } from "../../utils/asyncWX.js"

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
    this.setData({address});
    // 获取缓存中购物车数据
    let cart = wx.getStorageSync('cart') || [];
    cart = cart.filter(v=>v.checked);

    // 计算 总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if (v.checked) {
        totalPrice+=v.num*v.goods_price;
        totalNum+=v.num;
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
    const {address,totalNum} = this.data;
    // 支付
    wx.navigateTo({
      url: '/pages/pay/index',
      success: (result)=>{
        console.log("成功");
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
});

