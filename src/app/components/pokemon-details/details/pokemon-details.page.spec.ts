import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PokemonDetailsPage} from './pokemon-details.page';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {I18nModule} from "../../../shared/modules/i18n.module";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

describe('PokemonDetailsPage', () => {
  let component: PokemonDetailsPage;
  let fixture: ComponentFixture<PokemonDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsPage, TranslatePipe],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule, I18nModule],
      providers: [
        TranslateService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {id: '1'}
            } as unknown as ActivatedRouteSnapshot,
          },
        }]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
