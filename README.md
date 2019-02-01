# wxapi - 微信小程序开发接口工具包

微信小程序接口工具包，无需服务器，无需开发后台，开箱即用，轻松开发小程序

交流 QQ 群: 629639122

欢迎大家进群交流，文档持续更新中...

## 使用方法

1. 将本项目文件夹 "wxapi" 复制到您的小程序根目录；

2. 修改 config.js 文件， subDomain 改为你自己的域名

   > 你可以 [免费开通后台账号](https://www.it120.cc/) ，开通后查看您的 subDomain 「[如何查看专属 subDomain](https://www.it120.cc/info/faq/10468)」

3. 登录你的[小程序后台](https://mp.weixin.qq.com)，[设置小程序合法服务器域名](https://www.it120.cc/info/faq/10469)，修改后需要重启小程序开发工具才能生效

4. 在您需要的地方引用工具类

   > const WXAPI = require('wxapi/main')
   >
   > 或者
   >
   > import WXAPI from 'wxapi/main'

5. 根据下面的文档调用接口即可

## 调用示例

> 调用：

```java
WXAPI.queryMobileLocation({ mobile: '13500000000' }).then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```

> 返回：

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

## 参数说明

接口参数说明: [「查看接口文档」](https://api.it120.cc/doc.html)

## 接口文档

### 免费接口

#### 登录 & 注册

##### 用户注册

> WXAPI.register(Object object)

##### 用户登录

> WXAPI.login(Object object)

##### 检测登录 token 是否有效

> WXAPI.checkToken(token)

#### 查询手机号码归属地

> WXAPI.queryMobileLocation(Object object)

#### 读取后台设置的系统参数

> WXAPI.queryConfig(Object object)

#### 读取积分赠送规则

> WXAPI.scoreRules(Object object)

#### 模板消息

##### 记录 formid/预支付 id 用以后期发送消息

> WXAPI.addTempleMsgFormid(Object object)

##### 给用户发送模板消息

> WXAPI.sendTempleMsg(Object object)

#### 微信支付

> WXAPI.wxpay(Object object)

### vip 专属接口

#### 获取可砍价的商品列表

> WXAPI.kanjiaList(Object object)
