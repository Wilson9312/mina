
export const showModal=({content})=>{
    return new Promise((resolve,reject)=>{
        wx.showModal({
            title: '提示',
            content: content,
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success: (result) => {
                resolve(result);
            },
            fail: (error) => {
                reject(error);
            },
            complete: () => {}
          });
    })
}

export const showToast=({title})=>{
    return new Promise((resolve,reject)=>{
        wx.showToast({
            title: title,
            icon: 'none',
            success: (result)=>{
                resolve(result);
            },
            fail: (error)=>{
                reject(error);
            },
            complete: ()=>{}
        });
    })
}

export const wxlogin=()=>{
    return new Promise((resolve,reject)=>{
        wx.login({
            timeout:10000,
            success: (result)=>{
                resolve(result);
            },
            fail: (error)=>{
                reject(error);
            }
        });
    })
}

/**
 * Promise 形式的 小程序微信支付
 * @param {object} pay 微信支付所必要的参数
 */
export const wxRequestPayment=(pay)=>{
    return new Promise((resolve,reject)=>{
        wx.requestPayment({
            ...pay,
            success: (result)=>{
                resolve(result);
            },
            fail: (error)=>{
                reject(error);
            },
            complete: ()=>{}
        });
    })
}