# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <h7Button>默认按钮</h7Button>
    <h7Button type="primary">主要按钮</h7Button>
    <h7Button type="success">成功按钮</h7Button>
    <h7Button type="info">信息按钮</h7Button>
    <h7Button type="warning">警告按钮</h7Button>
    <h7Button type="danger">危险按钮</h7Button>
  </div>
  <div class="m-10">
    <h7Button plain>朴素按钮</h7Button>
    <h7Button type="primary" plain>主要按钮</h7Button>
    <h7Button type="success" plain>成功按钮</h7Button>
    <h7Button type="info" plain>信息按钮</h7Button>
    <h7Button type="warning" plain>警告按钮</h7Button>
    <h7Button type="danger" plain>危险按钮</h7Button>
  </div>
  <div class="m-10">
    <h7Button round>圆形按钮</h7Button>
    <h7Button type="primary" round>主要按钮</h7Button>
    <h7Button type="success" round>成功按钮</h7Button>
    <h7Button type="info" round>信息按钮</h7Button>
    <h7Button type="warning" round>警告按钮</h7Button>
    <h7Button type="danger" round>危险按钮</h7Button>
  </div>
</div>

::: demo
```html

<div>
  <h7Button>默认按钮</h7Button>
  <h7Button type="primary">主要按钮</h7Button>
  <h7Button type="success">成功按钮</h7Button>
  <h7Button type="info">信息按钮</h7Button>
  <h7Button type="warning">警告按钮</h7Button>
  <h7Button type="danger">危险按钮</h7Button>
</div>
<div>
  <h7Button plain>朴素按钮</h7Button>
  <h7Button type="primary" plain>主要按钮</h7Button>
  <h7Button type="success" plain>成功按钮</h7Button>
  <h7Button type="info" plain>信息按钮</h7Button>
  <h7Button type="warning" plain>警告按钮</h7Button>
  <h7Button type="danger" plain>危险按钮</h7Button>
</div>
<div>
  <h7Button round>圆形按钮</h7Button>
  <h7Button type="primary" round>主要按钮</h7Button>
  <h7Button type="success" round>成功按钮</h7Button>
  <h7Button type="info" round>信息按钮</h7Button>
  <h7Button type="warning" round>警告按钮</h7Button>
  <h7Button type="danger" round>危险按钮</h7Button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <h7Button disabled>默认按钮</h7Button>
    <h7Button type="primary" disabled>主要按钮</h7Button>
    <h7Button type="success" disabled>成功按钮</h7Button>
    <h7Button type="info" disabled>信息按钮</h7Button>
    <h7Button type="warning" disabled>警告按钮</h7Button>
    <h7Button type="danger" disabled>危险按钮</h7Button>
  </div>
  <div class="m-10">
    <h7Button plain disabled>朴素按钮</h7Button>
    <h7Button type="primary" plain disabled>主要按钮</h7Button>
    <h7Button type="success" plain disabled>成功按钮</h7Button>
    <h7Button type="info" plain disabled>信息按钮</h7Button>
    <h7Button type="warning" plain disabled>警告按钮</h7Button>
    <h7Button type="danger" plain disabled>危险按钮</h7Button>
  </div>
</div>

::: demo
```html

<div>
  <h7Button disabled>默认按钮</h7Button>
  <h7Button type="primary" disabled>主要按钮</h7Button>
  <h7Button type="success" disabled>成功按钮</h7Button>
  <h7Button type="info" disabled>信息按钮</h7Button>
  <h7Button type="warning" disabled>警告按钮</h7Button>
  <h7Button type="danger" disabled>危险按钮</h7Button>
</div>
<div class="m-10">
  <h7Button plain disabled>朴素按钮</h7Button>
  <h7Button type="primary" plain disabled>主要按钮</h7Button>
  <h7Button type="success" plain disabled>成功按钮</h7Button>
  <h7Button type="info" plain disabled>信息按钮</h7Button>
  <h7Button type="warning" plain disabled>警告按钮</h7Button>
  <h7Button type="danger" plain disabled>危险按钮</h7Button>
</div>
  
```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 VV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。
<div class="demo-block">
  <h7Button icon="h7-icon-tag" type="primary"></h7Button>
  <h7Button icon="h7-icon-close" type="primary"></h7Button>
  <h7Button icon="h7-icon-smile" type="primary"></h7Button>
  <h7Button icon="h7-icon-search" type="primary">搜索</h7Button>
  <h7Button icon="h7-icon-cloudfill" type="primary">下载</h7Button>
</div>

::: demo
```html

<h7Button icon="h7-icon-tag" type="primary"></h7Button>
<h7Button icon="h7-icon-close" type="primary"></h7Button>
<h7Button icon="h7-icon-smile" type="primary"></h7Button>
<h7Button icon="h7-icon-search" type="primary">搜索</h7Button>
<h7Button icon="h7-icon-cloudfill" type="primary">下载</h7Button>

```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
  <h7Button>默认尺寸</h7Button>
  <h7Button size="medium">中等按钮</h7Button>
  <h7Button size="small">小型按钮</h7Button>
</div>

::: demo
```html

<h7Button>默认尺寸</h7Button>
<h7Button size="medium">中等按钮</h7Button>
<h7Button size="small">小型按钮</h7Button>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
