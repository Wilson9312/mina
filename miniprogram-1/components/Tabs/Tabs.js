// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
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

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      console.log(e);
      // 结构 相当于 e.currentTarget.dataset.index
      const {index} = e.currentTarget.dataset;
      // 不建议获取修改源数据，通过深拷贝复制一份，修改后再赋值更佳
      // let {tabs} = this.data;
      let tabs = JSON.parse(JSON.stringify(this.data.tabs));//转字符 后 解析
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
    }
  }
})
