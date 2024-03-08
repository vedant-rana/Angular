import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesbinComponent } from './codesbin.component';

describe('CodesbinComponent', () => {
  let component: CodesbinComponent;
  let fixture: ComponentFixture<CodesbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodesbinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodesbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
