  <script setup>
  import { ref } from "vue";
  const uploadPhoto = () => {
    uni.chooseMedia({
      count: 9,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles)
  }
    })

  }

  const isDisplay = ref('none')

  const f_prompt = () => {
    isDisplay.value = 'block';
    setTimeout( () => {
      uni.switchTab({ url: '/pages/home' });
      isDisplay.value = 'none'
    },1000)
  }

  </script>




<template>

  <view class="bg">
    <text class="title">故障报修</text>
    <view class="line"></view>
    <text class="title2">故障描述</text>


    <view class="describe_box">
      <textarea name="describe" id="describe" cols="30" rows="10" placeholder="请输入故障描述（字数100字以内）" auto-height="false"></textarea>

    </view>

    <view class="photo">

    </view>


    <button class="submit" @click="f_prompt">提交</button>

    <view class="prompt">
      <text class="prompt_">
        报修成功！
      </text>
    </view>







  </view>

</template>




<style scoped>
.title{

  /* 故障报修 */

position: absolute;
left: 32rpx;
top: 58rpx;
width: 212rpx;
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
left: 62rpx;
top: 120rpx;
width: 656rpx;
border: 2rpx solid #979797;
transform: rotate(0.17deg);


}

.title2{
  /* 故障描述 */

position: absolute;
left: 58rpx;
top: 134rpx;
width: 294rpx;
height: 76rpx;

font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 32rpx;
line-height: 140%;
/* or 22px */
display: flex;
align-items: center;
letter-spacing: 0.4rpx;

color: #979797;


}

#describe{
  /* 请输入故障描述（字数100字以内） */

height: 200rpx;
/* height: fit-content; */
/* overflow: auto; */
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 26rpx;
line-height: 140%;
/* or 18px */
display: flex;
letter-spacing: 0.4rpx;

color: rgba(151, 151, 151, 0.79);


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
left: 144rpx;
top: 572rpx;

width: 460rpx;
height: 64rpx;
/* Primary/500 */
background: #246BFD;
/* Button/Shadow 1 */
box-shadow: 8rpx 16rpx 48rpx rgba(36, 107, 253, 0.25);
border-radius: 200rpx;

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

.prompt{
position: absolute;
width: 688rpx;
height: 724rpx;
left: 50%;
top: 274rpx;
transform: translateX(-50%);

background: #FFFBFB;
border-radius: 64rpx;
display: v-bind(isDisplay);

}
.prompt_{

position: absolute;
width: 482rpx;
height: 122rpx;
left: 118rpx;
top: 200rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 400;
font-size: 96rpx;
line-height: 122rpx;
/* identical to box height */
text-align: center;
letter-spacing: -0.6rpx;

color: #000000;



}

.describe_box{
  position: absolute;
  left: 58rpx;
  top: 210rpx;

  height: 200rpx;
  /* padding: 0; */
  /* margin: 0; */
}
</style>