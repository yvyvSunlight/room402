<script setup>
  import {ref} from 'vue';
  const day = ref(1)
  const month = ref(1)
  const year = ref(2024)
  const upDay = () => {
    switch(month.value){
      case 2:
        if(leap){
          day.value = (day.value + 1 + day.value/29) % 30 ;
        }else{
          day.value = (day.value + 1 + day.value/28) % 29 ;
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day.value = (day.value + 1) % 32 + day.value / 31;
        break;
      default:
        day.value = (day.value + 1) % 31 + day.value / 30;
        break;
    }
  }
  const downDay = () => {
    switch(month.value){
      case 2:
        if(leap){
          day.value = (day.value - 1 - 1/day.value) % 30;
        }else{
          day.value = (day.value - 1 - 1/day.value) % 29 ;
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day.value = (day.value - 1 -1/day.value) % 31;
        break;
      default:
        day.value = (day.value - 1 -1/day.value) %30;
        break;
    }
  }
  const onMonth = () => {
    month.value = (month.value + 1 + month/12) % 13;
  }
  const downMonth = () => {
    month.value = (month.value - 1 - 1/month) % 13;
  }
  const onYear = () => {
    year.value ++;
  }
  const downYear = () => {
    if(year > 2024){
      year.value --;
    }
  }
  const time0_ = ref('9:00');
</script>


<template>
  <view class="layout">
    <text class="theme">会议主题</text>
    <input type="text" class="describe">
    <view class="lineup"></view>
    <view class="date_v">
      <text class="date">日期</text>
      <text class="date_">{{month}}/{{day}}/{{year}}</text>
      <view class="key_but">
        <image
        src="../static/key.svg"
        mode="scaleToFill"
        class="key"
        id="key_1"
      />
      </view>
    </view>
    <view class="time0_v">
      <text class="time0">开始时间</text>
      <text class="time0_">{{time0_}}</text>
      <view class="key_but">
        <image
        src="../static/key.svg"
        mode="scaleToFill"
        class="key"
        id="key_2"
      />
      </view>
    </view>
    <view class="time1_v">
      <text class="time1">结束时间</text>
      <text class="time1_">10:30</text>
      <view class="key_but">
        <image
        src="../static/key.svg"
        mode="scaleToFill"
        class="key"
        id="key_3"
      />
      </view>
    </view>
    <view class="linedown"></view>

    <text class="options">会议选项</text>
    <view class="remind_v">
      <text class="remind">会议提醒</text>
      <text class="remind_">提前5分钟提醒</text>
      <view class="key_but">
        <image
        src="../static/key.svg"
        mode="scaleToFill"
        class="key"
        id="key_4"
      />
      </view>
    </view>
    <text class="place">
      会议地点
    </text>

    <image
      src="../static/book_content.png"
      mode="scaleToFill"
      class="book_content"
    />

    <button class="book">预约</button>


  </view>
</template>


<style scoped>
.layout{
  width: auto;
  height: auto;
  position: absolute;
  left: 62rpx;
  top: 34rpx;
}
.theme{
  /* 会议主题 */

width: 624rpx;
height: 48rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 40rpx;
line-height: 120%;
/* identical to box height, or 24px */
display: flex;
align-items: center;

/* Greyscale / 900 */
color: #212121;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.describe{
  /* Status=Fill, Type=Default, State=Filled Input, Theme=Light, Component=Input Field */

position: absolute;
top: 80rpx;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 40rpx;
gap: 24rpx;

width: 624rpx;
height: 112rpx;

/* Greyscale / 50 */
background: #FAFAFA;
border-radius: 32rpx;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.lineup,.linedown{
  /* Line */

/* Theme=Light Divider */

width: 760rpx;
height: 0rpx;
position: absolute;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Greyscale / 200 */
border: 1px solid #EEEEEE;

}

.lineup{
  top: 240rpx;
}
.linedown{
  top:582rpx;
}
.date_v{
position: absolute;
top: 288rpx;

display: flex;
flex-direction: row;
align-items: center;
padding: 0rpx;
gap: 40rpx;

width: 624rpx;
height: 50rpx;


/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.date{
  
  /* 日期 */

width: 320rpx;
height: 50rpx;

/* body / xlarge / semibold

Previous style:
body/xlarge/semibold
*/
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 36rpx;
line-height: 140%;
/* or 25px */
display: flex;
align-items: center;
letter-spacing: 0.4rpx;

/* Greyscale / 900 */
color: #212121;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;

}
.date_{
  width: 184rpx;
  height: 50rpx;
}
.time0_,.time1_{
  width: 86rpx;
  height: 50rpx;
}

.date_,.time0_,.time1_{

font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 30rpx;
line-height: 140%;
/* or 25px */

letter-spacing: 0.4rpx;

color: #212121;


/* Inside auto layout */
/* flex: none;
order: 1;
flex-grow: 0; */

}
.key{
  /* Iconly/Light/Arrow - Right 2 */

/* Iconly/Light/Arrow - Right 2 */

width: 40rpx;
height: 40rpx;

flex: none;
order: 2;
flex-grow: 0;


}
.key_but{
  /* Iconly/Light/Arrow - Right 2 */

/* position: absolute; */
width: 40rpx;
height: 40rpx;
/* top: 5rpx;
left: 584rpx; */
margin: 0;
padding: 0;

display: flex;
justify-content: center;
align-items: center;

}


.time0_v,.time1_v,.remind_v{
  /* Auto Layout Horizontal */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0rpx;
gap: 40rpx;

width: 624rpx;
height: 50rpx;


/* Inside auto layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;

}
.time0_v{
  position: absolute;
  top: 386rpx;
}
.time1_v{
  position: absolute;
  top:484rpx;
}
.remind_v{
position: absolute;
left: 0;
top: 726rpx;
}
.place{
  /* 会议地点 */

position: absolute;

left: 0rpx;
top: 824rpx;




}
.time0,.time1,.remind,.place{
  /* 开始时间 */

/* width: 418rpx; */
height: 50rpx;

/* body / xlarge / semibold

Previous style:
body/xlarge/semibold
*/
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 36rpx;
line-height: 140%;
/* or 25px */
display: flex;
align-items: center;
letter-spacing: 0.4rpx;

/* Greyscale / 900 */
color: #212121;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


}

.options{
  /* 会议选项 */

width: 624rpx;
height: 48rpx;

/* H5/bold

Previous style:
H5/bold
*/
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 40rpx;
line-height: 120%;
/* identical to box height, or 24px */

/* Greyscale / 900 */
color: #212121;


/* Inside auto layout */
flex: none;
order: 6;
align-self: stretch;
flex-grow: 0;

position: absolute;
top: 630rpx;

}


.remind_{

font-family: 'Urbanist';
font-style: normal;
font-weight: 500;
font-size: 22rpx;
line-height: 140%;
/* or 25px */
letter-spacing: 0.4rpx;

/* Greyscale / 900 */
color: #aaaaaa;


/* Inside auto layout */
/* flex: none;
order: 0;
flex-grow: 1; */

}










.book_content{
  /* image 3 */

position: absolute;
width: 616rpx;
height: 220rpx;
left: 4rpx;
top: 922rpx;


}
.book{
  /* Type=Button, Type 2=Primary, Type 3=Rounded, Style=Default, State=Active, Theme=Default, Component=Button */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 36rpx 32rpx;
gap: 20rpx;

position: absolute;
width: 312rpx;
height: 116rpx;
left: 156rpx;
top: 1224rpx;

/* Primary/500 */
background: #246BFD;
/* Button/Shadow 1 */
box-shadow: 8rpx 16rpx 48rpx rgba(36, 107, 253, 0.25);
border-radius: 200rpx;





font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 32rpx;
line-height: 140%;
/* or 22px */
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
</style>