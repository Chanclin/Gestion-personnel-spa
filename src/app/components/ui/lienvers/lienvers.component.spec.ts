import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienversComponent } from './lienvers.component';

describe('LienversComponent', () => {
  let component: LienversComponent;
  let fixture: ComponentFixture<LienversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LienversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LienversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
