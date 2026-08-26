import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewApplications } from './review-applications';

describe('ReviewApplications', () => {
  let component: ReviewApplications;
  let fixture: ComponentFixture<ReviewApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewApplications]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReviewApplications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
