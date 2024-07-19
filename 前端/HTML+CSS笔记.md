# 一：HTML笔记

> HTML5：是一种超文本的标记（标签）语言
>
> HTML属性分为三种：
>
> > 公共属性：id class style name title(鼠标悬停气泡提示)
> > 私有属性：
> > 自定义属性

### 1.1 页面说明

```html
<!--声明文本规范-->
<!DOCTYPE html>		
<!--根节点-->
<html>
	<!--头部信息-->
	<head>
		<!--设置网页编码格式 支持中文="utf-8"-->支持中文只有两种，还有一种是支持中文是jbk
		<meta charset="utf-8" />
		<!--标题信息-->
		<title></title>
		
	</head>
	<!--主体信息-->
	<body>
    </body>
</html>
```

### 1.2 基本标签

**alight属性**

图像中：值: `left(左)`, `right(右)`, `middle(中)`, `top(上)`, `bottom(下)`
表格中：表格 (`<table>`) 值: `left(左)`, `center(中)`, `right(右)`
				单元格 (`<td>`, `<th>`) 值: `left`, `center`, `right`, `justify(居中)`
块级元素 (`<div>`, `<p>`, `<h1>`, 等)：值: `left`, `center`, `right`, `justify`

| 标签                                                         | 说明                                     |
| ------------------------------------------------------------ | ---------------------------------------- |
| <h1></h1>                                                    | 标题标签 范围h1~h6                       |
| <p></p>                                                      | 段落标签                                 |
| <b></b>                                                      | 文字加粗                                 |
| <strong></strong>                                            | 文字加粗                                 |
| <i></i>                                                      | 文字倾斜                                 |
| <u></u>                                                      | 普通带下划线文字标签                     |
| <ins></ins>                                                  | 普通带下划线文字标签                     |
| <sub></sub>                                                  | 下标文字                                 |
| <sup></sup>                                                  | 上标文字                                 |
| <del></del>                                                  | 带删除线                                 |
| <span></span>                                                | 普通文字标签                             |
| <div></div>                                                  | 盒子标签                                 |
| <a href="地址"></a>                                          | 超链接标签，使用id可以跳转到页面指定位置 |
| <img src="地址" alt="加载失败提示语" title="鼠标悬停提示语"/> | 图片插入标签，可设置height,width         |
| `<br/>`                                                      | 换行标签                                 |
| <hr color="" width="宽度%" size="粗细，默认2px" align="水平线位置"/> | 水平线标签                               |
| `&nbsp;`                                                     | 一个空格                                 |
| `&copy;`                                                     | 版权符号&copy;                           |
| `&reg;`                                                      | 商标符号&reg;                            |
| `&yen;`                                                      | 钱&yen;                                  |

### 1.3 列表标签

> 注意：列表会有外边距

```html
<ol type="序列类型 取值：默认(数字) a(小写的英文) A(大写的英文) i(小写的罗马字母) I(大写的罗马字母)">
    <li>有序列表1</li>
    <li>有序列表2</li>
    <li>有序列表3</li>
    <li>有序列表3</li>
</ol>

<ul type="无序类表 取值：disc(实心圆点 默认) circle(空心圆点) (square(实心小方块))" >
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
    <li>无序列表</li>
</ul>

<dl>
    <dt>标题</dt>
    <dd>自定义序列项</dd>
    <dd>自定义序列项</dd>
    <dd>自定义序列项</dd>
    <dd>自定义序列项</dd>
</dl>
```

### 1.4 表格标签

```html
<table>
    <caption>标题标签</caption>
    <tr>//行标签
    	<th>表头便签（自动居中）</th>
    </tr>
    <tr>
        <td>单元标签（内容）</td>
    </tr>
</table>
```

tabel标签属性

| 属性        | 取值                                | 说明             |
| ----------- | ----------------------------------- | ---------------- |
| border      | 像素点(px)为单位取值                | 边框宽度取值     |
| width       | 像素点(px)为单位取值                | 表格宽度取值     |
| bgcolor     | 颜色名称  16进制颜色代码  RGB颜色值 | 背景色取值       |
| bordercolor | 颜色名称  16进制颜色代码  RGB颜色值 | 边框色           |
| cellspacing | 像素点(px)为单位取值                | 单元格之间的距离 |
| cellpadding | 像素点(px)为单位取值                | 文字与边框的距离 |

tr标签属性

