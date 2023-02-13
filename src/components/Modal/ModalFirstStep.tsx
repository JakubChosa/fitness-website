import InputField from "../InputField";
import { useModalContext } from "../../context/ModalContext";
import { motion } from "framer-motion";

type Props = {};
const ModalFirstStep = (props: Props) => {
  const appContext = useModalContext();
  if (!appContext) return null;
  const {
    state: {
      formData: { fullName, email, phone },
    },
    handleChange,
  } = appContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="grid gap-6 md:grid-cols-1 max-w-[450px] items-center">
        <p className="paragraph text-[22px] font-montserrat font-semibold">
          Personal Info
        </p>
        <p className="paragraph">
          Please Provide your name, email address and phone number
        </p>
        <div>
          <InputField
            name="fullName"
            value={fullName}
            label="Full Name - [min 6 characters]"
            type="text"
            onChange={handleChange}
            color="dark"
          />
        </div>

        <div>
          <InputField
            name="email"
            value={email}
            label="Email"
            type="email"
            onChange={handleChange}
            color="dark"
          />
        </div>
        <div>
          <InputField
            name="phone"
            value={phone}
            label="Phone - [9 numbers]"
            type="text"
            onChange={handleChange}
            color="dark"
          />
        </div>
      </div>
    </motion.form>
  );
};
export default ModalFirstStep;
