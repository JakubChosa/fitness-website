import { navLinks, socialLinks } from "../helpers/constants";
import logo from "../assets/logo.svg";
import { FaDumbbell } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 p-10">
      <div className="container flexCenter flex-col md:flex-row md:flexBetween gap-10 text-neutral-50">
        <div className=" basis-1/2 md:mt-0">
          <AnchorLink href={`#home`} className="flex gap-2 items-center">
            <img src={logo} alt="" className="h-[24px]" />
            <FaDumbbell className="h-5 w-5 text-emerald-200 " />
          </AnchorLink>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            tempora. Modi vitae eligendi mollitia sapiente, iusto quibusdam
            dolores recusandae maiores!
          </p>
          <p>© FitCity All Rights Reserved.</p>
        </div>
        <div className="flexCenter flex-col gap-2 basis-1/2 md:mt-0">
          <p className="font-montserrat">Links</p>
          <div className="flexBetween md:flex-col gap-2">
            {navLinks.map((link) => (
              <AnchorLink
                key={link.id}
                href={`#${link.id}`}
                className="paragraph hover:scale-110"
                offset="100"
              >
                {link.title}
              </AnchorLink>
            ))}
          </div>
        </div>
        <div className="flexCenter flex-col gap-2 basis-1/2 md:mt-0">
          <p className="font-montserrat">Social Media</p>
          <div className="flexBetween md:flex-col lg:flex-row gap-2">
            {socialLinks.map((link) => (
              <img
                src={link.icon}
                key={link.id}
                className="paragraph cursor-pointer hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
