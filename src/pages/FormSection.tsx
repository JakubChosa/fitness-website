import trainer2 from "../assets/trainer2.jpg";
import Form from "../components/Form";

const FormSection = () => {
  return (
    <section id="contact" className="relative">
      <div className="circle sm:block bottom-0 left-1/2 -translate-x-1/2 bg-emerald-900 animation-delay-1000 opacity-50 -z-10" />
      <div className="circle sm:block top-1/3 left-0 lg:top-0  bg-emerald-200  -translate-y-20 opacity-50 -z-10" />
      <h2 className="heading2 text-neutral-900 text-center">
        Do you have some questions?
      </h2>
      <div className="section gap-10 py-24">
        <div className="bg-emerald-900 p-8 rounded-lg">
          <p className="paragraph font-montserrat text-[19px] text-neutral-50 text-center opacity-100">
            What do you want to know ?
          </p>
          <p className="paragraph my-4 text-neutral-50 text-center">
            Ask us anything you want! We will provide answer within 48hrs.
          </p>
          {/* FORM */}
          <Form />
        </div>
        <div className="relative w-full max-w-[600px] lg:w-1/2">
          <div className="flexCenter absolute inset-0 p-10 bg-gradient-to-t from-neutral-900 to-transparent text-white/90 rounded-lg">
            <div className="self-end">
              <p className="paragraph">Personal Trainer - John Doe</p>
              <p className="paragraph leading-6 text-gray-300">
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde iusto debitis quam accusantium saepe."
              </p>
            </div>
          </div>
          <img
            src={trainer2}
            alt=""
            className="max-h-[500px] rounded-lg object-scale-down"
          />
        </div>
      </div>
    </section>
  );
};
export default FormSection;
