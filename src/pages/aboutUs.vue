<script setup>


</script>
<template>
  <view class="bg">

    <image
      src="../static/house.svg"
      mode="scaleToFill"
      class="house"
    />

  </view>

  <view class="intro_box">
    <text class="title">关于402房间预约小程序</text>
    <text class="intro_">
简介:    \n

    &nbsp &nbsp &nbsp &nbsp    402房间预约平台管理系统为小程序端，功能
主要包括402房间预约、402房间的使用情况查
询、402房间设备状态控制等，旨在解决武汉大学
学生组织会议场所预定难、流程繁琐、房间设备故
障等问题，实现房间资源的有效利用和管理</text>
  </view>

  <view class="contact_box">
    <view class="title1">联系我们</view>
    <view class="detail">
      <view>

        联系电话：0591-88888888  
      </view>
      <view>

        
        联系地址：武汉大学本科生院  
      </view>
      <view>

        电子邮箱：123456789@163.com 
      </view>
    </view>
  </view>
</template>


<style scoped>

.bg{
  background-color: #d6eaff;
  width: 100vw;
  height: 100vh;
}
.house{
position: absolute;
left: 268rpx;
top: calc((138 - 88)*2rpx);
width: 228rpx;
height: 220rpx;
}

.title{
  /* 关于402房间预约小程序 */

position: absolute;
left: 50%;
transform: translateX(-50%);
top: calc((275 - 257)*2rpx);
height: 40rpx;
width: 298rpx;
font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 26rpx;
line-height: 28rpx;
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;


}

.intro_box{

position: absolute;
left: 50%;
transform: translateX(-50%);
top: calc((257 - 88)*2rpx);
width: 644rpx;
height: calc(178*2rpx);
background-color: #FFFFFF;
border-radius: 15px;


}
.intro_{
/* 简介: 402房间预约平台管理系统为小程序端，功能 主要包括402房间预约、402房间的使用情况查 询、402房间设备状态控制等，旨在解决武汉大学 学生组织会议场所预定难、流程繁琐、房间设备故 障等问题，实现房间资源的有效利用和管理 */
width: calc(263*2rpx);
height: 280rpx;
position: absolute;
left: 50%;
transform: translateX(-50%);
top: calc((295 - 250)*2rpx);

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 25rpx;
line-height: 34rpx;
letter-spacing: -0.6rpx;

color: #000000;



}
.contact_box{
  width: 644rpx;
  height: 304rpx;
position: absolute;
left: 50%;
transform: translateX(-50%);
top: calc((482 - 88)*2rpx);

background: #FFFFFF;
border-radius: 15px;

}
.title1{
height: 62rpx;
width: 232rpx;
position: absolute;
left: 50%;
transform: translateX(-50%);
top: calc((502 - 482)*2rpx);

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 40rpx;
line-height: 50rpx;
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;


}
.detail{
  /* 联系电话: 0591-88888888 联系地址:武汉大学本科生院 电子邮箱:123456789@163.com */

position: absolute;
left: 50%;
transform: translateX(-50%);
top: calc((522 - 470)*2rpx);
width: 500rpx;
font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 32rpx;
line-height: 40rpx;
letter-spacing: -0.6rpx;

color: #000000;


}
</style>