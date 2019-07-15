import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { VideoLogPage } from "../models/video-log-page";
import { BehaviorSubject, Observable } from "rxjs";
import { VideoLogItem } from "../models/video-log-item";

@Injectable({
  providedIn: "root"
})
export class VideoLogService {
  private personsSubject = new BehaviorSubject<VideoLogItem[]>([]);
  private startSubject = new BehaviorSubject<number>(null);
  private lengthSubject = new BehaviorSubject<number>(null);
  private totalVideosSubject = new BehaviorSubject<number>(null);
  private isLastSubject = new BehaviorSubject<boolean>(null);

  get persons$(): Observable<VideoLogItem[]> {
    return this.personsSubject;
  }

  get start$(): Observable<number> {
    return this.startSubject;
  }

  get length$(): Observable<number> {
    return this.lengthSubject;
  }

  get totalVideos$(): Observable<number> {
    return this.totalVideosSubject;
  }

  get isLast$(): Observable<boolean> {
    return this.isLastSubject;
  }

  constructor(private http: HttpClient) {}

  getAll(): void {
    const url = `${environment.apiUrl}api/v1/posts`;
    this.http.get<any>(url).subscribe(result => {
      console.log("all video log items: ", result);
      //this.personsSubject.next(result);
    });
  }

  getVideoItems(start: number, length: number) {
    const url = `${environment.apiUrl}api/v1/posts/${start}/${length}`;
    this.http.get<VideoLogPage>(url).subscribe(result => {
      console.log("VideoLogPage: ", result);
      this.personsSubject.next(result.videoLogItems);
      this.startSubject.next(result.start);
      this.lengthSubject.next(result.length);
      this.totalVideosSubject.next(result.totalVideos);
      this.isLastSubject.next(result.isLast);
    });
  }
}
