import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchersAppComponent } from './watchers-app.component';

describe('WatchersAppComponent', () => {
  let component: WatchersAppComponent;
  let fixture: ComponentFixture<WatchersAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatchersAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchersAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
