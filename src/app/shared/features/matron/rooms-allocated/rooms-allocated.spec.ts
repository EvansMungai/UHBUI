import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomsAllocated } from './rooms-allocated';

describe('RoomsAllocated', () => {
  let component: RoomsAllocated;
  let fixture: ComponentFixture<RoomsAllocated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsAllocated]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RoomsAllocated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
