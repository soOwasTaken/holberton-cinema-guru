import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Optionally, you can style the components using styled-components
const StyledTextField = styled(TextField)`
  margin-bottom: 1rem; /* Adds space below each text field */
`;

const LoginButton = styled(Button)`
  /* Style your button as you like */
`;

const Login = ({ username, password, setUsername, setPassword }) => {
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log('Logging in with', username, password);
    // Potentially call a login function passed via props or from context
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledTextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
      />
      <StyledTextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
      />
      <LoginButton
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Log In
      </LoginButton>
    </form>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default Login;
