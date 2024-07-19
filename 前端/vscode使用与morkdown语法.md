# html基础知识

## vscode工具

前端开发非常流行的ide工具，免费开源

### 打开文件

#### 拖拽打开

选中你的文件夹，然后拖拽到vscode的桌面图标上即可打开这个文件夹

#### 菜单打开

选择文件 菜单 > 打开文件夹

### 代码格式化

#### tab 往右缩进

#### shift + tab 往左回退

#### 设置一个tab键等于2个空格

![image-20231017145007293](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20231017145007293.png?x-oss-process=style/gongxian)

#### 键盘快捷键设置

1. 找到菜单  文件 >  首选项 > 键盘快捷方式设置

2. 在键盘快捷方式中搜索大写和小写设置处

   ![image-20231017145519444](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20231017145519444.png?x-oss-process=style/gongxian)

3. 可以设置转换大写快捷键为 ctrl + alt + U，小写的快捷键是 ctrl + alt + L

#### shift + alt + ↓ 快速复制上一行

#### ctrl+f 搜索

#### ctrl+h 批量搜索替换

#### 多光标修改

首先选中你要修改的文本，然后按ctrl+D产生光标，不断的按ctrl+D产生很多的光标，然后再直接输入文本即可替换掉光标闪烁的文本

### 代码快写

当按tab键不能实现快写，那么请按`ctrl+i`激活快写菜单，然后回车即可

#### 输入div，按tab

```html
<div></div>
```

#### 输入div.red，按tab

```html
<div class="red"></div>
```

#### 输入div#box，按tab

```html
<div id="box"></div>
```

#### 输入div#box.red，按tab

```html
<div id="box" class="red"></div>
```

#### 输入div[name="box"]，按tab

```html
<div name="box"></div>
```

#### 输入`div[name="box"][title="气泡"]`，按tab

```html
<div name="box" title="气泡"></div>
```

#### 综合上面的练习

##### 输入 `a#link.red[href="#"][title="我是连接"]`，按tab

```html
<a id="link" href="#" class="red" title="我是连接"></a>
```

#### 输入div{文本}，按tab

```html
<div>文本</div>
```

#### 输入 ul>li{项目1}，按tab

```html
<ul>
  <li>项目1</li>
</ul>
```

#### 输入ul#box>li.red[title="abc"]{项目1}，按tab

```html
<ul id="box">
  <li class="red" title="abc">项目1</li>
</ul>
```

#### 输入p*3，按tab

```html
<p></p>
<p></p>
<p></p>
```

#### 输入p*3{段落$}，按tab

```html
<p>段落1</p>
<p>段落2</p>
<p>段落3</p>
```

#### 输入ul#nav>li.item*3{项目列表$}，按tab

```html
<ul id="nav">
  <li class="item">项目列表1</li>
  <li class="item">项目列表2</li>
  <li class="item">项目列表3</li>
</ul>
```

#### 输入div[name="box"]>p.red>span*3{文本$}，按tab

```html
<div name="box">
  <p class="red">
    <span>文本1</span>
    <span>文本2</span>
    <span>文本3</span>
  </p>
</div>
```

#### 输入 h${标题$}*6，按tab

```html
<h1>标题1</h1>
<h2>标题2</h2>
<h3>标题3</h3>
<h4>标题4</h4>
<h5>标题5</h5>
<h6>标题6</h6>
```

#### 输入 h2{标题}+p{段落}，按tab

```html
<h2>标题</h2>
<p>段落</p>
```

#### 输入(h2{标题}+p{段落})*3，按tab

```html
<h2>标题</h2>
<p>段落</p>
<h2>标题</h2>
<p>段落</p>
<h2>标题</h2>
<p>段落</p>
```

#### 输入div#faq>(h2{常见问题}+dl.list>(dt{问题$}+dd{答案$})*4)，按tab

```html
<div id="faq">
  <h2>常见问题</h2>
  <dl class="list">
    <dt>问题1</dt>
    <dd>答案1</dd>
    <dt>问题2</dt>
    <dd>答案2</dd>
    <dt>问题3</dt>
    <dd>答案3</dd>
    <dt>问题4</dt>
    <dd>答案4</dd>
  </dl>
</div>
```

#### 输入 ul>li{列表$}*10，按tab

```
<ul>
  <li>列表01</li>
  <li>列表02</li>
  <li>列表03</li>
  <li>列表04</li>
  <li>列表05</li>
  <li>列表06</li>
  <li>列表07</li>
  <li>列表08</li>
  <li>列表09</li>
  <li>列表10</li>
</ul>
```

### markdown 语法

#### markdown 特点

1. 沉浸式写作 
2. 轻量级写作
3. 自述文件（readme.md）
4. 扩展名 .md
5. 在vscode中预览快捷键 `ctrl + shift + v`

#### mardown 命令

##### 标题

在开头输入# 然后注意#和文字要有一个空格，输入完毕之后如果是Typora按回车，如果是VS Code按ctrl + shift + v预览

```markdown
# 标题1
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6
```

##### 加粗

使用`**`包围文本即可实现加粗效果

```markdown
我是**加粗**的文本
```

##### 倾斜

使用`*`包围文本即可实现倾斜效果

```markdown
我是*倾斜*的文本
```

##### 加粗倾斜

使用`***`包围文本即可实现加粗并倾斜效果

```markdown
***加粗并倾斜***
```

##### 中划线

使用两个飘号 `~~`(tab键上面的键)

```markdown
原价~~999~~
```

##### 分割线

使用`***`或者`---`实现分割线

##### 链接

可以写超级链接，语法如下

```markdown
[链接名称](链接网址)

[百度](http://www.baidu.com)
```

##### 图片

在文档中插入图片，语法如下

```markdown
![图片的名称](图片的地址)
![百度LOGO](https://www.baidu.com/img/flexible/logo/pc/result.png)
```

图片的名称不是必填的，可以不写。

##### 引用

使用大于号 `>`实现

###### 单行的效果

```markdown
> 生活的理想，就是为了理想的生活
```

###### 嵌套的效果

```markdown
> aaaaa
>> bbbb
>>> ccc
```

![image-20231017165027504](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20231017165027504.png?x-oss-process=style/gongxian)

![1697538113280](assets/1697538113280.png)