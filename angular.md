
Router -------- 显示活动链接的应用程序组件。从一个组件管理导航到下一个组件。

@RouteConfig-----通过配置RouteDefinition路由，每个URL路径对应一个组件。

RouteDefinition---定义路由器应该如何导航到一个组件上的网址模式。

RouterOutlet--- 定义路由地址返回结果显示在哪儿，使用指令：<router-outlet></router-outlet>。

RouterLink----结合一个可点击的HTML元素的链接提示。点击一个routerlink指令绑定到一个链路参数阵列触发导航链接标签。

Link Parameters Array----一组路由指令。我们可以把一个routerlink放到一个数组中作为参数传递给方法的router.navigate。

Routing Component---配置了路由表的组件

-----------------------------------------------------

webpack 编译通过了，但是angular2页面报错也追踪不了到底具体是哪个文件报错，只能靠猜，有点无语。
webpack 文件监听太慢,改一个文件居然要等3~4sec才能看见效果
-----------------------------------------------------
angular 2
组件嵌套居然要导入两遍,先import进去组件,然后再在components里的directives属性里注入一遍（因为组件实质也是指令）,太麻烦了.
这里设计得没有react好，react的组件是可以直接用的,这种设计在我看来就是为了解决自己本身库的实现问题,从而牺牲用户体验.

angular2 项目webpack 编译通过了，但是页面报错也追踪不了到底具体是哪个文件报错，只能靠猜，只有部分错误有错误提示，
有点无语。

angular2 ngFor、ngIf等,指令是驼峰命名了。

angular2 引入组件需要在module的文件开头import声明一遍，然后还得在declarations属性里再传入一遍，很无语，非得要套个
什么依赖注入的概念，报错了也不告诉你哪里出错了，只能靠猜。最让人无语的一点是，组件里的selector居然就是引入标签的
标签名，也就是这两个东西还是强相关，跟组件export 出来的东西还没有关系，也就是我要引入一个组件我还得打开组件的代码
查看组件里selector定义的是啥名字....

angular2 的模板语法里，标签属性居然不能自定义有大写的名字，不然就报template error，比如：
```
<span data-userName="{{item.username}}">
```
这样的模板就不行，必须改成小写：
```
<span data-username="{{item.username}}">
```
这样就可以了，不知道为什么要这样设计,也没在文档中找到相应的说明。

angular2 分页插件ng2-pagination

