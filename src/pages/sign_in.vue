<script setup>
import { onMounted, ref } from "vue";
import { http } from '@/utils/http.js';
const longitude_now = ref();
const latitude_now = ref();
// onMounted(() => {


  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      longitude_now.value = res.longitude;
      latitude_now.value = res.latitude;
      console.log('当前位置的经度：' + res.longitude);
      console.log('haha');
      console.log('当前位置的纬度：' + res.latitude);
      console.log('haha');
      console.log(latitude_now.value);
      console.log('eee');
    }
  });
// })


 
const circles = ref([
  {
    latitude: '30.534052',
    longitude: '114.35787',
    color: '#69BFBE6A',
    fillColor: '#69BFBE6A',
    radius: 100,
    strokeWidth: 2,
  },
])

// 地图上气泡提示
const markers = ref([
  {
    id: 1,
    latitude: '30.534052',
    longitude: '114.35787',
    width: 10,
    height: 17,
    // iconPath: 'https://dianliu.oss-cn-hangzhou.aliyuncs.com/static/map/company.png',
    callout: {
        content: '已进入打卡范围',
        color: '#FFFFFF',
        fontSize: 12,
        borderColor: '#69BFBE',
        bgColor: '#69BFBE',
        padding: 5,
        borderRadius: 3,
        display: 'ALWAYS',
        textAlign: 'center',
      }
  },
])
const f_test = async() => {
  const res = await http({
    method:'PUT',
    url:'/sign/{id}',
    data:{
      id:1,
      date:`2024-3-16`,
      user_id:`1`,
      option:1,
      validator:1
    },
    success:(res) => {
      uni.showToast({
        title:'susss'
      })
      console.log(res.data);
    },
    fail:(fail)=>{
      uni.showToast({
        title:"no"
      })
    },
    
  })
}
// f_test();
const f_test2  = () => {
  uni.request({
    url:''
  })
}
// 格式化经纬度
// const rad = (d) => {
//   return (d * Math.PI) / 180.0
// }
// // 计算距离
// const getDistance = (point1, point2) => {
//   let [x1, y1] = point1
//   let [x2, y2] = point2
//   let Lat1 = rad(x1) // 纬度
//   let Lat2 = rad(x2)
//   let a = Lat1 - Lat2 //	两点纬度之差
//   let b = rad(y1) - rad(y2) //	经度之差
//   let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(Lat1) * Math.cos(Lat2) * Math.pow(Math.sin(b / 2), 2)))
//   //	计算两点距离的公式
//   s = s * 6378137.0 //	弧长等于弧度乘地球半径（半径为米）
//   s = Math.round(s * 10000) / 10000 //	精确距离的数值
//   console.log(s)
//   console.log(latitude_now.value);            //
//   console.log('sus');
//   // distance.value = s
// }
// const p1 = [latitude_now.value,longitude_now.value];
// const p2 = [30.534052, 114.35787];
// getDistance(p1,p2);
</script>
<template>
  <view class="bg">

    <view class="title">签到成功</view>

    <view class="addr">位置：武汉大学本科生院</view>

    <map id="map" style="width: 646rpx; height: 500rpx" longitude=114.35787  latitude=30.534052 scale="16" show-location="true" :circles="circles" :markers="markers"> </map>

  </view>

</template>


<style scoped>
#map{
  position: absolute;
  left: 52rpx;
  top: 652rpx;
}
.title{
  /* 签到成功 */

position: absolute;
left: 18.93%;
right: 18.4%;
top: 220rpx;
bottom: 64.41%;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 46px;
text-align: center;
letter-spacing: -0.3px;

color: #628132;
}
.addr{
  /* 位置：武汉大学本科生院 */

position: absolute;
left: 13.6%;
right: 13.6%;
top: 450rpx;
bottom: 56.16%;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 25px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;


}

</style>