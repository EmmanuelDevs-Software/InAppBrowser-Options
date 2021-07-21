import { Component, OnInit } from '@angular/core';
import { OtraOpcionService } from 'projects/otra-opcion/src/public-api';

@Component({
  selector: 'app-otra-opcion',
  templateUrl: './otra-opcion.page.html',
  styleUrls: ['./otra-opcion.page.scss'],
})
export class OtraOpcionPage implements OnInit {


  dataObtenidaMessage: string;

  constructor(public inpp : OtraOpcionService ){
  }
  ngOnInit() {}

get(){
  console.log(this.inpp.resultadoFinal)
  this.dataObtenidaMessage = this.inpp.resultadoFinal;
}


 

openWithInAppBrowser(url){
  this.inpp.script = '\
  var btnSendData = document.getElementById("btnSendData");\
  alert("Desde la OPCION NUMERO 2");\
  btnSendData.addEventListener(\'click\', function(){\
  var messageObj = {my_message1: message1, my_message2: message2};\
  var stringifiedMessageObj = JSON.stringify(messageObj);\
  webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);\
  });';
  this.inpp.openWithInAppBrowser(url);
}


}
