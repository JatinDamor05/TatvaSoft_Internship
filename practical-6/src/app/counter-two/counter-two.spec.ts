import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTwo } from './counter-two';

describe('CounterTwo', () => {
  let component: CounterTwo;
  let fixture: ComponentFixture<CounterTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
