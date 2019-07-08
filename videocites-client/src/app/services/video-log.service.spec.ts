import { TestBed } from '@angular/core/testing';

import { VideoLogService } from './video-log.service';

describe('VideoLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoLogService = TestBed.get(VideoLogService);
    expect(service).toBeTruthy();
  });
});
