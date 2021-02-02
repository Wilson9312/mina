//Page Object

import { request } from "../../request/index.js"

Page({
  data: {
    goodsObj:{},
    currentSwiperItemIndex:0
  },
  //data里放的是双向绑定的数据，即标签用到的数据，如果把没有用的数据放到data里，会损耗性能
  GoodsInfo:{},

  //options(Object)
  onLoad: function(options){
    const {goods_id} = options;
    this.getGoodsDetail(goods_id);
  },

  //请求商品详情
  async getGoodsDetail (goods_id) {
    const goodsObj = await request({url:"/goods/detail",data:{goods_id}});
    this.GoodsInfo = goodsObj;
    console.log(this.GoodsInfo);
    this.setData({
      goodsObj:{
        //原数据有许多键值对，处于性能优化问题，这里复制必要数据
        pics:goodsObj.pics,
        goods_name:goodsObj.goods_name,
        goods_price:goodsObj.goods_price,
        goods_introduce:goodsObj.goods_introduce
        // iphone 部分手机不是别 webp 图片格式
        // 最好跟后台协商改为 jpg
        // 可以如下临时将 webp 改为 jpg
        // goods_introduce:goodsObj.goods_introduce.replace(/\.webp/g,'.jpg')
      },
    })
  },

  //轮播图点击响应
  handleSwiperTap (e) {
    const urls = this.GoodsInfo.pics.map(v=>v.pics_mid);
    const current = this.GoodsInfo.pics[this.data.currentSwiperItemIndex].pics_mid;
    wx.previewImage({
      current,
      urls
    });
  },

  //轮播图轮播
  handleSwiperChange (e) {
    this.data.currentSwiperItemIndex = e.detail.current;
  },

  //添加购物车
  handleAddCart (e) {
    let cartInfo = wx.getStorageSync('Cart') || [];
    let index = cartInfo.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id);
    if (index===-1) {
      // 若商品不存在购物车内，则添加商品
      // 同时添加购物车内需要的参数：数量、是否选中
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cartInfo.push(this.GoodsInfo);
    } else {
      cartInfo[index].num++;
    }
    wx.setStorageSync('Cart', cartInfo);
    wx.showToast({
      title: '加入成功',
      icon: 'success  ',
      // 可防止用户频繁点击
      mask: true
    });
  }
});

