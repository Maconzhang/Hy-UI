/*
 * 对axios的封装
 */

import axios from 'axios'

// 创建axios实例
// const BASE_API = 'http://10.0.10.15:8096/api/v1/admin/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const service = axios.create({
  // baseURL: '/api', // api的base_url
  timeout: 5000, // 请求超时时间
   // headers: {'content-type': 'application/x-www-form-urlencoded'},
   // withCredentials: true,
})


export default service
