# wxapi - 微信小程序开发接口工具包

微信小程序接口工具包，无需服务器，无需开发后台，开箱即用，轻松开发小程序

交流 QQ 群: 629639122

欢迎大家进群交流，文档持续更新中...

## 使用方法

1、将本项目文件夹 "wxapi" 复制到您的小程序根目录；

2、 修改 config.js 文件， subDomain 改为你自己的域名

> 你可以 [免费开通后台账号](https://www.it120.cc/) ，开通后查看您的 subDomain 「[如何查看专属 subDomain](https://www.it120.cc/info/faq/10468)」

3、登录你的[小程序后台](https://mp.weixin.qq.com)，[设置小程序合法服务器域名](https://www.it120.cc/info/faq/10469)，修改后需要重启小程序开发工具才能生效

4、在您需要的地方引用工具类

> const WXAPI = require('wxapi/main')
>
> 或者
>
> import WXAPI from 'wxapi/main'

5、根据下面的文档调用接口即可，如：

```java
WXAPI.queryMobileLocation({ mobile: '13500000000' }).then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```

## 免费接口

### 查询手机号码归属地 <font color=#990000>WXAPI.queryMobileLocation(Object object)</font>

> 参数 mobile : 手机号码

```java
WXAPI.queryMobileLocation({ mobile: '13500000000' }).then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```

```java
{
  "code": 0,
  "data": {
    "areaCode": "020",
    "cardType": "GSM",
    "cityName": "广州",
    "code": 1350000,
    "id": 60113,
    "postCode": "510000",
    "province": "广东",
    "segmentName": "中国移动"
  },
  "msg": "success"
}
```

### 读取后台设置的系统参数 <font color=#990000>WXAPI.queryConfig(Object object)</font>

> 参数 key : 系统参数的编码

```java
WXAPI.queryConfig({ key: 'mallName' }).then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```

```java
{
  "code": 0,
  "data": {
    "remark": "商城名称",
    "value": "天使童装"
  },
  "msg": "success"
}
```

### 读取积分赠送规则 <font color=#990000>WXAPI.scoreRules(Object object)</font>

> 参数 code : 编码 【可不传】

```java
WXAPI.scoreRules().then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```

```java
{
  "code": 0,
  "data": [
    {
      "code": "goodReputation",
      "codeStr": "好评送",
      "confine": 0,
      "score": 3
    }
  ],
  "msg": "success"
}
```

### 检测登录 token 是否有效 <font color=#990000>WXAPI.checkToken(token)</font>

> 参数 token : 待检测的 token

```java
WXAPI.checkToken('0d5d1afc-0808-432d-aff1-b3e6e1b9f8b1').then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```

```java
{
  "code": 0,
  "msg": "success"
}
```

### 模板消息：记录 formid/预支付 id 用以后期发送消息 <font color=#990000>WXAPI.addTempleMsgFormid(Object object)</font>

> 参数 formId : 表单提交场景下，为 submit 事件带上的 formId；支付场景下，为支付的 prepay_id
>
> 参数 type : form/pay ，分别代表支付还是表单提交
>
> 参数 token : 登录接口返回的 token

```java
WXAPI.addTempleMsgFormid({
    token: '0d5d1afc-0808-432d-aff1-b3e6e1b9f8b1',
    type: 'pay',
    formId: '..........'
})
```

```java
{
  "code": 0,
  "msg": "success"
}
```

### 模板消息：给用户发送模板消息 <font color=#990000>WXAPI.sendTempleMsg(Object object)</font>

> 接口参数说明: [「查看接口文档」](https://api.it120.cc/doc.html)

## vip 专属接口

### 获取可砍价的商品列表 <font color=#990000>WXAPI.kanjiaList(Object object)</font>

> 参数 page : 获取第几页
>
> 参数 pageSize : 每页获取几条数据

```java
WXAPI.kanjiaList().then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```

```java
{
  "code": 0,
  "data": {
    "result": [
      {
        "dateAdd": "2018-04-01 17:10:19",
        "dateEnd": "2222-05-01 12:00:00",
        "goodsId": 6765,
        "id": 3,
        "minPrice": 40,
        "number": 676500,
        "numberBuy": 21,
        "originalPrice": 500
      }
    ],
    "totalRow": 1,
    "totalPage": 1
  },
  "msg": "success"
}
```
