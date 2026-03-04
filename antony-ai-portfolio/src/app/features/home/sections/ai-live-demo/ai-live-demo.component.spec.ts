import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiLiveDemoComponent } from './ai-live-demo.component';

describe('AiLiveDemoComponent', () => {
  let component: AiLiveDemoComponent;
  let fixture: ComponentFixture<AiLiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiLiveDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiLiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
