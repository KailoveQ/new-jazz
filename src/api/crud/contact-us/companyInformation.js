import request from '@/router/axios';
import { baseUrl } from '@/config/env';
const apiUrl = `${baseUrl}/contract`
export const getdate = (id) => {
  return request({
    url: `${apiUrl}/${id}`,
    method: 'get',
  })
}
export const update = (data) => request({
  url: `${apiUrl}/1`,
  method: 'post',
  data: data
})
