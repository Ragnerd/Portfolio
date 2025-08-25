import Link from "next/link";
import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Ragnerd" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/moinulfaisal/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@moinulfaisal" },
  { icon: <FaTwitter />, path: "https://x.com/faisal_akondo" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
