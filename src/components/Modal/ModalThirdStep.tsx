import { useModalContext } from "../../context/ModalContext";
import { motion } from "framer-motion";

const ModalThirdStep = () => {
  const appContext = useModalContext();
  if (!appContext) return null;
  const {
    state: {
      formData: { fullName, email, phone },
      serviceTime,
    },
  } = appContext;

  const payment = serviceTime.split("-");
  return (
    <motion.div
      className="w-full grid gap-6 md:grid-cols-1 max-w-[450px] items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="paragraph text-[22px] font-montserrat font-semibold">
        Confirmation
      </p>
      <p className="paragraph ">Double Check if everything is correct!</p>
      <div className="rounded-md overflow-hidden divide-y-[1px] divide-neutral-300">
        <div className="bg-neutral-100 p-2 sm:px-4 flexBetween">
          <p className="paragraph font-montserrat opacity-90">Name: </p>
          <p className="paragraph font-semibold ml-2">{fullName}</p>
        </div>
        <div className="bg-neutral-100 p-2 sm:px-4 flexBetween">
          <p className="paragraph font-montserrat opacity-90">Email: </p>
          <p className="paragraph font-semibold ml-2">{email}</p>
        </div>
        <div className="bg-neutral-100 p-2 sm:px-4 flexBetween">
          <p className="paragraph font-montserrat opacity-90">Phone: </p>
          <p className="paragraph font-semibold ml-2">+48 {phone}</p>
        </div>

        <div className="bg-neutral-100 p-2 sm:px-4 flexBetween">
          <p className="paragraph font-montserrat opacity-90">
            Choice:
            <span className="paragraph font-semibold ml-2"> {payment[0]}</span>
          </p>
          <p className="paragraph font-montserrat opacity-90">
            Cost:{" "}
            <span className="paragraph font-semibold ml-2">{payment[1]}</span>
          </p>
        </div>
      </div>
      <p className="paragraph mb-6 ">
        You will get all additional information on your email
      </p>
    </motion.div>
  );
};
export default ModalThirdStep;
