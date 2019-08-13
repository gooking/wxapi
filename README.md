# 迁移说明

本项目已迁移至新地址

[https://github.com/gooking/apifm-wxapi](https://github.com/gooking/apifm-wxapi)

“apifm-wxapi” 将采用目前主流的  npm 安装插件的形式，方便安装、升级，对现有代码无侵入，整体项目会更加简洁，强烈推荐大家升级！

# apifm-wxapi 使用方法

## 安装

```
npm install apifm-wxapi
```

*如果你的项目还不支持 npm (检查根目录下有没有 package.json 文件)，请先初始化：*

```
npm init
```

## 小程序中可直接使用

1. 头部引入插件：

    ```
    const WXAPI = require('apifm-wxapi')
    WXAPI.init('gooking')
    ```

2. 直接调用方法：

    ```
    WXAPI.banners().then(res => {
      if (res.code == 0) {
        this.setData({
          banners: res.data
        })
      }
    })
    ```

*上述例子完成了读取后台的 banner 轮播图片的数据，后台发布轮播图，小程序端直接这样简单调用即可~*

**具体请移步至新项目地址！**

**有傻瓜教程、功能文档等着你！**