import { useState, useEffect } from "react";
import youtubeapi from "../apis/youtubeapi";

export default function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtubeapi.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  return [videos, search];
}
