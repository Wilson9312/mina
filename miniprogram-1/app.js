//app.js
App({
  onLaunch: function () {

    console.log('App onLaunch');

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },

  onShow: function () {
    console.log('App onShow');
  },
  onHide () {
    console.log('App onHide');
  },
  onError (msg) {
    console.log('App onError');
    console.log('跟控制台打印一样的错误信息，可以用于错误上报');
  },
  // 小程序第一次启动，找不到第一个入口页面时才会触发 => 修改编译模式的启动页面实现报错
  // navigateTo 一个不存在的页面是不会触发的
  onPageNotFound () {
    console.log('App onPageNotFound');
    // 页面不存在时，可以处理跳转到别的页面去
    wx.navigateTo({
      url: '/pages/wxmlBase/component',
    });
  },
})