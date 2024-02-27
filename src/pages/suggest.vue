<script setup>

</script>

<template>
  <view class="bg">
    <text class="title">意见反馈</text>
    <view class="line"></view>
    <view class="describe_box">
      <textarea name="describe" id="descibe" cols="30" rows="10" placeholder="请输入使用意见反馈"></textarea>
    </view>
    <button class="submit">提交</button>




  </view>
</template>


<style scoped>
.title{
  /* 意见反馈 */

position: absolute;
left: 8rpx;
top: calc((114 - 88)*2rpx);
width: calc(106*2rpx);
height: 64rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 40rpx;
line-height: 50rpx;
text-align: center;

color: #000000;


}

.line{
  /* Line 3 */

position: absolute;
left: 38rpx;
top: calc((145 - 88)*2rpx);
width: 656rpx;
height: 0;
border: 1px solid #979797;
transform: rotate(0.17deg);

}
#describe{
  /* 请输入使用意见反馈 */

/* position: absolute;
left: 34rpx;
top: calc((152 - 88)*2rpx); */

font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 26rpx;
line-height: 140%;
/* or 20px */
display: flex;
align-items: center;
letter-spacing: 0.4rpx;

color: #979797;


}
.submit{
  /* Type=Button, Type 2=Primary, Type 3=Rounded, Style=Default, State=Active, Theme=Default, Component=Button */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 36rpx 32rpx;
gap: 20rpx;

position: absolute;
height: 64rpx;
left: 144rpx;
top: calc(50% - 32rpx + 18rpx);

/* Primary/500 */
background: #246BFD;
/* Button/Shadow 1 */
box-shadow: 4px 8px 24px rgba(36, 107, 253, 0.25);
border-radius: 100px;
/*---------------------------------*/

/* Button */

width: 460rpx;

/* body / large / bold

Previous style:
body/large/bold
*/
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 32rpx;
line-height: 140%;
/* or 22px */
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.4rpx;

/* Others / White */
color: #FFFFFF;

/* Button/Shadow 1 */
text-shadow: 8rpx 16rpx 48rpx rgba(36, 107, 253, 0.25);

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}

.describe_box{
  position: absolute;
  left: 34rpx;
  top: calc((152 - 84)*2rpx);
  height: 100rpx;
  
}

</style>