import { products, sale } from "../layouts/hero/image";

// BRIGHTEN UP HER SMILE INTRO
export const Smile = ({ text, say }) => {
  return (
    <section>
      <div className="grid grid-cols-1 mt-12 py-4">
        <div className="grid-item flex flex-col gap-2 bg-black p-4 rounded-lg">
          <span className="md:text-3xl text-2xl lg:text-4xl font-bold text-orange-500">
            {text}
          </span>
          <span className="font-semibold lg:text-2xl text-white">{say}</span>
        </div>
      </div>
    </section>
  );
};

//SALE SECTION
export const SaleSection = ({ title, say }) => {
  return (
    <section>
      <div className="grid md:grid-cols-3 bg-black mt-4 rounded-lg">
        <div className="grid-item col-span-2 ">
          <div className="flex flex-col py-3  p-4 rounded-lg">
            <span className="text-orange-500 lg:text-3xl text-xl font-bold ">
              {title}
            </span>
            <span className="text-white lg:text-lg font-semibold">{say}</span>
          </div>
        </div>
        <div className="grid-item text-white  col-span-1">
          <div className="flex py-3 md:justify-end justify-start p-4">
            <a href="">
              <button className=" md:mt-12 lg:mx-10 bg-orange-400 p-1 md:p-2 transition-all duration-500 hover:rounded-lg hover:scale-105">
                <b className="mx-4">Order now</b>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// SALE PRODUCTS SECTION
export const SaleProducts = ({ season }) => {
  return (
    <section className="mt-6">
      <span className="text-orange-400 px-4 lg:text-3xl md:text-2xl text-xl font-semibold underline mt-12">
        {season}
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-6">
        {sale.map((product) => (
          <div className="flex flex-col text-center  p-4 hover:rounded-xl hover:shadow-xl transition duration-500 ease-in-out">
            <a href="">
              <img
                src={product.link}
                alt=""
                className=" p-1 h-full w-full scale-100 transform object-cover transition duration-1000 ease-out hover:scale-110 z-[-1]"
              />
            </a>
            <span className="z-[99] text-orange-500 text-lg">
              ${product.price}
            </span>
            <span className="md:font-bold font-semibold">{product.name}</span>
            <a href="">
              <span className="text-red-500 transition-all hover:scale-110 duration-500 cursor-pointer">
                Buy now
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// BRIGHTEN UP HER SMILE SECTION
export const JustForYou = ({ say }) => {
  return (
    <section>
      <div className="flex flex-col">
        <span className="md:text-4xl text-2xl font-semibold py-3 mt-5 text-orange-500 text-center cursor-pointer ">
          {say}
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
          {products.map((product) => (
            <div className="flex flex-col text-center  p-4 hover:rounded-xl hover:shadow-xl transition duration-500">
              <a href="">
                <img
                  src={product.link}
                  alt=""
                  className=" p-1 h-full w-full scale-100 transform object-cover transition duration-1000 ease-out hover:scale-110 z-[-1]"
                />
              </a>
              <span className="z-[99] text-orange-500 text-lg">
                ${product.price}
              </span>
              <span className="md:font-bold font-semibold">{product.name}</span>
              <a href="">
                <span className="text-red-500 transition-all hover:scale-110 duration-500 cursor-pointer">
                  Buy now
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
