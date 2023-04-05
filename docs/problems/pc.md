# PC问题汇总

## 官网快速变灰

无需替换灰色的图片，只需要使用filter属性即可：

```css
html {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  filter: gray;
}
```