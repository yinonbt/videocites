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

  constructor(private videoLogService: VideoLogService) { 
    this.persons$ = videoLogService.persons$;
    this.start$ = videoLogService.start$;
    this.length$ = videoLogService.length$;
    this.totalVideos$ = videoLogService.totalVideos$;
  }
  ngOnInit() {
    //this.videoLogService.getAll();
    this.videoLogService.getVideoItems(10, 5);
  }

  onPersonSelectRequest(person: VideoLogItem) {
    this.personSelected = person;
  }

}
