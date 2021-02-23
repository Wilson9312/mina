
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