import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartRxjs } from './cart-rxjs';

describe('CartRxjs', () => {
  let component: CartRxjs;
  let fixture: ComponentFixture<CartRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartRxjs],
    }).compileComponents();

    fixture = TestBed.createComponent(CartRxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
