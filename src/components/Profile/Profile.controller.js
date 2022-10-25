import routes from "../../config/routesConfig";

export const UploadVideo = async (file, setError) => {
    try {
        var formdata = new FormData();
        formdata.append("file", file);

        const response = await fetch(routes.VIDEO_UPLOAD, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            },
            body: formdata
        });

        console.log('c')
        const responseJson = await response.json();
        console.log(responseJson)

        if (!response) {
            setError("Error connecting to backend");
            return false;
        }          
        
        if (response.status != 200) {
            setError(responseJson.msg);
            return false;
        }

        return responseJson;
    } catch (e) {
        setError("Error connecting to backend: " + e.message);

        return false; 
    }
}

export default UploadVideo;