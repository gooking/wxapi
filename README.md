# wxapi - 微信小程序开发接口工具包
微信小程序接口工具包，无需服务器，无需开发后台，开箱即用，轻松开发小程序

交流QQ群: 629639122

欢迎大家进群交流

## 使用方法
1、将本项目文件夹 “wxapi” 复制到您的小程序根目录；

2、 修改 config.js 文件， subDomain 改为你自己的域名
> 你可以 [免费开通后台账号](https://www.it120.cc/) ，开通后查看您的 subDomain 「[如何查看专属subDomain](https://www.it120.cc/info/faq/10468)」

3、登录你的[小程序后台](https://mp.weixin.qq.com)，[设置小程序合法服务器域名](https://www.it120.cc/info/faq/10469)，修改后需要重启小程序开发工具才能生效

4、在您需要的地方引用工具类
> const WXAPI = require('wxapi/main')  
> 
> 或者
> 
> import WXAPI from 'wxapi/main'

5、根据下面的文档调用接口即可，如：
```java
WXAPI.queryMobileLocation('13500000000').then(res => {
    console.log('接口成功返回:', res)
}).catch(e => {
    console.error('接口调用异常:', e)
})
```
## 接口文档
### 免费接口