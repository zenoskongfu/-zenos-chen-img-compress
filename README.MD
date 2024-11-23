# @zenos-chen/img-compress

这是一个图片压缩cli工具，用来实现最简单的压缩功能。

## 使用
1. 全局安装
```
npm i @zenos-chen/img-compress -g
```

2. 开始压缩
   
```shell
img-compress ./test.png
```

在命令行中输入img-compress，然后指定一个需要被压缩的图片 test.png。
回车。
在当前路径中，就会生成一个压缩图片test-low.png

## 参数

### [...args]

支持直接列出需要被压缩的图片，生成图片的名称，以及压缩倍率

```
img-compress test.png testLow.png 0.5
```

上面命令的效果是：指定被压缩的图片为test.png, 压缩之后的图片名称为testLow.png,压缩倍率是0.5，也就是压缩成原来体积的 1/2

> 如果只指定被压缩的图片，压缩后的图片名称默认为 test-low.png。压缩倍率默认是 0.1

### -i

指定被压缩的图片
```
img-compress -i test.png testLow.png 0.5

img-compress  testLow.png 0.5 -i test.png

img-compress  testLow.png -i test.png 0.5 
```

### -o

指定压缩之后的图片名称

```
img-compress test.png -o testLow.png 0.5
```

### -r

指定压缩倍率
```
img-compress  -r 0.5 test.png  testLow.png 
```

> 只要保证 img-compress 中默认参数的顺序，具名参数的顺序无所谓