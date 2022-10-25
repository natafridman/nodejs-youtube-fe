import { useState } from 'react';
import LoginForm from './components/Login/LoginForm';
import { Logout } from './components/Login/Login.controller'

function App() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="App">
      {(user != "") ? (
        <>
          <div> Welcome {user}</div>
          <button onClick={Logout(setUser, setError)}>Logout</button>
        </>
      ) : (
        <LoginForm error={error} setError={setError} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
