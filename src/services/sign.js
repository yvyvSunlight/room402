import { http } from '@/utils/http'
let date = new Date();
let current_y = date.getFullYear();
let current_m = date.getMonth() + 1;
let current_d = date.getDate();
  
export const sign_in = () => {
    return http({
        methed:'PUT',
        url:'/sign/{id}',
        data:{
            id:1,
            date:`${current_y}-${current_m}-${current_d}`,
            user_id:'1',
            option:1,
            validator:1
        }
    })
}

export const sign_out = () => {
    
}