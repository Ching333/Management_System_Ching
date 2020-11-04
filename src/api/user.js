import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function queryUser() {
  return request({
    url: '/query/get_user_list',
    method: 'post',
    baseURL: 'http://localhost:57680'
  })
}

export function userLogin(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    // credentials: 'include',
    data,
    xhrFields: {
      withCredentials: true
    },
    contentType: 'application/json',
    // withCredentials: true,
    baseURL: 'http://localhost:57680'
  })
}

export function userLogout() {
  return request({
    url: '/auth/logout',
    method: 'post',
    xhrFields: {
      withCredentials: true
    },
    // withCredentials: true
    contentType: 'application/json',
    baseURL: 'http://localhost:57680'
  })
}

export function userTest() {
  return request({
    url: '/auth/test',
    method: 'post',
    xhrFields: {
      withCredentials: true
    },
    contentType: 'application/json',
    baseURL: 'http://localhost:57680'
  })
}
