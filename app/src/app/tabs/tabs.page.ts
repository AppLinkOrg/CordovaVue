import { Component } from '@angular/core';
import { AppBase } from '../AppBase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage extends AppBase {


  constructor(
    route: ActivatedRoute,
    router: Router,
    instApi:InstApi,
    memberApi:MemberApi
 ) {
  super(route, router,instApi,memberApi);

 }

}
