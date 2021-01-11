import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { HttpClientModule } from '@angular/common/http';
import { Sim } from '@ionic-native/sim/ngx';
import { HttpApi } from 'src/providers/http.api';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'ios',
    rippleEffect: true,
    scrollAssist: false
  }
  ), AppRoutingModule,HttpClientModule],
  providers: [
    InstApi,
    MemberApi,
    HttpApi,
    StatusBar,
    SplashScreen,
    Sim,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
