import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtraOpcionPage } from './otra-opcion.page';

const routes: Routes = [
  {
    path: '',
    component: OtraOpcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtraOpcionPageRoutingModule {}
