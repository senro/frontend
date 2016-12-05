
webpack的文件监听功能感觉太占资源，打开一会儿电脑就卡的不行，并且编译速度略慢，感觉是一个一个文件编译，还输出一些没啥用的日志。

webapck编译很慢，也没有缓存机制，每次每个文件都是重新编译，并且也不够智能，改完webpack的配置也不会自动重新编译。

webpack和相关常用插件的文档感觉更新很不及时，比如常用的less编译，less-loader[https://github.com/webpack/less-loader],github上
文档写的webpack配置是：
```
module.exports = {
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  }
};
```
但实际最新版的webpack，loaders配置已经变成了rules，里面的loader也变成了use,"style-loader!css-loader!less-loader"这样的语法也已经
改成了数组形式。去网上查资料也很难找到最新版的配置，还是自己根据规则推测出的下面配置，这个过程会浪费不少时间。
```
module.exports = {
  module: {
    rules: [
		{
		    test: /\.less$/,
		    use: ['to-string-loader',"css-loader","less-loader"]
 		}
    ]
  }
};
```