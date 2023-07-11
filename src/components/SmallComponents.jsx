import { useEffect, useState } from "react";
import { products, sale } from "../layouts/hero/image";
import { Link } from "react-router-dom";

// LOAD MORE BUTTON
export const LoadMore = () => {
  return (
    <section>
      <div className="flex justify-center mt-6">
        <a href="">
          <button className="lg:p-2 p-1 bg-orange-400 transition duration-500 hover:rounded-lg hover:scale-110">
            <span className="mx-5 font-bold text-white">Load More</span>
          </button>
        </a>
      </div>
    </section>
  );
};

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
        <div className="grid-item col-span-2 gap-4">
          <div className="flex flex-col py-3  p-4 rounded-lg ">
            <span className="text-orange-500 lg:text-3xl text-xl font-bold ">
              {title}
            </span>
            <span className="text-white lg:text-lg text-sm md:text-base md:font-medium lg:font-semibold">
              {say}
            </span>
          </div>
        </div>
        <div className="grid-item text-white  col-span-1">
          <div className="flex py-3 md:justify-end justify-start p-4">
            <a href="">
              <button className=" md:mt-12 lg:mx-10 bg-orange-400 p-1 md:p-2 transition-all duration-500 hover:rounded-lg hover:scale-105">
                <b className="mx-4">Order Now</b>
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
  const [value, setValue] = useState({});

  const handleValue = (id, link) => {
    setValue({ id, link });
  };

  return (
    <section className="mt-6">
      <span className="text-orange-400 px-4 lg:text-3xl md:text-2xl text-xl font-bold mt-12">
        {season}
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-6">
        {sale.map((product) => (
          <div
            key={product.id}
            className="flex flex-col p-4 hover:rounded-xl hover:shadow-xl transition duration-500 ease-in-out"
          >
            <img
              src={product.link}
              alt=""
              className="p-1 h-full w-full scale-100 transform object-cover transition duration-1000 ease-out hover:scale-110 z-[-1]"
            />
            <div className="flex flex-col gap-2">
              <span className="md:font-bold font-medium text-sm z-[99] flex justify-center text-orange-500">
                {product.name}
              </span>
              <span className="text-black transition-all hover:scale-110 duration-500 cursor-pointer flex flex-col md:flex-row md:text-start text-center gap-2 justify-center">
                <span>${product.price}</span>
                <button
                  type="button"
                  className="text-white text-sm font-semibold bg-orange-500 transition duration-300 hover:rounded-md"
                  onClick={() => handleValue(product.id, product.link)}
                >
                  <span className="mx-2 text-sm">BUY NOW</span>
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
      {value.id && (
        <div>
          <p>Selected Product ID: {value.id}</p>

          <img src={value.link} />
        </div>
      )}
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
            <div className="flex flex-col    p-4 hover:rounded-xl hover:shadow-xl transition duration-500 ease-in-out">
              <Link to="info">
                <img
                  src={product.link}
                  alt=""
                  className=" p-1 h-full w-full scale-100 transform object-cover transition duration-1000 ease-out hover:scale-110 z-[-1]"
                />
              </Link>
              <div className="flex flex-col gap-2 ">
                <span className="md:font-bold font-medium  text-sm z-[99] flex justify-center text-orange-500">
                  {product.name}
                </span>
                <Link to="info">
                  <span className="text-black transition-all hover:scale-110 duration-500 cursor-pointer flex flex-col md:flex-row  md:text-start text-center gap-2 justify-center">
                    <span> ${product.price}</span>
                    <button
                      type="submit"
                      className="text-white text-sm  font-semibold bg-orange-500 transition duration-300 hover:rounded-md"
                      value={product.id}
                    >
                      <span className="md:mx-2  text-sm ">BUY NOW</span>
                    </button>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
