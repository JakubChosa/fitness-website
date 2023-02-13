import AnchorLink from "react-anchor-link-smooth-scroll";
import HeroImages from "../components/HeroImages";
import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex align-center justify-center bg-emerald-900 min-h-screen"
    >
      <div className="section gap-16 py-16">
        {/* Hero Text */}
        <motion.article
          className="relative text-center lg:text-left max-w-[600px] pt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            },
          }}
        >
          <h1 className="hidden lg:block absolute -top-20 -left-2 font-bold text-[160px] tracking-widest opacity-20 ">
            Health
          </h1>
          <h2 className="heading2">Body Management </h2>
          <p className="paragraph mt-0 text-white opacity-90">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nemo
            modi harum architecto, amet quia dignissimos reprehenderit quos esse
            corporis aperiam, sunt est a iusto?
          </p>
          <hr className="my-6 opacity-20" />
          <AnchorLink
            href={`#services`}
            className="flexCenter gap-2 w-[220px] bg-neutral-50 text-black text-[16px] font-montserrat font-semibold px-4 py-2 mx-auto lg:mx-0 rounded-2xl hover:shadow-2xl hover:scale-105 duration-200"
          >
            Check Activities
            <FaAngleDoubleDown />
          </AnchorLink>
        </motion.article>
        {/* Hero Images */}
        <HeroImages />
      </div>
      <div className="custom-shape-divider-bottom-1675609529">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default Home;
