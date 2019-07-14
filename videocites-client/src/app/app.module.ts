import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { VideoLogRootComponent } from "./components/video-log-root/video-log-root.component";
import { VideoLogListComponent } from "./components/video-log-list/video-log-list.component";
import { VideoLogItemComponent } from "./components/video-log-item/video-log-item.component";
import { VideoLogPlayerComponent } from "./components/video-log-player/video-log-player.component";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    VideoLogRootComponent,
    VideoLogListComponent,
    VideoLogItemComponent,
    VideoLogPlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
