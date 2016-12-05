import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Navs } from './navigation.service';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'Navigation',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
      Navs
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './navigation.component.less' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './navigation.component.html'
})
export class Navigation {
  // Set our default values
  test="test";
  localState = { value: '' };
  navs= [];

  // TypeScript public modifiers
  constructor(public appState: AppState, public Navs: Navs) {
      console.log(Navs.getData());
      this.navs=Navs.getData().value;
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
