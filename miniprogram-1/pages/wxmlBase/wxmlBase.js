// pages/wxmlBase/wxmlBase.js

Page({
  data: {
    msg:"hello mina",
    num:666666,
    isBeauty:false,
    hideViewFlag:false,
    person:{
      age:20,
      height:183,
      weight:120,
    },
    isChecked:true,
    numList:["1","2","3"],
    occupationList:[
      {
        id:0,
        people:"教师",
        type:"编制内",
      }
    ],
    characterList:[
      {
        id:0,
        name:"孙悟空",
        power:100,
      },{
        id:1,
        name:"猪八戒",
        power:80,
      },{
        id:2,
        name:"沙僧",
        power:70,
      },
    ],
    condition:5,
    hiddenCondition:true,
  },
});
  