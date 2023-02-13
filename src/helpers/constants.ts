import { weight, timer, catering, bananas, plate, watch } from "../assets";
import { facebook, instagram, twitter, linkedin } from "../assets";
const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    id: "1",
    name: "Gym Membership",
    icon: weight,
  },
  {
    id: "2",
    name: "Diet",
    icon: plate,
  },
  {
    id: "3",
    name: "Classes",
    icon: timer,
  },
  {
    id: "4",
    name: "Supplements",
    icon: bananas,
  },
  {
    id: "5",
    name: "Catering",
    icon: catering,
  },
  {
    id: "6",
    name: "Instructor",
    icon: watch,
  },
];

const socialLinks = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export { navLinks, socialLinks, services };
