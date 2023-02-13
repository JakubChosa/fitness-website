import { useModalContext } from "../../context/ModalContext";

type Props = { option: string; selected?: boolean; name: string };
const OptionContainer = ({ option, selected, name }: Props) => {
  const appContext = useModalContext();
  if (!appContext) return null;
  const { handlePlanOptions } = appContext;
  const payment = option.split("-");
  return (
    <button
      name={name}
      value={option}
      className={`w-1/3 h-20 sm:h-16 border-2 border-emerald-900 rounded-lg shadow-md hover:ring-2 ring-emerald-200 ${
        selected ? "bg-emerald-900 text-white border-none" : ""
      }`}
      onClick={handlePlanOptions}
    >
      {name === "service" ? (
        option
      ) : (
        <>
          {payment[0]}
          <br />
          {payment[1]}
        </>
      )}
    </button>
  );
};
export default OptionContainer;
