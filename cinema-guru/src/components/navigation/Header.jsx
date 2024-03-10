import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout"; // Import a logout icon from MUI
import PropTypes from "prop-types";

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: var(--color-background-dark);
  color: white;
  padding: 1rem;
  width: 100%;
  height: 8vh;
`;

const Avatar = styled.img`
  border-radius: 50%; // Gives the avatar image rounded corners
  height: 6vh;
  width: 6vh;
  border: 2px solid var(--color-primary);
`;

const WelcomeMessage = styled.p`
  margin: 0;
  padding: 0;
`;

const LogoutButton = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--color-primary);
  &:hover {
    opacity: 0.8;
  }
`;

const NavbarEnd = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 30vw;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const NavbarStart = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem("accessToken"); // Assuming 'accessToken' is the key for the stored token
    setIsLoggedIn(false);
  };

  return (
    <Nav>
      <NavbarStart>
        <h2>Cinema Guru</h2>
      </NavbarStart>
      <NavbarEnd>
        <Avatar src="https://picsum.photos/100/100" alt="User Avatar" />
        <WelcomeMessage>Welcome, {userUsername}</WelcomeMessage>
        <LogoutButton onClick={logout}>
          <LogoutIcon /> Logout
        </LogoutButton>
      </NavbarEnd>
    </Nav>
  );
};

Header.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Header;
