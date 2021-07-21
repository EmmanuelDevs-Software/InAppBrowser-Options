import { InAppService } from './../../../projects/in-app/src/lib/in-app.service';
import { browser } from 'protractor';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions, InAppBrowserEventType } from '@ionic-native/in-app-browser/ngx';
import { Observable } from 'rxjs';
import { ScriptStore222 } from 'myscript';
let  datos: string;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {


  dataObtenidaMessage: string;

  constructor(public inpp : InAppService ){
  }

get(){
  console.log(this.inpp.resultadoFinal)
  this.dataObtenidaMessage = this.inpp.resultadoFinal;
}
 

openWithInAppBrowser(url){
  this.inpp.openWithInAppBrowser(url);
}


}


