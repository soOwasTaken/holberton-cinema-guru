import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// You can use styled-components to style TextField and Button or use them directly

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem; // Adds space below each text field
`;

const SubmitButton = styled(Button)`
  // Add your button styles here if necessary
`;

const Register = ({ username, password, setUsername, setPassword }) => {
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to handle the registration process
    console.log('Register with', username, password);
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
      <SubmitButton
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Register
      </SubmitButton>
    </form>
  );
};

Register.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
};

export default Register;
