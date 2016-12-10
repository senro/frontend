import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { lists } from './userManage.service';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'userManage',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
      lists
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './userManage.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './userManage.component.html'
})

export class userManage {
  // Set our default values
  paginateConfig={
        id: 'advanced',
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: 35
  };

  data={
       "content": [
         {
           "id": "1",
           "account": "dongdong.yu@payegis.com",
           "username": "高强强",
           "status": 1,
           "editTime": "2016-12-29  13:00"
         }
       ,
         {
           "id": "2",
           "account": "dongdong.yu@payegis.com",
           "username": "高强强",
           "status": 0,
           "editTime": "2016-12-29  13:00"
         }
         ,
          {
           "id": "3",
           "account": "dongdong.yu@payegis.com",
           "username": "高强强",
           "status": 1,
           "editTime": "2016-12-29  13:00"
         }
       ,
         {
           "id": "4",
           "account": "dongdong.yu@payegis.com",
           "username": "高强强",
           "status": 0,
           "editTime": "2016-12-29  13:00"
         }
        ],
        "size":"3",
       "number":"1",
       "totalElements":"4",
       "totalPages":"2",
       "firstPage":"true",
       "lastPage":"true"
      };

  // TypeScript public modifiers
  constructor(public appState: AppState, public lists: lists) {
      console.log(lists.getData());
      this.data=lists.getData().data;
      this.paginateConfig.currentPage=this.data.number;
      this.paginateConfig.totalItems=this.data.totalElements;
  }

  ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }

  pageChanged(number){
     this.paginateConfig.currentPage = number;
     console.log('ajax send new page number:'+number);
     setTimeout(function() {
       this.data={
       "content": [
         {
           "id": "1",
           "account": "dongdong.yu@payegis.com",
           "username": "高强强2",
           "status": 1,
           "editTime": "2016-12-29  13:00"
         }
       ,
         {
           "id": "2",
           "account": "dongdong.yu@payegis.com",
           "username": "高强强2",
           "status": 0,
           "editTime": "2016-12-29  13:00"
         },
          ,
          {
           "id": "3",
           "account": "dongdong.yu@payegis.com",
           "username": "高强强2",
           "status": 1,
           "editTime": "2016-12-29  13:00"
         }
       ,
         {
           "id": "4",
           "account": "dongdong.yu@payegis.com",
           "username": "高强强2",
           "status": 0,
           "editTime": "2016-12-29  13:00"
         }
        ],
       "size":"3",
       "number":number,
       "totalElements":"4",
       "totalPages":"2",
       "firstPage":"true",
       "lastPage":"true"
      };
     },2000);
  }

 
}
