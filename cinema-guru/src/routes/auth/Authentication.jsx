import Button from '@mui/material/Button';
import Login from './Login'; // Update the path according to your file structure
import PropTypes from 'prop-types';
import { useState } from 'react';
import Register from './Register';

const Authentication = () => {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => setSwitch(true);
  const handleSignUp = () => setSwitch(false);

  return (
    <div>
      <div>
        <Button variant={_switch ? 'contained' : 'outlined'} onClick={handleSignIn}>
          Sign In
        </Button>
        <Button variant={!_switch ? 'contained' : 'outlined'} onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
      <form>
        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          // Placeholder for the "Sign Up" form component
          // You would include a similar component for registration here
          <Register />
        )}
      </form>
    </div>
  );
};

Authentication.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
    setUserUsername: PropTypes.func.isRequired,
};

export default Authentication;
