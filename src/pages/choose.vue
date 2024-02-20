<script setup>

</script>


<template>
  <view class="bg">
    <text>请选择您的角色</text>
    <navigator
      url="/pages/completeInfor"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      <button class="student"><image
        src="../static/studentClub_manager.svg"
        mode="scaleToFill"
      /></button>
      <navigator
        url="/pages/"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <button class="manager">
          <image
            src="../static/room402_manager.svg"
            mode="scaleToFill"
          />
        </button>
      </navigator>
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
  width: 582rpx;
  height: 164rpx;
  position: absolute;
  left: 30rpx;
  top: 42rpx;
}
</style>