| 属性   | 取值                | 说明             |
| ------ | ------------------- | ---------------- |
| align  | left  center  right | 内容水平显示方向 |
| valign | top  middle  bottom | 内容垂直显示方向 |

td标签属性

| 属性    | 取值 | 说明                         |
| ------- | ---- | ---------------------------- |
| colspan | 行数 | 合并行数(从左往右，合并要删) |
| rowspan | 列数 | 合并列数(从上往下，合并要删) |

### 1.5 表单标签

> 表单：用于在页面中搜索用户的数据输入，并且提交给服务器
>
> 三要素：表单控件、提交地址、提交方式

```html
<form>
    <input type=""/>
    <select>//下拉列表框
        <option>选项内容</option>
    </select>
    <textarea>多行文本域</textarea>
    <button type="reset/submit">重置/提交</button>
</form>
<!--label标签：通过for="id"关联表单控件-->
<label for="username">用户名：</label>
<input type="text" id="username"/>
<!--或者直接写在当中-->
<label>用户名：<input type="text"/></label>
```

form标签属性

| 属性         | 取值                 | 说明                               |
| ------------ | -------------------- | ---------------------------------- |
| id           | 自定义               | 唯一标识                           |
| name         | 自定义               | 名称                               |
| action       | 地址                 | 表单提交的地址                     |
| method       | get  post            | 表单提交方式，文件提交需设置为post |
| enctype      | multipart/form-data  | 文件提交需设置                     |
| autocomplete | on(默认值，允许) off | 设置输入框是否显示历史输入         |

input标签属性

| 属性         | 取值                 | 说明                                 |
| ------------ | -------------------- | ------------------------------------ |
| type         | ...                  | 决定这个input的类型                  |
| disabled     | /                    | 禁用该input，可在js中控制true false  |
| checked      | checked              | 按钮默认选中                         |
| id           | 自定义               | 唯一标识不可重复                     |
| size         | 像素点(px)为单位取值 | 针对文本框和密码框而言表示宽度       |
| name         | 自定义               | 元素名称                             |
| value        | 自定义               | 针对框表设置初始值，针对按钮表文本值 |
| maxlength    | 数字                 | 可以输入最大字符数量                 |
| autocomplete | off                  | 使文本框不会显示下拉历史输入         |
| placeholder  | 内容                 | 设置文本框内提示语，输入内容覆盖     |
| readonly     | true                 | 元素设置为只读                       |
| required     | /                    | 表单提交时必须填写                   |
| autocomplete | on(默认值，允许) off | 设置输入框是否显示历史输入           |

属性type取值

| 取值           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| text           | 文本框                                                       |
| password       | 密码框                                                       |
| file           | 文件域                                                       |
| submit         | 提交按钮                                                     |
| reset          | 重置按钮                                                     |
| button         | 普通按钮                                                     |
| radio          | 单选按钮（同组按钮设置相同name，value为后端取值）            |
| checkbox       | 多选按钮（同组按钮设置相同name，value为后端取值）            |
| email          | 邮箱框，会验证邮件的样式                                     |
| url            | 会验证是否符合URL的格式要求                                  |
| number         | 数字输入框，属性：max  min  step(点击切换时的数字间隔)  value |
| range          | 滑动条控件，类似于进度条，属性同number                       |
| color          | 选取颜色，提交时以十六进制颜色代码提交                       |
| data           | 日期选择器：年月日                                           |
| month          | 年 月                                                        |
| week           | 年 周                                                        |
| time           | 时 分                                                        |
| dataTime       | 年月日 时 分 自动选择网络时间                                |
| dataTime-local | 年月日 时 分 自动选择本地时间                                |

select标签属性

| 属性         | 取值                 | 说明                       |
| ------------ | -------------------- | -------------------------- |
| size         | 项数                 | 显示几项                   |
| autocomplete | on(默认值，允许) off | 设置输入框是否显示历史输入 |

option标签属性

| 属性     | 取值   | 说明               |
| -------- | ------ | ------------------ |
| selected | /      | 默认选择           |
| value    | 自定义 | 提交表单时传递的值 |

textarea标签属性

> input属性此处也可用

| 属性         | 取值                        | 说明                       |
| ------------ | --------------------------- | -------------------------- |
| cols         | 像素点(px)为单位取值        | 文本区宽                   |
| rows         | 像素点(px)为单位取值        | 文本区高                   |
| name         | 自定义                      | 表单提交该本文域的名字     |
| wrap         | 默认换行，off表示不自动换行 | 控制文本如何换行           |
| autocomplete | on(默认值，允许) off        | 设置输入框是否显示历史输入 |

