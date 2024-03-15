<script setup>
	import { ref } from "vue";
	//3.使用store
	import  useUserStore  from '@/stores/user'
	import '../utils/http.js';
	import { http } from "@/utils/http";
const user = useUserStore();      //得到了仓库
console.log(user.name)
// counter.count++
// 自动补全！ 
// counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
// counter.increment()
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
	url:'http://127.0.0.1:4523/m2/4123855-0-default/153376548',
	method:'GET',
	data:{
		user_id:'1'
	},
	success:(success)=>{
		console.log(success.data[0]);
		id_cancel = success.data[0].id;
		// time0_.value = success.data[0].start_time
		// time1_.value = success.data[0].end_time

	},
})
const isDisplay = ref('none')
time0_.value = '09:30'
time1_.value='10:00'

const f_cancel = () => {
	uni.request({
		url:'http://127.0.0.1:4523/m1/4123855-0-default/cancel/1',
		method:'DELETE',
		data:{
			id:`${id_cancel}`
		}
	})
	isDisplay.value = 'block'
	setTimeout( () => {
      uni.switchTab({ url: '/pages/home' });
      isDisplay.value = 'none'
    },1000)
}
</script>





<template>
  <view class="bg">
	<view class="words">

		<text class="today">今天</text>
		<text class="day">{{ month }}/{{ day }}</text>
	</view>
	<view class="card">
		<text class="addr">本科生院402房间</text>
		<text class="time">{{ time0_ }}-{{ time1_ }}</text>
		<view class="img_pos_box">
			<image
				src="../static/pos.svg"
				mode="scaleToFill"
			/>
		</view>
		<text class="pos_">402房间 4楼</text>
		<view class="img_peo_box">
			<image
				src="../static/people.svg"
				mode="scaleToFill"
			/>
		</view>
		<text class="peo_">李丽、刘洋、我</text>
		<button class="cancel_but" @click="f_cancel">取消预约</button>
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
	height: 100vh;
	background-color: #ededed;
}
	.words{
		width: 232rpx;
		height: 27rpx;
		/* 今天 2/14 */
		position: absolute;
		left: 42rpx;
		top: calc((107 - 88)*2rpx);

	}
	.today{
		font-family: 'Microsoft YaHei UI';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 25px;

		color: #000000;
	}
	.card{
		/* Rectangle 680 */

position: absolute;
width: 636rpx;
height: 274rpx;
left: 58rpx;
top: calc((169 - 88)*2rpx);

background: #FFFFFF;
border-radius: 36rpx;

	}
	.addr{

position: absolute;
width: 280rpx;
height: 50rpx;
left: 32rpx;
top: 30rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 32rpx;
line-height: 48rpx;
/* or 149% */
text-align: center;
letter-spacing: 2rpx;

color: #000000;


	}
	.time{
		/* 09：30-10：00 */

position: absolute;
width: 166rpx;
height: 38rpx;
left: calc((263 - 29)*2rpx);
top: calc((185 - 169)*2rpx);

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 24px;
/* or 298% */
text-align: center;
letter-spacing: 1px;

color: #000000;


	}
	.img_pos_box{

	position: absolute;
	left: calc((45 - 29)*2rpx);
	top: calc((221 - 169)*2rpx);
	}
	.img_peo_box{
		/* 3.Icons/Outlined/group-detail */

	position: absolute;
	left: calc((45 - 29)*2rpx);
	top: calc((251 - 169)*2rpx);


	}
	.img_pos_box,.img_peo_box{
		width: 48rpx;
		height: 48rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}


	.pos_{
		/* 402房间 4楼 */

position: absolute;
width: 79px;
height: 23px;
left: calc((75 - 29)*2rpx);
top: calc((222 - 169)*2rpx);

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 24px;
/* or 238% */
text-align: center;
letter-spacing: 1px;

color: #979797;


	}
.peo_{
/* 李丽，刘洋，我 */

position: absolute;
width: calc(79*2rpx);
height: calc(2*23rpx);
left: calc((82 - 29)*2rpx);
top: calc((251 - 169)*2rpx);

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 20rpx;
line-height: 48rpx;
/* or 238% */
text-align: center;
letter-spacing: 2rpx;

color: #979797;




}
.cancel_but{
	/* Component 21 */
overflow: hidden;
position: absolute;
width: 134rpx;
height: 42rpx;
left: calc((269 - 29)*2rpx);
top: calc((267 - 169)*2rpx);


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