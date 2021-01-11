import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForcopyPage } from './forcopy.page';

describe('ForcopyPage', () => {
  let component: ForcopyPage;
  let fixture: ComponentFixture<ForcopyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcopyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForcopyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
