import { ServiceConsultation, ServicesGrid } from "../components/Services";

const ServiceOptions = () => {
  return (
    <section id="services" className="py-24">
      <h2 className="heading2 text-neutral-900 text-center mb-16">
        Our Services
      </h2>
      <div className="section gap-8">
        <ServicesGrid />
        <ServiceConsultation />
      </div>
    </section>
  );
};
export default ServiceOptions;
