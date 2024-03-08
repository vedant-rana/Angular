import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp2Component } from './cmp-2.component';

describe('Cmp2Component', () => {
  let component: Cmp2Component;
  let fixture: ComponentFixture<Cmp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
