export const request = (params) => {
    return new Promise((resolve, reject) => {
        wx.request({
            // 将 params 结构转换成一个参数序列
            ...params,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}