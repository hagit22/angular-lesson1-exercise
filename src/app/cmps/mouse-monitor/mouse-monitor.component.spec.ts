import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseMonitorComponent } from './mouse-monitor.component';

describe('MouseMonitorComponent', () => {
  let component: MouseMonitorComponent;
  let fixture: ComponentFixture<MouseMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MouseMonitorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MouseMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
