import { HeroImage } from "./image";
// parent padding is p-4
export const HeroSection = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 ">
        <div className="grid-item flex flex-col justify-center lg:p-2 order-2 md:order-1">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-orange-500 md:text-4xl text-2xl flex flex-row gap-2">
              PICKFRESH
              <span className="md:text-xl text-lg text-green-400 underline">
                FLOWERSHOP
              </span>
            </span>
            <span className="text-2xl md:text-3xl font-semibold">
              The freshiest choice for love ones.
            </span>
            <span>
              <button className="bg-orange-400 p-2 transition-all duration-500  shadow-2xl hover:rounded-lg ">
                <a href="">
                  <b className="mx-8 text-white transition duration-500 hover:scale-125">
                    Shop Now
                  </b>
                </a>
              </button>
            </span>
          </div>
        </div>
        <div className="grid-item flex flex-col justify-center lg:p-4  order-1 md:order-2">
          <img
            src={HeroImage.link}
            alt=""
            className="object-cover rounded-xl "
          />
        </div>
      </div>
    </>
  );
};
