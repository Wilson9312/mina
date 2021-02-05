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
    // 获取缓存中购物车数据
    const cart = wx.getStorageSync('cart') || [];
    // 计算是否全选
    // every 方法：
    // 遍历数组，只有当条件都返回true时，方法返回true；
    // 任意条件为false时，立马结束遍历，返回false；
    // 当传入空数组时，默认返回true
    const allChecked = cart.length ? cart.every(v => v.checked) : false;
    // 计算 总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      if (v.checked) {
        totalPrice+=v.num*v.goods_price;
        totalNum+=v.num;
      }
    });
    // cart.f
    this.setData({
      address,
      cart,
      allChecked,
      totalPrice,
      totalNum
    });
  },
  // 点击选择地址
  handleChooseAddress() {
    // 1.先获取“获取地址”的权限状态
    // <= 旧版：若用户拒绝过，则直接调用chooseAddress是无法再次获取地址的，所以拒绝后，要引导到权限设置
    // 新版官方改了getSetting和chooseAddress，直接调用 chooseAddress 即可，但是要真机调试才行

    // 旧版： 
    // wx.getSetting({
    //   success: (result)=>{
    //     const addressScope = result.authSetting["scope.address"];
    //     console.log(result);
    //     if (addressScope===false) {
    //       wx.openSetting({
    //         success: (result)=>{

    //         }
    //       });
    //     }else{
    //       wx.chooseAddress({
    //         success: (result)=>{
    //           console.log(result);
    //         }
    //       });
    //     }
    //   }
    // });

    // 新版：
    wx.chooseAddress({
      success: (result) => {
        result.full = result.provinceName + result.cityName + result.countyName + result.detailInfo;
        wx.setStorageSync("address", result);
      }
    });
  },

  handleCheckboxChange(e) {
    // 获取传过来的商品id
    const goods_id = e.currentTarget.dataset.id;
    console.log(goods_id);
    // 获取购物车数据
    let {cart} = this.data;
    // 找到商品在购物车内的序号
    const index = cart.findIndex(v=>v.goods_id===goods_id);
    // 修改选中状态
    cart[index].checked = !cart[index].checked;
    // 更新data和缓存中的购物车数据
    this.setData({
      cart
    });
    wx.setStorageSync('cart', cart);
  }
});

