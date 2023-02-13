import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: { id: string; title: string };
  selected: string;
  setSelected: (value: string) => void;
};

const Link = ({ page, selected, setSelected }: Props) => {
  const { id, title } = page;
  return (
    <AnchorLink
      href={`#${id}`}
      onClick={() => setSelected(id)}
      className={`text-[16px] lg:text-[18px] text-white font-normal font-roboto py-2 px-4 rounded-md hover:ring-1 duration-200 ring-current tracking-wide`}
      offset="88"
    >
      {title}
    </AnchorLink>
  );
};
export default Link;
