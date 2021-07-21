import { IonicModule } from '@ionic/angular';
import { InAppService } from './in-app.service';
import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FormsModule } from '@angular/forms';
import { InAppComponent } from './in-app.component';
import { ScriptStore } from './config';

export interface CustomConfig {
  script: string;
}

export declare const CONFIG_OWN: InjectionToken<CustomConfig>;
@NgModule({
  declarations: [InAppComponent],
  imports: [
    FormsModule,
    IonicModule
  ],
  providers:[
    InAppBrowser,
  ],
  exports: [InAppComponent],

})
export class InAppModule {
  static forRoot(
    configuration: CustomConfig = ScriptStore
  ): ModuleWithProviders <InAppModule> {
    console.log('Configuración mediante el forRoot')
    return {
      ngModule: InAppModule,
      providers: [
        {
          provide: 'DEFAUL_CONFIG',
          useValue: configuration,
        },
        InAppService
      ],
    };
  }
 }
