import { Injectable, Inject } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions, InAppBrowserEventType } from '@ionic-native/in-app-browser/ngx';


@Injectable({
  providedIn: 'root'
})


export class InAppService {

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



  constructor(private theInAppBrowser: InAppBrowser,
    
    @Inject('DEFAUL_CONFIG') config ?: string
    )
     {
      this.onwConfig = config;
  }


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
      browser.executeScript({code: this.onwConfig})
      console.log("loadstop");
    });

    // browser.on('loaderror').subscribe(event => {
    //   console.log("loaderror");      
    //   var scriptErrorMesssage =
    //    "alert('Sorry we cannot open that page. Message from the server is : "
    //    + event.message + "');"
    //   browser.executeScript({ code: scriptErrorMesssage }).then((res) => {
    //     console.log(res);
    //    }, (err) => {
    //     console.log(err);
    //    });
    // });

    // browser.on('exit').subscribe(event => {
    //   console.log("exit");
    // });

    // browser.on('beforeload').subscribe(event => {
    //   console.log("beforeload");
    // });

    browser.on('message').subscribe(event => {
      console.log(event);
      let obteniendoMensajeUno = JSON.stringify(event.data.my_message1);
      this.dataObtenida = obteniendoMensajeUno;
      this.resultadoFinal = JSON.stringify(event.data.my_message1);
    });

  }

}
