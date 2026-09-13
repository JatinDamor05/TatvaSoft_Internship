import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeIframe } from './safe-iframe';

describe('SafeIframe', () => {
  let component: SafeIframe;
  let fixture: ComponentFixture<SafeIframe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafeIframe],
    }).compileComponents();

    fixture = TestBed.createComponent(SafeIframe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
