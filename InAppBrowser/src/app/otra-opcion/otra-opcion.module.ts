import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtraOpcionPageRoutingModule } from './otra-opcion-routing.module';

import { OtraOpcionPage } from './otra-opcion.page';
import { OtraOpcionModule } from 'projects/otra-opcion/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtraOpcionPageRoutingModule,
    OtraOpcionModule
  ],
  declarations: [OtraOpcionPage]
})
export class OtraOpcionPageModule {}
