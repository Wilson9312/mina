//Page Object

import { request } from "../../request/index.js"

Page({
  data: {
    goodsObj:{},
    currentSwiperItemIndex:0
  },
  //options(Object)
  onLoad: function(options){
    const {goods_id} = options;
    this.getGoodsDetail(goods_id);
  },

  async getGoodsDetail (goods_id) {
    const goodsObj = await request({url:"/goods/detail",data:{goods_id}});
    this.setData({
      goodsObj:{
        pics:goodsObj.pics,
        goods_name:goodsObj.goods_name,
        goods_price:goodsObj.goods_price,
        goods_introduce:goodsObj.goods_introduce
        // iphone 部分手机不是别 webp 图片格式
        // 最好跟后台协商改为 jpg
        // 可以如下临时将 webp 改为 jpg
        // goods_introduce:goodsObj.goods_introduce.replace(/\.webp/g,'.jpg')
      }
    })
  },

  handleSwiperTap (e) {
    console.log(e);
    const urls = this.data.goodsObj.pics.map(v=>v.pics_mid);
    const current = this.data.goodsObj.pics[this.data.currentSwiperItemIndex].pics_mid;
    wx.previewImage({
      current,
      urls
    });
  },

  handleSwiperChange (e) {
    console.log(e);
    this.data.currentSwiperItemIndex = e.detail.current;
  }
});