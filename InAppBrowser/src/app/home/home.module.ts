import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InAppModule } from 'projects/in-app/src/lib/in-app.module';
import { ScriptStoreMundo } from './config';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    InAppModule.forRoot(ScriptStoreMundo)
  ],
  declarations: [HomePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
