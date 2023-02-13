import { useModalContext } from "../context/ModalContext";

type Props = { children: React.ReactNode; color?: "dark" };
const CTA = ({ children, color }: Props) => {
  const appContext = useModalContext();
  if (!appContext) return null;
  const { toggleModal } = appContext;
  return (
    <button
      onClick={toggleModal}
      className={`bg-neutral-50 text-black ${
        color ? "bg-emerald-900 text-white" : ""
      } text-[16px] font-montserrat font-semibold px-4 py-2 rounded-2xl hover:shadow-2xl hover:scale-105 duration-200`}
    >
      {children}
    </button>
  );
};

export default CTA;
