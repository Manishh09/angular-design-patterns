import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterPatternDemoComponent } from './adapter-pattern-demo.component';

describe('AdapterPatternDemoComponent', () => {
  let component: AdapterPatternDemoComponent;
  let fixture: ComponentFixture<AdapterPatternDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdapterPatternDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdapterPatternDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
