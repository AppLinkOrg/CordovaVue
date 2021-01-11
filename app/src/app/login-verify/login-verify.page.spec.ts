import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginVerifyPage } from './login-verify.page';

describe('LoginVerifyPage', () => {
  let component: LoginVerifyPage;
  let fixture: ComponentFixture<LoginVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginVerifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
