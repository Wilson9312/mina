//Page Object
Page({
  data: {
    address:{}
  },
  //options(Object)
  onLoad: function(options){
    
  },
  onShow: function(){
    // 因为购物车会频繁被打开关闭，所以实时去处理数据比较好
    const address = wx.getStorageSync("address");
    address.full = address.provinceName+address.cityName+address.countyName+address.detailInfo;
    this.setData({
      address
    });
  },
  // 点击选择地址
  handleChooseAddress(){
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
      success: (result)=>{
        console.log(result);
        wx.setStorageSync("address", result);
      }
    });
  }
});

