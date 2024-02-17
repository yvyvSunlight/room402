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
      <view id="book">预约房间</view>
      <view id="cancel">取消预约</view>
      <view id="problem">故障报修</view>
      <view id="suggest">意见反馈</view>

    </view>
    <view class="prompt">
      <view>请先登录!</view>
      <button>确认</button>
    </view>

  </view>
</template>

<script setup>


</script>

<style>
.content{
  width: 375px;
  height: 100vh;
  background-color: #f5f5f5;
}
.header{
  position: absolute;
  left: 2.93%;
  right: 52%;
  top: 2.56%;
/* bottom: 85.59%+10%; */


font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
text-align: center;
letter-spacing: -0.3px;

color: #979797;
  
}
.switch{
  /* position: fixed; */
  width: 94px;
  height: 33px;
  /* top: 3px;
  right:5px; */
  position: absolute;
  left: 75.2%;
  right: 1.6%;
  top: 1.45%;

}
.uni-margin-wrap {
		width: 100%;
    position: absolute;
    left: 8%;
    right: 7.47%;
    top: 8.47%;
    /* bottom: 56.9%; */
	}
	.swiper {
		height: 200px;
    width: 317px;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 18px;

	}
	.swiper-item {
		display: flex;
		height: 200px;
    width: 317px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color:#55c6ff;
	}
 .blue{
  position: absolute;
  left: 4.27%;
  right: 93.33%;
  top: 43.8%;


  background: #0283FA;
  border-radius: 8px;
  width: 9px;
  height: 33px;

 }
 .middle{
  /* 主要功能 */

position: absolute;
left: 9.6%;
right: 64.27%;
top: 44.04%;
bottom: 49.26%;

font-family: 'SimHei';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 27px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;


 }
.container{
  position: absolute;
left: 4.53%;
right: 4.8%;
top: 50.2%;
/* bottom: 12.81%; */
width: 340px;
height: 276px;
display: block;
background: #FFFFFF;
margin: 0 auto;

}
.container view{
  position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
width: 146px;
height: 91px;
background: #C8EEFF;
border-radius: 16px;
font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 30px;
text-align: center;
letter-spacing: -0.3px;
display: flex;
justify-content: center;
align-items: center;
color: #0071D9;
}
#book{


position: absolute;
left: 16px;
top: 24px;



}
#cancel{
  position: absolute;
  left:180px;
  top: 24px;

}
#problem{


  position: absolute;
  left: 16px;
  top: 149px;


}
#suggest{

  position: absolute;

  left: 180px;
  top: 149px;

}
.prompt{
position: absolute;
left: 50%; top: 50%;
transform: translate(-50%, -50%);
width: 344px;
height: 362px;
display: none;

background: #FFFBFB;
border-radius: 32px;
padding-top: 20px;
}
.prompt view{
  /* 请先登录！ */

position: absolute;
left: 59px;
top: 100px;
width: 241px;
height: 61px;


font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 61px;
/* identical to box height */
text-align: center;
letter-spacing: -0.3px;

color: #000000;
margin: 0 auto;

}
button{
  /* Component 9 */

position: absolute;
left: 70px;
top: 240px;
width: 204px;
height: 86px;
margin: 10px auto;
display: flex;
justify-content: center;
align-items: center;
/* Rectangle 32 */
/* 确认 */



font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 41px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;



background: rgba(85, 198, 255, 0.6);
border-radius: 16px;


}



</style>
