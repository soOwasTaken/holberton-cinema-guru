// react component that returns <Button variant="contained">Contained</Button>
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({
  background: "linear-gradient(45deg, var(--color-primary) 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const ContainedButton = () => {
  return <StyledButton variant="contained">Contained</StyledButton>;
};

export default ContainedButton;
