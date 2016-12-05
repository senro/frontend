import { Component } from '@angular/core';

import { AppState } from '../../app.service';
import { service } from './userDetail.service';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'userDetail',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
      service
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './userDetail.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './userDetail.component.html'
})
export class userDetail {
  // Set our default values
  test="test";
  localState = { value: '' };
  model = {
        ui:{
          editType:'新增'
        },
        data:{
            id:'',
            account:'',
            username: '',
            password: '',
            rePassword:'',
            status: true
        }
  };

  // TypeScript public modifiers
  constructor(public appState: AppState, public service: service) {
      console.log(service.getData());
      this.model.data=service.getData().data;
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
