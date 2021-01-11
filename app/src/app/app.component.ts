
import { Platform, IonMenu, ToastController, IonInput,ModalController,  } from '@ionic/angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppBase } from './AppBase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public static statusBar:StatusBar;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public router:Router,
    public route: ActivatedRoute,
  ) {
    this.initializeApp();
  }
  currentpage = "";
  keyboardheight=100;
  backButtonPressedOnceToExit = false;
  initializeApp() {
    this.platform.ready().then(() => {

      //window.localStorage.clear();
  
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();

      AppBase.statusBar=this.statusBar;

      let body=document.querySelector("body");

      window.addEventListener('ionKeyboardDidShow', (ev:any) => {
        if(AppBase.needKeyboardTop){

          const { keyboardHeight } = ev.detail;
          this.keyboardheight=keyboardHeight;
          body.style.marginTop="-"+keyboardHeight+"px";
        }
      });
      
      window.addEventListener('ionKeyboardDidHide', () => {
        //this.keyboardheight=0;
        body.style.marginTop="0px";
      });
      
      
    
    

   
      var _self = this;
      var platform: Platform = this.platform;
      document.addEventListener("backbutton", (e) => {

        if(window.location.pathname.indexOf("tabs")>=0){
          if (_self.backButtonPressedOnceToExit == true) {
            navigator["app"].exitApp();
          }
          _self.backButtonPressedOnceToExit = true;
          _self.presentToast("再按一次就退出程序");
          setTimeout(function () {
            _self.backButtonPressedOnceToExit = false;
          }, 2000);
        }


        
      });

      var token = window.localStorage.getItem("token");
      if(token==null){
        this.router.navigateByUrl('/login');
      }else{
        this.router.navigateByUrl('/tabs');
      }
    });
  }

  async presentToast(msg: string) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    await toast.present();
  }

}
