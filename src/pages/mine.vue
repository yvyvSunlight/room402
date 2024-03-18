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
const go_cancel = () => {
  uni.navigateTo({
    url:'/pages/cancel'
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
      <text class="phone">198****8110</text>

      <view class="key_sg">
        <image
          src="../static/key.svg"
          mode="scaleToFill"
        />
      </view>




      <view class="container1">
        
        <view class="bar" id="bar_1">
          <text>新用户注册</text>
          <view class="key_box" @click="preLogin">
            <image
              src="../static/key.svg"
              mode="scaleToFill"
            />
          </view>
        </view>
        <view class="bar" id="bar_2">
          <text>账号登录</text>
          <view class="key_box" @click="preLogin">
            <image
              src="../static/key.svg"
              mode="scaleToFill"
            />
          </view>  
        </view>
        <view class="bar" id="bar_3">
          <text>预约记录</text>
          <view class="key_box" @click="go_cancel">
            <image
              src="../static/key.svg"
              mode="scaleToFill"
            />
          </view>  
        </view>
        <view class="bar" id="bar_4">
          <text>关于我们</text>
          <view class="key_box" @click="go_aboutUs">
            <image
              src="../static/key.svg"
              mode="scaleToFill"
            />
          </view>  
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
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 914rpx;
  background-color: #FFFFFF;
}

.image_box{

position: absolute;
left: 44rpx;
top: calc((112 - 88)*2rpx);
width: calc(80*2rpx);
height: calc(72*2rpx);
background: rgba(237, 237, 237, 0.9);
border-radius: calc(11*2rpx);

display: flex;
justify-content: center;
align-items: center;

}
.image{
  width: calc(58*2rpx);
  height: calc(53*2rpx);
}

.phone,.name{
  /* 张三 198****8110 */

position: absolute;
left: calc(117*2rpx);

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
letter-spacing: -0.3px;

color: #000000;


}
.phone{
top: 15.39%;
/* bottom: 77.59%; */
}
.name{
  top: calc((125 - 88)*2rpx);
}

.bar{
  height: calc(52*2rpx);
  width: 100vw;
}
.key_box,.key_sg{
  /* Group */

position: absolute;

display: flex;
align-items: center;
justify-content: center;

}
.key_box{
  left: calc(353*2rpx);
  top: 40rpx;
  width: calc(12.73*2rpx);
  height: calc(12.73*2rpx);
}
.key_sg{
  width: 24rpx;
  height: 48rpx;
  left: calc(352*2rpx);
  top: calc((119 - 88)*2rpx);
}

.container1{
  position: absolute;
  top: calc((246 - 88)*2rpx);
  height: fit-content;
  width: 100vw;
}

.bar text{
  /* 新用户注册 */

position: absolute;
left: 56rpx;
top: 28rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 40rpx;
line-height: 50rpx;
letter-spacing: -0.6rpx;

color: #000000;


}
.bar{
  position: relative;
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