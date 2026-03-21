import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UserPopoverComponent} from './user-popover.component';

describe('UserPopoverComponent', () => {
  let component: UserPopoverComponent;
  let fixture: ComponentFixture<UserPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), UserPopoverComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
