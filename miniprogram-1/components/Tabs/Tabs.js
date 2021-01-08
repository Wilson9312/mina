// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      // 数据类型
      type:Array,
      // 默认初始值
      value:[]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      console.log(e);

      // 结构 相当于 e.currentTarget.dataset.index
      const {index} = e.currentTarget.dataset;
      
      // 若源数据tabs是组件内部自己的属性，则可自行修改，如下：
      /* 
      // 不建议获取修改源数据，通过深拷贝复制一份，修改后再赋值更佳
      // let {tabs} = this.data;
      let tabs = JSON.parse(JSON.stringify(this.data.tabs));//转字符 后 解析
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
      */

      // tabs改为由父组件输入，则回掉修改后的数据给父组件

      this.triggerEvent('itemChange',{index});
    }
  }
})
