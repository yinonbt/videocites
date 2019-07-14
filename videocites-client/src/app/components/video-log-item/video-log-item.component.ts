import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoLogItem } from 'src/app/models/video-log-item';

@Component({
  selector: 'app-video-log-item',
  templateUrl: './video-log-item.component.html',
  styleUrls: ['./video-log-item.component.scss']
})
export class VideoLogItemComponent implements OnInit {

  @Input() person: VideoLogItem;
  @Input() personSelected: VideoLogItem;
  @Output() personSelectRequest = new EventEmitter<VideoLogItem>();

  constructor() {}

  ngOnInit() {}
  
  onClick() {
    this.personSelectRequest.emit(this.person);
  }

}
