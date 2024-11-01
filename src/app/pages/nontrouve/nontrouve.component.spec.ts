import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NontrouveComponent } from './nontrouve.component';

describe('NontrouveComponent', () => {
  let component: NontrouveComponent;
  let fixture: ComponentFixture<NontrouveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NontrouveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NontrouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
