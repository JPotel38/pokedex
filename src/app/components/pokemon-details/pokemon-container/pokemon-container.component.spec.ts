import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonContainerComponent } from './pokemon-container.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('PokemonContainerComponent', () => {
  let component: PokemonContainerComponent;
  let fixture: ComponentFixture<PokemonContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonContainerComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
