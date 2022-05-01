import axios from "axios";

const KEY = "AIzaSyCV5t3ZYuTMHuP5l03M0IQve34p0WHgWPE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
