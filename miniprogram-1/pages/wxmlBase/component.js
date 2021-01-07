// pages/wxmlBase/component.js
Page({

  // 按钮点击获取 getPhoneNumber
  getPhoneNumber(e){
    console.log(e);
  },

  // 按钮点击获取 getUserInfo
  getUserInfo(e){
    console.log(e);
  },

  // 单选框响应事件
  radioChange(e){
    console.log(e);
    this.setData({
      selectedRadio:e.detail.value
    })
  },

  // 复选框响应事件
  checkboxChange(e){
    console.log(e);
    this.setData({
      checkBoxSelectedList:e.detail.value
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    htmlString:'<a class="sc-EHOje jXFKFG" href="https://www.tmall.com/wow/z/heybox/heyboxrax/heybox?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.1&amp;scm=1007.home_icon.tmallxp.d&amp;wh_biz=tm&amp;disableNav=YES"><img class="sc-bZQynM iEnsRn" src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"><p class="sc-gzVnrw hKaypx">天猫新品</p></a>',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: #1AAD19;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you\'re gonna get.'
      }]
    }],
    selectedRadio:"male",
    checkBoxSelectedList:[],
    checkBoxSource:[
      {
        index:0,
        name:"手机",
        value:"phone"
      },
      {
        index:1,
        name:"平板",
        value:"pad"
      },
      {
        index:0,
        name:"电脑",
        value:"computer"
      },
    ],
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