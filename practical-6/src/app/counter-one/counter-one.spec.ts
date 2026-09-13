import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOne } from './counter-one';

describe('CounterOne', () => {
  let component: CounterOne;
  let fixture: ComponentFixture<CounterOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterOne],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
