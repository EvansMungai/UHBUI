import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessfulApplications } from './successful-applications';

describe('SuccessfulApplications', () => {
  let component: SuccessfulApplications;
  let fixture: ComponentFixture<SuccessfulApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulApplications]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SuccessfulApplications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
