import request from '@/utils/request'

export function getCategory() {
  return request({
    url: '/category/',
    method: 'get'
  })
}

export function addCategory(data) {
  return request({
    url:'/category/add',
    method:'post',
    data
  })
}

