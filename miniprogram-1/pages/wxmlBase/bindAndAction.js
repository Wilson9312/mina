// pages/wxmlBase/bindAndAction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
  },
  // 输入框input事件逻辑
  handeleInput(e) {
    const input = e.detail.value;
    console.log(input);
    this.data.num = input;
    this.setData({
      num:this.data.num
    })
    // 或者直接用下面这个代码代替
    // this.setData({
    //   num:e.detail.value
    // })
  },
  // 加减按钮事件
  handleTap: function (e) {
    this.setData({
      num:this.data.num+e.currentTarget.dataset.operation
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})