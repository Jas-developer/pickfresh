import { HeroImage } from "./image";
// parent padding is p-4
export const HeroSection = ({ say }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 ">
        <div className="grid-item flex flex-col justify-center p-4 lg:p-2 order-2 md:order-1">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-orange-500 md:text-4xl lg:text-6xl text-2xl flex flex-row gap-2 cursor-pointer">
              PICKFRESH
              <span className="md:text-xl lg:text-2xl text-lg text-green-400 underline cursor-pointer">
                <a href="">FLOWERSHOP</a>
              </span>
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold cursor-pointer">
              {say}
            </span>
            <span>
              <button className="bg-orange-400 p-1 md:p-2 transition-all duration-500  shadow-2xl hover:rounded-lg hover:scale-110 ">
                <a href="">
                  <b className="mx-4 text-white ">Shop Now</b>
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
