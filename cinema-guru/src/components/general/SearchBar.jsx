import InputBase from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = ({ title, setTitle }) => {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <StyledInput
      type="text"
      value={title}
      onChange={handleInput}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      placeholder="Search..."
      fullWidth
      sx={{ borderRadius: '50px', padding: '10px 20px', border: '1px solid #ccc' }}
    />
  );
};

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
};

// Styled component for the search input
const StyledInput = styled(InputBase)`
  border-radius: 50px; /* gives you fully rounded ends */
  padding: 10px 20px; /* adjust padding as needed */
  border: 1px solid #ccc; /* a light grey border */
  width: 100%;

  &:focus {
    border-color: #80bdff; /* color when the input is focused */
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  &::before {
    content: none; /* Removes the underline on the normal state */
  }

  &::after {
    content: none; /* Removes the underline on the focus state */
  }

  &:hover:not(.Mui-disabled)::before {
    border-bottom: none; /* Removes the hover effect */
  }
`;

export default SearchBar;
