<script setup>
  import { ref } from "vue";
  const isDisplay = ref('none');

  //获取输入
  const input_content = ref('');
  const f_input = (e) => {
    input_content.value = e.target.value; 
  }
  const f_prompt = () => {
    isDisplay.value = 'block';
    let date = new Date();
    let current_y = date.getFullYear();
    let current_m = date.getMonth() + 1;
    let current_d = date.getDate();
    let current_hour = date.getHours() + 1;
    let current_minute = date.getMinutes();
    let current_second = date.getSeconds();
    uni.request({
      url:'http://127.0.0.1:4523/m1/4094679-0-default/feedback/',
      method:'POST',
      data:{
        time:`${current_y}-${current_m}-${current_d}`,
        decription:`${input_content.value}`
      },
      success:(success)=>{
        console.log(success.data);
        uni.showToast({
          title:'success',
          icon:'提交成功',
          mask:true
        })
      },
      fail:(fail)=>{
        console.log('提交失败')
        console.log(fail.data);
        uni.showToast({
          title:'fail',
          icon:'提交失败',
          mask:true
        })
      },
    })
    setTimeout( () => {
      
      uni.switchTab({ url: '/pages/home' });
      isDisplay.value = 'none';
      
    },1000)
  }
</script>

<template>
  <view class="bg">
    <text class="title">意见反馈</text>
    <view class="line"></view>
    <view class="describe_box">
      <textarea name="describe" id="descibe" cols="30" rows="10" placeholder="请输入使用意见反馈" @input="f_input"></textarea>
    </view>
    <button class="submit" @click="f_prompt">提交</button>

    <view class="prompt">
      <text class="prompt_">
        感谢您提出宝贵建议！
      </text>
    </view>


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
</style>