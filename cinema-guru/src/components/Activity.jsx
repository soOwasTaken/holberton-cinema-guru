import PropTypes from "prop-types";
import styled from "styled-components";

const Activity = ({ activity }) => {
  const { user, title, date } = activity;

  return (
    <ActivityStyled>
      <span>{user}</span>
      <span className="highlight"> added </span>
      <strong>{title}</strong>
      <span className="highlight"> to watch later - </span>
      <span>{date}</span>
    </ActivityStyled>
  );
};

Activity.propTypes = {
  activity: PropTypes.shape({
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

const ActivityStyled = styled.li`
  color: var(--color-primary); // Default color for the whole item
  padding: 0.5rem 0; // Adds some space between items

  .highlight {
    color: white; // Specific color for highlighted parts
  }
`;

export default Activity;
