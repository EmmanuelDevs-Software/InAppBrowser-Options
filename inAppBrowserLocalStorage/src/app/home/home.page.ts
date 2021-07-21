import { browser } from 'protractor';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions, InAppBrowserEventType } from '@ionic-native/in-app-browser/ngx';
import { Observable } from 'rxjs';
let  datos: string;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {


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
  dataObtenida: any;
  data: InAppBrowserEvent;



  constructor(private theInAppBrowser: InAppBrowser) {
  }
  public openWithInAppBrowser(url: string) {
    const target = '_blank';
    this.theInAppBrowser.create(url, target, this.options);
    this.postCordovaMessage(url);
  }


  getStorageData(){
   this.dataStorage = localStorage.getItem('hello');


  }

  postCordovaMessage(url) {
    const browser = this.theInAppBrowser.create(url, '_blank', 'location=no');

    browser.on('loadstart').subscribe(event => {
      console.log("loadstart");
    });

    browser.on('loadstop').subscribe(event => {
      browser.executeScript({ code: "\
        var btnSendData = document.getElementById('btnSendData');\
        btnSendData.addEventListener('click', function(){\
        var messageObj = {my_message1: message1, my_message2: message2};\
        var stringifiedMessageObj = JSON.stringify(messageObj);\
        webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);\
        });"
      })
      console.log("loadstop");
    });

    browser.on('loaderror').subscribe(event => {
      console.log("loaderror");      
      var scriptErrorMesssage =
       "alert('Sorry we cannot open that page. Message from the server is : "
       + event.message + "');"
       browser.executeScript({ code: scriptErrorMesssage }).then((res) => {
        console.log(res);
       }, (err) => {
        console.log(err);
       });
    });

    browser.on('exit').subscribe(event => {
      console.log("exit");
    });

    browser.on('beforeload').subscribe(event => {
      console.log("beforeload");
    });

  browser.on('message').subscribe(event => {
      console.log(event);
      let obteniendoMensajeUno = JSON.stringify(event.data.my_message1);
      this.dataObtenida = obteniendoMensajeUno;
    });

  }



}


