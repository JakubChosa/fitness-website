import { ImageSlider, PlanSteps } from "../components/Gallery";

const Gallery = () => {
  return (
    <section id="gallery" className="relative pb-24 md:pt-10">
      <div className="section gap-10">
        <h2 className="lg:hidden heading2 text-neutral-900 text-center">
          Gallery
        </h2>
        <ImageSlider />
        <PlanSteps />
      </div>
      <div className=" absolute bottom-24 w-screen h-[450px] bg-neutral-800 -z-10"></div>
    </section>
  );
};
export default Gallery;
