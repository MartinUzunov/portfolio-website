import {
  CloseIcon,
  MobileIcon,
  MobileNavbarContainer,
  MobileNavbarLink,
  MobileNavbarWrapper,
  MobileNavbarMenu,
  LogoHolder,
} from "./MobileNavbarElements";
import { NavLogo } from "./../Navbar/NavbarElements";

interface MobileNavbarProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileNavbar = (props: MobileNavbarProps) => {
  return (
    <>
      <MobileNavbarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <MobileIcon onClick={props.toggle}>
          <CloseIcon />
        </MobileIcon>
        <LogoHolder>
          <NavLogo width="15em" height="10em" to="/" />
        </LogoHolder>
        <MobileNavbarWrapper>
          <MobileNavbarMenu>
            <MobileNavbarLink
              to="home"
              spy={true}
              smooth={true}
              onClick={props.toggle}
              offset={-80}
            >
              Home
            </MobileNavbarLink>
            <MobileNavbarLink
              to="about"
              spy={true}
              smooth={true}
              onClick={props.toggle}
              offset={-80}
            >
              About
            </MobileNavbarLink>
            <MobileNavbarLink
              to="skills"
              spy={true}
              smooth={true}
              onClick={props.toggle}
              offset={-80}
            >
              Skills
            </MobileNavbarLink>
            <MobileNavbarLink
              to="work"
              spy={true}
              smooth={true}
              onClick={props.toggle}
              offset={-80}
            >
              Work
            </MobileNavbarLink>
            <MobileNavbarLink
              to="contact"
              spy={true}
              smooth={true}
              onClick={props.toggle}
              offset={-80}
            >
              Contact
            </MobileNavbarLink>
          </MobileNavbarMenu>
        </MobileNavbarWrapper>
      </MobileNavbarContainer>
    </>
  );
};

export default MobileNavbar;
