# WUZHUI 使用手册

## JS 的引用

**常规引用**

```html
<script type="text/javascript" src="js/wuzhui.js"></script>
```

**使用 requirejs 加载**

```js
requirejs(['js/wuzhui.js'])
```

## 特点

1. 简洁，易于使用，并且具有良好的语法提示，上手迅速
1. 轻量级，零依赖，易于与第三方框架配合使用
1. 基于 MVC 模式设计，视图与数据分离，易于扩展

## 示例

### GridView 的使用

1. [数据的显示](#gridView/data_read)
1. [数据的分页](#gridView/data_paging)
1. [数据的排序](#gridView/sort)
1. [设置列的样式](#gridView/style)
1. [数据格式化](#gridView/data_format)
1. [数据的增删改](#gridView/data_adu)
1. [分页栏样式](#numberPagingBar/style)
1. [隐藏总记录](#numberPagingBar/hideTotal)

### NumberPagingBar 的使用

1. [创建分页栏](#numberPagingBar/createPagingBar)
1. [包装按钮](#numberPagingBar/buttonWrapper)

### DataSource 的使用

1. [DataSource 概述](#dataSource/summary)
1. [使用数据源更新数据](#gridView/dsUpdate)
1. [使用数据源添加数据](#gridView/dsInsert)
1. [使用数据源删除数据](#gridView/dsDelete)
1. [使用数据源分页数据](#gridView/dsPaging)
1. [数据源数据的过滤](#dataSource/filter)
1. [多视图共享数据源](#dataSource/mutilView)

    #### 数据源事件的引发

    1. [引发更新事件](#dataSource/fireUpdate)
    1. [引发插入事件](#dataSource/fireInsert)
    1. [引发删除事件](#dataSource/fireDelete)
    1. [引发选择事件](#dataSource/fireSelect)

### 列的使用

1. [使用数据绑定列](#column/boundField)

    #### 重写数据绑定列

    1. [实现勾选框列](#column/checkboxField)
    1. 实现日期列

1. [自定义列的使用](#column/customField)

    1. [使用 GridViewDataCell（一）](#column/gridViewDataCell)
    1. [使用 GridViewDataCell（二）](#column/gridViewDataCell1)

### API

1. [GridView](#api/gridView)
1. [DataSource](#api/dataSource)
1. [BoundField](#api/boundField)
1. CommandField
1. CustomField

<hr/>





