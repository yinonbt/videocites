import VideoLogItems from "../db/videoLog";

class postsController {
  static getVideoLog(req, res) {
    var fs = require("fs");
    var obj = JSON.parse(fs.readFileSync("./db/videosLog.json", "utf8"));
    VideoLogItems.push(obj.data.videos_log.items);
    //return res.send(obj.data.videos_log.items);
    return res.send(VideoLogItems);
  }

  static getVideoLogItems(req, res, next) {
    console.log("VideoLogItems.length: ", VideoLogItems.length);
    if (!VideoLogItems || VideoLogItems.length === 0) {
      var fs = require("fs");
      var obj = JSON.parse(fs.readFileSync("./db/videosLog.json", "utf8"));
      obj.data.videos_log.items.forEach(element => {
        VideoLogItems.push(element);
      });
    }

    const start = parseInt(req.params.start);
    const length = parseInt(req.params.length);

    console.log("VideoLogItems: ", VideoLogItems.length);

    let totalPages = Math.floor(VideoLogItems.length / length);
    if (VideoLogItems.length % length > 0) {
      totalPages++;
    }

    let isLast = false;

    let slice;

    if (start + length >= VideoLogItems.length) {
      console.log('start + length = ', start + length);
      slice = VideoLogItems.slice(start);
      isLast = true;
    } else {
      slice = VideoLogItems.slice(start, start + length);
    }
    const page = {
      videoLogItems: slice,
      start: start,
      length: length,
      totalPages: totalPages,
      isLast: isLast
    };
    return res.send(page);
  }
}

export default postsController;
