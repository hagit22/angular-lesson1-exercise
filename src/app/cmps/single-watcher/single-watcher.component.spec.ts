import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWatcherComponent } from './single-watcher.component';

describe('SingleWatcherComponent', () => {
  let component: SingleWatcherComponent;
  let fixture: ComponentFixture<SingleWatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleWatcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
