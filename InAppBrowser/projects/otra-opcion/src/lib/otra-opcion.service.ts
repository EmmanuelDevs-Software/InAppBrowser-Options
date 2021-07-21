import { Injectable } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions, InAppBrowserEventType } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class OtraOpcionService {

 
  options: InAppBrowserOptions = {
    location: 'yes', // Or 'no'
    hidden: 'no', // Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes', // Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', // Android only
    closebuttoncaption: 'Close', // iOS only
    disallowoverscroll: 'no', // iOS only
    toolbar: 'yes', // iOS only
    enableViewportScale: 'no', // iOS only
    allowInlineMediaPlayback: 'no', // iOS only
    presentationstyle: 'pagesheet', // iOS only
    fullscreen: 'yes', // Windows only
  };
  inAppBrowserData: string;
  dataGuardad: any;
  informacion: any;
  inApp: any;
  dataStorage: any;
  public dataObtenida: any;
  data: InAppBrowserEvent;
  onwConfig: any;
  resultadoFinal: string;
 public script : string;


  constructor(private theInAppBrowser: InAppBrowser){}


  public openWithInAppBrowser(url: string) {
    const target = '_blank';
    this.theInAppBrowser.create(url, target, this.options);
    this.postCordovaMessage(url);
  }
  

  getData(respuesta){
    this.dataObtenida;
    console.log(this.dataObtenida);
    respuesta = this.dataObtenida;
  }


  postCordovaMessage(url) {
    const browser = this.theInAppBrowser.create(url, '_blank', 'location=no');

    browser.on('loadstart').subscribe(event => {
      console.log("loadstart");
    });

    browser.on('loadstop').subscribe(event => {
      if(this.script != null || this.script != undefined){
        browser.executeScript({code: this.script})
        console.log("loadstop inside");
      }else{
        browser.executeScript({code: 'console.log("this.script no tiene config")'})
        console.log("loadstop Else");

      }
      });



    browser.on('message').subscribe(event => {
      console.log(event);
      let obteniendoMensajeUno = JSON.stringify(event.data.my_message1);
      this.dataObtenida = obteniendoMensajeUno;
      this.resultadoFinal = JSON.stringify(event.data.my_message1);
    });

  }

}
