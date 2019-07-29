<!-- TOC -->

- [wxapi - 微信小程序开发接口工具包](#wxapi---微信小程序开发接口工具包)
  - [TA们都在用](#ta们都在用)
  - [联系作者](#联系作者)
  - [使用方法](#使用方法)
  - [调用示例](#调用示例)
  - [参数说明](#参数说明)
  - [接口文档](#接口文档)
    - [登录 & 注册](#登录--注册)
      - [用户注册](#用户注册)
      - [用户登录](#用户登录)
      - [检测登录 token 是否有效](#检测登录-token-是否有效)
    - [用户信息](#用户信息)
      - [绑定手机号码](#绑定手机号码)
      - [获取用户信息](#获取用户信息)
      - [修改用户资料](#修改用户资料)
    - [基础数据检索](#基础数据检索)
      - [读取所有省份](#读取所有省份)
      - [读取下级省市区数据](#读取下级省市区数据)
      - [查询手机号码归属地](#查询手机号码归属地)
    - [读取 Banner 列表](#读取-banner-列表)
    - [CMS模块](#cms模块)
      - [获取所有的CMS分类](#获取所有的cms分类)
      - [获取CMS文章列表](#获取cms文章列表)
      - [获取CMS文章详情](#获取cms文章详情)
    - [商品管理](#商品管理)
      - [获取所有的商品分类](#获取所有的商品分类)
      - [获取商品列表](#获取商品列表)
      - [获取商品详情信息](#获取商品详情信息)
      - [获取商品价格（以便用户选择了不同规格尺寸后读取新价格）](#获取商品价格以便用户选择了不同规格尺寸后读取新价格)
      - [获取商品的评价](#获取商品的评价)
    - [站点信息](#站点信息)
      - [读取后台vip等级（用于判断是免费后台还是专业后台）](#读取后台vip等级用于判断是免费后台还是专业后台)
      - [读取系统参数](#读取系统参数)
      - [批量读取系统参数](#批量读取系统参数)
    - [根据视频编号读取视频详情](#根据视频编号读取视频详情)
    - [优惠券管理](#优惠券管理)
      - [获取可领取优惠券](#获取可领取优惠券)
      - [领取优惠券](#领取优惠券)
      - [获取我的优惠券](#获取我的优惠券)
    - [公告管理](#公告管理)
      - [获取公告列表](#获取公告列表)
      - [获取公告详情](#获取公告详情)
    - [订单管理](#订单管理)
      - [我的订单统计](#我的订单统计)
      - [创建订单](#创建订单)
      - [查询订单列表](#查询订单列表)
      - [查询订单详情](#查询订单详情)
      - [确认收货接口](#确认收货接口)
      - [评价接口](#评价接口)
      - [关闭订单](#关闭订单)
      - [使用余额支付订单](#使用余额支付订单)
      - [申请退换货](#申请退换货)
      - [申请退换货详情数据获取](#申请退换货详情数据获取)
      - [申请退换货撤销](#申请退换货撤销)
    - [积分管理](#积分管理)
      - [读取积分赠送规则](#读取积分赠送规则)
      - [签到](#签到)
      - [签到记录](#签到记录)
      - [读取今日签到信息](#读取今日签到信息)
      - [使用积分券兑换积分](#使用积分券兑换积分)
      - [小程序转发微信群赠送分享人积分](#小程序转发微信群赠送分享人积分)
      - [积分明细记录](#积分明细记录)
    - [模板消息](#模板消息)
      - [记录 formid/预支付 id 用以后期发送消息](#记录-formid预支付-id-用以后期发送消息)
      - [给用户发送模板消息](#给用户发送模板消息)
    - [收货地址管理](#收货地址管理)
      - [获取收货地址列表](#获取收货地址列表)
      - [添加收货地址](#添加收货地址)
      - [更新收货地址](#更新收货地址)
      - [获取默认地址](#获取默认地址)
      - [读取地址详细信息](#读取地址详细信息)
      - [获取默认地址v2.0](#获取默认地址v20)
      - [读取地址详细信息v2.0](#读取地址详细信息v20)
      - [删除](#删除)
    - [在线支付](#在线支付)
      - [微信支付](#微信支付)
      - [支付宝支付(半自动)](#支付宝支付半自动)
    - [商品砍价](#商品砍价)
      - [获取可砍价的商品列表](#获取可砍价的商品列表)
      - [获取商品砍价设置](#获取商品砍价设置)
      - [发起一个砍价](#发起一个砍价)
      - [砍价详情](#砍价详情)
      - [砍价助力](#砍价助力)
      - [我的助力信息](#我的助力信息)
    - [拼团功能](#拼团功能)
      - [获取拼团配置](#获取拼团配置)
      - [开团接口](#开团接口)
      - [获取某个商品当前进行中的所有拼团](#获取某个商品当前进行中的所有拼团)
    - [三级分销](#三级分销)
      - [申请成为分销商](#申请成为分销商)
      - [查看申请审核状态](#查看申请审核状态)
      - [查看我的分销团队成员](#查看我的分销团队成员)
      - [查看我的返佣记录](#查看我的返佣记录)
    - [资金相关](#资金相关)
      - [获取充值满多少送多少规则](#获取充值满多少送多少规则)
      - [获取用户资产（余额、可用积分）信息](#获取用户资产余额可用积分信息)
      - [用户资金流水](#用户资金流水)
      - [申请提现](#申请提现)
      - [发票管理](#发票管理)
        - [申请发票](#申请发票)
        - [申请的发票列表](#申请的发票列表)
        - [发票详情](#发票详情)
      - [押金管理](#押金管理)
        - [支付押金](#支付押金)
        - [读取押金列表](#读取押金列表)
        - [押金详情](#押金详情)
        - [申请退回押金](#申请退回押金)
    - [优惠买单](#优惠买单)
      - [获取买单优惠信息](#获取买单优惠信息)
      - [买单接口](#买单接口)
    - [微信小程序](#微信小程序)
      - [无限获取二维码](#无限获取二维码)
    - [知识付费【虚拟交易】](#知识付费虚拟交易)
      - [获取产品列表](#获取产品列表)
      - [获取产品详情](#获取产品详情)
      - [购买产品](#购买产品)
      - [读取成交记录](#读取成交记录)
    - [门店[店铺]管理](#门店店铺管理)
      - [获取门店列表](#获取门店列表)
      - [获取门店详情](#获取门店详情)
    - [文件管理](#文件管理)
      - [上传文件](#上传文件)
    - [留言 & 反馈](#留言--反馈)
      - [提交留言反馈](#提交留言反馈)

<!-- /TOC -->

# wxapi - 微信小程序开发接口工具包

微信小程序接口工具包，无需服务器，无需开发后台，开箱即用，轻松开发小程序

交流 QQ 群: 629639122

欢迎大家进群交流，文档持续更新中...

## TA们都在用

| 天使童装| 舔果果小铺 | 面馆风格小程序 | AI名片 |
| :------:| :------: | :------: | :------: |
| <img src="https://cdn.it120.cc/apifactory/2019/06/28/a8304003-3218-4a47-95cf-84d82ebdc07b.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/04/01/b7b8f5a0fcfc72454ade8510ab929717.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/03/29/9e30cfe31eabcd218eb9c434f17e9295.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/12/18/c2324da4eea91602f385db5b523b13ca.jpg" width="200px"> | 
| [开源地址](https://github.com/EastWorld/wechat-app-mall) | [开源地址](hhttps://github.com/walcer/TianguoguoXiaopu) | [开源地址](https://gitee.com/javazj/noodle_shop_procedures) | [开源地址](https://github.com/gooking/visitingCard) |

&nbsp;

| fire-shop-lite| 培训机构 | 面馆风格小程序 | AI名片 |
| :------:| :------: | :------: | :------: |
| <img src="https://camo.githubusercontent.com/d7c5eecd41942b4906399345bcdbb0d0dd336931/68747470733a2f2f626f782e6b616e636c6f75642e636e2f33303034323134376638393839316533336230316264646664323032393639305f323538783235382e6a7067" width="200px"> | <img src="https://github.com/fukcup/lofter/raw/master/img/wecode.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/03/29/9e30cfe31eabcd218eb9c434f17e9295.jpg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2018/12/18/c2324da4eea91602f385db5b523b13ca.jpg" width="200px"> | 
| [开源地址](https://github.com/thundersword/fire-shop-lite) | [开源地址](https://github.com/fukcup/lofter) | [开源地址](https://gitee.com/javazj/noodle_shop_procedures) | [开源地址](https://github.com/gooking/visitingCard) |

## 联系作者

| ➕微信 | ➕支付宝 | ➕QQ |
| :------: | :------: | :------: |
| <img src="https://cdn.it120.cc/apifactory/2019/07/03/a86f7e46-1dbc-42fe-9495-65403659671e.jpeg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/07/03/fda59aeb-4943-4379-93bb-92856740bd6a.jpeg" width="200px"> | <img src="https://cdn.it120.cc/apifactory/2019/07/07/d420e29b-872e-4147-b57d-0aa988cd4853.png" width="200px"> |

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

### 登录 & 注册

#### 用户注册

> WXAPI.register(Object object)

#### 用户登录

> WXAPI.login(Object object)

#### 检测登录 token 是否有效

> WXAPI.checkToken(token)

### 用户信息

#### 绑定手机号码

> WXAPI.bindMobile(Object object)

#### 获取用户信息

> WXAPI.userDetail(token)

#### 修改用户资料

> WXAPI.modifyUserInfo(Object object)

### 基础数据检索

#### 读取所有省份

> WXAPI.province()

#### 读取下级省市区数据

> WXAPI.nextRegion(pid)

#### 查询手机号码归属地

> WXAPI.queryMobileLocation(Object object)

### 读取 Banner 列表

> WXAPI.banners(Object object)

### CMS模块

#### 获取所有的CMS分类

> WXAPI.cmsCategories()

#### 获取CMS文章列表

> WXAPI.cmsArticles(Object object)

#### 获取CMS文章详情

> WXAPI.cmsArticleDetail(id)

### 商品管理

#### 获取所有的商品分类

> WXAPI.goodsCategory()

#### 获取商品列表

> WXAPI.goods(Object object)

#### 获取商品详情信息

> WXAPI.goodsDetail(id)

#### 获取商品价格（以便用户选择了不同规格尺寸后读取新价格）

> WXAPI.goodsPrice(Object object)

#### 获取商品的评价

> WXAPI.goodsReputation(Object object)

### 站点信息

#### 读取后台vip等级（用于判断是免费后台还是专业后台）

> WXAPI.vipLevel()

#### 读取系统参数

> WXAPI.queryConfig(Object object)
#### 批量读取系统参数

> WXAPI.queryConfigBatch(keys)

### 根据视频编号读取视频详情

> WXAPI.videoDetail(videoId)

### 优惠券管理

#### 获取可领取优惠券

> WXAPI.coupons(Object object)

#### 领取优惠券

> WXAPI.fetchCoupons(Object object)

#### 获取我的优惠券

> WXAPI.myCoupons(Object object)

### 公告管理

#### 获取公告列表

> WXAPI.noticeList(Object object)

#### 获取公告详情

> WXAPI.noticeDetail(id)

### 订单管理

#### 我的订单统计

> WXAPI.orderStatistics(token)

#### 创建订单

> WXAPI.orderCreate(Object object)

#### 查询订单列表

> WXAPI.orderList(Object object)

#### 查询订单详情

> WXAPI.orderDetail(id, token)

#### 确认收货接口

> WXAPI.orderDelivery(orderId, token)

#### 评价接口

> WXAPI.orderReputation(Object object)

#### 关闭订单

> WXAPI.orderClose(orderId, token)

#### 使用余额支付订单

> WXAPI.orderPay(orderId, token)

#### 申请退换货

> WXAPI.refundApply(token, orderId, type, logisticsStatus, reason, amount, remark, pic)

#### 申请退换货详情数据获取

> WXAPI.refundApplyDetail(token, orderId)

#### 申请退换货撤销

> WXAPI.refundApplyCancel(token, orderId)

### 积分管理

#### 读取积分赠送规则

> WXAPI.scoreRules(Object object)

#### 签到

> WXAPI.scoreSign(token)

#### 签到记录

> WXAPI.scoreSignLogs(Object object)

#### 读取今日签到信息

> WXAPI.scoreTodaySignedInfo(token)

#### 使用积分券兑换积分

> WXAPI.scoreExchange(number, token)
#### 小程序转发微信群赠送分享人积分

> WXAPI.shareGroupGetScore(referrer, encryptedData, iv)

#### 积分明细记录

> WXAPI.scoreLogs(Object object)

### 模板消息

#### 记录 formid/预支付 id 用以后期发送消息

> WXAPI.addTempleMsgFormid(Object object)

#### 给用户发送模板消息

> WXAPI.sendTempleMsg(Object object)

### 收货地址管理

#### 获取收货地址列表

> WXAPI.queryAddress(token)

#### 添加收货地址

> WXAPI.addAddress(Object object)

#### 更新收货地址

> WXAPI.updateAddress(Object object)

#### 获取默认地址

> WXAPI.defaultAddress(token)

#### 读取地址详细信息

> WXAPI.addressDetail(id, token)

#### 获取默认地址v2.0

> WXAPI.defaultAddress_v2(token)

#### 读取地址详细信息v2.0

> WXAPI.addressDetail_v2(id, token)

#### 删除

> WXAPI.deleteAddress(id, token)

### 在线支付

#### 微信支付

> WXAPI.wxpay(Object object)

#### 支付宝支付(半自动)

> WXAPI.alipay(Object object)

### 商品砍价

#### 获取可砍价的商品列表

> WXAPI.kanjiaList(Object object)
#### 获取商品砍价设置

> WXAPI.kanjiaSet(goodsId)

#### 发起一个砍价

> WXAPI.kanjiaJoin(kjid, token)

#### 砍价详情

> WXAPI.kanjiaDetail(kjid, joiner)

#### 砍价助力

> WXAPI.kanjiaHelp(kjid, joiner, token, remark)

#### 我的助力信息

> WXAPI.kanjiaHelpDetail(kjid, joiner, token)

### 拼团功能

#### 获取拼团配置

> WXAPI.pingtuanSet(goodsId)
#### 开团接口

> WXAPI.pingtuanOpen(goodsId, token)

#### 获取某个商品当前进行中的所有拼团

> WXAPI.pingtuanList(goodsId)

### 三级分销

#### 申请成为分销商

> WXAPI.fxApply(token, name, mobile)
#### 查看申请审核状态

> WXAPI.fxApplyProgress(token)
#### 查看我的分销团队成员

> WXAPI.fxMembers(Object object)
#### 查看我的返佣记录

> WXAPI.fxCommisionLog(Object object)

### 资金相关

#### 获取充值满多少送多少规则

> WXAPI.rechargeSendRules()

#### 获取用户资产（余额、可用积分）信息

> WXAPI.userAmount(token)

#### 用户资金流水

> WXAPI.cashLogs(Object object)

#### 申请提现

> WXAPI.withDrawApply(money, token)

#### 发票管理
##### 申请发票
> WXAPI.invoiceApply(Object object)
##### 申请的发票列表
> WXAPI.invoiceList(Object object)
##### 发票详情
> WXAPI.invoiceDetail(token, id)

#### 押金管理
##### 支付押金
> WXAPI.payDeposit(Object object)
##### 读取押金列表
> WXAPI.depositList(Object object)
##### 押金详情
> WXAPI.depositInfo(token, id)
##### 申请退回押金
> WXAPI.depositBackApply(token, id)

### 优惠买单

#### 获取买单优惠信息

> WXAPI.payBillDiscounts()

#### 买单接口

> WXAPI.payBill(Object object)

### 微信小程序

#### 无限获取二维码

> WXAPI.wxaQrcode(Object object)

### 知识付费【虚拟交易】

#### 获取产品列表

> WXAPI.virtualTraderList(Object object)

#### 获取产品详情

> WXAPI.virtualTraderInfo(token, id)

#### 购买产品

> WXAPI.virtualTraderBuy(token, id)
> 
#### 读取成交记录

> WXAPI.virtualTraderBuyLogs(Object object)

### 门店[店铺]管理

#### 获取门店列表

> WXAPI.fetchShops(Object object)

#### 获取门店详情

> WXAPI.shopSubdetail(id)

### 文件管理

#### 上传文件

> WXAPI.uploadFile(token, tempFilePath)

### 留言 & 反馈

#### 提交留言反馈

> WXAPI.addComment(Object object)