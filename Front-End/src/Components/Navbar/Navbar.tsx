import { useCallback } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileMenuIcon,
  NavItem,
  NavLinks,
  NavMenu,
} from "./NavbarElements";

interface NavbarProps {
  toggle: () => void;
}

const Navbar = (props: NavbarProps) => {
  const toTop = useCallback(async () => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={toTop} />
        <MobileMenuIcon onClick={props.toggle}>
          <FaBars />
        </MobileMenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home" spy={true} smooth={true} offset={-80}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about" spy={true} smooth={true} offset={-80}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="skills" spy={true} smooth={true} offset={-80}>
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="work" spy={true} smooth={true} offset={-80}>
              Work
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact" spy={true} smooth={true} offset={-80}>
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