### 1.6 媒体标签

音频标签

```html
<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg">
  <source src="audio-file.ogg" type="audio/ogg">
</audio>
```

视频标签

```html
<video width="640" height="360" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
```

| 属性     | 取值                                                         | 说明                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| controls | /                                                            | 显示音频播放控件                                             |
| src      | url地址                                                      | 指定音频视频文件的URL。如果提供多个音频源，应使用`<source>`元素。 |
| autoplay | /                                                            | 页面加载后自动播放音频                                       |
| loop     | /                                                            | 音频播放结束后重新开始                                       |
| muted    | /                                                            | 初始静音                                                     |
| preload  | `auto`（默认），`metadata`（只预加载元数据），和`none`（不预加载） | 指示浏览器如何预加载音频                                     |
| poster   | url地址                                                      | 视频加载前显示的图像                                         |

# 二：CSS笔记

**语法**

	<style>
	    选择器{
	        属性1：值；
	        属性2：值;                   
	     }
	</style>

**css样式放置的位置**

- 一级优先：行间样式(内嵌样式)直接写在标签中<p stype="样式：值"></p>
- 二级优先：内部样式body之前head之后<style></style>标签中
- 三级优先：写在独立的样式文件中 链接外部样式文件<link rel="stylesheet"(表示被链接的文件是样式表文件) href="样式文件地址"/>写在head中

### 2.1 选择器

- 标签选择器：标签名{}

`又称为HTML选择器,是使用标签名称作为选择器,适用于页面中所有的当前标签,选择器定义后自动生效`

- ID选择器：#id名{}

`该样式使用于页面中特定的某个标签名定制外观,当前id="id名",id名称可以自己定义,但是要符合命名规则,样式设置好后不会自动生效,需要设置id的属性才会生效.注意id不能重名.`

- 类选择器：.类名{}

`又称为class选择器,样式使用于当前class="类名"的标签,生效方式与注意事项与ID选择器一致.class可以重名.`

- 上下文选择器:父标签 子标签{}、父标签>子标签{}

`代表父标签下的子标签应用这条样式.前一个为父选择器后一个为子选择器,只有两个条件同时满足才应用样式。没有>表示父标签下所有该子标签，有>表示父标签下第一层的所有子标签.`

- 伪类选择器：顺序:link>visited>hover>active
  - 名:link{}  表示普通状态
  - 名:visited{}  表示被访问过后状态
  - 名:hover{}  表示鼠标悬停状态
  - 名:active{}  表示鼠标激活状态                

- 通配符选择器：*{}

`把样式应用在所有标签中,慎重选用.`

- 群组联合选择器：选择器1,选择器2,选择器3...{}

`样式应用于多个定义相同的样式规则`

### 2.2 常用样式

##### 背景

- width:宽度
- height:高度
- background-color:背景色(单词/十六进制数值/rgb三原色)transparent透明色
- background-image:背景图 url(地址)
- background-repeat:平铺方式:repeat-x横向平铺;repeat-y纵向平铺;no-repeat不平铺
- background-attachment:scroll背景图一起滚动 fixed背景图不滚动;
- background-position: x轴位置 y轴位置;  取值可用像素px或关键字 x轴left/center/right y轴top/center/bottom
- background-size:100% 100%;背景铺开大小 横向 纵向
- 背景缩写 依次提供:颜色 图片是否平铺 滚动方式 起始位置(多个取值之间用空格隔开);
  -  示例:background:pink url(地址) no-repeat fixed 0px 0px;

##### 边框

- border-width:边框宽度 取值以像素为单位/thin(细) medium(正常) thick(加粗);
- border-style: 边框线性 取值 solid(实线) dashed(虚线) dotted(点线) double(双实线) none(无边框);
- border-color: 边框颜色取值;
- 边框简写 依次提供:宽度 线性 颜色;
  -  示例:border:1px solid red;
  - outline: 1px solid red;
  - `页面布局时查看盒子大小的时候可以用这两个属性,border线占位一个像素,outline不占用,所以最好用后者`
