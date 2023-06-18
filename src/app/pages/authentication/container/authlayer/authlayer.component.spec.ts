import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthlayerComponent } from './authlayer.component';

describe('AuthlayerComponent', () => {
  let component: AuthlayerComponent;
  let fixture: ComponentFixture<AuthlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthlayerComponent]
    });
    fixture = TestBed.createComponent(AuthlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
