import { OnInit } from '@angular/core';
import { ApiConfig } from './api.config';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export class AppBase implements OnInit {

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public instApi: InstApi,
        public memberApi: MemberApi
    ) {
        this.res = {};
        this.instinfo = {};
        this.memberinfo = {};
    }

    uploadpath = ApiConfig.getUploadPath();


    needlogin = true;
    token = "";
    params: Params = [];
    public static statusBar:StatusBar;

    static Res = null;
    static InstInfo = null;
    res = null;
    instinfo = null;
    memberinfo = null;

    onMyLoad() {

        console.log("OnMyLoad");
    }

    ngOnInit(): void {
        if (AppBase.Res == null) {
            this.instApi.resources({}).then((res) => {
                AppBase.Res = res;
                this.res = res;
            })
        } else {
            this.res = AppBase.Res;
        }
        if (AppBase.InstInfo == null) {
            this.instApi.info({}).then((res) => {
                AppBase.InstInfo = res;
                this.instinfo = res;
            })
        } else {
            this.instinfo = AppBase.InstInfo;
        }
        this.onMyLoad();
    }

    onMyShow() {
    }

    ionViewDidEnter() {
        var token=window.localStorage.getItem("token");
        if(token!=null){
            ApiConfig.SetToken(token);
        }

        this.route.queryParams.subscribe(params => {
            this.params = params;
            this.onMyShow();
        });
        if (this.needlogin == true) {
            this.memberApi.info({}).then((info) => {
                if (info == null) {
                    this.nav("/login");
                } else {
                    this.memberinfo = info;
                }
            });
        }
    }



    nav(url, params = {}) {
        this.router.navigate([url], { queryParams: params });
    }

    async presentToast(toastController, msg) {
        const toast = await toastController.create({
            message: msg,
            duration: 3000 + (msg.length) / 3 * 1000
        });
        toast.present();
    }

    async presentAlert(alertController, msg) {
        const alert = await alertController.create({
            subHeader: '提示',
            message: msg,
            buttons: ['知道了']
        });

        await alert.present();
    }


    public static needKeyboardTop=false;
    inputFocus(){
        AppBase.needKeyboardTop=true;
    }
    inputBlur(){
        AppBase.needKeyboardTop=false;
    }
}