- border-collapse: collapse;合并表格边框(table);
- border-单边框-属性:只设置一条边框效果 单边框名为top(上) bottom(下) left(左) right(右);
- border-radius: 设置边框圆角 用百分比/像素(50%或200px是圆) 可单独设一个角,用-连接在中间top bottom left right四选二;`border-top-left-radius: 20px; /* 仅左上角为20px */`
- box-shadow:盒子阴影 四个参数(中间用空格隔开)：[影子整体向右多少px] [影子整体向下多少px] [虚化度(影子多大px)] [影子颜色]
- outline-color: #BCDEF9;设置文本框被选中后的边框颜色,#BCDEF9是一个很好看的颜色

##### 文本

- color:文本的颜色(单词/十六进制数值/rgb三原色);
- text-align: 文本的水平对齐方向 left(居左) center(居中) right(居右) justify(两端对齐);
- text-indent: 首行缩进 取值像素/百分比;
- text-decoration: 添加装饰 none(无装饰) overline(上划线) underline(下划线) line-through(删除线);
- letter-spacing: 字符间距 以像素为单位;
- word-spacing: 段落间距 以像素为单位;
- font-style: 字体样式 取值 italic(斜体) oblique(倾斜);
- font-weight: 字体粗细 设置像素为单位进行取值/normal(正常) bold(粗体) bolder(加粗) lighter(较细的);
- font-size: 字体尺寸 取值以像素为单位;
- font-family: 字体类型;
- font简写依次提供 样式 粗细 尺寸 类型;
- line-height: 设置文本块行高 取值 像素/百分比;

##### 列表

- list-style:none;去掉标记
- list-style-position:设置列表标记位置 取值:outsid(列表区域外边) inside(列表区域里边)就像是第一个字符;
- ist-style-type:设置列表的标记类型 
  - disc(实心圆点) circle(空心圆点) square(实心小方块) dcimal(阿拉伯数字);      
  -  lower-roman(小写英文字母) upper-roman(大写英文字母) lower-alpha(小写希腊字母) upper-alpha(大写希腊字母);
- list-style-image:将图像设为列表标记,也可以设为none;
- 列表简写 依次提供 类型 图像 list-style:   ;

##### 其他

- visibility:设置元素的可见性 取值:visible(显示,默认) hidden(隐藏)(留位置);`collapse`通常用于表格元素中，用于隐藏整行或整列
- cursor:设置元素上方光标的样式 常用的值:help(帮助) move(移动) wait(等待) pointer(手指指针);
- padding: 0px; 内边距 取值以像素为单位，可单独设置一边,使用-left/-right/-top/-botton
- margin:0px; 外边距,规则同padding，值为auto时div盒子自动横向居中,大于50px尽量不用,可用外边距
- z-index: 改变层叠顺序，数值越大越靠前，数值越小越靠后可以为负数
- opacity：设置透明度;
- overflow:溢出处理 hidden(隐蔽溢出部分)scroll(以滚动条方式显示)auto(自动当有溢出显示滚动条);

### 2.3 display属性

> `display` 属性是 CSS 中用于定义一个元素的显示行为的属性。它决定了元素在页面上的布局方式以及它是否生成一个框。不同的 `display` 值可以影响元素的显示方式和布局特性。

##### 属性值

- lnlie(内联元素)
- block(块级元素) 
- lnlie-block(内联块)
- none(不显示)(不留位置)，即隐藏
- flex：元素成为弹性容器，可以使用 Flexbox(弹性) 布局模式。默认row模式

##### 显示类型

块级元素：`<div>` `<p>` `<h1>` 到 `<h6>`  `<ul>`, `<ol>`, `<li>`  `<table>` `<header>`, `<footer>`, `<section>`, `<article>`

内联元素：`<span>`  `<a>`  `<strong>`  `<em>`  `<img>`  `<br>`

内联快元素：`<img>` 

布局行为

- 块级元素: 占据父容器的整个宽度，从新的一行开始。
- 内联元素: 只占据自身内容的宽度，不会换行。
- 内联块元素: 像内联元素一样排列，但可以设置宽高，且它们之间有空白。

宽度和高度

- 块级元素: 可以设置宽度和高度。
- 内联元素: 无法设置宽度和高度。
- 内联块元素: 可以设置宽度和高度。

包含内容

- 块级元素: 可以包含其他块级元素和内联元素。
- 内联元素: 只能包含内联元素或文本。
- 内联块元素: 可以包含内联元素和内容，但不能包含块级元素。

###  2.4 弹性布局

> 采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。

> 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

> 项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

