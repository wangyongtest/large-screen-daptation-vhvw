<!--
 * @Author: wy
 * @Date: 2024-03-10 20:57:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-21 22:53:58
 * @Description: 描述
-->
## 假设设计稿尺寸为 1920*1080（做之前一定问清楚 ui 设计稿的尺寸）

即：
网页宽度=1920px
网页高度=1080px

我们都知道
网页宽度=100vw
网页宽度=100vh

所以，在 1920px*1080px 的屏幕分辨率下

1920px = 100vw

1080px = 100vh

这样一来，以一个宽 300px 和 200px 的 div 来说，其所占的宽高，以 vw 和 vh 为单位，计算方式如下:

vwDiv = (300px / 1920px ) * 100vw
vhDiv = (200px / 1080px ) * 100vh

所以，就在 1920*1080 的屏幕分辨率下，计算出了单个 div 的宽高

当屏幕放大或者缩小时，div 还是以 vw 和 vh 作为宽高的，就会自动适应不同分辨率的屏幕



## echarts 这里作为公共组件，仅需要传options
注意事项: 生成 options 必须为函数，再 窗口变化时才重新调用，重新赋值 options参数，否则 echarts 中文字不会随窗口变化而变化