import { ref, computed} from 'vue'
import { defineStore } from 'pinia';


export default defineStore('userInfo',()=>{
	const profile = ref();
    const name = ref();
    const number = ref();
    const depart = ref();
    const club = ref();

	const setProfile = (val) => {
		profile.value = val
	};
	const clearProfile = () => {
		profile.value = undefined
	}
	return {
        name,
        number,
        depart,
        club,
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