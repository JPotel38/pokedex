import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {I18nModule} from "../../../shared/modules/i18n.module";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {PokemonDetailsComponent} from "./pokemon-details.component";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('PokemonDetailsPage', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), I18nModule, PokemonDetailsComponent, TranslatePipe],
      providers: [
        TranslateService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {id: '1'}
            } as unknown as ActivatedRouteSnapshot,
          },
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
