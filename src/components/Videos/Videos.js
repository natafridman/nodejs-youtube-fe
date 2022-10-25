import { useEffect, useState } from 'react';
import { AuthTokenExists, GetBaseUrl } from '../../utils/Login.utils';
import GetVideos, { DeleteVideo } from './Videos.controller'

function Videos({ isProfile }) {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function _GetVideos() {
      const AllVideos = await GetVideos(setError, isProfile);
      if (!AllVideos) return;

      setVideos(AllVideos);
    }

    if ((AuthTokenExists() && isProfile) || !isProfile)
      _GetVideos();
  }, []);

  const goToVideo = (videoID) => {
    window.location.href = GetBaseUrl() + "Video/" + videoID;
  }

  const deleteVideo = async (videoID) => {
    setError('Deleting...')

    const deleteResponse = await DeleteVideo(videoID, setError);
    if (!deleteResponse) return;

    document.getElementById(videoID).style.display = "none";

    setError('Deleted')
  }

  return (
    <div className='videos-table'>
      {videos.map(v => (
        <div className='video-card card' key={v.id} id={v.id}>
          {(isProfile) ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash video-delete-icon" viewBox="0 0 16 16" onClick={() => deleteVideo(v.id)} >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
          ) : ("")}
          <img onClick={() => goToVideo(v.id)} src="https://d500.epimg.net/cincodias/imagenes/2019/04/15/lifestyle/1555337026_160009_1555337208_noticia_normal.jpg" className="card-img-top video-thum" alt="..." />
          <div className="card-body">
            <small className="">{v.owner}</small>
            <h5 className="card-title">{v.title}</h5>
            <p className="card-text">This should be the description of the video. The duration is {v.duration} seconds. I may convert seconds to HH:ss in the future.</p>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Videos;
