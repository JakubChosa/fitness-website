import { useModalContext } from "../../context/ModalContext";

type Props = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
};

const ModalButtons = ({ setCurrentStep, currentStep }: Props) => {
  const appContext = useModalContext();
  if (!appContext) return null;
  const {
    state: {
      formData: { fullName, email, phone },
    },
    confirmPlan,
  } = appContext;
  const next = () => {
    if (currentStep === 3) {
      confirmPlan();
      setCurrentStep(1);
      return;
    }
    setCurrentStep((count) => count + 1);
  };
  const prev = () => {
    setCurrentStep((count) => {
      return count === 1 ? 1 : count - 1;
    });
  };
  const disable =
    !/\S+@\S+/.test(email) || fullName?.length < 6 || !/\d{9}/.test(phone);

  return (
    <div className="flexBetween w-full mt-6">
      <button
        className={`bg-neutral-300 py-2 px-4 rounded-md ${
          currentStep === 1 ? "cursor-not-allowed" : ""
        }`}
        onClick={prev}
        disabled={currentStep === 1}
      >
        Go Back
      </button>
      {currentStep === 3 ? (
        <button
          className={`bg-emerald-900 text-neutral-50 py-2 px-4 rounded-md ${
            disable ? "cursor-not-allowed" : ""
          }`}
          onClick={next}
          disabled={disable}
        >
          Confirm
        </button>
      ) : (
        <button
          className={`bg-emerald-900 text-neutral-50 py-2 px-4 rounded-md ${
            disable ? "cursor-not-allowed" : ""
          }`}
          onClick={next}
          disabled={disable}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default ModalButtons;
