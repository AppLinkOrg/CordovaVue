import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForcopyPage } from './forcopy.page';

const routes: Routes = [
  {
    path: '',
    component: ForcopyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForcopyPageRoutingModule {}
