// 0. 引入用来发送请求的方法
import { request } from "../../request/index.js"

Page({
  data: {
    // 轮播图数组
    swiperList:[],
    // 分类导航数据
    cateList:[],
    // 楼层数据
    floorList:[]
  },
  //options(Object)
  onLoad: function(options){
    // 1.发送异步请求获取轮播图数据
    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   data: {},
    //   header: {'content-type':'application/json'},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (result)=>{
    //     console.log(result);
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
    // 2.优化封装请求方法如下
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },

  getSwiperList (){
    request({url:"/home/swiperdata"})
    .then(result=>{
      this.setData({
        swiperList:result
      })
    })
  },

  getCateList (){
    request({url:"/home/catitems"})
    .then(result=>{
      this.setData({
        cateList:result
      })
    })
  },

  getFloorList (){
    request({url:"/home/floordata"})
    .then(result=>{
      this.setData({
        floorList:result
      })
    })
  },

  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});