import InputField from "../components/InputField";
import TextAreaField from "./TextAreaField";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setFirstName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }, 3000);
  };
  if (loading === true) {
    console.log("true");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 px-6 md:grid-cols-1 max-w-[450px]items-center">
        <div>
          <InputField
            name="firstName"
            value={firstName}
            label="First Name"
            type="text"
            onChange={(e: React.ChangeEvent) => {
              const target = e.target as HTMLInputElement;
              setFirstName(target.value);
            }}
          />
        </div>
        <div>
          <InputField
            name="email"
            value={email}
            label="Email"
            type="email"
            onChange={(e: React.ChangeEvent) => {
              const target = e.target as HTMLInputElement;
              setEmail(target.value);
            }}
          />
        </div>
        <div>
          <TextAreaField
            name="message"
            value={message}
            label="Your Massage"
            onChange={(e: React.ChangeEvent) => {
              const target = e.target as HTMLInputElement;
              setMessage(target.value);
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="flexCenter w-40 py-2 mx-auto font-semibold bg-emerald-200 rounded-md hover:scale-105 hover:shadow-lg duration-200 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
          <ImSpinner2 className="h-6 w-6 animate-spin text-center" />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};
export default Form;
