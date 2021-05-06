
import request from '@/router/axios';
import { baseUrl } from '@/config/env';
const apiUrl = `${baseUrl}/recruit`
export const list = ({networkId=1,pageSize=10,pageIndex=1}) => {
  return request({
    url:  `${apiUrl}/${networkId}/${pageSize}/${pageIndex}`,
    method:'post'
    // meta: {
    //   isSerialize: true
    // },
    // params: data
  })
}
export const del = (id) => request.delete(baseUrl + '/crud/delete', {
  params: {
    id
  }
})
export const add = (data) => request({
  url: `${apiUrl}/${1}`,
  method: 'put',

  data: data
})
export const update = (id, data,recruitId) => request({
  url: `${apiUrl}/${recruitId}`,
  method: 'patch',
  meta: {
    isSerialize: true
  },
  data: data
})



