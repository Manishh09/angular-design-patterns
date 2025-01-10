import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgePatternDemoComponent } from './bridge-pattern-demo.component';

describe('BridgePatternDemoComponent', () => {
  let component: BridgePatternDemoComponent;
  let fixture: ComponentFixture<BridgePatternDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridgePatternDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BridgePatternDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
