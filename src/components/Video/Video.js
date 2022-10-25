import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import routes from "../../config/routesConfig";
import Videos from "../Videos/Videos";
import { GetVideo } from "../Videos/Videos.controller";

function Video(props) {
  const [error, setError] = useState("");
  const [video, setVideo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function _GetVideo() {
      const video = await GetVideo(setError, id);
      video.createdAt = video.createdAt.slice(0, 16).replace('T', ' ');
      setVideo(video)
    }

    _GetVideo()
  }, [])

  return (
    <div className='video-container'>
      <h1 className="title">{video.title}</h1>
      <div className="video-player-container">
        <video controls muted autoPlay className="video-player">
          <source src={routes.VIDEO_GET + id} type="video/mp4" />
        </video>
        <div className="video-info">
          <h5 className="video-owner">Owner: {video.owner}</h5>
          <h5 className="video-duration">Duration: {video.duration} seconds</h5>
          <h5 className="video-date">Uploaded at: {video.createdAt}</h5>
        </div>
      </div>
    </div>
  );
}

export default Video;
