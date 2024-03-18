// 

// stores/counter.js
import { ref, computed} from 'vue'
import { defineStore } from 'pinia';


export default defineStore('user',()=>{
	const profile = ref();
	const setProfile = (val) => {
		profile.value = val
	};
	const clearProfile = () => {
		profile.value = undefined
	}
	return {
		profile,
		setProfile,
		clearProfile
	};
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


// export default defineStore('countStore',()=>{
// 	const count =ref(100);
// 	return {count};
// },{
// 	pesist:true,
// });
// export const useCounterStore = defineStore('counter', {
// 	state: () => {
// 		return { count: 0 };
// 	},
// 	// 也可以这样定义
// 	// state: () => ({ count: 0 })
// 	actions: {
// 		increment() {
// 			this.count++;
// 		},
// 	},
// });
