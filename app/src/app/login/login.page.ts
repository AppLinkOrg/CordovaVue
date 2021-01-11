import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { Sim } from '@ionic-native/sim/ngx';
import { AliyunApi } from 'src/providers/aliyun.api';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AliyunApi]
})
export class LoginPage extends AppBase {

  mobile = "";

  constructor(
    route: ActivatedRoute,
    router: Router,
    instApi: InstApi,
    memberApi: MemberApi,
    public aliyunApi: AliyunApi,
    sim: Sim,
    public toastCtrl: ToastController
  ) {
    super(route, router, instApi, memberApi);
    this.needlogin = false;
  }


  getVerifyCode() {

    this.aliyunApi.sendverifycode({ mobile: this.mobile, type: "login" }).then((ret: any) => {
      if (ret.code) {
        this.nav("/login-verify", { mobile: this.mobile });
      } else {
        this.presentToast(this.toastCtrl, "操作太频繁，请于1分钟后重试");
      }
    });
  }



}
