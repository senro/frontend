/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { Navigation } from './navigation';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  /*todo 为了解决样式隔离问题就，引入一个新概念ViewEncapsulation，多了需要学习的点，感觉完全没有必要
  * 本可以简单的通过样式写法解决*/
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'//todo 需要自己去维护引入哪个样式，多余
  ],
  /*todo ts文件，如果编辑器没有解析typscript的插件代码就没法看了，全是报红，据说只有VS支持的很好，其他IDE
  * 部分有插件*/
  template: `
    <Navigation></Navigation>
    <main>

    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
  `
})
/*todo 模板语法过于复杂，各种符号，各种规则，各种语法，感觉完全没必要搞这么复杂，为了一个逻辑渲染感觉引入太多东西*/
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
