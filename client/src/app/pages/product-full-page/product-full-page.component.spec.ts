import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFullPageComponent } from './product-full-page.component';

describe('ProductFullPageComponent', () => {
  let component: ProductFullPageComponent;
  let fixture: ComponentFixture<ProductFullPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFullPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
