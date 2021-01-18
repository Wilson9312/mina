export const request = (params) => {
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
            }
        });
    })
}