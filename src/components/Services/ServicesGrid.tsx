import { services } from "../../helpers/constants";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaDumbbell } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesGrid = () => {
  return (
    <div className="relative w-4/5 grid md:grid-cols-2 lg:grid-cols-3 bg-transparent">
      <FaDumbbell className="hidden md:block absolute top-6 left-0 -translate-y-40 -translate-x-32 h-48 w-48 text-emerald-200/50 -rotate-45" />
      {services.map((service, i) => {
        return (
          <motion.div
            key={service.id}
            className=" flex items-start gap-4 pt-6 pb-8 px-2 sm:px-6 bg-white hover:bg-emerald-200/20 transition-colors group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3, delay: i * 0.1 },
              },
            }}
          >
            <div className="pb-4 h-24 w-24">
              <img
                src={service.icon}
                alt=""
                className="h-full opacity-70 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col text-left">
              <p className="font-montserrat font-semibold text-[18px]">
                {service.name}
              </p>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                unde accusantium laudantium.
              </p>
              <div className="flex gap-2 items-center paragraph text-emerald-900/50 border-none text-left cursor-pointer group-hover:text-emerald-900 group-hover:underline">
                Learn More <HiArrowLongRight />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
export default ServicesGrid;
