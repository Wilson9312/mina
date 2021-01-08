// pages/custom/pageCircle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('Page onLoad');
    console.log('发送异步请求，获取初始化页面数据');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('Page onReady ');

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('Page onShow ');

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('Page onHide ');

  },

  /**
   * 生命周期函数--监听页面卸载 就是关闭
   */
  onUnload: function () {
    console.log('Page onUnload ');

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('Page onPullDownRefresh ');
    console.log('做页面数据 或 效果 的刷新');

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('Page onReachBottom ');
    console.log('做页面上拉加载下一页数据处理');

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('Page onShareAppMessage ');
    console.log('右上角分享按钮');

  },

  /**
   * 页面滚动触发
   */
  onPageScroll: function () {
    console.log('Page onPageScroll ');

  },

  /**
   * 页面大小改变时触发，如横竖屏
   * 2.4.0 以上才支持，编译器右上角 详情-本地设置-调试基础库 修改支持的版本
   */
  onResize(res) {
    res.size.windowWidth // 新的显示区域宽度
    res.size.windowHeight // 新的显示区域高度
    console.log('Page onResize ' + '宽度' + res.size.windowWidth + '高度' + res.size.windowHeight);

  }
})