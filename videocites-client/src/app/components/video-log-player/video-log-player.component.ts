import { Component, OnInit, Input } from '@angular/core';
import { VideoLogItem } from 'src/app/models/video-log-item';

@Component({
  selector: 'app-video-log-player',
  templateUrl: './video-log-player.component.html',
  styleUrls: ['./video-log-player.component.scss']
})
export class VideoLogPlayerComponent implements OnInit {
  @Input() person: VideoLogItem;
  constructor() { }

  ngOnInit() {
  }

}
