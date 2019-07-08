// import VideoLogItems from "../db/videoLog";

class postsController {
  static getVideoLog(req, res) {
    var fs = require("fs");
    var obj = JSON.parse(fs.readFileSync("./db/videosLog.json", "utf8"));
    return res.send(obj);
  }
}

export default postsController;
