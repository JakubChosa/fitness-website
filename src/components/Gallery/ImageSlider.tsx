import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
} from "../../assets";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";

const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7];
const startingPosition = 2;

const ImageSlider = () => {
  const [mainImage, setMainImage] = useState<number>(startingPosition);
  const beforeMainImage = mainImage === 0 ? images.length - 1 : mainImage - 1;
  const afterMainImage = mainImage === images.length - 1 ? 0 : mainImage + 1;

  const imagesSliderArray = [beforeMainImage, mainImage, afterMainImage];

  const bigSliderMediaQuery = useMediaQuery("(min-width: 520px)");

  const nextImage = () => {
    setMainImage((count) => {
      return count === images.length - 1 ? 0 : count + 1;
    });
  };
  const prevImage = () => {
    setMainImage((count) => {
      return count === 0 ? images.length - 1 : count - 1;
    });
  };

  return (
    <div className="flexCenter w-full max-w-[740px] lg:basis-3/5 flex-col gap-4 order-2 lg:order-1">
      <div className="hidden lg:block text-center max-w-[500px]">
        <h2 className="heading2 text-neutral-900">Gallery</h2>
        <p className="paragraph mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          officia ratione sed sapiente accusamus cum.
        </p>
      </div>
      <div className="relative flexBetween gap-2 w-full h-[400px]">
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full z-20 hover:scale-110 hover:drop-shadow-lg duration-150"
          onClick={prevImage}
        >
          <FaAngleDoubleLeft />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full z-20 hover:scale-110 hover:drop-shadow-lg duration-150"
          onClick={nextImage}
        >
          <FaAngleDoubleRight />
        </button>
        {/* mapping over 3 images to create slider */}
        {bigSliderMediaQuery ? (
          <>
            {imagesSliderArray.map((image, i) => {
              return (
                <div key={i} className="w-1/3 flexCenter">
                  <AnimatePresence mode="wait">
                    <motion.img
                      src={images[image]}
                      key={images[image]}
                      className="h-full object-scale-down rounded-lg max-h-[400px] saturate-50 hover:filter-none hover:scale-110 hover:z-10 duration-200 cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    />
                  </AnimatePresence>
                </div>
              );
            })}
          </>
        ) : (
          <AnimatePresence mode="wait">
            <motion.img
              src={images[mainImage]}
              className="h-full aspect-4/5 object-cover rounded-lg max-h-[400px] saturate-50 hover:filter-none hover:scale-110 duration-200 cursor-pointer w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
export default ImageSlider;
