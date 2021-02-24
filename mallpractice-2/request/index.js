// 记录同时发送异步请求的次数
let ajaxTimes = 0;
export const request = (params) => {

    // 请求头处理封装
    let header = {...params.header};


    ajaxTimes++;
    wx.showLoading({title: '加载中',mask: true});
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve, reject) => {
        wx.request({
            // 将 params 结构转换成一个参数序列
            ...params,
            url:baseUrl+params.url,
            success: (result) => {
                resolve(result.data.message);
            },
            fail: (err) => {
                reject(err);
            },
            complete:()=>{
                ajaxTimes--;
                if (ajaxTimes===0) {
                    wx.hideLoading();
                }
            }
        });
    })
}
