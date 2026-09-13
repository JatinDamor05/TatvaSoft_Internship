import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTwo } from './user-two';

describe('UserTwo', () => {
  let component: UserTwo;
  let fixture: ComponentFixture<UserTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(UserTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
