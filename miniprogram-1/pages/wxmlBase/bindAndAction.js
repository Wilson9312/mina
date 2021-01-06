// pages/wxmlBase/bindAndAction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
  },
  // 输入框input事件逻辑
  handeleInput(e) {
    const input = e.detail.value;
    console.log(input);
    this.data.num = input;
    this.setData({
      num:this.data.num
    })
    // 或者直接用下面这个代码代替
    // this.setData({
    //   num:e.detail.value
    // })
  },
  // 加减按钮事件
  handleTap: function (e) {
    this.setData({
      num:this.data.num+e.currentTarget.dataset.operation
    })
  },
})