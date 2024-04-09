<script setup>
    import '@/utils/http';
    import { onMounted, ref } from "vue";
    import logIn from './logIn.vue';
    import { onLoad } from '@dcloudio/uni-app';
    import useUserStore from '@/stores/user';
    const userStore = useUserStore();
    onMounted(() => {
      
    })
    
    onMounted(() => {
      uni.getLocation({
    type: 'gcjo2',
    success: (success) => {
      console.log('当前位置的经度：' + success.longitude);
      console.log('当前位置的纬度：' + success.latitude);
    },
    fail:(fail)=>{
      uni.showToast({
        title:'调用 fail'
      })
    },
      })
      
    })
    //---------------------------------------------------------
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
      await uni.redirectTo({
            url:'/pages/sign_in'
          })
  
}
const f_out_sus =async () => {
      await uni.redirectTo({
            url:'/pages/sign_out'
          })
}
const judge_sign_in = () => {
  uni.getLocation({
    isHighAccuracy:true,
    type: 'wgs84',
    success: function (success) {
      uni.hideLoading();
      console.log('当前位置的经度：' + success.longitude);
      console.log('当前位置的纬度：' + success.latitude);
      
      const p1 = [success.latitude,success.longitude];
      const p2 = [30.534052, 114.35787];
      let s = getDistance(p1,p2);

      if(s < 9000){
          f_in_sus();

      }else{
        uni.showToast({
          title:'未在签到范围内',
          icon:'none'
        })
      }
    }
  });
}

