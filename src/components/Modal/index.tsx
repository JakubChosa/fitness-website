import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "../../context/ModalContext";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import ModalFirstStep from "./ModalFirstStep";
import ModalSecondStep from "./ModalSecondStep";
import ModalThirdStep from "./ModalThirdStep";
import ModalButtons from "./ModalButtons";

const Modal = () => {
  const appContext = useModalContext();
  if (!appContext) return null;
  const { state, toggleModal } = appContext;
  const [currentStep, setCurrentStep] = useState(1);

  const biggerModal = useMediaQuery("(min-width: 768px)");

  return (
    <AnimatePresence mode="wait">
      {state?.modalOn && (
        <motion.article
          className="fixed inset-0 max-w-screen h-screen grid place-items-center p-2 bg-black/50 z-30"
          initial="hidden"
          animate="visible"
          variants={backgroundVariant}
          onClick={toggleModal}
        >
          {biggerModal ? (
            <motion.div
              className="flexBetween h-[500px] max-w-[700px] bg-white rounded-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariant}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
              }}
            >
              <div className="basis-1/3 h-full p-6 bg-modal-background bg-center bg-no-repeat bg-cover">
                <div className="flex flex-col justify-start gap-2 text-white">
                  {modalSteps.map((step) => {
                    const { id, title } = step;
                    return (
                      <div key={id} className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full border-[1px] border-white grid place-items-center font-semibold ${
                            currentStep === id
                              ? "bg-emerald-100 text-neutral-900"
                              : ""
                          }`}
                        >
                          {id}
                        </div>
                        <div className="flex items-start justify-center flex-col">
                          <p className="text-[14px] text-gray-300">STEP {id}</p>
                          <p>{title}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative flexCenter flex-col basis-2/3 py-6 px-10 h-full">
                <button
                  className="absolute right-[10px] top-[10px] bg-white text-neutral-800  font-semibold p-1 rounded-lg hover:scale-110"
                  onClick={toggleModal}
                >
                  <HiOutlineXMark className="h-8 w-8" />
                </button>
                <div className="w-[400px]"></div>
                {currentStep === 1 && <ModalFirstStep />}
                {currentStep === 2 && <ModalSecondStep />}
                {currentStep === 3 && <ModalThirdStep />}
                <ModalButtons
                  setCurrentStep={setCurrentStep}
                  currentStep={currentStep}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="relative flexBetween flex-col min-w-[280px] max-w-[400px] p-4 pt-20 bg-neutral-100 rounded-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariant}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
              }}
            >
              <div className="absolute top-0 right-0 left-0 w-full p-6 bg-modal-background bg-center bg-no-repeat bg-cover">
                <div className="flexCenter items-start gap-2 h-[100px] text-white">
                  {modalSteps.map((step) => {
                    const { id } = step;
                    return (
                      <div
                        className={`w-8 h-8 rounded-full border-[1px] border-white grid place-items-center font-semibold ${
                          currentStep === id
                            ? "bg-emerald-100 text-neutral-900"
                            : ""
                        }`}
                        key={id}
                      >
                        {id}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-4 bg-white rounded-md z-10">
                {currentStep === 1 && <ModalFirstStep />}
                {currentStep === 2 && <ModalSecondStep />}
                {currentStep === 3 && <ModalThirdStep />}
                <ModalButtons
                  setCurrentStep={setCurrentStep}
                  currentStep={currentStep}
                />
              </div>
            </motion.div>
          )}
        </motion.article>
      )}
    </AnimatePresence>
  );
};
export default Modal;

const modalSteps = [
  { id: 1, title: "YOUR INFO" },
  { id: 2, title: "SELECT PLAN" },
  { id: 3, title: "CONFIRM" },
];

const modalVariant = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.3,
      duration: 0.3,
    },
  },
  exit: { scale: 0, transition: { duration: 0.3 } },
};

const backgroundVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
