import { formatCurrency } from "../../helpers/helperFunc";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";

const ServiceConsultation = () => {
  const lgSize = useMediaQuery("(min-width: 1100px)");

  const capitalizeWord = (word: string) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  };

  return (
    <motion.div
      className="flex flex-col gap-4 min-w-[200px] bg-emerald-700 p-6 rounded-lg shadow-2xl text-neutral-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { scale: 0.2, y: 200 },
        visible: {
          scale: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100, duration: 0.4 },
        },
      }}
    >
      <p className="paragraph text-center leading-6 text-emerald-50 font-semibold">
        Buy <br />
        Consultation!
      </p>
      {lgSize ? (
        consultations.map((item) => (
          <p
            key={item.name}
            className="paragraph text-left text-neutral-50 font-semibold text-[19px]"
          >
            {`${capitalizeWord(item.name)} - `}
            <span className="text-[17px] text-neutral-50/90">
              {formatCurrency(item.price)}
            </span>
          </p>
        ))
      ) : (
        <div className="flexBetween divide-x-2 divide-white/20">
          {consultations.map((item) => (
            <p
              key={item.name}
              className="paragraph px-2 sm:px-6 text-center text-neutral-50 font-semibold text-[19px]"
            >
              {capitalizeWord(item.name)}: <br />
              <span className="text-[17px] text-neutral-50/90">
                {formatCurrency(item.price)}
              </span>
            </p>
          ))}
        </div>
      )}

      <HiOutlineArrowDownCircle className="h-8 w-8 mx-auto drop-shadow-lg rounded-full animate-bounce" />
      <button className="bg-white rounded-md text-emerald-900 py-2 font-semibold hover:shadow-lg ">
        Check it out
      </button>
    </motion.div>
  );
};

const consultations = [
  { name: "training", price: 69 },
  { name: "diet", price: 79 },
  { name: "classes", price: 49 },
];

export default ServiceConsultation;
