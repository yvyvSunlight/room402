<script setup>
import helper from "../../common/helper.js";
import  useIsLoginStore  from '@/stores/isLogin';
import { onMounted, ref } from "vue";
import '@/utils/http';
import { get_notice_all } from '../services/get.js';
import { onLoad } from "@dcloudio/uni-app";
const isLoginStore = useIsLoginStore();
const isDisplay = ref('block') ;
let items = ref([]);
const isUser = ref(isLoginStore.data)
if(isLoginStore.data == 1){
  isDisplay.value = 'none';
}
const closePrompt = () => {
  isDisplay.value='none';
}



const date = ref('')
const content = ref('')

// const get_messages = async () => {
//     const res  = await get_notice_all();
//     console.log(res);
//   }
const get_messages = () => {
  uni.request({
    url:'https://api.room402.temp.ziqiang.net.cn/notice/all',
    method:'GET',
    success:(suc)=>{
      console.log(suc.data);
    },
  })
}

onLoad(() => {
  get_messages();
})


// onMounted(async() => {
//   const res = await http({
//     method:'GET',
//     url:'/reservation/',
//     success:(res) => {
//       date.value = res.data[0].time;
//       items.value = res.data;
//     }
//   })
  
 
  // uni.request({
  //   url:'http://127.0.0.1:4523/m1/4094679-0-default/notice/all',
  //   method:'GET',
  //   success:(success)=>{
  //     // date.value = success.data[0].time;
  //     items.value = success.data;
  //     content.value = success.data[0].content;
  //   },
  //   fail:(fail)=>{
  //     uni.showToast({
  //       title: 'fail',
  //       icon: 'none',
  //       image: '',
  //       duration: 1500,
  //       mask: false,
  //       success: (result)=>{
          
  //       },
  //       fail: ()=>{},
  //       complete: ()=>{}
  //     });
  //   },
  // })
// })
date.value = '2/14/2024'
// const createNewElement = () => {
//   const parent = document.getElementById("bg")
//   const newElement = document.createElement('view')
//   newElement.style.background = 'red'
//   newElement.style.height = '100rpx'
//   newElement.style.width = '100rpx'
//   parent.appendChild(newElement);
// }
// createNewElement()
// const test = () => {
//   uni.getLocation({
//     type:'wgs84',
//     altitude:true,
//     success:(success)=>{
//       console.log(res);
//     },
//   })

// }
// test();

// const getLocation = () => {
//   uni.showLoading({
//     title: '定位中...',
//     mask: true,
//   })
//   return new Promise((resolve, reject) => {
//      const _locationChangeFn = (res) => {
//          console.log('location change', res)
//          uni.hideLoading()
//          wx.offLocationChange(_locationChangeFn)
//      }
//      wx.startLocationUpdate({
//          success: (res) => {
//              wx.onLocationChange(_locationChangeFn)
//              resolve(res)
//          },
//          fail: (err) => {
//              reject()
//          },
//      })
//   })
// }
// getLocation();
//------------------------------------------------------
const f_test = () => {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      console.log('当前位置的经度：' + res.longitude);
      console.log('当前位置的纬度：' + res.latitude);
    }
  });

}
f_test();

//---------------------------------------------

const go_mine = () => {
  uni.switchTab({
    url:'/pages/mine'
  })
}
</script>


<template>
  <view class="bg" id="bg">
    
    <view class="card" v-for="(item,index) in items">
      <view class="img_box">
        <image
          class="img_man"
          src="../static/man.svg"
          mode="scaleToFill"
        />
      </view>
      <text class="title">管理员消息</text>
      <text class="date">{{ date }}</text>
      <view class="line"></view>
      <text class="content">{{ item.content }}</text>
      <view class="key_box">
        <image
          class = "key"
          src="../static/key_grey.svg"
          mode="scaleToFill"
        />
      </view>
      
    </view>



    <!-- <view class="prompt" v-if="!isUser">
      <view>请先登录!</view>
      <button @click="closePrompt">确认</button>
    </view> -->
    <view class="prompt" v-if="isLoginStore.data===0">
      <view class="up">请先登录</view>
      <view class="line_prompt"></view>
      <view class="down" @click="go_mine">确定</view>
    </view>

  </view>
</template>


<style scoped>
.bg{
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
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

.card{
  /* Rectangle 685 */

width: calc(324*2rpx);
height: calc(85*2rpx);
position: absolute;
left: 52rpx;
top: calc((112 - 88)*2rpx);
background: #FFFFFF;
border-radius: 15px;

}
.key_box,.key{
  height: 48rpx;
  width: 26rpx;
}
.key_box{
  /* 3.Icons/Filled/arrow */

position: absolute;
left: calc((285.12)*2rpx);
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
  top: 12rpx;
}
.line{
  /* Line 4 */

position: absolute;
left: 21.6rpx;
top: 68rpx;
height: 0;
width: 604.8rpx;

border: 2rpx solid #979797;
transform: matrix(1, 0, 0, 1, 0, 0);

}
.title{
  /* 管理员消息 */

position: absolute;
left: 13.67%;
right: 64%;
top: 12.94%;
bottom: 64.71%;

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
left: 75%;
right: 7%;
top: 12.94%;
bottom: 71.76%;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
text-align: center;
letter-spacing: -0.3px;

color: #979797;

white-space: nowrap;


}
.content{
  /* 402会议室的使用时间为8：00--21：00 */

position: absolute;
left: 4.67%;
right: 25%;
top: 62.35%;
bottom: 20%;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.3px;

color: #6D6D6D;


}


.prompt{
  position: absolute;
  left: 50%; 
  transform: translateX(-50%);
  top: 310rpx;
  width: calc(365*2rpx);
  height: calc(175*2rpx);
  border-radius: 30rpx;
  background: #FFFBFB;
  z-index: 4;
}
.line_prompt{
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
</style>