import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeUserRole } from './change-user-role';

describe('ChangeUserRole', () => {
  let component: ChangeUserRole;
  let fixture: ComponentFixture<ChangeUserRole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeUserRole]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChangeUserRole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
