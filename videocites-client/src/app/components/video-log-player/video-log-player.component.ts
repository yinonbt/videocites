import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";
import { VideoLogItem } from "src/app/models/video-log-item";

@Component({
  selector: "app-video-log-player",
  templateUrl: "./video-log-player.component.html",
  styleUrls: ["./video-log-player.component.scss"]
})
export class VideoLogPlayerComponent implements AfterViewChecked, OnChanges {
  @Input() person: VideoLogItem;
  @ViewChild("video") matVideo: any;
  video: HTMLVideoElement;
  videoIsCorrupted = false;

  constructor() {}

  ngOnChanges() {
    this.videoIsCorrupted = false;    
    console.log("ngOnChanges: this.videoIsCorrupted ", this.videoIsCorrupted);
    console.log("ngOnChanges: this.matVideo ", this.matVideo);
    this.ngAfterViewChecked();
  }

  ngAfterViewChecked() {
    if (this.matVideo) {
      this.video = this.matVideo.getVideoTag();
      this.video.addEventListener("error", () => this.setVideoIsCorrupted());
    }
  }

  setVideoIsCorrupted() {
    this.videoIsCorrupted = true;
    console.log("video corrupted flag is on");
  }
}
