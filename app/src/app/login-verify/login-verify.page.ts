import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-verify',
  templateUrl: './login-verify.page.html',
  styleUrls: ['./login-verify.page.scss'],
})
export class LoginVerifyPage extends AppBase {

  mobile = "";
  verifycode = "";

  constructor(
    route: ActivatedRoute,
    router: Router,
    instApi: InstApi,
    public memberApi: MemberApi,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {
    super(route, router, instApi, memberApi);
    this.needlogin = false;
  }



  onMyLoad() {
    console.log(this.params);
    this.mobile = this.params.mobile;
  }

  login() {
    this.memberApi.login({
      mobile: this.mobile,
      verifycode: this.verifycode
    }).then((ret: any) => {
      if (ret.code == 0) {
        window.localStorage.setItem("token", ret.return);
        this.nav("/tabs/tab1");
        this.presentToast(this.toastCtrl, "登录成功");
      } else {
        this.presentAlert(this.alertCtrl, ret.return);
      }
    })
  }

}
