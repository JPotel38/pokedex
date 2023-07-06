import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AllPokemonsComponent} from './all-pokemons.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateService} from "@ngx-translate/core";
import {I18nModule} from "../../shared/modules/i18n.module";
import {TypeNamePipe} from "../../pipes/type-name.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('AllPokemonsComponent', () => {
  let component: AllPokemonsComponent;
  let fixture: ComponentFixture<AllPokemonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AllPokemonsComponent, TypeNamePipe],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule, I18nModule, FormsModule, ReactiveFormsModule],
      providers: [
        TranslateService]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
