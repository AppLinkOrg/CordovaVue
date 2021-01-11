import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { HttpApi } from 'src/providers/http.api';

@Component({
  selector: 'app-forcopy',
  templateUrl: './forcopy.page.html',
  styleUrls: ['./forcopy.page.scss'],
})
export class ForcopyPage extends AppBase {


  constructor(
    route: ActivatedRoute,
    router: Router,
    instApi: InstApi,
    memberApi: MemberApi,
    httpApi:HttpApi
  ) {
    super(route, router, instApi, memberApi);
  }

}
