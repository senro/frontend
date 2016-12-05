import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class Navs {
  value = [];
  constructor(public http: Http) {

  }

  getData() {
    console.log('Navs#getData(): Get Data');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return {
      value: [
            {
                text:'首页',
                href:'./main',
                show:true,
                iconClass:'icon-home'
            },
            {
                text:'用户管理',
                href:'./userManage',
                show:true,
                iconClass:'icon-user',
                include:[]
            },
            {
                text:'用户详情',
                href:'./userManage/userDetail',
                show:true,
                iconClass:'icon-log'
            }
      ]
    };
  }

}
