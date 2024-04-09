<script setup>
  import { onReady } from '@dcloudio/uni-app';
  import {onMounted, ref} from 'vue';
  import { getCurrentInstance } from "vue";
  import useUserStore from "@/stores/user";
  import { http } from '@/utils/http'
  import "@/utils/http";
  const userStore = useUserStore();


  let date = new Date();
  let current_y = date.getFullYear();
  let current_m = date.getMonth() + 1;
  let current_d = date.getDate();
  
  let pt = -1
  const scroll_tab_top = ref('450rpx')
  const tab_disp = ref('none')
  let flag = 0;
  const time0_ = ref('9:00');
  const time1_ = ref('10:30');


  const f_select_time = (e,p) => {
    f_clear();
    console.log(e);
    console.log(p);
    pt = p;
    if(flag === 0){
      switch(p){
        case 0:
          time0_.value = '9:00'
          break;
        case 1:
          time0_.value = '9:30'
          break;
        case 2:
          time0_.value = '10:00'
          break;
        case 3:
          time0_.value = '10:30'
          break;
        case 4:
          time0_.value = '11:00'
          break;
        case 5:
          time0_.value = '11:30'
          break;
        case 6:
          time0_.value = '12:00'
          break;
        case 7:
          time0_.value = '12:30'
          break;
        case 8:
          time0_.value = '13:00'
          break;
        case 9:
          time0_.value = '13:30'
          break;
        case 10:
          time0_.value = '14:00'
          break;
        case 11:
          time0_.value = '14:30'
          break;
        case 12:
          time0_.value = '15:00'
          break;
        case 13:
          time0_.value = '15:30'
          break;
        case 14:
          time0_.value = '16:00'
          break;
        case 15:
          time0_.value = '16:30'
          break;
        case 16:
          time0_.value = '17:00'
          break;
        case 17:
          time0_.value = '17:30'
          break;
        case 18:
          time0_.value = '18:00'
          break;
        case 19:
          time0_.value = '18:30'
          break;
        case 20:
          time0_.value = '19:00'
          break;
        case 21:
          time0_.value = '19:30'
          break;
        case 22:
          time0_.value = '20:00'
          break;
        case 23:
          time0_.value = '20:30'
          break;
        case 24:
          time0_.value = '21:00'
          break;
        case 25:
          time0_.value = '21:30'
          break;
        default:
          time0_.value = '9:00'
          break;
      }
    }else{
      switch(p){
        case 0:
          time1_.value = '9:00'
          break;
        case 1:
          time1_.value = '9:30'
          break;
        case 2:
          time1_.value = '10:00'
          break;
        case 3:
          time1_.value = '10:30'
          break;
        case 4:
          time1_.value = '11:00'
          break;
        case 5:
          time1_.value = '11:30'
          break;
        case 6:
          time1_.value = '12:00'
          break;
        case 7:
          time1_.value = '12:30'
          break;
        case 8:
          time1_.value = '13:00'
          break;
        case 9:
          time1_.value = '13:30'
          break;
        case 10:
          time1_.value = '14:00'
          break;
        case 11:
          time1_.value = '14:30'
          break;
        case 12:
          time1_.value = '15:00'
          break;
        case 13:
          time1_.value = '15:30'
          break;
        case 14:
          time1_.value = '16:00'
          break;
        case 15:
          time1_.value = '16:30'
          break;
        case 16:
          time1_.value = '17:00'
          break;
        case 17:
          time1_.value = '17:30'
          break;
        case 18:
          time1_.value = '18:00'
          break;
        case 19:
          time1_.value = '18:30'
          break;
        case 20:
          time1_.value = '19:00'
          break;
        case 21:
          time1_.value = '19:30'
          break;
        case 22:
          time1_.value = '20:00'
          break;
        case 23:
          time1_.value = '20:30'
          break;
        case 24:
          time1_.value = '21:00'
          break;
        case 25:
          time1_.value = '21:30'
          break;
        default:
          time1_.value = '9:00'
          break;
      }
    }

  }

  const f_start_time = () => {
    scroll_tab_top.value = '450rpx'
    tab_disp.value = 'block'
    flag = 0;
  }
  const f_end_time = () => {
    scroll_tab_top.value = '534rpx'
    tab_disp.value = 'block';
    flag = 1;
  }




  const day = ref(current_d)
  const month = ref(current_m)
  const year = ref(current_y)
  const select_date_display = ref('none')
  const select_reminder_diplay = ref('none')
  const f_select_reminder = () => {
    select_reminder_diplay.value = 'block';
  }
  const remind_input = ref('提前5分钟提醒')
  const f_remind_input_5 = () => {
    remind_input.value = '提前5分钟提醒'
    f_clear();
  }
  const f_remind_input_15 = () => {
    remind_input.value = '提前15分钟提醒'
    f_clear();
  }
  const f_remind_input_30 = () => {
    remind_input.value = '提前30分钟提醒'
    f_clear();
  }
  const f_remind_input_60 = () => {
    remind_input.value = '提前一小时提醒'
    f_clear();
  }
  let leap = 0;


  if(year.value%4 === 0 && year.value%100 != 0 || year.value%400 === 0){
    leap = 1;
  }else{
    leap = 0;
  }

  const upDay = () => {
    switch(month.value){
      case 2:
        if(leap){
          if(day.value === 29){
            day.value = 1
          }else{
            day.value ++;
          }
        }else{
          if(day.value === 28){
            day.value = 1;
          }else{
            day.value ++;
          }
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if(day.value === 31){
          day.value = 1;
        }else{
          day.value++;
        }
        break;
      default:
        if(day.value === 30){
          day.value = 1;
        }else{
          day.value++;
        }
        break;
    }
  }
  const downDay = () => {
    switch(month.value){
      case 2:
        if(leap){
          if(day.value === 1){
            day.value = 29;
          }else{
            day.value --;
          }
        }else{
          if(day.value === 1){
            day.value = 28;
          }else{
            day.value--;
          }
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if(day.value === 1){
          day.value = 31;
        }else{
          day.value--;
        }
        break;
      default:
        if(day.value === 1){
          day.value = 30;
        }else{
          day.value--;
        }
        break;
    }
  }



  const upMonth = () => {
    if(month.value === 12){
      month.value = 1;
    }else{
      month.value++;
    }
  }



  const downMonth = () => {
    if(month.value === 1){
      month.value = 12;
    }else{
      month.value--;
    }
  }



  const upYear = () => {
    year.value = year.value+1;
  }

  const downYear = () => {
      year.value = year.value-1;
  }

  


  const isDisplay = ref('none');

  const f_prompt = () => {
    if(!input_content.value){
      uni.showToast({
        icon:'none',
        title:'请输入会议主题'
      })
      return;
    }
    console.log(input_content.value);
    isDisplay.value = 'block';
    console.log(userStore.profile.openid);
    const user_id = 1;
    uni.request({
      url:`https://api.room402.temp.ziqiang.net.cn/reservation/?date=${current_y}-0${current_m}-${current_d}`,
      method:'POST',
      header: {'Authorization': userStore.profile.openid,
      'source-client':'miniapp',
    },
      data:{
          theme:`${input_content.value}`,
          start_time:  `${year.value}-${month.value}-${day.value} ${time0_.value}`,
          end_time: `${year.value}-${month.value}-${day.value} ${time1_.value}`,
          user:`${userStore.profile.user_id}`,
          name:'张三',
          student_id:2023302100001
      },
      success:(res)=>{
        console.log(res.data);
        console.log('调用成功');
      },
      fail:(fail)=>{
        console.log(fail.data);
      },
    })
    setTimeout( () => {
      uni.switchTab({ url: '/pages/home' });
      isDisplay.value = 'none'
    },1000)
  }

  const f_select_date = () => {
    select_date_display.value = 'block';
    tab_disp.value = 'none'
  }
  const f_clear = () => {
    select_date_display.value = 'none';
    select_reminder_diplay.value = 'none';
    tab_disp.value = 'none';
  }
  console.log(tab_disp.value);
  const input_content = ref();
  const f_input = (e) => {
    input_content.value = e.target.value;
    console.log (e.target.value);
    console.log('sus')
    console.log(input_content.value)
    console.log('sss2')
  }

  const f_click = () => {
    console.log('clicked');
  }
</script>


<template>
  <view class="layout">
    <text class="theme">会议主题</text>

    <input type="text" class="describe" @input="f_input" cursor-color="#246bfd">
    <view class="lineup"></view>


    <view class="date_v">
      <text class="date">日期</text>
      <text class="date_">{{ month }}/{{ day }}/{{ year }}</text>
      <view class="key_but" @click="f_select_date">
        <image
        src="../static/key.svg"
        mode="scaleToFill"
        class="key"
        id="key_1"
      />
      </view>
    </view>


    <view class="helper_area" @click="f_clear"></view>

    <view class="select_date_box">
      <view class="select_date_year">{{ year }}</view>
      <view class="select_date_month">{{ month }}</view>
      <view class="select_date_day">{{ day }}</view>

      <view class="up_arrow" id="upYear" @click="downYear">
        <image
          src="../static/key.svg"
          mode="scaleToFill"
        />
      </view>
      <view class="up_arrow" id="upMonth" @click="downMonth">
        <image
          src="../static/key.svg"
          mode="scaleToFill"
        />
      </view>
      <view class="up_arrow" id="upDay" @click="downDay">
        <image
          src="../static/key.svg"
          mode="scaleToFill"
        />
      </view>

      <view class="down_arrow" id="downYear" @click="upYear">
        <image
          src="../static/key.svg"
          mode="scaleToFill"
        />
      </view>
      <view class="down_arrow" id="downMonth" @click="upMonth">
        <image
          src="../static/key.svg"
          mode="scaleToFill"
        />
      </view>
      <view class="down_arrow" id="downDay" @click="upDay">
        <image
          src="../static/key.svg"
          mode="scaleToFill"
        />
      </view>


    </view>






    <view class="time0_v">
      <text class="time0">开始时间</text>
      <view class="time0_">{{ time0_ }}</view>
      <view class="key_but" @click="f_start_time">
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
      <view class="time1_">{{ time1_ }}</view>
      <view class="key_but" @click="f_end_time">
        <image
        src="../static/key.svg"
        mode="scaleToFill"
        class="key"
        id="key_3"
      />
      </view>
    </view>
    <view class="linedown"></view>

    <view class="remind_v">
      <text class="remind">会议提醒</text>
      <text class="remind_">{{ remind_input }}</text>
      <view class="key_but" @click="f_select_reminder">
        <image
        src="../static/key.svg"
        mode="scaleToFill"
        class="key"
        id="key_4"
      />
      </view>
    </view>
    <view class="select_reminder_box">
      <view class="reminder_option" @click="f_remind_input_5">提前5分钟提醒</view>
      <view class="reminder_option" @click="f_remind_input_15">提前15分钟提醒</view>
      <view class="reminder_option" @click="f_remind_input_30">提前30分钟提醒</view>
      <view class="reminder_option" @click="f_remind_input_60">提前一小时提醒</view>
    </view>
    <text class="place">
      会议地点
    </text>
    <view class="place_">本科生院402房间</view>

    <button class="book" @click="f_prompt">预约</button>
    <view class="prompt">
      <text class="prompt_">
        预约成功！
      </text>
    </view>

    <scroll-view scroll-y class="scroll-tab" :display="tab_disp">
      <view class="scroll-item" @click="f_select_time($event,0)">9:00</view>
      <view class="scroll-item" @click="f_select_time($event,1)">9:30</view>
      <view class="scroll-item" @click="f_select_time($event,2)">10:00</view>
      <view class="scroll-item" @click="f_select_time($event,3)">10:30</view>
      <view class="scroll-item" @click="f_select_time($event,4)">11:00</view>
      <view class="scroll-item" @click="f_select_time($event,5)">11:30</view>
      <view class="scroll-item" @click="f_select_time($event,6)">12:00</view>
      <view class="scroll-item" @click="f_select_time($event,7)">12:30</view>
      <view class="scroll-item" @click="f_select_time($event,8)">13:00</view>
      <view class="scroll-item" @click="f_select_time($event,9)">13:30</view>
      <view class="scroll-item" @click="f_select_time($event,10)">14:00</view>
      <view class="scroll-item" @click="f_select_time($event,11)">14:30</view>
      <view class="scroll-item" @click="f_select_time($event,12)">15:00</view>
      <view class="scroll-item" @click="f_select_time($event,13)">15:30</view>
      <view class="scroll-item" @click="f_select_time($event,14)">16:00</view>
      <view class="scroll-item" @click="f_select_time($event,15)">16:30</view>
      <view class="scroll-item" @click="f_select_time($event,16)">17:00</view>
      <view class="scroll-item" @click="f_select_time($event,17)">17:30</view>
      <view class="scroll-item" @click="f_select_time($event,18)">18:00</view>
      <view class="scroll-item" @click="f_select_time($event,19)">18:30</view>
      <view class="scroll-item" @click="f_select_time($event,20)">19:00</view>
      <view class="scroll-item" @click="f_select_time($event,21)">19:30</view>
      <view class="scroll-item" @click="f_select_time($event,22)">20:00</view>
      <view class="scroll-item" @click="f_select_time($event,23)">20:30</view>
      <view class="scroll-item" @click="f_select_time($event,24)">21:00</view>
      <view class="scroll-item" @click="f_select_time($event,25)">21:30</view>
    </scroll-view>

  </view>
</template>


<style scoped>
.scroll-tab{
  overflow: hidden;
  width: 180rpx;
  height: 360rpx;
  z-index: 3;
  background-color: #fff;
  position: absolute;
  left:444rpx;
  top: v-bind(scroll_tab_top);
  overflow-y: scroll;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: v-bind(tab_disp);
}
.scroll-item{
  width: 180rpx;
  height: 72rpx;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 600;
  font-size: 32rpx;
  line-height: 140%;

  letter-spacing: 0.4rpx;

  color: #000000;

  background-color: #fff;

}
.place_{
  /* 本科生院402 */

position: absolute;
width: 294rpx;
height: 44rpx;
left: 320rpx;
top: 828rpx;
white-space: nowrap;
font-family: 'Urbanist';
font-style: normal;
font-weight: 550;
font-size: 36rpx;
line-height: 44rpx;
/* identical to box height */
text-align: center;
letter-spacing: -0.6rpx;
color: #000000;
}


.layout{
  width: auto;
  height: auto;
  position: absolute;
  left: 62rpx;
  top: 34rpx;
}
.theme{

width: 624rpx;
height: 48rpx;

font-family: 'Microsoft YaHei UI';
font-style: normal;
font-weight: 700;
font-size: 40rpx;
line-height: 120%;
display: flex;
align-items: center;
color: #212121;

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.describe{

position: absolute;
top: 80rpx;
z-index: 5;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 40rpx;
gap: 24rpx;
width: 544rpx;
height: 112rpx;
background: #FAFAFA;
border-radius: 32rpx;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
.lineup,.linedown{


width: 760rpx;
height: 0rpx;
position: absolute;

flex: none;
order: 1;
flex-grow: 0;


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

z-index: 2;

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
.time0_,.time1_,.date_{
  position: absolute;
  left: 360rpx;
  width: 200rpx;
  text-align: right;
  overflow: hidden;
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
.time0_,.time1_{
  white-space: nowrap;
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
position: absolute;
left: 344rpx;
font-family: 'Urbanist';
font-style: normal;
font-weight: 500;
font-size: 32rpx;
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


z-index: 2;


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




.select_date_box{
  /* Frame 9 */

position: absolute;
top: 386rpx;

left:32rpx;
min-width: 590rpx;
height: 292rpx;
width: fit-content;
background: #FFFFFF;
box-shadow: 0rpx 8rpx 8rpx rgba(0, 0, 0, 0.25);
border-radius: 20rpx;
z-index: 3;
display: v-bind(select_date_display);
overflow: hidden;
}
.select_date_year,.select_date_month,.select_date_day{
  /* Rectangle 996 */

position: absolute;
width: 132rpx;
height: 106rpx;
top: 84rpx;


background: #FFFFFF;
box-shadow: 0rpx 8rpx 8rpx rgba(0, 0, 0, 0.25);
display: flex;
justify-content: center;
align-items: center;
}

.select_date_year{
  left: 40rpx;
}
.select_date_month{
  left: 230rpx;
}
.select_date_day{
  left: 420rpx;
}



.up_arrow,.down_arrow{

position: absolute;
width: 40rpx;
height: 40rpx;
overflow: hidden;

display: flex;
justify-content: center;
align-items: center;

}

.up_arrow{
  top: 42rpx;
transform: rotate(-90deg);

}
.down_arrow{
  top: 220rpx;
  transform: rotate(90deg);
}
#upYear,#downYear{
left: 86rpx;
overflow: hidden;
}
#upMonth,#downMonth{
  left: 276rpx;
}
#upDay,#downDay{
  left: 460rpx;
  overflow: hidden;
}

.helper_area{
  position: absolute;
  top: 0;
  left:0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.select_reminder_box{
  overflow: hidden;
  position: absolute;
  height: fit-content;
  width: 468rpx;
  top: 814rpx;
  left: 156rpx;
  z-index: 3;

  display: v-bind(select_reminder_diplay);

background: #FFFFFF;
box-shadow: 0rpx 8rpx 8rpx rgba(0, 0, 0, 0.25);

}
.reminder_option{
  width: 468rpx;
  height: 86rpx;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;


font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 32rpx;
line-height: 140%;
/* or 22px */

letter-spacing: 0.4rpx;

color: #000000;


}
</style>