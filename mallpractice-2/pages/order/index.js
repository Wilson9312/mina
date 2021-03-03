// pages/order/index.js
import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "全部",
        isActive: true
      },
      {
        id: 1,
        value: "待付款",
        isActive: false
      },
      {
        id: 2,
        value: "待发货",
        isActive: false
      },
      {
        id: 3,
        value: "退款/退货",
        isActive: false
      }
    ],
    index: 0,
    orders: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // onShow 不同于 onLoad，没有接收传过来的数据

    // 0.1 读取缓存，看有没有token
    const token = wx.getStorageSync("token");
    if (!token) {
      wx.navigateTo({
        url: '/pages/auth/index'
      });
      return;
    }

    // 1.获取页面栈数组
    const pages = getCurrentPages();
    // 2.获取当前页
    const curPage = pages[pages.length - 1];
    // 3.获取当前页接收的数据
    const pageOptions = curPage.options;
    const type = pageOptions.type;
    // 4.获取订单列表
    this.getOrders(type);
    this.changeSelectedTabsItem(type - 1);
  },

  // 获取订单列表的方法
  async getOrders(type) {
    const { orders } = await request({ url: "/my/orders/all", data: { type } });

    this.setData({
      // 时间格式化：中国标准时间
      orders: orders.map(v => ({ ...v, create_time_cn: (new Date(v.create_time * 1000).toLocaleString()) }))
    });
  },
  // 处理tab选中项
  changeSelectedTabsItem(index) {
    const { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      index,
      tabs
    })
  },
  // 处理tab点击
  handleTabsItemChange(e) {
    // 1.获取被点击的tab索引，并更新选中
    const { index } = e.detail;
    this.changeSelectedTabsItem(index);
    // 2.重新发送请求
    this.getOrders(index + 1);
  }
})