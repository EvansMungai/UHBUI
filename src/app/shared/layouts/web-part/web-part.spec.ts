import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebPart } from './web-part';

describe('WebPart', () => {
  let component: WebPart;
  let fixture: ComponentFixture<WebPart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPart]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WebPart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
