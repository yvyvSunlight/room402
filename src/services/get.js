import { http } from '@/utils/http'

  
export const get_notice_all = () => {
    return http({
        methed:'GET',
        url:'/notice/some',
    })
}
