import { request } from "../../request/index.js"

//Page Object
Page({
  data: {
    tabs: [
      {
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    index: 0,
    goods_list:[],
    totalPages:0
  },
  // 搜索商品需要的参数
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },

  handleTabsItemChange(e) {
    console.log(e);
    const { index } = e.detail;
    const { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      index,
      tabs
    })
  },

  async getGoodsList () {
    const res = await request({url:"/goods/search",data:this.QueryParams});
    // 向上取整计算总页数 = 总条数 / 每页条数 
    this.data.totalPages = Math.ceil(res.total/this.QueryParams.pagesize);
    this.setData({
      // 拼接数据
      goods_list:[...this.data.goods_list,...res.goods]
    })
    // 停止下拉刷新
    wx.stopPullDownRefresh;
  },

  //options(Object)
  onLoad: function (options) {
    this.QueryParams.cid = options.cat_id;
    this.getGoodsList();
  },

  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {
    this.setData({
      goods_list:[]
    })
    this.QueryParams.pagenum = 1;
    this.data.totalPages = 0;
    this.getGoodsList();
  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  },

  // 页面上拉触底事件
  onReachBottom() {

    if (this.QueryParams.pagenum >= this.data.totalPages) {
      // 加载完了
      wx.showToast({title: '加载完了'});
    } else {
      // 加载
      this.QueryParams.pagenum++;
      this.getGoodsList();
    }
  }
});