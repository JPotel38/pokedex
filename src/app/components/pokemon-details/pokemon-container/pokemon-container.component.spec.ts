import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PokemonContainerComponent} from './pokemon-container.component';
import {RouterTestingModule} from "@angular/router/testing";
import {PokemonDetailsPage} from "../details/pokemon-details.page";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {I18nModule} from "../../../shared/modules/i18n.module";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

describe('PokemonContainerComponent', () => {
  let component: PokemonContainerComponent;
  let fixture: ComponentFixture<PokemonContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonContainerComponent, PokemonDetailsPage, TranslatePipe],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule, I18nModule],
      providers: [TranslateService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: {id: '1'}
          } as unknown as ActivatedRouteSnapshot,
        },
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
