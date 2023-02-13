import { hero1, hero2 } from "../assets";

const HeroImages = () => {
  return (
    <>
      <article className="hidden sm:block relative w-full max-w-[460px] max-h-[500px]">
        {/* blurry divs*/}
        <div className="circle top-0 -left-4  bg-white  -translate-y-20 animation-delay-1000" />
        <div className="circle top-0 -right-20  bg-emerald-200  -translate-y-20 " />
        <div className="circle bottom-0 right-0  bg-neutral-100  translate-x-20 animation-delay-500" />
        {/* content */}
        <div className="h-[550px]">
          <div className="absolute left-0 flexCenter flex-col">
            <p className="relative top-10 z-20 bg-neutral-50 rounded-lg text-center font-semibold w-48 py-2 shadow-reverse  border-b-4 border-emerald-200 opacity-90">
              Lose Weight
            </p>
            <img
              src={hero1}
              alt="woman doing crunches"
              className="rounded-hero1 max-h-[400px]"
            />
          </div>
          <div className="absolute right-0 flexCenter flex-col">
            <img
              src={hero2}
              alt="man doing pull-ups"
              className="rounded-hero2 max-h-[400px]"
            />
            <p className="relative bottom-10 z-20 bg-neutral-50 text-center  font-semibold w-48 py-2 rounded-lg shadow-reverse border-b-4 border-emerald-200 opacity-90">
              Gain Strength
            </p>
          </div>
        </div>
      </article>
      <article className="sm:hidden relative max-w-[460px] max-h-[400px]">
        <div className="flexCenter flex-col mx-auto">
          <img
            src={hero2}
            alt="man doing pull-ups"
            className="rounded-hero2 max-h-[340px]"
          />
          <p className="relative bottom-10 z-20 bg-neutral-50 text-center  font-semibold w-48 py-2 rounded-lg shadow-reverse border-b-4 border-emerald-200">
            Gain Strength
          </p>
        </div>
      </article>
    </>
  );
};
export default HeroImages;
