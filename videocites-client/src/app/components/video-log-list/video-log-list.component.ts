import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoLogItem } from 'src/app/models/video-log-item';

@Component({
  selector: 'app-video-log-list',
  templateUrl: './video-log-list.component.html',
  styleUrls: ['./video-log-list.component.scss']
})
export class VideoLogListComponent implements OnInit {

  @Input() persons: VideoLogItem[];
  @Input() personSelected: VideoLogItem;
  @Output() personSelectRequest = new EventEmitter<VideoLogItem>();
  @Output() personDeleteRequest = new EventEmitter<VideoLogItem>();
  
  constructor() { }

  ngOnInit() {
  }

  onPersonSelectRequest(person: VideoLogItem) {
    this.personSelectRequest.emit(person);
  }

}
