<script setup>
  import helper from '../../common/helper.js';
	import  useRoleStore  from '@/stores/role';
	import  useIsLoginStore  from '@/stores/isLogin';
  import { onMounted, ref } from "vue";
  import useUserStore from "@/stores/user";
  import useUserInfoStore from "@/stores/userInfo";
  const userInfoStore = useUserInfoStore();
  const depart_set = ref([]);
  const userStore = useUserStore();
// console.log(userInfoStore);
// console.log(useUserInfoStore);
  // onMounted(() => {
    uni.request({
      url: 'https://api.room402.temp.ziqiang.net.cn/depart',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'GET',
      sslVerify: true,
      success: ({ data, statusCode, header }) => {
        console.log(data.data);
        depart_set.value = data.data;
        console.log(depart_set.value[0].id);
        console.log('--------------------------------');
      },
      fail: (error) => {}
    })
  // })
  uni.request({
    url:'https://api.room402.temp.ziqiang.net.cn/club',
    method:'GET',
    data:{
      depart_id:1
    }
  })
  const isLoginStore = useIsLoginStore();
  const roleStore = useRoleStore();
  const goHome = () => {
    if(checked === false){
    uni.showToast({
      icon:'none',
      title:'请先勾选同意使用手册'
    })
    return;
  }
  // uni.request(
  //   {
  //     url:'https://api.room402.temp.ziqiang.net.cn/api/sign',
  //     method:'POST',
  //     data:{
  //       name:``,
  //       user_id:`${userStore.profile.user_id}`,
  //       student_id:`${}`,
  //       depart_id:``,
  //       club_id:``,
  //       role:``
  //     }

  //   }
  // )
    if(roleStore.data == 'manager'){
      uni.switchTab({
        url:'/pages/mine',
      })
    }else{
      uni.switchTab({
      url:"/pages/home"
    })
  }
   helper.isUser = 1;
   isLoginStore.data = 1;
   console.log(isLoginStore.data)
  }
  let imgArr = ref('');
  const uploadPhoto = () => {
    uni.chooseMedia({
      count: 3,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles)
        imgArr.value = res.tempFiles[0].tempFilePath;
        console.log(res.tempFiles[0].tempFilePath);
        console.log(imgArr.value);
        // console.log(res.tempFiles.tempFilePath);
  }
    })

  }
  let checked = false
  const change = () => {
    checked = true;
  }
  // const f_input_name = (e) => {
    
  //   // userInfoStore.profile.name = e.target.value;
  //   // userInfoStore.value.setProfile({name:e.target.value})
  //   userInfoStore.name.value = e.target.value
  //   console.log(userInfoStore.name.value);
  // }
  // const f_input_number = (e) => {
  //   // userInfoStore.profile.number = e.target.value;
  //   userInfoStore.number.value = e.target.value
  //   // userInfoStore.setProfile({number:e.target.value})
  //   console.log (e.target.value);
  //   console.log(input_content.value);
  // }
  // const f_input_depart = (e) => {
  //   // userInfoStore.profile.depart = e.target.value;
  //   userInfoStore.depart.value = e.target.value
  //   // userInfoStore.setProfile({depart:e.target.value})
  //   console.log (e.target.value);
  //   console.log(input_content.value)
  // }
  // const f_input_club = (e) => {
  //   // userInfoStore.profile.club = e.target.value;
  //   userInfoStore.club = e.target.value
  //   // userInfoStore.setProfile({club:e.target.value})
  //   console.log (e.target.value);
  //   console.log(input_content.value)
  // }
  // console.log(userInfoStore.profile);
</script>
<template>
  <view class="bg">
    <!-- <view class="sider"> -->
      <text class="name">姓名：</text>
      <text class="number">学号：</text>
      <text class="club">社团名称：</text>
      <text class="proof">社团证明：</text>
      <text class="department">部门：</text>
     
    <!-- </view> -->
    <input type="text" class="name_" @input="f_input_name">
    <input type="text" class="number_" @input="f_input_number">
    <!-- <input type="text" class="phone_"> -->
    <input type="text" class="club_" @input="f_input_depart">
    <input type="text" class="department_" @input="f_input_club">
    <view type="text" class="proof_" :disabled="true" @click="uploadPhoto">
      <image
        class="photo_show"
        :src="imgArr"
        mode="scaleToFill"
      />
    </view>
    <radio
      :checked="checked"
      class="check"
      activeBackgroundColor="#55c6ff"
      color="#55c6ff"
      @click="change"
    />
    <text class="tail">同意《402房间使用手册》</text>
   
    <button class="submit" @click="goHome">提交</button>
      

    <image
      src="../static/photo.svg"
      mode="scaleToFill"
      class="photo"
      @click="uploadPhoto"
    />
    
  </view>
</template>

<style scoped>
.bg{
  width: 100vw;
  height: 100vh;
}

text{
  position: absolute;
  left: 58rpx;
}
input{

position: absolute;
background: rgba(0, 170, 255, 0.1);
border-radius: 14rpx;
left: 256rpx;

padding-left: 30rpx;
padding-right: 30rpx;
font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 25rpx;
line-height: 34rpx;
}
.name_,.number_,.department_,.code_ ,.club_{
  width: 390rpx;
  height: 62rpx;
}
.name_,.name{
  top: 92rpx;
}
.number_,.number{
  top: 180rpx;
}
.club_,.club{
  top: 268rpx;
}
.department_,.department{
  top: 360rpx;
}
.proof_{
  position: absolute;
  background: rgba(0, 170, 255, 0.1);
  border-radius: 14rpx;
  left: 256rpx;
  height: 140rpx;
  width: 184rpx;
  top:508rpx;
  /* top: 524rpx; */
  overflow: hidden;
}
.proof{
  /* top: 524rpx; */
  top:508rpx;
}
.code_,.code{
  top: 708rpx;
}
.codeButton{


position: absolute;
width: 120rpx;
height: 34rpx;
left: 574rpx;
top: 722rpx;



display: flex;
justify-content: center;
align-items: center;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 20rpx;
line-height: 26rpx;
white-space: nowrap;




color: #979797;


}
.check{
  position: absolute;
  top: 826rpx;
  left: 58rpx;
  width: 48rpx;
  height: 48rpx;
}
.tail{
  /* 同意《402房间使用手则》 */

position: absolute;
width: 332rpx;
height: 36rpx;
left: 120rpx;
top: 832rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 28rpx;
line-height: 36rpx;
/* identical to box height */
text-align: center;

color: #B3B3B3;

}
.submit{
  /* Rectangle 678 */

position: absolute;
left: 142rpx;
top: 930rpx;
width: 466rpx;
height: 124rpx;

background: #92AAFF;
border-radius: 62rpx;
/* 提交 */

display: flex;
justify-content: center;
align-items: center;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 48rpx;
line-height: 60rpx;
text-align: center;

color: #FFFFFF;



}

.photo{
  /* 3.Icons/Outlined/camera */

position: absolute;
left: 318rpx;
top:550rpx;
width: 62rpx;
height: 62rpx;


}

.photo_show{
  position: absolute;
  height: 140rpx;
  width: 184rpx;
  z-index: 1;
}


</style>