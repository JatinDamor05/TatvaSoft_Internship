import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOne } from './user-one';

describe('UserOne', () => {
  let component: UserOne;
  let fixture: ComponentFixture<UserOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserOne],
    }).compileComponents();

    fixture = TestBed.createComponent(UserOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
