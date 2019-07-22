import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-video-log-pager",
  templateUrl: "./video-log-pager.component.html",
  styleUrls: ["./video-log-pager.component.scss"]
})
export class VideoLogPagerComponent implements OnInit {
  @Input() start: number;
  @Input() length: number;
  @Input() totalVideos: number;
  @Input() isLast: boolean;
  @Output() navigateBeforeRequired = new EventEmitter<number>();
  @Output() navigateNextRequired = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onNavigateBefore() {
    this.navigateBeforeRequired.emit(this.start);
  }

  onNavigateNext() {
    this.navigateNextRequired.emit(this.start);
  }
}
