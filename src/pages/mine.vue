<template>
  <view class="bg">
    <view class="white">
      <view class="container">
        <image
          src="../static/sticker.png"
          mode="scaleToFill"
        />
      </view>
      <view class="button">注册/登录</view>
    </view>
  </view>
</template>

<script>

</script>

<style scoped>
.bg{
  height: 100vh;
  width: 375px;
  background-color: #f5f5f5;
}
.white{
  width: 100vw;
  height: 70%;
  background-color: #fff;
}
.container{
  width: 80px;
  height: 72px;
  position: absolute;
left: 39.47%;
right: 39.2%;
top: 16.13%;
bottom: 75%;

background: rgba(237, 237, 237, 0.9);
border-radius: 11px;
display: flex;
justify-content: center;
align-items: center;
}
image{
width: 58px;
height: 53px;


}
.button{
  width: 352px;
  height: 52.72px;
  /* Rectangle 210 */



position: absolute;
left: 5.33%;
right: 4%;
top: 40.02%;
bottom: 53.48%;



background: #99DBFD;
border-radius: 38px;

display: flex;
justify-content: center;
align-items: center;


font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 108.1%;
/* or 22px */
text-align: center;
letter-spacing: 0.05em;

color: #0071D9;




}
</style>