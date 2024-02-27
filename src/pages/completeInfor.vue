<script setup>
  import helper from '../../common/helper.js';
  const goHome = () => {
    uni.switchTab({
    url:"/pages/home"
  })
   helper.isUser = 1;
  }
</script>
<template>
  <view class="bg">
    <!-- <view class="sider"> -->
      <text class="name">姓名：</text>
      <text class="number">学号：</text>
      <text class="phone">手机号：</text>
      <text class="club">社团名称：</text>
      <text class="proof">社团证明：</text>
      <text class="code">验证码：</text>
     
    <!-- </view> -->
    <input type="text" class="name_">
    <input type="text" class="number_">
    <input type="text" class="phone_">
    <input type="text" class="club_">
    <input type="text" class="proof_">
    <input type="text" class="code_" placeholder="请输入">
    <button class="codeButton">获取验证码</button>
    <image
      src="../static/isAgree.svg"
      mode="scaleToFill"
      class="check"
    />
    <text class="tail">同意《402房间使用手册》</text>
   
    <button class="submit" @click="goHome">提交</button>
      

    <image
      src="../static/photo.svg"
      mode="scaleToFill"
      class="photo"
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



/* 请输入 */



font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 25rpx;
line-height: 34rpx;





}
.name_,.number_,.phone_,.code_ {
  width: 390rpx;
  height: 62rpx;
}
.name_,.name{
  top: 92rpx;
}
.number_,.number{
  top: 180rpx;
}
.phone_,.phone{
  top: 268rpx;
}
.club_{
  width: 390rpx;
  height: 138rpx;
  top: 360rpx;
}
.club{
  top: 360rpx;
}
.proof_{
  height: 140rpx;
  width: 124rpx;
  top: 524rpx;
}
.proof{
  top: 524rpx;
}
.code_,.code{
  top: 708rpx;
}
.codeButton{

  /* Component 17 */

position: absolute;
width: 120rpx;
height: 34rpx;
left: 574rpx;
top: 722rpx;


  /* 获取验证码 */

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
top: 562rpx;
width: 62rpx;
height: 62rpx;


}




</style>