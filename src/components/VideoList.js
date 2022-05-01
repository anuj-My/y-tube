import React from "react";
import VideoItem from "./VideoItem";
export default function VideoList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    const { id } = video;
    return (
      <VideoItem onVideoSelect={onVideoSelect} key={id.videoId} video={video} />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
}
