# uxcore-select

- tags: uxcore, select
- description: uxcore select
- maintainers: vincent.bian
- version: 0.1.0
- lastupdate: 2015/7/12
- screenshots:

---

## TL;DR

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/select
$ cd select
$ npm install
$ npm run dev
```
nav http://localhost:9090/webpack-dev-server/example/ to see the demo

#### deploy to gh-pages
[refer to]( http://stackoverflow.com/questions/17643381/how-to-upload-my-angularjs-static-site-to-github-pages)
```sh
$ npm run build
$ git add build & git commit -m 'update deploy files'
$ npm run deploy
```

## Usage

```js
var Select = require('select');
<Select>
  <Option value="lucy">lucy</Option>
</Select>
```

### demo
http://uxcore.github.io/select/

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|value|指定默认选中的条目|string/Array|无|
|multiple|支持多选||false|
|filterOption|是否根据输入项进行筛选||true|
|tags|可以把随意输入的条目作为tag，输入项不需要与下拉选项匹配||false|
|onSelect|被选中时调用，参数为选中的option value值|function|无|
|onDeselect|取消选中时调用，参数为选中的option value值，仅在multiple或tags模式下生效|function|无|
|onChange|选中option，或input的value变化(combobox模式下)时，调用此函数|function|无|
|allowClear|显示清除按钮||false|
|placeholder|选择框默认文字|string|无|
|searchPlaceholder|搜索框默认文字|string|无|
|combobox|输入框自动提示模式||false|
