import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '5em')};
  display: flex;
  flex-direction: column;
  background-color: black;

  @media (min-width: 45em) {
    height: 5em;
  }
`;

export const LeftContainer = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
  padding-left: 2%;
  background-color: red;
`;

export const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: space-between;
  background-color: salmon;
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 45em) {
    display: none;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 1em;

  @media (max-width: 45em) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 1em;
`;

export const LogoImg = styled.img`
  margin: 0.4em;
  max-width: 14em;
  height: auto;
`;

export const HamburgerButton = styled.button`
  width: 1em;
  height: auto;
  background: none;
  border: none;
  color: white;
  font-size: 4em;
  cursor: pointer;

  @media (min-width: 45em) {
    display: none;
  }
`;
