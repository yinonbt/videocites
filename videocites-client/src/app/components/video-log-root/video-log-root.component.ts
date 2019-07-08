import { Component, OnInit } from '@angular/core';
import { VideoLogService } from 'src/app/services/video-log.service';

@Component({
  selector: 'app-video-log-root',
  templateUrl: './video-log-root.component.html',
  styleUrls: ['./video-log-root.component.scss']
})
export class VideoLogRootComponent implements OnInit {

  constructor(private videoLogService: VideoLogService) { }

  ngOnInit() {
    this.videoLogService.getAll();
  }

}
