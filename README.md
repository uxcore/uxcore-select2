# uxcore-select

- tags: uxcore, select
- description: uxcore select
- maintainers: vincent.bian
- version: 0.1.4
- lastupdate: 2015/9/1
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
var Select = require('uxcore-select2');
<Select>
  <Option value="lucy">lucy</Option>
</Select>
```

### demo
http://uxcore.github.io/select/

## API

### Select props

|参数|说明|类型|默认值|
|---|----|---|------|
|value | 指定当前选中的条目 | string/Array | 无 |
|defaultValue | 指定默认选中的条目 | string/Array | 无 |
|multiple | 支持多选 |  | false |
|filterOption | 是否根据输入项进行筛选 |  | true |
|tags | 可以把随意输入的条目作为tag，输入项不需要与下拉选项匹配 |  | false |
|onSelect | 被选中时调用，参数为选中的option value值 | function | 无 |
|onDeselect | 取消选中时调用，参数为选中的option value值，仅在multiple或tags模式下生效 | function | 无 |
|onChange | 选中option，或input的value变化(combobox模式下)时，调用此函数 | function | 无 |
|allowClear | 显示清除按钮 |  | false |
|placeholder | 选择框默认文字 | string | 无 |
|searchPlaceholder | 搜索框默认文字 | string | 无 |
|optionFilterProp | 输入项过滤对应的 option 属性 | string | value |
|combobox | 输入框自动提示模式 |  | false |
|size | 选择框大小 | String | 无 |

### Option props
|参数|说明|类型|默认值|
|---|----|---|------|
|disabled | 是否禁用 | Boolean | false |
|key | 如果react需要你设置此项，此项值与value的值相同，然后可以省略value设置 | String | |
|value | 默认根据此属性值进行筛选 | String | - |

### OptGroup props
|参数|说明|类型|默认值|
|---|----|---|------|
|label | 组名 | String/React.Element | 无 |
|key |  | String | - |
