import { products } from "../layouts/hero/image";

export const Smile = ({ text, say }) => {
  return (
    <section>
      <div className="grid grid-cols-1 mt-12 py-4">
        <div className="grid-item flex flex-col gap-2 bg-black p-4">
          <span className="md:text-3xl text-2xl lg:text-4xl font-bold text-orange-500">
            {text}
          </span>
          <span className="font-semibold lg:text-2xl text-white">{say}</span>
        </div>
      </div>
    </section>
  );
};

//

// BRIGHTEN UP HER SMILE SECTION
export const JustForYou = ({ say }) => {
  return (
    <section>
      <div className="flex flex-col">
        <span className="md:text-4xl text-2xl font-semibold py-3 mt-5 text-orange-500 text-center cursor-pointer">
          {say}
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
          {products.map((product) => (
            <div className="flex flex-col text-center  p-4 rounded-xl hover:shadow-xl transition duration-500">
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
