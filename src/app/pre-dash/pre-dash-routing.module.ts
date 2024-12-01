import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreDashPage } from './pre-dash.page';

const routes: Routes = [
  {
    path: '',
    component: PreDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreDashPageRoutingModule {}
