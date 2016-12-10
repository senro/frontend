import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class lists {
  value = [];
  constructor(public http: Http) {

  }

  getData() {
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return {
     "status": "0",
     "data": {
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
         },
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
      },
     "detail": "请求数据成功!",
     "key":"null"
    };

  }

}
