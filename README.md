# eslint-config-hewx

这是一个eslint配置文件库

#### 配置步骤

##### 如果您已经安装eslint并且初始化或者新建了`.eslintrc.**`文件,请直接跳转第4步

##### 1.为您的编辑器安装eslint扩展

![image-20230407155047175](C:\Users\admin\Desktop\eslint-config-hewx\assets\image-20230407155047175.png)

##### 2.为您的项目安装eslint

在项目根目录执行以下命令

```shell
npm install eslint -dev
```

或者

```shell
yarn add eslint -D
```

详见：https://eslint.bootcss.com/docs/user-guide/getting-started

##### 3.初始化eslint，生成``文件

执行以下命令

```shell
eslint --init
```

##### 3.1也可以直接在项目根目录新建`.eslintrc.**`文件

配置详见：https://eslint.bootcss.com/docs/user-guide/configuring

##### 4.安装`eslint-config-hewx`

执行以下命令

```shell
npm install eslint-config-hewx -dev
```

或者

```shell
yarn add eslint-config-hewx -D
```

##### 5.配置`eslint-config-hewx`

在之前生成的`.eslintrc.**`文件中的`extends`字段添加：`'eslint-config-hewx/uniapp-vue2-javascript'`

```js
module.exports = {
  extends: [
    'eslint-config-hewx/uniapp-vue2-javascript',
     // ...
  ],
};

```

`'eslint-config-hewx/uniapp-vue2-javascript'` 中的`uniapp-vue2-javascript`是可变的，根据项目类型选择合适的内容，可用`name`值如下：

|          name          |        适用范围        |
| :--------------------: | :--------------------: |
| uniapp-vue2-javascript | uniapp+vue2+javascript |
|    node-javascript     |   nodejs+javascript    |

