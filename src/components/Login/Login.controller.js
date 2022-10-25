import routes from '../../config/routesConfig'
import { GetBaseUrl } from '../../utils/Login.utils';

export const Login = async (details, setUser, setError) => {
    try {
        const loginResponse = await fetch(routes.AUTH_SIGNIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        });
        const loginResponseJson = await loginResponse.json();

        if (!loginResponse) {
            setError("Error connecting to backend");
            return false;
        }          
        
        if (loginResponse.status != 200) {
            setError(loginResponseJson.msg);
            return false;
        }

        sessionStorage.setItem("token", loginResponseJson.token);
        sessionStorage.setItem("username", details.username);

        return true;
    } catch (e) {
        setError("Error connecting to backend: " + e.message);

        return false; 
    }
}

export const Logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");

    window.location.href = GetBaseUrl();
}

export default Login;