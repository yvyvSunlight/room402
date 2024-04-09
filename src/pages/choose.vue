<script setup>
import helper from '../../common/helper.js';
import  useRoleStore  from '@/stores/role';
const roleStore = useRoleStore();
const f_manager = () => {
  roleStore.data = 'manager';
}
const f_student = () => {
  roleStore.data = 'student'
}
</script>


<template>
  <view class="bg">
    <text>请选择您的角色</text>
    <navigator
      url="/pages/completeInfor"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <button class="student" @click="f_student">
        <text>我是学生社团管理人员</text> 
        <image
        src="../static/studentClub_manager.svg"
        mode="scaleToFill"
      /></button>
    </navigator>
    <navigator
        url="/pages/completeInfor"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <button class="manager" @click="f_manager">
          <text>
            我是402房间的管理人员
          </text>
          <image
            src="../static/room402_manager.svg"
            mode="scaleToFill"
          />
        </button>
    </navigator>
  </view>
</template>


<style scoped>
.bg{
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
text{
  /* 请选择您的角色 */

position: absolute;
top: 40rpx;
left: 38rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 32rpx;
line-height: 40rpx;
text-align: center;
letter-spacing: -0.6rpx;

color: #979797;


}
button{
  /* Rectangle 671 */

position: absolute;
width: 644rpx;
height: 246rpx;
left: 50%;
transform: translateX(-50%);


background: #FFFFFF;
border-radius: 40rpx;

}

.student{
  top: 128rpx;
}
.manager{
  top: 422rpx;
}
image{
  width: 90rpx;
  height: 90rpx;
  position: absolute;
  left: 526rpx;
  top: 72rpx;
}
button text{
  /* 我是学生社团管理人员 */

position: absolute;
left: 58rpx;
top: 92rpx;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 40rpx;
line-height: 48rpx;
color: #000000;
}
</style>