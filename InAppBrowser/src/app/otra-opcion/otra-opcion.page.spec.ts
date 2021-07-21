import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtraOpcionPage } from './otra-opcion.page';

describe('OtraOpcionPage', () => {
  let component: OtraOpcionPage;
  let fixture: ComponentFixture<OtraOpcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtraOpcionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtraOpcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
