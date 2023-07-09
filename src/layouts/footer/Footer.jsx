export const Footer = () => {
  return (
    <section className=" bg-gray-200">
      <div className="grid lg:grid-cols-2 lg:mx-28 md:mx-12 mx-6 mt-12 py-4">
        <div className="grid-item flex flex-col gap-3">
          <span className="text-3xl font-semibold text-orange-500">
            JOIN THE CLUB
          </span>
          <span className="lg:text-lg text-sm md:text-base font-semibold">
            Receive Pickfresh emails and be the first to know about exclusive
            offers, promotions, and more.
          </span>
          <form action="" className="flex flex-row gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              className="px-10 p-2 rounded-lg"
            />
            <input
              type="submit"
              value="Go"
              className="bg-orange-400 px-6 rounded-lg"
            />
          </form>
        </div>
        <div className="grid-item flex"></div>
      </div>
    </section>
  );
};
