import { ref} from 'vue'
import { defineStore } from 'pinia';

export default defineStore('role',()=>{
	const data = ref('student');
	return {data};
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