<!-- <script setup>
import { dataUrlRE } from "@dcloudio/uni-cli-shared/dist/vite/plugins/vitejs/utils";
import { ref } from "vue";
const currentDate = date.getDate({
  format:true
})
const date = ref(currentDate)
const startDate = () => {
  return date.getDate('start');
}
const endDate = () => {
  return date.getDate('end');
}
</script> -->

<script>
// export default {
//     data() {
//         const currentDate = this.getDate({
//             format: true
//         })
//         return {
//             title: 'picker',
//             array: ['中国', '美国', '巴西', '日本'],
//             index: 0,
//             date: currentDate,
//             time: '12:01'
//         }
//     },
//     computed: {
//         startDate() {
//             return this.getDate('start');
//         },
//         endDate() {
//             return this.getDate('end');
//         }
//     },
//     methods: {
//         bindPickerChange: function(e) {
//             console.log('picker发送选择改变，携带值为', e.detail.value)
//             this.index = e.detail.value
//         },
//         bindDateChange: function(e) {
//             this.date = e.detail.value
//         },
//         bindTimeChange: function(e) {
//             this.time = e.detail.value
//         },
//         getDate(type) {
//             const date = new Date();
//             let year = date.getFullYear();
//             let month = date.getMonth() + 1;
//             let day = date.getDate();

//             if (type === 'start') {
//                 year = year - 60;
//             } else if (type === 'end') {
//                 year = year + 2;
//             }
//             month = month > 9 ? month : '0' + month;
//             day = day > 9 ? day : '0' + day;
//             return `${year}-${month}-${day}`;
//         }
//     }
// }
</script>





<template>
  <view class="bg">

    <!-- <view class="uni-title uni-common-pl">日期选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view> -->

    
	</view>

  
</template>


<style scoped>
/* .uni-picker-tips {
	font-size: 12px;
	color: #666;
	margin-bottom: 15px;
	padding: 0 15px;
	/* text-align: right; */
/* } */
/* picker{
  /* color: blue; */
/* } */ 

/* uni-picker .uni-picker-action.uni-picker-action-confirm{  
        color: #57DBD0 !important;  
} */
/* ::v-deep.uni-picker-container.uni-picker-action.uni-picker-action-confirm {
    visibility: hidden;
    
    &:after {
        content: '确定';
        color: red;
        visibility: visible;
    }
}  */


</style>