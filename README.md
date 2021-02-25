<h1 align="center">Welcome to dp-react-mobile 👋</h1>

## 安装

```sh
yarn add dp-react-mobile -S
```

## Slider组件使用说明

```sh
import { Slider } from 'dp-react-mobile'

<Slider bannerList={bannerList} />
```

| 参数               | 类型                                 | 说明          | 默认值   |
|------------------|------------------------------------|-------------|-------|
| isLoop           | boolean                            | 非必传-是否循环轮播图     | true  |
| isAuto           | boolean                            | 非必传-是否自动轮播      | false |
| isShowPagination | boolean                            | 非必传-是否显示分页器     | true  |
| isShowPageNumber | boolean                            | 非必传-是否右下角显示分页数量 | false |
| bannerList       | [{ imgUrl: string, url: string }]  | 必传-轮播列表数据        | []    |
| fieldNames       | {{ imgUrl: string, url: string }}  | 非必传-自定义参数名称    | {}    |
| height           | string                             | 非必传-设置高度         | 'auto'  |
| borderRadius     | string                             | 非必传-设置圆角         | 'none'  |
| spaceBetween     | number                             | 非必传-设置轮播图间距    | 0  |
| onClick          | (item) => {}                        | 非必传-自定义点击跳转    |    |


## Ellipsis组件使用说明

```
import { Ellipsis } from 'dp-react-mobile'

<Ellipsis type="multiple" rows={2}>测试内容</Ellipsis>
```

| 参数   | 类型     | 说明                    | 默认值    |
|------|--------|-----------------------|--------|
| type | string | single 单行 multiple 多行 | single |
| rows | number | 多行数量                  | 3      |

## Author

👤 **zhanghj**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_