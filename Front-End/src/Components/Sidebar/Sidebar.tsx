import { Line, SidebarBody, SocialIcon } from "./SidebarElements";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const iconSize = 30;

const Sidebar = () => {
  return (
    <>
      <SidebarBody>
        <SocialIcon href="mailto:martiuz77@gmail.com">
          <FiMail size={iconSize} />
        </SocialIcon>
        <SocialIcon href="https://github.com/MartinUzunov">
          <FiGithub size={iconSize} />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/martin-uzunov/">
          <FiLinkedin size={iconSize} />
        </SocialIcon>
        <Line />
      </SidebarBody>
    </>
  );
};

export default Sidebar;
