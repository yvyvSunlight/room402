<template>
  <view class="bg">
    <view class="prompt">
      <view>请先登录!</view>
      <button>确认</button>
    </view>

  </view>
</template>

<script>
</script>

<style scoped>
.bg{
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
.prompt{
position: absolute;
left: 50%; top: 50%;
transform: translate(-50%, -50%);
width: 344px;
height: 362px;


background: #FFFBFB;
border-radius: 32px;
padding-top: 20px;
}
.prompt view{
  /* 请先登录！ */

position: absolute;
left: 59px;
top: 100px;
width: 241px;
height: 61px;


font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 61px;
/* identical to box height */
text-align: center;
letter-spacing: -0.3px;

color: #000000;
margin: 0 auto;

}
button{
  /* Component 9 */

position: absolute;
left: 70px;
top: 240px;
width: 204px;
height: 86px;
margin: 10px auto;
display: flex;
justify-content: center;
align-items: center;
/* Rectangle 32 */
/* 确认 */



font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 41px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;



background: rgba(85, 198, 255, 0.6);
border-radius: 16px;


}
</style>