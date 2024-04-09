<script setup>
	import { ref } from "vue";
	//3.使用store
	import  useUserStore  from '@/stores/user'
	import '../utils/http.js';
	import { http } from "@/utils/http";

  const userStore = useUserStore();
const user = useUserStore();      //得到了仓库
console.log(user.name)
const backend_data = ref([])
let date = new Date();
let current_m = date.getMonth() + 1;
let current_d = date.getDate();
const day = ref('');
const month = ref('');
month.value = current_m;
day.value = current_d;

let id_cancel;
const time0_ = ref('')
const time1_ = ref('')
uni.request({
	url:'https://api.room402.temp.ziqiang.net.cn/cancel/',
	method:'GET',
  header:{
    'Authorization': userStore.profile.openid,
  },
	success:(success)=>{
		console.log(success.data);
		backend_data.value = success.data;
	},
})


const isDisplay = ref('none')
time0_.value = '09:30'
time1_.value='10:00'

const f_cancel =async (e,p) => {
	uni.request({
		url:`https://api.room402.temp.ziqiang.net.cn/cancel/${p}`,
		method:'DELETE',
    success:(success)=>{
    isDisplay.value = 'block';
    },
	})
		setTimeout( () => {
		  uni.switchTab({ url: '/pages/home' });
		  isDisplay.value = 'none'
		},1000)
}
</script>





<template>
  <view class="bg">

	<view class="myCard" v-for="item in backend_data">
      <text class="when">{{ item.start_time.slice(11) }}-{{ item.end_time.slice(11) }}</text>
      <view class="state" :color="color" >未开始</view>
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
      <button  @click="f_cancel(e,item.id)" class="cancel_but">取消预约</button>
    </view>
	
	<view class="prompt">
      <text class="prompt_">
        取消成功！
      </text>
    </view>
  </view>
</template>


<style scoped>
.bg{
	width: 100vw;
  min-height: 100vh;
	height: 100%;
  padding-top:40rpx;
  padding-bottom: 30rpx;
	background-color: #ededed;
}
	.words{
		width: 232rpx;
		height: 27rpx;
		/* 今天 2/14 */
		position: absolute;
		left: 42rpx;
		top: 38rpx;

	}
	.today{
		font-family: 'Microsoft YaHei UI';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 25px;

		color: #000000;
	}
	.myCard{
position: relative;
margin:auto;
margin-bottom: 40rpx;
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
/* left: 90rpx; */
/* top: 368rpx; */

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 30rpx;
line-height: 48rpx;
/* or 159% */
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
    width: 32rpx;
		height: 40.82rpx;
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
.cancel_but{
	/* Component 21 */
overflow: hidden;
position: absolute;
width: 134rpx;
height: 42rpx;
left: 480rpx;
top: 196rpx;


	/* Rectangle 682 */

box-sizing: border-box;

display: flex;
justify-content: center;
align-items: center;
white-space: nowrap;
background: #FFFFFF;
border: 1px solid #DADADA;
border-radius: 9px;


/* 取消预约 */



font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 290;
font-size: 10px;
line-height: 24px;
/* or 238% */
text-align: center;
letter-spacing: 1px;

color: #979797;


}

.prompt{
position: absolute;
width: 688rpx;
height: 724rpx;
left: 50%;
top: 274rpx;
transform: translateX(-50%);

background: #FFFBFB;
border-radius: 64rpx;
display: v-bind(isDisplay);

}
.prompt_{

position: absolute;
width: 482rpx;
height: 122rpx;
left: 118rpx;
top: 200rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 96rpx;
line-height: 122rpx;
/* identical to box height */
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;



}
</style>