![1504491454-0](https://s2.loli.net/2024/05/27/EOV2Ljm9gS8pQRB.gif)

[CSDN详解](https://blog.csdn.net/qq_51489068/article/details/127862085)，以下属性搭配display: flex;使用

  弹性布局中的属性

	1、flex-direction

用来决定主轴的方向（即项目的排列方向），属性的可选值如下：

| ------------------- | ------------------------------ |
| row                 | 默认值，主轴沿水平方向从左到右 |
| row-reverse（反转） | 主轴沿水平方向从右到左         |
| column              | 主轴沿垂直方向从上到下         |
| column-reverse      | 主轴沿垂直方向从下到上         |

	2、flex-wrap   

默认项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行

| ------------ | -------------------------------------------- |
| nowrap       | 默认值，表示项目不会换行                     |
| wrap         | 表示项目会在需要时换行                       |
| wrap-reverse | 表示项目会在需要时换行，但是辅轴的会发生反向 |

	3、justify-content

设置弹性盒子中元素在主轴方向上空白空间的分布方式，即定义了项目在主轴上的对齐方式

| 值            | 描述                                         |
| ------------- | -------------------------------------------- |
| flex-start    | 默认值，左对齐                               |
| flex-end      | 右对齐                                       |
| center        | 居中                                         |
| space-between | 两端对齐，空白均匀分布到元素的中间           |
| space-around  | 空白分布在元素两侧，但是中间的空白比两边更大 |
| space-evenly  | 空白分布在元素的单侧（每一边的距离一样）     |

```
4、align-items	定义项目在交叉轴上如何对齐
```

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。


	5、align-content  类似于对齐，但不是交叉轴的对齐方式

设置弹性盒子中元素在交叉轴方向上空白空间的分布方式，一般用在多行操作时

| ------------- | ------------------------------------------------------------ |
| stretch       | 默认值，no-wrap时，项目在竖直方向将被拉伸以适合容器，但是项目设置了height则无效
注意，wrap换行时，上对齐，并且行间距会等距留白 |
| center        | 与交叉轴的中点对齐。 |
| flex-start    | 上对齐                                                       |
| flex-end      | 下对齐                                                       |
| space-between | 上下同时对齐，不留白，项目之间空白均匀分布                   |
| space-around  | 空白分布在元素上下，但是中间的空白比两边更大                 |

### 2.5 浮动

> 浮动属性是CSS中的一个定位属性，它允许元素脱离文档流，并向左或向右移动，直到它的外边缘碰到包含框或者另一个浮动元素的边缘。简单来说，它就像是让元素“漂浮”在页面上，不受常规排列规则的限制。

注意：

1. 多层浮动可用z-index设置上下层
2. 设置浮动后即使是块级元素但是仍不换行（原先div会独占一行）
3. 层级为0.5
4. 开启浮动后就没有从上到下的规则，left：先加载的先在左，从左到右：right反之

属性：float

属性值：

- none：这是默认值，元素不会浮动，即保持在标准文档流中的位置。
- left：元素将向左浮动，它会尽量向左移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
- right：元素将向右浮动，它会尽量向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

### 2.6 定位

> 必须结合：top | bottom | left | right属性一起使用 ，属性值取以px为单位数字

1 **position:static;**	默认定位，此状态下没有参照物，系统默认的，可以省略不写

2 **position:relative;**	相对定位，此状态下以自身作为参照物

注意

- 使用相对定位，书写的方向和移动的方向刚好相反(上下左右是相反的)
- 使用相对定位，会保留原本的位置空间，且移动后的位置也不占空间

补充：使用相对定位就相当于原来位置保留原有空间，元素向上浮动一层，移动会覆盖原本层级为0的元素

3 **position:absolute;**	绝对定位，此状态下以父级元素作为参照物

- 当父级元素不是默认定位时：父级有资格成为参照物

- 当父级元素是默认定位时：父级没有资格成为参照物

  就近原则，如果所有的祖先元素都是默认定位，则以最终的包含块（body）作为参照物

注意：使用绝对定位时，不会保留原本的位置空间

4 **position:fixed;**	固定定位，不会随着页面的滚动而滚动，此状态下以浏览器窗口作为参照物（一般用于右下角小广告）

**重点**：
所有非默认定位都发生了层级的改变，默认为层级1
如果非默认定位的元素在同一个层级相互覆盖，则后加载的优先显示
如果需要先加载的优先显示，则设置**z-index:99;**

### 2.9 CSS3

![image-20240527184137894](https://s2.loli.net/2024/05/27/82puqEOUmfs3wXb.png)
