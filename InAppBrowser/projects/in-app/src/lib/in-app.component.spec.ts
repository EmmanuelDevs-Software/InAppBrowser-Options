import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InAppComponent } from './in-app.component';

describe('InAppComponent', () => {
  let component: InAppComponent;
  let fixture: ComponentFixture<InAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
