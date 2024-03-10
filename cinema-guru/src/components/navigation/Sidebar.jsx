import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Activity from "../Activity";
import styled from "styled-components";

const activities = [
    {
      user: "Atef",
      title: "The Murder House",
      date: "2022-03-28",
    },
    {
      user: "Mina",
      title: "Stranger Things",
      date: "2022-05-16",
    },
    {
      user: "Juan",
      title: "Breaking Bad",
      date: "2022-04-10",
    },
    {
      user: "Sofia",
      title: "Game of Thrones",
      date: "2022-06-01",
    },
    {
      user: "Liam",
      title: "The Crown",
      date: "2022-07-21",
    },
    {
      user: "Emma",
      title: "The Witcher",
      date: "2022-08-15",
    },
    {
      user: "Oliver",
      title: "Black Mirror",
      date: "2022-09-05",
    },
    {
      user: "Ava",
      title: "The Mandalorian",
      date: "2022-10-12",
    },
    {
      user: "William",
      title: "The Umbrella Academy",
      date: "2022-11-03",
    },
    {
      user: "Isabella",
      title: "The Boys",
      date: "2022-12-25",
    }
  ];

  const SideBar = () => {
    const [small, setSmall] = useState(true); // State to handle the sidebar size
  
    // Toggle function to switch between small and large sidebar
    const toggleSidebar = () => {
      setSmall(!small);
    };
  
    return (
      <SidebarContainer small={small} onClick={toggleSidebar}>
        <SidebarNavButtons>
          <li>
            {/* Icon for Home */}
            <span>{!small && "Home"}</span>
          </li>
          <li>
            {/* Icon for Favorites */}
            <span>{!small && "Favorites"}</span>
          </li>
          <li>
            {/* Icon for Watch Later */}
            <span>{!small && "Watch Later"}</span>
          </li>
        </SidebarNavButtons>
        {!small && (
          <ActivityContainer>
            <ActivitiesTitle>
              <strong>Activities</strong>
            </ActivitiesTitle>
            {activities.map((activity, index) => (
              <Activity key={index} activity={activity} />
            ))}
          </ActivityContainer>
        )}
      </SidebarContainer>
    );
  };

  const SidebarContainer = styled.nav`
  background: var(--color-primary);
  width: ${({ small }) => (small ? '75px' : '250px')};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  transition: width 0.3s ease;
`;

const SidebarNavButtons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  li {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-background-light);
    }

    span {
      margin-left: 10px;
    }
  }
`;

const ActivitiesTitle = styled.h3`
  margin: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  text-decoration: underline;
`;

const ActivityContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem;
  box-sizing: border-box;
  background-color: var(--color-background-light);
`;

export default SideBar;
