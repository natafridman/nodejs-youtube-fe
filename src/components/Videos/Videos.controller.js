import routes from '../../config/routesConfig';

export const GetVideos = async (setError, isProfile) => {
    try {
        const videosResponse = await fetch((isProfile) ? routes.VIDEOS_GETFROMUSER : routes.VIDEOS_GETALL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        });
        const videosResponseJson = await videosResponse.json();

        if (!videosResponse) {
            setError("Error connecting to backend");
            return false;
        }
        
        if (videosResponse.status !== 200) {
            setError(videosResponseJson.msg);
            return false;
        }

        return videosResponseJson;
    } catch (e) {
        setError("Error connecting to backend: " + e.message);

        return false; 
    }
}

export const GetVideo = async (setError, videoID) => {
    try {
        const videoResponse = await fetch(routes.VIDEO_GET_ONE + videoID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        });
        const videoResponseJson = await videoResponse.json();

        if (!videoResponse) {
            setError("Error connecting to backend");
            return false;
        }
        
        if (videoResponse.status !== 200) {
            setError("Error getting the video " + videoResponseJson.msg);
            return false;
        }

        return videoResponseJson;
    } catch (e) {
        setError("Error connecting to backend: " + e.message);

        return false; 
    }
}

export const DeleteVideo = async (videoID, setError) => {
    try {
        const response = await fetch(routes.VIDEO_DELETE + videoID, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        });
        const responseJson = await response.json();
        
        if (!response) {
            setError("Error connecting to backend");
            return false;
        }          
        
        if (response.status != 201) {
            setError(responseJson.msg);
            return false;
        }

        return responseJson;
    } catch (e) {
        setError("Error connecting to backend: " + e.message);

        return false; 
    }
}

export default GetVideos;