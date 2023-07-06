import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SigninComponent} from './signin.component';
import {RouterTestingModule} from "@angular/router/testing";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {I18nModule} from "../../shared/modules/i18n.module";

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent, TranslatePipe],
      imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule, ReactiveFormsModule, I18nModule],
      providers: [
        TranslateService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
