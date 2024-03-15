<script setup>
import  useIsLoginStore  from '@/stores/isLogin';

import helper from "../../common/helper.js";
import { ref } from "vue";
import { onShow } from "@dcloudio/uni-app";


const isLoginStore = useIsLoginStore();


const isDisplay = ref('none')
const open1 = () => {
  if(isLoginStore.data===0){
    isDisplay.value = "block";
  }else{
    uni.navigateTo({
    url:'/pages/book',
  })
  }
}
const open2 = () => {
  if(isLoginStore.data===0){
    isDisplay.value = "block";
  }else{
    uni.navigateTo({
    url:'/pages/cancel',
  })
  }
}
const open3 = () => {
  if(isLoginStore.data===0){
    isDisplay.value = "block";
  }else{
    uni.navigateTo({
    url:'/pages/problem',
  })
  }
}
const open4 = () => {
  if(isLoginStore.data===0){
    isDisplay.value = "block";
  }else{
    uni.navigateTo({
    url:'/pages/suggest',
  })
  }
}
const closePrompt = () => {
  isDisplay.value = 'none';
}

console.log(isLoginStore.data);


//-------------------------------
const go_sign_in = () => {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      console.log('当前位置的经度：' + res.longitude);
      console.log('当前位置的纬度：' + res.latitude);
      uni.navigateTo({
        url:'/pages/sign_in'
      })
    }
  });
}

</script>


<template>
  <view class="content">
    
    <text class="header">欢迎来到402房间预约小程序~</text>
    

    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="false" :autoplay="true" :interval="2000"
      :duration="500">
          <swiper-item>
              <view class="swiper-item uni-bg-red">公告A</view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item uni-bg-green">公告B</view>
          </swiper-item>
          <swiper-item>
              <view class="swiper-item uni-bg-blue">公告C</view>
          </swiper-item>
      </swiper>
    </view>
    <!-- <uni-notice-bar show-icon scrollable
				text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" /> -->
    <view class="sign_in_box" @click="go_sign_in">
      签到
    </view>
    <view class="sign_out_box" @click="go_sign_out">
      签退
    </view>

    <view class="blue">
  
    </view>
    <text class="middle">主要功能</text>
    <view class="container">
      <view id="book" @click="open1">预约房间</view>
      <view id="cancel" @click="open2">取消预约</view>
      <view id="problem" @click="open3">故障报修</view>
      <view id="suggest" @click="open4">意见反馈</view>

    </view>
  
    
    <view class="prompt">
      <view>请先登录!</view>
      <button @click="closePrompt">确认</button>
    </view>

    

  </view>
</template>



<style scoped>
.content{
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
.header{
  position: absolute;
  left: 22rpx;
  top: 28rpx;
  height: 30rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 24rpx;
line-height: 30rpx;
text-align: center;
letter-spacing: -0.6rpx;

color: #979797;
  
}
.switch{
  /* position: fixed; */
  width: 188rpx;
  height: 66rpx;
  /* top: 3px;
  right:5px; */
  position: absolute;
  left: 564rpx;
  top: 10rpx;

}
.uni-margin-wrap {
		width: 100%;
    position: absolute;
    left: 50%;
    /* right: 7.47%; */
    top: 90rpx;
    transform: translateX(-50%);
    /* bottom: 56.9%; */
    display: flex;
    justify-content: center;
    align-items: center;
	}
	.swiper {
		height: 96rpx;
    width: 634rpx;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 36rpx;

	}
	.swiper-item {
		display: flex;
		height: 96rpx;
    width: 634rpx;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color:#dadada;
	}
 .blue{
  position: absolute;
  left: 32rpx;
  top: 652rpx;


  background: #0283FA;
  border-radius: 16rpx;
  width: 18rpx;
  height: 66rpx;

 }
 .middle{
  /* 主要功能 */

position: absolute;
left: 72rpx;
top: 656rpx;

font-family: 'SimHei';
font-style: normal;
font-weight: 400;
font-size: 48rpx;
line-height: 54rpx;
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;


 }
.container{
position: absolute;
left: 34rpx;
top: 756rpx;
width: 680rpx;
height: 520rpx;
display: block;
background: #FFFFFF;
margin: 0 auto;

}
.container view{
  position: absolute;

width: 292rpx;
height: 182rpx;
background: #C8EEFF;
border-radius: 32rpx;
font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 48rpx;
line-height: 60rpx;
text-align: center;
letter-spacing: -0.6rpx;
display: flex;
justify-content: center;
align-items: center;
color: #0071D9;
}
#book{


position: absolute;
left: 32rpx;
top: 48rpx;



}
#cancel{
  position: absolute;
  left:360rpx;
  top: 48rpx;

}
#problem{


  position: absolute;
  left: 32rpx;
  top: 298rpx;


}
#suggest{

  position: absolute;

  left: 360rpx;
  top: 298rpx;

}
.prompt{
position: absolute;
left: 50%; top: 50%;
transform: translate(-50%, -50%);
width: 688rpx;
height: 734rpx;
display: v-bind(isDisplay);
background: #FFFBFB;
border-radius: 64rpx;
padding-top: 80rpx;
}
.prompt view{
  /* 请先登录！ */

position: absolute;
left: 118rpx;
top: 200rpx;
width: 482rpx;
height: 122rpx;


font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 96rpx;
line-height: 122rpx;
/* identical to box height */
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;
margin: 0 auto;

}
button{
  /* Component 9 */

position: absolute;
left: 140rpx;
top: 480rpx;
width: 408rpx;
height: 172rpx;
margin: 20rpx auto;
display: flex;
justify-content: center;
align-items: center;
/* Rectangle 32 */
/* 确认 */



font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 64rpx;
line-height: 81rpx;
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;



background: rgba(85, 198, 255, 0.6);
border-radius: 32rpx;


}
.sign_in_box{
  position: absolute;
  width: 400rpx;
  height: 400rpx;
  left: 50%;
  transform: translateX(-50%);
  top: calc((208 - 88)*2rpx);
  border-radius: 100%;
  background-color: #c8eeff;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  z-index: 2;

  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 72rpx;
  line-height: 92rpx;
  text-align: center;
  letter-spacing: -0.6rpx;

  color: #000000;


}
.sign_out_box{
  position: absolute;
  width: 400rpx;
  height: 400rpx;
  left: 50%;
  transform: translateX(-50%);
  top: calc((208 - 108)*2rpx);
  border-radius: 200rpx;
  background-color: #c8eeff;
  display: none;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 72rpx;
  line-height: 92rpx;
  text-align: center;
  letter-spacing: -0.6rpx;

  color: #000000;

}

</style>
