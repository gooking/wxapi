const WXAPI = require('/wxapi/main')
//  import WXAPI from '/wxapi/main'

App({
  onLaunch: function () {
    // 调用简单例子
    WXAPI.queryMobileLocation('13500000000').then(res => {
      console.log('接口成功返回:', res)
    }).catch(e => {
      console.error('接口调用异常:', e)
    })
  }
})