<script setup>
import  useIsLoginStore  from '@/stores/isLogin';
import UniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue";
import helper from "../../common/helper.js";
import { onMounted, ref } from "vue";
import { onShow } from "@dcloudio/uni-app";
import '@/utils/http'
import useIsSignStore from "@/stores/isSign";
components:{UniNoticeBar}
const isLoginStore = useIsLoginStore();
const isSignStore = useIsLoginStore();

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

// 格式化经纬度
const rad = (d) => {
        return (d * Math.PI) / 180.0
      }
      // 计算距离
      const getDistance = (point1, point2) => {
        let [x1, y1] = point1
        let [x2, y2] = point2
        let Lat1 = rad(x1) // 纬度
        let Lat2 = rad(x2)
        let a = Lat1 - Lat2 //	两点纬度之差
        let b = rad(y1) - rad(y2) //	经度之差
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(Lat1) * Math.cos(Lat2) * Math.pow(Math.sin(b / 2), 2)))
        //	计算两点距离的公式
        s = s * 6378137.0 //	弧长等于弧度乘地球半径（半径为米）
        s = Math.round(s * 10000) / 10000 //	精确距离的数值
        // distance.value = s
        return s;
      }
const f_in_sus =async () => {
      await uni.navigateTo({
            url:'/pages/meetings'
          })
      // await new Promise(() => {
      //     isSignStore.value = 1;
      //   })  
}
const f_out_sus =async () => {
      await uni.navigateTo({
            url:'/pages/sign_out'
          })
      await new Promise(() => {
          isSignStore.value = 0;
        })  
}
const judge_sign_in = () => {
  uni.getLocation({
    isHighAccuracy:true,
    type: 'wgs84',
    success: function (res) {
      uni.hideLoading();
      console.log('当前位置的经度：' + res.longitude);
      console.log('当前位置的纬度：' + res.latitude);
      
      const p1 = [res.latitude,res.longitude];
      const p2 = [30.534052, 114.35787];
      let s = getDistance(p1,p2);

      if(s < 9000){
          f_in_sus();

      }else{
        uni.showToast({
          title:'签到失败',
          icon:'none'
        })
      }
      
    }
  });
}

const judge_sign_out = () => {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      uni.hideLoading();
      console.log('当前位置的经度：' + res.longitude);
      console.log('当前位置的纬度：' + res.latitude);
      
      const p1 = [res.latitude,res.longitude];
      const p2 = [30.534052, 114.35787];
      let s = getDistance(p1,p2);

      if(s < 9000){
        f_out_sus();
      }else{
        uni.showToast({
          title:'签退失败',
          icon:'none'
        })
      }
      
    }
  });
}
const loading = () => {
  return new Promise((resolve) =>{
    uni.showLoading({
    title: '定位中...',
    mask: true,
  })
  })
}
const go_sign_in = async () => {
  loading();
  await new Promise(() => {
    judge_sign_in(); 
  })
}


// const go_sign_out =async () => {
//   loading();
//   await new Promise(() => {
//     judge_sign_out();
//   })
// }



onMounted(() => {
  // uni.request({
  //   url:'https://api.room402.temp.ziqiang.net.cn/api/login',
  //   method:'POST',
  //   data:{
  //     username:'admin',
  //     password:'123456'
  //   },
  //   // header: {
	// 	// 							'content-type': 'application/x-www-form-urlencoded'
	// 	// 						},
  //   success:(success)=>{
  //     console.log(success.data);
  //     uni.showToast({
  //       title:''
  //     })
  //   },
  //   fail:(fail)=>{
  //     console.log('fail');
  //     console.log(fail.data);
  //   },
  // })
})

const go_meetings = () => {
  uni.navigateTo({
    url:'/pages/meetings'
  })
}
</script>


<template>
  <view class="content">
    
    <text class="header">欢迎来到402房间预约小程序~</text>
    

    <!-- <view class="uni-margin-wrap">
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
    </view> -->
    <UniNoticeBar show-icon scrollable
        class="notice"
				text="公告：武汉大学本科生院402房间的使用时间为早上9：00~晚上21：30" />
    <view class="sign_in_box" @click="go_meetings">
      打卡
    </view>
    <!-- <view class="sign_out_box" @click="go_sign_out" v-if="isSignStore.value">
      签退
    </view> -->

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
.notice{
  position: absolute;
  top: calc((146 - 88)*2rpx);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
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

</style>
