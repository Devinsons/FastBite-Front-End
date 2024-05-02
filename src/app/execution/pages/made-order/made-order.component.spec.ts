import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeOrderComponent } from './made-order.component';

describe('MadeOrderComponent', () => {
  let component: MadeOrderComponent;
  let fixture: ComponentFixture<MadeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MadeOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
