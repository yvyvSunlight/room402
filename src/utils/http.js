import useUserStore from "@/stores/user"
//地址
const baseURL = 'https://api.room402.temp.ziqiang.net.cn'

//添加拦截器
const httpInterceptor = {
    //拦截前触发
    invoke(options){
        //1.非http开头需拼接地址
        if(!options.url.startsWith('http')){
            options.url = baseURL + options.url
        }
        //2.请求超时,默认60s
        options.timeout = 10000
        //3.添加小程序端请求头标识
        options.header = {
            ...options.header,
            'source-client':'miniapp',
        }
        //4.添加token请求头
        const userStore = useUserStore()
        const token = userStore.profile?.openid
        if(token){
            options.header.Authorization = token
        }
        console.log(options)
    }
}
uni.addInterceptor('request',httpInterceptor)
uni.addInterceptor('uploadFile',httpInterceptor)



export const http = (options) => {
    //1.返回Promise对象
    return new Promise((resolve,reject)=>{
        uni.request({
            ...options,

            //2.请求成功
            success(res){
                console.log(res.statusCode);
                console.log(res.data);
                if(res.statusCode >= 200 && res.statusCode < 300){
                    //2.1提取核心数据
                    resolve(res.data)
                }else if(res.statusCode === 401){
                    //401错误 -> 清理用户信息，跳转到登录页
                    const userStore = useUserStore();
                    userStore.clearProfile();
                    uni.switchTab({url:'/pages/home'})
                    reject(res)
                }else{
                    uni.showToast({
                        icon:'none',
                        title:res.data.msg || '请求错误'
                    })
                    reject(res)
                }
            },
            //相应失败
            fail(err){
                uni.showToast({
                    icon:'none',
                    title:'网络错误，换个网络试试',
                })
                reject(err)
            }
        })
    })
}