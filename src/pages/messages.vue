<script setup>
import helper from "../../common/helper.js";
import  useIsLoginStore  from '@/stores/isLogin';
import  useUserStore  from "@/stores/user";
import { onMounted, ref } from "vue";
import '@/utils/http';
import { get_notice_all } from '../services/get.js';
import { onLoad } from "@dcloudio/uni-app";
const userStore = useUserStore();
const isLoginStore = useIsLoginStore();
const isDisplay = ref('block') ;
let items = ref([]);
const isUser = ref(isLoginStore.data);
if(isLoginStore.data == 1){
  isDisplay.value = 'none';
}


let n = 0;
const get_messages = () => {
  uni.request({
    url:'https://api.room402.temp.ziqiang.net.cn/notice/all',
    method:'GET',

    header:{'Authorization': userStore.profile.openid,},
    success:(suc)=>{
      n = suc.data.length;  
      console.log(suc.data);
      items.value = suc.data;
    },
    fail:(fail)=>{
      console.log('fail');
    },
  })
}

onMounted(() => {
  get_messages();
})

let arr = Array(n).fill(false);
const transform =  ref("rotate(90deg)");
const	transition =  ref("all .3s");
const isOpen = ref(arr);
const isOpen1 = ref(false);
const isOpen2 = ref(false);
const openTap = (index) => {
  isOpen.value[index] = !isOpen.value[index];
}
const openTap1 = () => {
  isOpen1.value = !isOpen1.value;
}
const openTap2 = () => {
  isOpen2.value = !isOpen2.value;
}

 



const go_mine = () => {
  uni.switchTab({
    url:'/pages/mine'
  })
}
</script>


<template>
  <scroll-view class="bg" id="bg">
    <view class="card" :style="{height:isOpen1?'210rpx':'170rpx',transition:transition}">
      <view class="img_box">
        <image
          class="img_man"
          src="../static/man.svg"
          mode="scaleToFill"
        />
      </view>
      <text class="title">管理员消息</text>
      <text class="date">03-23</text>
      <view class="line"></view>
      <text class="content">402房间的使用时间为上上午9：00到晚上21：00</text>
      <view class="key_box" :style="{transform:isOpen1?transform:'', transition:transition}" @tap="openTap1">
        <image
          class = "key"
          src="../static/key_grey.svg"
          mode="scaleToFill"
        />
      </view>
      
    </view>
    <view class="card" :style="{height:isOpen2?'210rpx':'170rpx',transition:transition}">
      <view class="img_box">
        <image
          class="img_man"
          src="../static/man.svg"
          mode="scaleToFill"
        />
      </view>
      <text class="title">管理员消息</text>
      <text class="date">03-23</text>
      <view class="line"></view>
      <text class="content">请各位同学按时到达房间，结束使用后不要过久逗留</text>
      <view class="key_box" :style="{transform:isOpen2?transform:'', transition:transition}" @tap="openTap2">
        <image
          class = "key"
          src="../static/key_grey.svg"
          mode="scaleToFill"
        />
      </view>
      
    </view>
    <view class="card" v-for="(item,index) in items" :style="{height:isOpen[index]?'210rpx':'170rpx',transition:transition}">
      <view class="img_box">
        <image
          class="img_man"
          src="../static/setting.svg"
          mode="scaleToFill"
        />
      </view>
      <text class="title">系统消息</text>
      <text class="date">{{ item.time }}</text>
      <view class="line"></view>
      <text class="content" :style="{height:isOpen[index]?'auto':'60rpx'}">{{ item.content }}</text>
      <view class="key_box" :style="{transform:isOpen[index]?transform:'', transition:transition}" @tap="openTap(index)">
        <image
          class = "key"
          src="../static/key_grey.svg"
          mode="scaleToFill"
        />
      </view>
      
    </view>


    <view class="prompt" v-if="isLoginStore.data===0">
      <view class="up">请先登录</view>
      <view class="line_prompt"></view>
      <view class="down" @click="go_mine">确定</view>
    </view>

  </scroll-view>
</template>


<style scoped>
.bg{
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  padding-bottom: 40rpx;
  background-color: #f5f5f5;
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


font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 64rpx;
line-height: 82rpx;
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;



background: rgba(85, 198, 255, 0.6);
border-radius: 32rpx;


}

.card{
width: 648rpx;
height: 170rpx;
position: relative;   
margin: 40rpx auto;
background: #FFFFFF;
border-radius: 15px;
overflow: hidden;
}
.key_box,.key{
  height: 48rpx;
  width: 26rpx;
}
.key_box{
  /* 3.Icons/Filled/arrow */

position: absolute;
left: 570.24rpx;
top: 98rpx;


}
.img_man{
  width: 38rpx;
  height: 36rpx;
}
.img_box{
  height: 48rpx;
  width: 52rpx;
  position: absolute;
  left: 30rpx;
  top: 16rpx;
}
.line{
  /* Line 4 */

position: absolute;
left: 21.6rpx;
top: 68rpx;
height: 0;
width: 604.8rpx;

border-top: 2rpx solid #979797;
transform: matrix(1, 0, 0, 1, 0, 0);

}
.title{
  /* 管理员消息 */

position: absolute;
left: 90rpx;
top: 22rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;


}
.date{
  /* 2/14/24 */

position: absolute;
left: 520rpx;
top: 22rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 24rpx;
line-height: 30rpx;
text-align: center;
letter-spacing: -0.3px;

color: #979797;

white-space: nowrap;


}
.content{
  /* 402会议室的使用时间为8：00--21：00 */

position: absolute;
left: 30.4rpx;
top: 100rpx;
width: 500rpx;
height: 60rpx;
font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 24rpx;
line-height: 30rpx;
letter-spacing: -0.3px;
overflow: hidden;
color: #6D6D6D;


}


.prompt{
  position: absolute;
  left: 50%; 
  transform: translateX(-50%);
  top: 310rpx;
  width: 730rpx;
  height: 350rpx;
  border-radius: 30rpx;
  background: #FFFBFB;
  z-index: 4;
}
.line_prompt{
  width: 730rpx;
  height: 0;
  position: absolute;
  top: 236rpx;
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
  width: 730rpx;
  height: 114rpx;
  top: 236rpx;
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
</style>