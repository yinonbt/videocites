import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-video-log-pager",
  templateUrl: "./video-log-pager.component.html",
  styleUrls: ["./video-log-pager.component.scss"]
})
export class VideoLogPagerComponent implements OnInit {
  @Input() start: number;
  @Input() length: number;
  @Input() totalVideos: number;

  constructor() {}

  ngOnInit() {}
}
