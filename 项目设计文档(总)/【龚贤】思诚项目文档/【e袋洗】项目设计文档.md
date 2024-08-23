# 项目设计文档

## e袋洗

### 项目背景描述

> e袋洗移动互联网智能洗护平台，e袋洗为用户提供全新概念的智能洗护模式。用户可通过移动终端（微信公众号、APP等）下单，由专业取送人员提供上门取送服务，按袋或按件计费，衣物会经过15道严格的专业清洗工序，订单状态实时可查。 e袋洗业务已经拓展到洗衣、洗鞋、洗家纺、洗窗帘、奢侈品养护、高端成衣家纺洗护等多个品类。

### 模块一：服务类别

#### 业务描述

登陆系统后选择服务类别管理可以在线管理服务类别，可以查看、删除、审核、排序、修改和新增服务类别，服务类别支持无限级分类。一级分类有专业清洗、高级洗护和深度洗护。专业清洗下二级分类又分洗衣、洗鞋、洗家纺和窗帘用品。高级洗护下分奢侈品养护和高端成衣家纺。深度洗护下有家居清洁和除尘除螨。系统后端对服务类别进行更新后，前端可以实时查询出最新结果。

#### 项目截图

![image-20230821091304516](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230821091304516.png?x-oss-process=style/gongxian)





#### 流程图

![image-20230729162036610](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230729162036610.png?x-oss-process=style/gongxian)

#### 表设计

##### 服务类别表：t_service_category

|    id    | parent_id |   name   |  thumb  | order    | create_time | last_update_time | creator | last_updator |
| :------: | :-------: | :------: | :-----: | -------- | :---------: | :--------------: | ------- | ------------ |
| 自增主键 |   父id    | 服务名称 | 缩略图  | 排序序号 |  创建时间   |   最后修改时间   | 创建人  | 最后修改人   |
|  bigint  |    int    | varchar  | varchar | int      |  datetime   |     datetime     | bigint  | bigint       |



### 模块二：注册登陆

#### 业务描述

e袋洗是一个洗护平台，可以在线下单然后提供相应的服务，所以需要提供会员服务功能。游客到访本站后，可以先注册成为本站会员，注册方式可以通过手机号发送短信验证码并设置登陆密码的方式进行快捷注册。注册成功后，便可以开始登陆会员进入会员中心，然后可以下单了。如果登陆过程中忘记了密码，也可以通过忘记密码功能找回密码。

#### 项目截图

![image-20230821091221272](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230821091221272.png?x-oss-process=style/gongxian)



#### 流程图

![image-20230730142329871](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230730142329871.png?x-oss-process=style/gongxian)

#### 表结构

##### 会员表：t_user

|    id    | username | password | section_id | gender  | mobile  | nickname | email   | status  | create_time | last_update_time | creator | last_updator |
| :------: | :------: | :------: | :--------: | ------- | ------- | -------- | ------- | ------- | :---------: | :--------------: | ------- | ------------ |
| 自增主键 |  用户名  |   密码   |   所属组   | 性别    | 手机号  | 昵称     | 邮箱    | 状态    |  创建时间   |   最后修改时间   | 创建人  | 最后修改人   |
|  bigint  | varchar  | varchar  |   bigint   | varchar | varchar | varchar  | varchar | tinyint |  datetime   |     datetime     | bigint  | bigint       |



### 模块三：服务管理

#### 业务描述

登陆系统后选择服务管理可以在线管理服务，可以查看、删除、审核、修改和新增服务，新增服务时选择所属的服务类别，然后添加服务信息，比如大类选择专业清洗，子类选择洗衣。然后输入服务标题比如西服上衣，上传西服上衣的略图，输入西服上衣报价，服务次数上限和服务单价，完成后提交即可。

前台访客需要登陆后才能在线下单，登陆后选择服务类别，然后选择你想要的服务单价加入购物车。

##### 项目截图

![image-20230821123113390](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230821123113390.png?x-oss-process=style/gongxian)



#### 流程图

![image-20230730160310905](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230730160310905.png?x-oss-process=style/gongxian)

#### 表结构

##### 服务表：t_service

|    id    | category_id |   name   |  thumb   | price    | total    | status  | create_time | last_update_time | creator | last_updator |
| :------: | :---------: | :------: | :------: | -------- | -------- | ------- | :---------: | :--------------: | ------- | ------------ |
| 自增主键 |  所属类别   | 服务名称 | 服务缩图 | 服务单价 | 服务总数 | 状态    |  创建时间   |   最后修改时间   | 创建人  | 最后修改人   |
|  bigint  |   bigint    | varchar  |  bigint  | float    | int      | tinyint |  datetime   |     datetime     | bigint  | bigint       |

> 表中category_id是外键，是服务和服务类别是一对一的关系，即一个服务对应一个服务类别，一个服务类别可以对应多个服务。

### 模块四：购物车模块

#### 业务描述

用户在服务中心页面选择服务类别，选择自己所需的服务，单击购物车小图标，首先会检测是否已经已经登陆，如果没有登陆会跳转到登陆页面，如果没有注册会员，会提示先注册会员。如果已经登陆过，会先判断购物车中是否包含此商品？如果包含此商品则直接修改购物车中的对应商品的数量，如果不存在此商品则将改商品添加到购物车中。在购物车页面中可以对购物车中的服务进行清空、移除单个服务、修改服务数量以及统计小计和总金额。

#### 项目截图

![image-20230821091116776](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230821091116776.png?x-oss-process=style/gongxian)

![image-20230821091141036](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230821091141036.png?x-oss-process=style/gongxian)

#### 流程图

![image-20230730165239034](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230730165239034.png?x-oss-process=style/gongxian)

![image-20230730170305754](http://gx-uploader.oss-cn-hangzhou.aliyuncs.com/uploads/image-20230730170305754.png?x-oss-process=style/gongxian)



#### 表结构

##### 购物车表：t_shopping_cart

|    id    | user_id    |   name   |  thumb   |  price   | num      | total    | create_time |
| :------: | ---------- | :------: | :------: | :------: | -------- | -------- | :---------: |
| 自增主键 | 所属用户ID | 服务名称 | 服务缩图 | 服务单价 | 服务次数 | 服务总数 |  创建时间   |
|  bigint  | bigint     |  bigint  | varchar  |  bigint  | int      | int      |  datetime   |

> 表中user_id是外键用来识别是那个具体用户的购物车，一个用户只能一个购物车