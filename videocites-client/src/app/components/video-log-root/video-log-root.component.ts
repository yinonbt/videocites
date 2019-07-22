import { Component, OnInit } from '@angular/core';
import { VideoLogService } from 'src/app/services/video-log.service';
import { VideoLogItem } from 'src/app/models/video-log-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-log-root',
  templateUrl: './video-log-root.component.html',
  styleUrls: ['./video-log-root.component.scss']
})
export class VideoLogRootComponent implements OnInit {
  personSelected: VideoLogItem = null;
  persons$: Observable<VideoLogItem[]>;
  start$: Observable<number>;
  length$: Observable<number>;  
  totalVideos$: Observable<number>;
  isLast$: Observable<boolean>;

  start = 0;
  length = 5;

  constructor(private videoLogService: VideoLogService) { 
    this.persons$ = videoLogService.persons$;
    this.start$ = videoLogService.start$;
    this.length$ = videoLogService.length$;
    this.totalVideos$ = videoLogService.totalVideos$;
    this.isLast$ = videoLogService.isLast$;
  }

  ngOnInit() {
    this.videoLogService.getVideoItems(this.start, this.length);
  }

  onPersonSelectRequest(person: VideoLogItem) {
    this.personSelected = person;
  }

  onNavigateBeforeRequired(currentStart: number) {
    this.videoLogService.getVideoItems(currentStart - this.length, this.length);
  }

  onNavigateNextRequired(currentStart: number) {
    this.videoLogService.getVideoItems(currentStart + this.length, this.length);
  }
}
