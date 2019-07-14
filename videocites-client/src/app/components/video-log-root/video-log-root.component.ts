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

  constructor(private videoLogService: VideoLogService) { 
    this.persons$ = videoLogService.persons$;
  }
  ngOnInit() {
    //this.videoLogService.getAll();
    this.videoLogService.getVideoItems(10, 5);
  }

}
