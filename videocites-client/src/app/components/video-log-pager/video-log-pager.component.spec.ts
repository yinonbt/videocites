import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLogPagerComponent } from './video-log-pager.component';

describe('VideoLogPagerComponent', () => {
  let component: VideoLogPagerComponent;
  let fixture: ComponentFixture<VideoLogPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLogPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLogPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
