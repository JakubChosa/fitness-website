import { useEffect, useState } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import logo from "../assets/logo.svg";
import { FaDumbbell } from "react-icons/fa";
import { navLinks } from "../helpers/constants";
import useMediaQuery from "../hooks/useMediaQuery";
import useScrollPosition from "../hooks/useScrollPosition";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "./Link";
import CTA from "./CTA";

const Navbar = () => {
  const [selected, setSelected] = useState("home");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const desktopNavbarSize = useMediaQuery("(min-width: 900px)");
  const isTopOfPage = useScrollPosition();
  const navbarBackground = isTopOfPage ? "" : "bg-emerald-900 shadow-md ";

  useEffect(() => {
    if (desktopNavbarSize) {
      setIsMenuToggled(false);
    }
  }, [desktopNavbarSize]);

  return (
    <nav
      className={`${navbarBackground} fixed top-30 z-30 w-full transparent text-white`}
    >
      <div className="flexBetween container py-6 gap-8">
        <AnchorLink href={`#home`} className="flex gap-2 items-center">
          <img src={logo} alt="" className="h-[24px]" />
          <FaDumbbell className="h-5 w-5 text-emerald-200 " />
        </AnchorLink>
        <div className="flex gap-2"></div>
        {desktopNavbarSize ? (
          <>
            <div className="flexBetween gap-1 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  page={link}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
            <div className="flexBetween gap-2">
              <button className="font-roboto font-normal px-4 py-2 rounded-2xl hover:text-emerald-50">
                sign In
              </button>
              <CTA>Become Member</CTA>
            </div>
          </>
        ) : (
          <button
            className="bg-white text-neutral-800 font-semibold p-1 rounded-lg hover:shadow-sm hover:shadow-emerald-200"
            onClick={() => setIsMenuToggled((prev) => !prev)}
          >
            <HiBars3 className="h-6 w-6" />
          </button>
        )}
      </div>
      {!desktopNavbarSize && (
        <div
          className={`fixed right-0 bottom-0 ${
            isMenuToggled ? "translate-x-0" : "translate-x-full"
          }  grid justify-center items-start pt-36 h-screen w-[320px] bg-emerald-900 drop-shadow-xl translate-right-full duration-200 ease-in-out`}
        >
          <button
            className="absolute right-[15px] top-[25px] bg-white text-neutral-800  font-semibold p-1 rounded-lg hover:shadow-sm hover:shadow-emerald-200"
            onClick={() => setIsMenuToggled((prev) => !prev)}
          >
            <HiOutlineXMark className="h-6 w-6" />
          </button>
          <div className="flexBetween flex-col gap-6 text-lg ">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                page={link}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
            <CTA>Become Member</CTA>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
