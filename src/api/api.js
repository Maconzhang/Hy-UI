
import request from './axios'
const qs = require('qs');

const port1 = 'http://ermtestapi.xlgxapp.com'
const port2 = 'http://nb1.xlgxapp.com'
export function login({phone, code, areaid}) {
  return request({
    url: `${port1}/api/v1/login`,
    method: 'post',
    data: qs.stringify({
      phonenumber: phone,
      code,
			areaid
    })
  })
}

//验证吗
export function message(phone) {
  return request({
    url: `${port1}/api/v1/message/${phone}`,
    method: 'get'
  })
}

//收益列表
export function adoptorders(token) {
	return request({
    url: `${port2}/adopt/v1/adoptorders`,
    method: 'get',
		headers: { 'Authorization': `JWT ${token}` },
  })
}

//下单
export function order({token, area = '315000', activecount}) {
	return request({
    url: `${port2}/adopt/v1/adoptorders`,
    method: 'post',
		headers: { 'Authorization': `JWT ${token}` },
		data: qs.stringify({
      area,
      activecount,
			vehiclecount: 1
    })
  })
}

//微信支付
export function wx_pay({orderno, ip, token}) {
	return request({
    url: `${port2}/api/v1/wxpay_wapadopt`,
    method: 'post',
		headers: { 'token': `${token}` },
		data: qs.stringify({
      orderno,
      ip
    })
  })
}

//支付宝支付
export function ali_pay({orderno, token}) {
	return request({
    url: `${port2}/api/v1/alipay_wapadopt`,
    method: 'post',
		headers: { 'token': `${token}` },
		data: qs.stringify({
      orderno
    })
  })
}
