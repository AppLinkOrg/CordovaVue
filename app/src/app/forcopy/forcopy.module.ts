import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForcopyPageRoutingModule } from './forcopy-routing.module';

import { ForcopyPage } from './forcopy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForcopyPageRoutingModule
  ],
  declarations: [ForcopyPage]
})
export class ForcopyPageModule {}
