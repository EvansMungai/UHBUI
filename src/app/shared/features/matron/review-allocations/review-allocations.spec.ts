import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewAllocations } from './review-allocations';

describe('ReviewAllocations', () => {
  let component: ReviewAllocations;
  let fixture: ComponentFixture<ReviewAllocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewAllocations]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReviewAllocations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
