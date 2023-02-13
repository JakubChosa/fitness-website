import { ServiceOptions, ServiceTimeChoice } from "../../context/types";
import OptionContainer from "./OptionContainer";
import { useModalContext } from "../../context/ModalContext";
import { motion } from "framer-motion";

type Props = {};
const ModalSecondStep = (props: Props) => {
  const appContext = useModalContext();
  if (!appContext) return null;
  const {
    state: { service, serviceTime },
  } = appContext;
  return (
    <motion.div
      className="flexCenter items-start flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <p className="paragraph text-[22px] font-montserrat font-semibold text-left">
        Your Plan
      </p>
      <p className="paragraph">
        Please Provide your name, email address and phone number
      </p>
      <p className="paragraph font-semibold font-montserrat">
        What option Are you choosing ?
      </p>
      <div className="w-full flexCenter gap-2">
        {Object.values(ServiceOptions).map((option) => {
          const selected = service === option;
          return (
            <OptionContainer
              key={option}
              name="service"
              option={option}
              selected={selected}
            />
          );
        })}
      </div>
      <p className="paragraph font-semibold font-montserrat">
        What time do you prefer ?
      </p>
      <div className="w-full flexCenter gap-2">
        {Object.values(ServiceTimeChoice).map((option) => {
          const selected = serviceTime === option;
          return (
            <OptionContainer
              key={option}
              name="serviceTime"
              option={option}
              selected={selected}
            />
          );
        })}
      </div>
    </motion.div>
  );
};
export default ModalSecondStep;
