import { useState } from "react";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  LogoImg,
  HamburgerButton,
  NavbarLinkExtended,
} from "./navbar.style";

import Logo from "../../assets/logo.png";

function Navbar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <NavbarContainer extendNavbar={hamburgerMenu}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink onClick={() => setHamburgerMenu(false)} to="/">
              Home
            </NavbarLink>
            <NavbarLink onClick={() => setHamburgerMenu(false)} to="/products">
              Products
            </NavbarLink>
            <NavbarLink onClick={() => setHamburgerMenu(false)} to="/about">
              About
            </NavbarLink>
            <NavbarLink onClick={() => setHamburgerMenu(false)} to="/contact">
              Contact
            </NavbarLink>
            <HamburgerButton
              onClick={() => {
                setHamburgerMenu((curr) => !curr);
              }}
            >
              {hamburgerMenu ? <>&#10005;</> : <>&#8801;</>}
            </HamburgerButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <LogoImg src={Logo} alt="logo" />
        </RightContainer>
      </NavbarInnerContainer>
      {hamburgerMenu && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended onClick={() => setHamburgerMenu(false)} to="/">
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setHamburgerMenu(false)}
            to="/products"
          >
            Products
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setHamburgerMenu(false)}
            to="/about"
          >
            About
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => setHamburgerMenu(false)}
            to="/contact"
          >
            Contact
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
