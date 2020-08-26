import React from "react";

const VideoDetail = ({ video }) => {
  if (video == null) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          {/* {video != null ? video.snippet.title : "Loading..."} */}
          {video.snippet.title}
        </h4>
        <p>
          {/* {video != null ? video.snippet.description : ""} */}
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
