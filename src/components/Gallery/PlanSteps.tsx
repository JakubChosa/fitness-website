import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import CTA from "../CTA";

const PlanSteps = () => {
  const addOffset = useMediaQuery("(min-width: 760px)");
  const stepPlanDesktop = useMediaQuery("(min-width: 1100px)");

  return !stepPlanDesktop ? (
    <div className="flexCenter flex-col overflow-x-hidden">
      <div className="relative flexCenter flex-col md:flex-row gap-4 rounded-lg p-2 py-10">
        {addOffset && (
          <motion.div
            className="absolute w-[90%] h-[5px] bg-emerald-900 -z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { scale: 0 },
              visible: {
                scale: 1,
                transition: { duration: 0.3, delay: 0.8 },
              },
            }}
          />
        )}
        {steps.map((step) => {
          return (
            <motion.div
              key={step.id}
              className={`flexCenter gap-2 items-start flex-col max-w-[400px] md:max-w-[280px] bg-white p-4 shadow-lg rounded-lg`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50, y: 0 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: (step.id - 1) * 15,
                  transition: { duration: 0.3, delay: step.id * 0.2 },
                },
              }}
            >
              <p className="grid place-items-center bg-emerald-900 w-8 h-8 text-white  font-semibold rounded-full drop-shadow-lg">
                {step.id + 1}
              </p>
              <p className="paragraph font-montserrat border-b-2 border-gray-400/50">
                {step.title}
              </p>
              <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat, mollitia!
              </p>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 mb-10">
        <CTA color="dark">Become Member</CTA>
      </div>
    </div>
  ) : (
    <div className="flexCenter flex-col gap-2 p-2 py-4 basis-2/5 bg-emerald-900 text-white rounded-lg shadow-lg shadow-emerald-700/20 order-2">
      {steps.map((step) => {
        return (
          <motion.div
            key={step.id}
            className={`flexCenter items-start flex-col max-w-[300px] py-2`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: step.id * 50 },
              visible: {
                opacity: 1,
                x: step.id * 30,
                transition: { duration: 0.3, delay: step.id * 0.2 },
              },
            }}
          >
            <p className="grid place-items-center bg-white w-8 h-8 mb-4 text-neutral-900  font-semibold rounded-full drop-shadow-lg">
              {step.id + 1}
            </p>
            <p className="font-montserrat border-b-2 border-gray-400/50">
              {step.title}
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellat, mollitia!
            </p>
          </motion.div>
        );
      })}
      <div className="flex justify-center mx-auto my-4">
        <CTA>Become Member</CTA>
      </div>
    </div>
  );
};
export default PlanSteps;

const steps = [
  {
    id: 0,
    title: "Pick your activity",
  },
  {
    id: 1,
    title: "Choose frequency",
  },
  {
    id: 2,
    title: "Enjoy you time",
  },
];
