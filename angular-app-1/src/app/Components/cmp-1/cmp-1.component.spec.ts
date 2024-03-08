import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp1Component } from './cmp-1.component';

describe('Cmp1Component', () => {
  let component: Cmp1Component;
  let fixture: ComponentFixture<Cmp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
