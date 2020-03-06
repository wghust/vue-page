### 描述

这是一个简单的vue模板。用于构建简单的页面。

### 安装方式

```
axe init
```

选择 ``Vue-Simple页面``

### 接入方式

最后会生成一个的js和一个css。

业务使用方法：

1：引入js和css

```
#js["//ss.tfax.com/xxx.js"], #css["//ss.tfax.com/xxx.css"]
```


2：并且在业务的html或者velocity里，添加如下代码：

```
<div id="app"><div>
```

完毕。

### 项目开发

#### 开发环境

```
npm run dev
```

#### 正式环境

```
npm run build
```

#### 发布到服务器上

```
npm run upload
```

服务器配置文件在server.json里。