const judge_sign_out = () => {
  uni.getLocation({
    type: 'wgs84',
    success: function (success) {
      uni.hideLoading();
      console.log('当前位置的经度：' + success.longitude);
      console.log('当前位置的纬度：' + success.latitude);
      
      const p1 = [success.latitude,success.longitude];
      const p2 = [30.534052, 114.35787];
      let s = getDistance(p1,p2);

      if(s < 9000){
        f_out_sus();
      }else{
        uni.showToast({
          title:'未在签退范围内',
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
const go_sign_in = async (e,p) => {
  loading();
  await new Promise(() => {
    judge_sign_in(); 
    uni.request({
      url:`https://api.room402.temp.ziqiang.net.cn/sign/${p}`,
      method:`PUT`,
      data:{
        date:`${date_str.value}`,
        user_id:1,
        option:1,
        validator:1
      },
      success:(success)=>{
        console.log(success.data);
      },
    })
  });
  // await new Promise
  
}


const go_sign_out =async (e,p) => {
  loading();
  await new Promise(() => {
    judge_sign_out();
    uni.request({
      url:`https://api.room402.temp.ziqiang.net.cn/sign/${p}`,
      method:'PUT',
      data:{
        date:`${date_str.value}`,
        user_id:1,
        option:2,
        validator:1
      }
    })
  })
}


    //---------------------------------------------------------


    let date = new Date();
    let current_y = date.getFullYear();
    let current_m = date.getMonth() + 1;
    let current_d = date.getDate();
    const year = ref(current_y);
    const month = ref(current_m);
    month.value = month.value < 10 ? '0' + month.value : month.value;
    const day = ref(current_d);
    day.value = day.value < 10 ? '0' + day.value : day.value;
    const date_now = ref(`${year.value}-${month.value}-${day.value}`)
    const date_str = date_now;
    const data_backend = ref();
    const f_change = (e) => {
      date_str.value = e; 
      console.log(date_str.value);
      console.log(e);
      uni.request({
        url:`https://api.room402.temp.ziqiang.net.cn/reservation/?date=${e}`,
        method:'GET',
        header:{
          'Authorization': userStore.profile.openid,
        },
        success:(success)=>{
          console.log(success.data);
          data_backend.value = success.data;
          console.log(data_backend.value);
        },
      })
    }
      uni.request({
        url:`https://api.room402.temp.ziqiang.net.cn/reservation/?date=${date_now.value}`,
        header:{'Authorization': userStore.profile.openid,},
        method:'GET',
        success:(success)=>{
          console.log(success.data);
          data_backend.value = success.data;
          console.log(data_backend.value);
        },
      })
      console.log(data_backend.value);
      console.log(date_now.value);
      
    uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      console.log('当前位置的经度：' + res.longitude);
      console.log('当前位置的纬度：' + res.latitude);
    }
  })
  uni.getLocation({
    success:(success)=>{console.log('位置'+ success.longitude);},
    fail:(fail)=>{console.log('fail');},
  })
</script>

<template>
  <view class="bg">
    <uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" @change="f_change" :placeholder="date_now"/>
    <view class="myCard" v-for="item in data_backend">
      <text class="when">{{ item.start_time.slice(11) }}-{{ item.end_time.slice(11) }}</text>
      <view class="state" :color="color" v-if="item.state === '未开始'">{{ item.state }}</view>
      <view class="state" :color="color" v-if="item.state === '正在进行'" id="ing">{{ item.state }}</view>
      <view class="state" :color="color" v-if="item.state === '已结束'" id="ed">{{ item.state }}</view>
      <image
        src="../static/pos.svg"
        mode="scaleToFill"
        id="pos_img"
        class="img"
      />
      <image
        src="../static/people.svg"
        mode="scaleToFill"
        id="peo_img"
        class="img"
      />
      <text class="description" id="pos_description">
        402房间 4楼
      </text>
      <text class="description" id="peo_description">
        我
      </text>
      <button v-if="!item.sign_in_time" @click="go_sign_in(e,item.id)" class="button_sign_in">签到</button>
      <button v-if="item.sign_in_time&&!item.sign_out_time" @click="go_sign_out(e,item.id)" class="button_sign_out">签退</button>
      <button v-if="item.sign_out_time" class="button_finished">已完成</button>
    </view>
  </view>
</template>   


<style scoped>
.bg{
  background-color: #f5f5f5;
  min-height: 100vh;
  height: 100%;
  widows: 100vw;
}
 
  .myCard{
position: relative;
margin:auto;
margin-top: 40rpx;
width: 626rpx;
height: 274rpx;
background: #FFFFFF;
border-radius: 36rpx;

  }
  .state{
    position: absolute;
    top: 34rpx;
    left: 312rpx;
    height: 44rpx;
    width: 116rpx;
    border-radius: 6rpx;
    background-color: #eeeeff;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Microsoft YaHei UI';
    font-style: normal;
    font-weight: 560;
    font-size: 26rpx;
    line-height: 48rpx;
    text-align: center;
    letter-spacing: 2rpx;
    color: #459ff3;
    mix-blend-mode: normal;

  }
  .when{
    /* 09：30-10：00 */
    width: 280rpx;
  height: 50rpx;
  position: absolute;
  top: 30rpx;
  left: 16rpx;

position: absolute;
width: 280rpx;
height: 50rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 30rpx;
line-height: 48rpx;
text-align: center;
letter-spacing: 2rpx;

color: #000000;


  }
  #pos_img{
    position: absolute;
    left: 40rpx;
    top: 108rpx;
  }
  #peo_img{
    position: absolute;
	left: 40rpx;
	top: 168rpx;
  }
.img{
    width: 40rpx;
		height: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
}
.description{
  position: absolute;
  width: 158rpx;
  height: 46rpx;
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 500;
  font-size: 26rpx;
  line-height: 48rpx;
  /* left: ; */
  /* or 238% */
  white-space: nowrap;
  /* text-align: center; */
  letter-spacing: 2rpx;

  color: #979797;
}
#peo_description{

  left: 94rpx;
  top: 164rpx;
}
#pos_description{
left: 94rpx;
top: 106rpx;
}
button{
  /* Rectangle 682 */

box-sizing: border-box;
white-space: nowrap;
position: absolute;
top:196rpx;
left:426rpx;
width: 134rpx;
height: 42rpx; 
border: 2rpx solid #DADADA;
overflow: hidden;
border-radius: 18rpx;
/* 取消预约 */

display: flex;
justify-content: center;
align-items: center;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 290;
font-size: 20rpx;
line-height: 48rpx;
/* or 238% */
text-align: center;
letter-spacing: 2rpx;
color: #979797;
font-weight: 560;
font-size: 26rpx;


}
.button_sign_in{
  background: #E8FFFE;
}
.button_sign_out{
  background-color: #ffe8e8;
}
/* .button_finished{
   
} */
#ing{
  color:#06a656;
  background-color: #eeffee;
}
#ed{
  color:#f34545;
  background-color: #ffeeee;
}

</style>