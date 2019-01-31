const CONFIG = require('config.js')
const API_BASE_URL = 'https://api.it120.cc'

const request = (url, needSubDomain, method, data) => {
  let _url = API_BASE_URL + (needSubDomain ? CONFIG.subDomain : '') + url
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error.data)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 
 {
  "code": 0,
  "data": {
    "areaCode": "0571",
    "cardType": "GSM",
    "cityName": "杭州市",
    "code": 1865712,
    "id": 199827,
    "postCode": "310000",
    "province": "浙江",
    "segmentName": "中国联通"
    },
    "msg": "success"
 }
 */
const queryMobileLocation = (mobile) => {
  return request('/common/mobile-segment/location', false, 'post', { mobile })
}

module.exports = {
  request,
  queryMobileLocation
}