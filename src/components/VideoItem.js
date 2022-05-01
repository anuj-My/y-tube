import React from "react";

export default function VideoItem({ video, onVideoSelect }) {
  const { title, thumbnails } = video.snippet;

  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
}

// class VideoItem extends React.Component {
//   render() {
//     return <div>VideoItem</div>;
//   }
// }

// export default VideoItem;
