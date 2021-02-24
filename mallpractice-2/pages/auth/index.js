import { showModal, showToast, wxlogin } from "../../utils/asyncWX";
import { request } from "../../request/index.js"

//Page Object
Page({
  data: {
    
  },
  
  async getUserInfo (e){
    try {
      // 1 获取用户信息
      const {encryptedData,rawData,iv,signature} = e. detail;
      // 2 获取小程序登录成功后的code
      const {code} = await wxlogin();
      // 3 发送请求，获取用户的token
      const loginParams = {encryptedData,rawData,iv,  signature,code};
      const {token} = await request({url:"/users/wxlogin",  data:loginParams,method:"post"});
      console.log(token);
      wx.setStorageSync("token", token);
      wx.navigateBack({
        delta: 1
      });
    } catch (error) {
      console.error(error);
      await showModal({content:"获取token失败，接口有问题，先瞎几把写个token放进去好了"});
      wx.setStorageSync("token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo");
      wx.navigateBack({
        delta: 1
      });
    }
  }
});