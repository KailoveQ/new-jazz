import request from '@/router/axios';
import { baseUrl } from '@/config/env';
const apiUrl = `${baseUrl}/contract`
export const getdate = () => {
  return request({
    url: `${apiUrl}/detail`,
    method: 'get',
    params: {
      networkId: 1,
      type: 2
    }
  })
}
export const update = (data) => request({
  url: `${apiUrl}/1`,
  method: 'post',
  data: data
})
