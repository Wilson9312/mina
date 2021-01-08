// pages/custom/custom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        title:"首页",
        isActive:true,
      },
      {
        id:1,
        title:"篮球",
        isActive:false,
      },
      {
        id:2,
        title:"LOL",
        isActive:false,
      },
    ]
  },

  handleItemChange : function(e) {
    console.log(e);
    const index = e.detail.index;
    let tabs = JSON.parse(JSON.stringify(this.data.tabs));//转字符 后 解析
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }
})