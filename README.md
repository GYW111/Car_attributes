<a name="Car_attributes"></a>
# Car_attributes
<a name="oQyez"></a>
####                                                说明
1.项目的请求根路径为 [http://localhost:3000](http://localhost:3000/api/)<br />2.以/api开头的请求路径，不需要访问权限

<a name="PNTTd"></a>
##                             获取汽车列表

获取汽车列表
<a name="KXSuM"></a>
#### 请求URL：
/api/car
<a name="Ji3W3"></a>
#### 请求方式：
GET
<a name="CcBRM"></a>
#### 参数：
无
<a name="bjosM"></a>
#### 返回示例

```javascript
{
    code: 200,
    msg:'获取成功',
    list:[
        {
            idcard: '1',
            brand: '奥迪',
            model: 'A4',
            year: '2019',
            color: '黑色',
            thumbnail: 'https://img1.baidu.com/it/u=1054209633,2776264710&fm=26&fmt=auto&gp=0.jpg',
            createTime: '2021-04-01',
            updateTime: '2021-04-01',
            deleteTime: '2021-04-01'
        },{
            idcard: '2',
            brand: '奔驰',
            model: 'C200',
            year: '2019',
            color: '黑色',
            thumbnail: 'https://img1.baidu.com/it/u=1054209633,2776264710&fm=26&fmt=auto&gp=0.jpg',
            createTime: '2021-04-01',
            updateTime: '2021-04-01',
            deleteTime: '2021-04-01'
        }
    ]
}
```
<a name="XYscY"></a>
## 新增汽车
<a name="cSXkn"></a>
#### 简要描述
新增汽车
<a name="lDbyb"></a>
#### 请求URL
[http://localhost:3000/api/add](http://localhost:3000/api/add)
<a name="VH53w"></a>
#### 请求方式：
POST
<a name="l6J6M"></a>
#### 请求体：

| 参数名 | 必选 | 类型 |
| --- | --- | --- |
| id | 是 | number |

<a name="SBoIl"></a>
#### 返回示例

```javascript
{
	code:200,
  msg:'新增成功',
  id:003
}
```
<a name="tlo0P"></a>
## 根据id删除汽车
<a name="t3hOu"></a>
#### 简要概述：
根据id删除汽车
<a name="Fb754"></a>
#### 请求URL：
[http://localhost:3000/api/del](http://localhost:3000/api/del):id
<a name="bXYzE"></a>
#### 请求方式：
GET
<a name="udbS7"></a>
#### URL参数：

| 参数名 | 必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | 是 | string | 要删除的分类 Id，注意：这是一个URL参数 |

<a name="dGXsw"></a>
#### 返回示例

```javascript
{
	code:200,
  msg:'删除成功',
}
```
<a name="T4soX"></a>
## 获取汽车详情
<a name="P4hhr"></a>
#### 简要概述：
根据id获取汽车详情
<a name="aG2hO"></a>
#### 请求URL：
[http://localhost:3000/api/details](http://localhost:3000/api/details):id
<a name="aSDkU"></a>
#### 请求方式：
GET
<a name="qw8GW"></a>
#### URL参数：
| 参数名 | 必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | 是 | string | 要删除的分类 Id，注意：这是一个URL参数 |

<a name="D2c5Y"></a>
#### 返回示例

```javascript
{
	code:200,
  msg:'获取成功',
  data:{
            idcard: '2',
            brand: '奔驰',
            model: 'C200',
            year: '2019',
            color: '黑色',
            thumbnail: 'https://img1.baidu.com/it/u=1054209633,2776264710&fm=26&fmt=auto&gp=0.jpg',
            createTime: '2021-04-01',
            updateTime: '2021-04-01',
            deleteTime: '2021-04-01'
        }
}
```
<a name="oQO2h"></a>
## 修改汽车
<a name="rtTFk"></a>
#### 简要概述：
根据id修改汽车
<a name="tBDoY"></a>
#### 请求URL：
[http://localhost:3000/api/modify:id](http://localhost:3000/api/modify:id)
<a name="Wuxj8"></a>
#### 请求方式：
PUT
<a name="YZekh"></a>
#### URL参数：
| 参数名 | 必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | 是 | string | 要删除的分类 Id，注意：这是一个URL参数 |

<a name="ZJJt1"></a>
#### 请求体：

| 参数名 | 必选 | 类型 |
| --- | --- | --- |
| id | 是 | string |
| name | 是 | string |

<a name="R5fYx"></a>
#### 返回示例

```javascript
{
	code:200,
  msg:'修改成功',
}
```
