import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { VideoLogPage } from '../models/video-log-page';

@Injectable({
  providedIn: "root"
})
export class VideoLogService {
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
      //this.personsSubject.next(result);
    });
    ///:start/:length
  }
}
