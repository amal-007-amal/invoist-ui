import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsSupplierComponent } from './vendors-supplier.component';

describe('VendorsSupplierComponent', () => {
  let component: VendorsSupplierComponent;
  let fixture: ComponentFixture<VendorsSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorsSupplierComponent]
    });
    fixture = TestBed.createComponent(VendorsSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
