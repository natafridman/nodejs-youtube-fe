import '../../styles/App.css'
import { GetBaseUrl, IsUserLogedIn } from '../../utils/Login.utils'
import { Logout } from '../Login/Login.controller';

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NataYT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="../">Index</a>
                            </li>
                            {(IsUserLogedIn()) ?
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href={GetBaseUrl() + "Profile"} tabIndex="-1">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='#' tabIndex="-1" onClick={Logout}>Logout</a>
                                    </li>
                                </>
                                :
                                <li className="nav-item">
                                    <a className="nav-link" href="Login" tabIndex="-1">Login</a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;