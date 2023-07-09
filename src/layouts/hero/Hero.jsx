import { HeroImage } from "./image";
// parent padding is p-4
export const HeroSection = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 ">
        <div className="grid-item flex flex-col justify-center lg:p-2 order-2 md:order-1">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-orange-500 text-4xl flex flex-row gap-2">
              PICKFRESH
              <span className="text-xl text-green-400">FLOWERSHOP</span>
            </span>
            <span className="text-3xl font-semibold">
              The freshiest choice for love ones.
            </span>
            <span>
              <button className="bg-orange-400 p-2 transition-all duration-500 hover:scale-110 shadow-2xl hover:rounded-lg ">
                <b className="mx-8 text-white">Shop Now</b>
              </button>
            </span>
          </div>
        </div>
        <div className="grid-item flex flex-col justify-center lg:p-4 shadow-2xl order-1 md:order-2">
          <img src={HeroImage.link} alt="" className="object-cover  " />
        </div>
      </div>
    </>
  );
};
