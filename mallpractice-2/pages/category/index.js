import { request } from "../../request/index.js"

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单数据
    leftMenuList: [],
    // 右侧商品数据
    rightContent: [],
    // 选中的左侧菜单
    currentIndex: 0,
    // 右侧菜单滚动到顶部
    scrollTop: 0
  },
  Cates: [],

  // 获取菜单请求
  async getCateList() {

    // 链式请求：
    // request({
    //   url: "/categories"
    // }).then(res => {
    //   wx.setStorageSync('cates', {'cates':res.data.message,'date':Date.now()});
    //   this.Cates = res.data.message;
    //   let leftMenuList = this.Cates.map(v => v.cat_name);
    //   let rightContent = this.Cates[0].children;
    //   this.setData({
    //     leftMenuList,
    //     rightContent
    //   })
    // })

    // 使用 es7 的 async await 优化发送请求
    const res = await request({ url: "/categories" });
    wx.setStorageSync('cates', { 'cates': res, 'date': Date.now() });
    this.Cates = res;
    let leftMenuList = this.Cates.map(v => v.cat_name);
    let rightContent = this.Cates[0].children;
    this.setData({
      leftMenuList,
      rightContent
    })

  },

  // 点击菜单响应
  handleItemTap(e) {
    const { index } = e.currentTarget.dataset;
    let rightContent = this.Cates[index].children;
    this.setData({
      // 更新 index
      currentIndex: index,
      // 根据 index 更新右边商品数据
      rightContent: rightContent,
      // 右侧菜单滚动回顶部
      scrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const cates = wx.getStorageSync('cates').cates;
    const date = wx.getStorageSync('cates').date;
    if (!cates || (Date.now() - date > 10000)) {
      this.getCateList();
    } else {
      this.Cates = cates;
      let leftMenuList = this.Cates.map(v => v.cat_name);
      let rightContent = this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
    }
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