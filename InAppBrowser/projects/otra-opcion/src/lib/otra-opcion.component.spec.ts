import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtraOpcionComponent } from './otra-opcion.component';

describe('OtraOpcionComponent', () => {
  let component: OtraOpcionComponent;
  let fixture: ComponentFixture<OtraOpcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtraOpcionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtraOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
