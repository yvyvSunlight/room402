<script setup>
  import { ref } from "vue";
  import "@/utils/http";
  import  useUserStore  from "@/stores/user.js";
  const isDisplay = ref('none')
  const userStore = useUserStore();
  const wx_suc = () => {
    // isDisplay.value = 'block';
      uni.getUserProfile({
        desc:'微信登录',
        success:(ures)=>{
          console.log(ures);
          uni.login({success:(lres)=>{
            console.log(lres);
            let params = lres.code;
            //backend
            uni.request({
              url:'https://api.room402.temp.ziqiang.net.cn/wx/login',
              method:'GET',
              data:{
                role:1,
                code:params
              },
              success:(success)=>{
                console.log(success.data);
                userStore.setProfile({user_id:success.data.data.user_id,
                is_first:success.data.is_first,
              openid:success.data.data.openid,
            session:success.data.data.session_key})
              },
            })

            //my
            // uni.request({
            //   url:'https://api.weixin.qq.com/sns/jscode2session',
            //   method:'GET',
            //   data:{
            //     appid:'wxbb790dfebfba6b18',
            //    
            //     js_code:params,
            //     grant_type:'authorization_code',
            //   },
            //   success:(success)=>{
            //     console.log('my');
            //     console.log(success.data);
            //   },
            //   fail:(fail)=>{
            //     console.log('fail');
            //   },
            // })
            uni.navigateTo({
              url:'/pages/choose'
            })
          },
        })
      },
    })
  }



  // const getUserInfo = () => {
	// 			return new Promise((resolve, reject) => {
	// 				wx.getUserProfile({
	// 					lang: 'zh_CN',
	// 					desc: '用户登录', 
	// 					success: (res) => {
	// 						resolve(res.userInfo)
	// 					},
	// 					fail: (err) => {
	// 						reject(err)
	// 					}
	// 				})
	// 			})
	// 		}
 
	// const	getLogin = () => {
	// 			return new Promise((resolve, reject) => {
	// 				wx.login({
	// 					success(res) {
	// 						resolve(res.code)
	// 					},
	// 					fail: (err) => {
	// 						reject(err)
	// 					}
	// 				})
	// 			})
	// 		}
 
  // const wx_suc = () => {
  //       let userInfo = getUserInfo();
	// 			let wxCode = getLogin();
				
 
	// 			Promise.all([userInfo, wxCode]).then((res) => {
	// 				//都获取权限成功
  //         console.log(res);
	// 			}).catch(err => {
					
	// 			})
  //           }




  //登录的流程
  // 1.使用uni.getUserInfo(OBJECT)获取用户的信息
  
  // 2. 
</script>


<template>
  <!-- <div class="bg">
    <input type="text" placeholder="账号">
    <input type="text" placeholder="密码">
  </div> -->
  <!-- <button class="submit">登录</button> -->
  <text class="middle">一键授权微信注册/登录</text>
  <button class="weixin" @click="wx_suc" open-type="getUserInfo" bindgetuserinfo="getUserInfo">微信一键注册/登录</button>

  <view class="prompt_suc">
    <text class="content">注册成功！</text>
    <navigator
      url="/pages/choose"
      open-type="navigate"
      hover-class="navigator-hover"
    >
    <button class="jump">登录</button>
    </navigator>
  </view>

</template>


<style scoped>
.bg{
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
}
input:first-child{
  /* Group 6797 */

position: absolute;
left: 50%;
top: 120rpx;

transform: translateX(-50%);

/* Rectangle 210 */


background: #F2F3F7;
border-radius: 30rpx;

height: 105.44rpx;
width: 680rpx;
}
input:last-child{
  /* Rectangle 210 */

position: absolute;
left: 50%;
transform: translateX(-50%);
top: 258.92rpx;

background: #F2F3F7;
border-radius: 30rpx;
height: 105.44rpx;
width: 680rpx;
}

.submit{
  /* Rectangle 210 */

position: absolute;
left: 50%;
top: 418rpx;
transform: translateX(-50%);

width: 680rpx;
height: 105.44rpx;

background: #8E97FD;
border-radius: 76rpx;

display: flex;
justify-content: center;
align-items: center;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 40rpx;
line-height: 108.1%;
/* or 22px */
letter-spacing: 0.05em;

color: #F6F1FB;


}

.middle{
  /* 或一键授权微信注册/登录 */

position: absolute;
left: 50%;
transform: translateX(-50%);
top: 636rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 28rpx;
line-height: 108.1%;
/* or 15px */
text-align: center;
letter-spacing: 0.05em;

color: #A1A4B2;


}

.weixin{
/* Rectangle 210 */

/* Group 6800 */

position: absolute;
left: 50%;
transform: translateX(-50%);
top:470rpx;

filter: drop-shadow(0rpx 8rpx 8rpx rgba(0, 0, 0, 0.25));


  /* Rectangle 210 */


width: 680rpx;
height: 105.44rpx;

background: #15C87C;
border-radius: 76rpx;

/* 微信一键注册/登录 */

display: flex;
justify-content: center;
align-items: center;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 40rpx;
line-height: 108.1%;
/* or 22px */
letter-spacing: 0.05em;

color: #F6F1FB;



}

.prompt_suc{
  width: 688rpx;
  height: 724rpx;

  /* Rectangle 31 */

  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

  background: #FFFBFB;
  border-radius: 64rpx;

 display: v-bind(isDisplay);
}
.content{
/* 注册成功！ */

position: absolute;
width: 482rpx;
height: 122rpx;
left: 118rpx;
top: 200rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 96rpx;
line-height: 122rpx;
/* identical to box height */
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;


}

.jump{
  /* Rectangle 32 */

position: absolute;
left: 140rpx;
top: 480rpx;

width: 408rpx;
height: 192rpx;
background: rgba(85, 198, 255, 0.6);
border-radius: 32rpx;

/* 确认 */

display: flex;
justify-content: center;
align-items: center;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 64rpx;
line-height: 82rpx;
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;


}

</style>