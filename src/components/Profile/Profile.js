import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetBaseUrl } from "../../utils/Login.utils";
import Videos from "../Videos/Videos";
import UploadVideo from "./Profile.controller";

function Profile() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [error, setError] = useState("");

    function openFileUpload() {
        document.getElementById("hiddenFile").click();
    }

    const changeHandler = async e => {
        e.preventDefault();

        setIsFileSelected(true);

        setError('Uploading...')

        const uploadResponse = await UploadVideo(e.target.files[0], setError);
        if (!uploadResponse) return;

        setError('Uploaded :)')

        refreshPage();
    }

    const navigate = useNavigate();

    const refreshPage = () => {
        navigate(0);
    }

    return (
        <div className='profile-container'>
            <div className="profile-title-container">
                <h1 className="title profile-title">Hello, {sessionStorage.getItem('username')}!</h1>
                {(!isFileSelected) ? (
                    <>
                        <button onClick={() => openFileUpload()} type="button" className="btn btn-light upload-button">Upload</button>
                        <input type="file" id="hiddenFile" style={{ display: 'none' }} onChange={changeHandler} />
                    </>
                ) : ("")
                }
                <small className="profile-error-message">{error}</small>
            </div>

            <Videos isProfile={true} />
        </div>
    );
}

export default Profile;
