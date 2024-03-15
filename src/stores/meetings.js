import { ref } from 'vue'
import { defineStore } from 'pinia';

export default defineStore('meetings',()=>{
	const meeting = ref({
        id_1:1
    });
	return {meeting};
},{
	// persist:true,//只能网页端
	//小程序端
	persist:{
		storage:{
			getItem(key){
				return uni.getStorageSync(key)
			},
			setItem(key,value){
				uni.setStorageSync(key,value)
			}
		}
	}
})