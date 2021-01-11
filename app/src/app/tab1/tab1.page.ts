import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { HttpApi } from 'src/providers/http.api';
import { AppUtil } from '../app.util';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page extends AppBase {


  constructor(
    route: ActivatedRoute,
    router: Router,
    instApi: InstApi,
    memberApi: MemberApi,
    public httpApi: HttpApi
  ) {
    super(route, router, instApi, memberApi);
  }

  thisweeklist = [];
  lastweeklist = [];
  otherlist = [];

  onMyShow() {

    var thisweekstart = AppUtil.StartDayOfWeek(new Date());
    var lastweekend = new Date(thisweekstart.getTime() - 1);
    var lastweekstart = AppUtil.StartDayOfWeek(lastweekend);
    var otherend = new Date(lastweekstart.getTime() - 1);
    console.log("thisweekstart", thisweekstart, lastweekend, lastweekstart, otherend);
    this.httpApi.getdata("course/list", {
      publish_date_from: AppUtil.FormatDateTime(thisweekstart)
    }).then((list: []) => {
      this.thisweeklist = list;
    });
  }

}
