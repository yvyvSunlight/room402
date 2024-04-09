<script setup>
import  useIsLoginStore  from '@/stores/isLogin';
import useUserStore from "@/stores/user";
import UniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue";
import helper from "../../common/helper.js";
import { onMounted, ref } from "vue";
import { onShow } from "@dcloudio/uni-app";
import '@/utils/http'
import useIsSignStore from "@/stores/isSign";
components:{UniNoticeBar}
const isLoginStore = useIsLoginStore();
const isSignStore = useIsLoginStore();
const userStore = useUserStore();
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
const go_mine = () => {
  // isDisplay.value = 'none';
  uni.switchTab({
    url:'/pages/mine'
  })
}

console.log(isLoginStore.data);


//-------------------------------




onMounted(() => {

})

const go_meetings = () => {
  if(isLoginStore.data === 0)
  {
    return;
  }
  uni.navigateTo({
    url:'/pages/meetings'
  })
}
</script>


<template>
  <view class="content">
    
    <text class="header">欢迎来到402房间预约小程序~</text>

    <UniNoticeBar show-icon scrollable
        class="notice"
				text="公告：武汉大学本科生院402房间的使用时间为早上9：00~晚上21：30" />
    
      <image
        src="../static/home_bg.svg"
        mode="scaleToFill"
        class="bg_img"
      />
    <view class="sign_in_box" @click="go_meetings" blurEffect="light">
      <image
        src="../static/home_sign_in.svg"
        mode="scaleToFill"
      />
      <text class="words">签到</text>
    </view>


 
    
    <view class="container">
      <view id="book" @click="open1">
        <image
          src="../static/home_book.svg"
          mode="scaleToFill"
        />
      <text>预约房间</text>  
      </view>
      <view id="cancel" @click="open2">
        <image
          src="../static/home_cancel.svg"
          mode="scaleToFill"
        />
        <text>
          取消预约
        </text>
      </view>
      <view id="problem" @click="open3">
        <image
          src="../static/home_problem.svg"
          mode="scaleToFill"
        />
       <text>故障报修</text> 
      </view>
      <view id="suggest" @click="open4">
        <image
          src="../static/home_suggest.svg"
          mode="scaleToFill"
        />
       <text>意见反馈</text> 
      </view>

    </view>
  
    


    <view class="prompt" v-if="isLoginStore.data===0">
      <view class="up">请先登录</view>
      <view class="line"></view>
      <view class="down" @click="go_mine">确定</view>
    </view>

  </view>
</template>



<style scoped>
.content{
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;

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
.notice{
  position: absolute;
  top: 80rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1;
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
top: 648rpx;
width: 100vw;
/* height: 730rpx; */
height: calc(100vh - 730rpx);
display: block;
background: #FFFFFF;
border-radius: 66rpx;
z-index: 1;

}
.container>view{
  position: absolute;
width: 300rpx;
height: 228rpx;


background: #F0F2FF;
border-radius: 32rpx;


filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}
.container>view image{
  height: 66.66rpx;
  width: 66.66rpx;
  position: absolute;
  left: 50%;
  translate: -50% 0;
  top: 46rpx;
}
.container>view text{
  /* 预约房间 */

position: absolute;
left: 50%;
translate: -50%;
top: 152rpx;
white-space: nowrap;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 40rpx;
line-height: 140%;

letter-spacing: 0.4rpx;

color: #000000;


}

#book{
position: absolute;
left: 62rpx;
top: 64rpx;
}
#cancel{
  position: absolute;
  left:396rpx;
  top: 64rpx;
}
#problem{
  position: absolute;
  left: 62rpx;
  top: 334rpx;
}
#suggest{
  position: absolute;
  left: 396rpx;
  top: 334rpx;
}
.prompt{
  position: absolute;
  left: 50%; 
  transform: translateX(-50%);
  top: 400rpx;
  width: calc(365*2rpx);
  height: calc(175*2rpx);
  border-radius: 30rpx;
  background: #FFFBFB;
  z-index: 4;
}
.line{
  width: calc(365*2rpx);
  height: 0;
  position: absolute;
  top: calc(118*2rpx);
  border: 2rpx solid #E1E1E1;
  transform: rotate(0.16deg);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
.up{
  position: absolute;
  width: 228px;
  height: 25px;
  left: 72px;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.3px;
  z-index: 4;
  color: #000000;
}
.down{
  position: absolute;
  width: calc(365*2rpx);
  height: calc((175 - 118)*2rpx);
  top: calc(118*2rpx);
  overflow: hidden;

  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 40rpx;
  line-height: 50rpx;
  text-align: center;
  letter-spacing: -0.6rpx;
  z-index: 4;
  color: #0029B9;

  display: flex;
  justify-content: center;
  align-items: center;
}









/*
.prompt view{
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

text-align: center;
letter-spacing: -0.6rpx;

color: #000000;
margin: 0 auto;

}
*/

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
.sign_in_box image{
  height: 100rpx;
  width: 100rpx;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50rpx;
  z-index: 3;
}
.sign_in_box text{
  /* 签到 */

position: absolute;
left: 50%;
transform: translateX(-50%);
top: 172rpx;

font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 48rpx;
line-height: 140%;
letter-spacing: 0.2px;
color: #000000;
z-index: 3;

}

.sign_in_box{
/* Rectangle 24 */
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
position: absolute;

background: rgba(240, 242, 255, 0.02);
box-shadow: 0px 8rpx 8rpx rgba(0, 0, 0, 0.25);
border-radius: 32rpx;
  position: absolute;
  width: 300rpx;
  height: 300rpx;
  left: 50%;
  transform: translateX(-50%);
  top: 258rpx;
  overflow: hidden;
  /* z-index: 2; */

}


.sign_out_box{
  position: absolute;
  width: 400rpx;
  height: 400rpx;
  left: 50%;
  transform: translateX(-50%);
  top: calc((208 - 88)*2rpx);
  border-radius: 200rpx;
  background-color: #c8eeff;
  display: flex;
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
  z-index: 1;
}

.bg_img{
  position: absolute;
  width: 100vw;
  height: 662rpx;
  top: 150rpx;

}

/* .bg_img_box{
  width: 100vw;
  height: 662rpx;
} */

</style>
