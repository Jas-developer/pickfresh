export const Footer = () => {
  return (
    <section className=" bg-gray-200">
      <div className="grid lg:grid-cols-2 lg:mx-28 md:mx-12 mx-6 mt-12 py-4">
        <div className="grid-item flex flex-col gap-3">
          <span className="text-xl md:text-3xl font-semibold text-orange-500">
            JOIN THE CLUB
          </span>
          <span className="lg:text-lg text-sm md:text-base font-medium">
            Receive Pickfresh emails and be the first to know about exclusive
            offers, promotions, and more.
          </span>
          <form action="" className="flex flex-row gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              className=" px-4 lg:px-10 p-2 rounded-lg"
            />
            <input
              type="submit"
              value="Go"
              className="bg-orange-400 px-3 md:px-6 rounded-lg"
            />
          </form>
        </div>
        <div className="grid-item flex flex-col gap-3 mt-4 lg:mt-0">
          <span className="text-xl md:text-3xl font-semibold text-orange-500">
            FOLLOW US ON SOCIAL MEDIA
          </span>
          <span className="lg:text-lg text-sm md:text-base font-medium">
            Join the conversation on social media to Stay in touch with us and
            for more updates
          </span>
          <div className="icon-wrapper">
            <div className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Ebene 1"
                viewBox="0 0 1024 1024"
                id="facebook-logo-2019"
                className="w-12 h-12 hover:scale-110 transition-all duration-700 border-orange-400  p-1 shadow"
              >
                <path
                  fill="#1877f2"
                  d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                ></path>
                <path
                  fill="#fff"
                  d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="2500"
                viewBox="126.444 2.281 589 589"
                id="twitter"
                className="w-12 h-12 hover:scale-110 transition-all duration-700 border-orange-400  p-1 shadow"
              >
                <circle
                  cx="420.944"
                  cy="296.781"
                  r="294.5"
                  fill="#2daae1"
                ></circle>
                <path
                  fill="#fff"
                  d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                data-name="Layer 1"
                viewBox="0 0 128 128"
                id="instagram"
                className="w-12 h-12 hover:scale-110 transition-all duration-700 border-orange-400  p-1 shadow"
              >
                <defs>
                  <clipPath id="b">
                    <circle cx="64" cy="64" r="64" fill="none"></circle>
                  </clipPath>
                  <clipPath id="c">
                    <path
                      fill="none"
                      d="M104-163H24a24.07 24.07 0 0 0-24 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24v-80a24.07 24.07 0 0 0-24-24Zm16 104a16 16 0 0 1-16 16H24A16 16 0 0 1 8-59v-80a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16Z"
                    ></path>
                  </clipPath>
                  <clipPath id="e">
                    <circle cx="82" cy="209" r="5" fill="none"></circle>
                  </clipPath>
                  <clipPath id="g">
                    <path
                      fill="none"
                      d="M64-115a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16Zm0 24a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"
                    ></path>
                  </clipPath>
                  <clipPath id="h">
                    <path
                      fill="none"
                      d="M84-63H44a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16Zm-40-64a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"
                    ></path>
                  </clipPath>
                  <clipPath id="i">
                    <circle cx="82" cy="-117" r="5" fill="none"></circle>
                  </clipPath>
                  <radialGradient
                    id="a"
                    cx="27.5"
                    cy="121.5"
                    r="137.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#ffd676"></stop>
                    <stop offset=".25" stop-color="#f2a454"></stop>
                    <stop offset=".38" stop-color="#f05c3c"></stop>
                    <stop offset=".7" stop-color="#c22f86"></stop>
                    <stop offset=".96" stop-color="#6666ad"></stop>
                    <stop offset=".99" stop-color="#5c6cb2"></stop>
                  </radialGradient>
                  <radialGradient
                    id="d"
                    cx="27.5"
                    cy="-41.5"
                    r="148.5"
                    xlink:href="#a"
                  ></radialGradient>
                  <radialGradient
                    id="f"
                    cx="13.87"
                    cy="303.38"
                    r="185.63"
                    xlink:href="#a"
                  ></radialGradient>
                  <radialGradient
                    id="j"
                    cx="13.87"
                    cy="-22.62"
                    r="185.63"
                    xlink:href="#a"
                  ></radialGradient>
                </defs>
                <g clip-path="url(#b)">
                  <circle
                    cx="27.5"
                    cy="121.5"
                    r="137.5"
                    fill="url(#a)"
                  ></circle>
                </g>
                <g clip-path="url(#c)">
                  <circle
                    cx="27.5"
                    cy="-41.5"
                    r="148.5"
                    fill="url(#d)"
                  ></circle>
                </g>
                <g clip-path="url(#e)">
                  <circle
                    cx="13.87"
                    cy="303.38"
                    r="185.63"
                    fill="url(#f)"
                  ></circle>
                </g>
                <g clip-path="url(#g)">
                  <circle
                    cx="27.5"
                    cy="-41.5"
                    r="148.5"
                    fill="url(#d)"
                  ></circle>
                </g>
                <g clip-path="url(#h)">
                  <circle
                    cx="27.5"
                    cy="-41.5"
                    r="148.5"
                    fill="url(#d)"
                  ></circle>
                </g>
                <g clip-path="url(#i)">
                  <circle
                    cx="13.87"
                    cy="-22.62"
                    r="185.63"
                    fill="url(#j)"
                  ></circle>
                </g>
                <circle cx="82" cy="46" r="5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
                ></path>
                <rect
                  width="64"
                  height="64"
                  x="32"
                  y="32"
                  fill="none"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="8"
                  rx="12"
                  ry="12"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
