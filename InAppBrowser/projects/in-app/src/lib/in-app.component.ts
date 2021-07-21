import { Component, OnInit } from '@angular/core';
import { InAppService } from '../public-api';

@Component({
  selector: 'lib-browser',
  templateUrl: './in-app.component.html',
  styleUrls: ['./in-app.component.scss'],
})
export class InAppComponent implements OnInit {

  constructor() { }

  dataObtenida: any;

  ngOnInit() {
  }

}
