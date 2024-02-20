<script setup>

import { ref } from "vue";

let flag = 1;


const isDisplay = ref('none')

const open1 = () => {
  if(flag===0){
    isDisplay.value = "block";
  }else{
    uni.navigateTo({
    url:'/pages/book',
  })
  }
}
const open2 = () => {
  if(flag===0){
    isDisplay.value = "block";
  }else{
    uni.navigateTo({
    url:'/pages/cancel',
  })
  }
}
const open3 = () => {
  if(flag===0){
    isDisplay.value = "block";
  }else{
    uni.navigateTo({
    url:'/pages/problem',
  })
  }
}
const open4 = () => {
  if(flag===0){
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


</script>


<template>
  <view class="content">
    
    <text class="header">欢迎来到402房间预约小程序~</text>
    <image
      src="../static/switchRoles.png"
      mode="scaleToFill"
      class="switch"
    />
    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000"
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
    top: 124rpx;
    transform: translateX(-50%);
    /* bottom: 56.9%; */
    display: flex;
    justify-content: center;
    align-items: center;
	}
	.swiper {
		height: 400rpx;
    width: 634rpx;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 36rpx;

	}
	.swiper-item {
		display: flex;
		height: 400rpx;
    width: 634rpx;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color:#55c6ff;
	}
 .blue{
  position: absolute;
  left: 32rpx;
  top: 584rpx;


  background: #0283FA;
  border-radius: 16rpx;
  width: 18rpx;
  height: 66rpx;

 }
 .middle{
  /* 主要功能 */

position: absolute;
left: 72rpx;
top: 588rpx;

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
top: 688rpx;
width: 680rpx;
height: 552rpx;
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



</style>
