<script setup>
import { onShow } from "@dcloudio/uni-app";
import  useIsLoginStore  from '@/stores/isLogin';
import  useRoleStore  from '@/stores/role';
import helper from "../../common/helper.js";
import { ref } from "vue";
const isLoginStore = useIsLoginStore();

const isDisplay = ref('block');


onShow(() => {
  if(isLoginStore.data == 1){
    isDisplay.value = 'none';
  }
}) 
const preLogin = () => {
  // isDisplay.value = 'block';
  uni.navigateTo({
    url:'/pages/logIn'
  })
}
const goLogin = () => {
  if(isLoginStore.data == 1){
    isDisplay.value = 'none'
  }
}

const go_aboutUs = () => {
  uni.navigateTo({
    url:'/pages/aboutUs'
  })
}
const go_meetings = () => {
  uni.navigateTo({
    url:'/pages/meetings'
  })
}
console.log(isLoginStore.data);
</script>

<template>
  <view class="bg">
    <view class="white1">
      <view class="image_box">
        <image
          src="../static/smile.svg"
          mode="scaleToFill"
          class="image"
        />
      </view>
      <text class="name">张三</text>
      <text class="department">自强Studio 前端组</text>

      <view class="key_sg">
        <image
          src="../static/key.svg"
          mode="scaleToFill"
        />
      </view>
      <view class="line_sg"></view>

  </view>    


      <view class="container1">
        
        <view class="bar" id="bar_1">
          <image
            src="../static/bar_1.svg"
            mode="scaleToFill"
            class="logo"
          />
          <text>新用户注册</text>
          <view class="key_box" @click="preLogin">
            <image
              src="../static/key.svg"
              mode="scaleToFill"
            />
          </view>
        </view>
        <view class="line" id="l1"></view>
        <view class="bar" id="bar_2">
          <image
            src="../static/bar_2.svg"
            mode="scaleToFill"
            class="logo"
          />
          <text>账号登录</text>
          <view class="key_box" @click="preLogin">
            <image
              src="../static/key.svg"
              mode="scaleToFill"
            />
          </view>  
        </view>
        <view class="line" id="l2"></view>
        <view class="bar" id="bar_3">
          <image
            src="../static/bar_3.svg"
            mode="scaleToFill"
            class="logo"
          />
          <text>预约记录</text>
          <view class="key_box" @click="go_meetings">
            <image
              src="../static/key.svg"
              mode="scaleToFill"
            />
          </view>  
        </view>
        <view class="line" id="l3"> </view>
        <view class="bar" id="bar_4">
          <image
            src="../static/bar_4.svg"
            mode="scaleToFill"
            class="logo"
          />
          <text>关于我们</text>
          <view class="key_box" @click="go_aboutUs">
            <image
              src="../static/key.svg"
              mode="scaleToFill"
            />
          </view>  
        </view>
      </view>




    

    <view class="white">
      <view class="container">
        <image
          src="../static/sticker.png"
          mode="scaleToFill"
        />
      </view>
      <navigator
        url="/pages/logIn"
        open-type="navigate"
        hover-class="navigator-hover"
      >
      <view class="button" @click="goLogin">注册/登录</view>
      </navigator>
    </view>
  </view>
</template>



<style scoped>
.bg{
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
}
.white1{
  /* position: absolute;
  left: 0;
  top: 0; */
  position: relative;
  width: 100vw;
  height: 380rpx;
  background-color: #FFFFFF;
}
.logo{
  width: 56rpx;
  height: 56rpx;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  left: 32rpx;
}

.image_box{

position: absolute;
left: 44rpx;
top: calc((112 - 88)*2rpx);
width: calc(81*2rpx);
height: calc(81*2rpx);
display: flex;
justify-content: center;
align-items: center;

}
.image{
  width: calc(81*2rpx);
  height: calc(81*2rpx);
}

.department,.name{
  /* 张三 198****8110 */

position: absolute;
left: calc(117*2rpx);

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
letter-spacing: -0.3px;

color: #000000;


}
.name{
  top: calc((125 - 88)*2rpx);
}
.department{
  top:140rpx;
}
.bar{
  height: calc(52*2rpx);
  width: 100vw;
  
  
  
}
.key_box,.key_sg{
  /* Group */

position: absolute;
width: calc(20*2rpx);
height: calc(20*2rpx);
display: flex;
align-items: center;
justify-content: center;

}
.key_box{
  left: 680rpx;
  top: 40rpx;
  
}
.key_sg{
  left: 680rpx;
  top: calc((119 - 70)*2rpx);
}

.container1{
  position: relative;
  /* position: absolute; */
  /* top: calc((246 - 88)*2rpx); */
  height: fit-content;
  width: 100vw;
  background-color: #fff;
}

.bar text{


position: absolute;
left: 126rpx;
top: 50%;
transform: translateY(-50%);


/* font-weight: 400; */
/* font-size: 40rpx; */
/* line-height: 50rpx; */
/* letter-spacing: -0.6rpx; */

/* color: #000000; */



font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 36rpx;
line-height: 140%;
/* or 25px */
display: flex;
align-items: center;
letter-spacing: 0.4rpx;

/* Greyscale / 900 */
color: #212121;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;

}
.bar{
  position: relative;
}

.line{
  height: 0;
position: relative;
width: 600rpx;
left: 100rpx;


border-top: 2rpx solid #d7d7d7;
transform: matrix(1, 0, 0, 1, 0, 0);
}

.line_sg{
  height: 0;
  position: absolute;
  top:230rpx;
  width: 700rpx;
  left: 50%;
  translate: -50%;

  border-top: 2rpx solid #d7d7d7;
  transform: matrix(1, 0, 0, 1, 0, 0);
  
}











.white{
  width: 100vw;
  height: 914rpx;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  display: v-bind(isDisplay);
  
}
.container{
  width: calc(80*2rpx);
  height: calc(72*2rpx);
  position: absolute;
left: 39.47%;
right: 39.2%;
top: 16.13%;
bottom: 75%;

background: rgba(237, 237, 237, 0.9);
border-radius: calc(11*2rpx);
display: flex;
justify-content: center;
align-items: center;
}
image{
width: calc(58*2rpx);
height: calc(53*2rpx);


}
.button{
  width: calc(352*2rpx);
  height: calc(52.72*2rpx);
  /* Rectangle 210 */



position: absolute;
left: 5.33%;
right: 4%;
top: 40.02%;
bottom: 53.48%;



background: #99DBFD;
border-radius: calc(38*2rpx);

display: flex;
justify-content: center;
align-items: center;


font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: calc(20*2rpx);
line-height: 108.1%;
/* or 22px */
text-align: center;
letter-spacing: 0.05em;

color: #0071D9;

}



</style>