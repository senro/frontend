import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class service {
  value = [];
  constructor(public http: Http) {

  }

  getData() {
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return {
     "status": "0",
     "data": {
       "id":"1",
       "account":"1@payegis.com",
       "username": "遁地",
       "password": "111111",
       "status": true
      },
     "detail": "请求数据成功!",
     "key":"null"
    };
  }

}
