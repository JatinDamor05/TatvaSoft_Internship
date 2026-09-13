import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusInput } from './focus-input';

describe('FocusInput', () => {
  let component: FocusInput;
  let fixture: ComponentFixture<FocusInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusInput],
    }).compileComponents();

    fixture = TestBed.createComponent(FocusInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
