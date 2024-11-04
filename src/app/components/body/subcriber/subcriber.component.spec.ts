import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriberComponent } from './subcriber.component';

describe('SubcriberComponent', () => {
  let component: SubcriberComponent;
  let fixture: ComponentFixture<SubcriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcriberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
