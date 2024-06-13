import { PrimaryButton, SecondaryButton } from "./UI/buttons";

export function Testimonial() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-5 overflow-hidden border-t-[1px] border-purple-dark border-opacity-40 bg-[rgb(240 240 242)] py-12 text-purple-dark ">
      <div className="relative w-[300px] pb-2 sm:w-[300px] md:w-auto">
        <h2 className="text-5xl font-serif font-thin text-center">
          Don’t just take our word for it.
        </h2>
        <img
          width={52}
          height={73}
          className="absolute -bottom-5 right-2 h-[50px] w-auto object-fill sm:-right-12 sm:bottom-0 md:-bottom-5 xl:-bottom-4 2xl:h-[60px]"
          alt="arrow"
          loading="lazy"
          src="./testimonial/arrow.svg"
        />
      </div>
      <div
        className="w-full max-w-[1550px] snap-x snap-mandatory overflow-scroll px-8 py-8 sm:pl-40 sm:pr-52 md:px-6 lg:px-20 xl:px-28 "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="grid-rows-auto grid w-[1300px] grid-cols-4 gap-4 sm:w-[1450px] sm:grid-cols-[1.5fr,1fr,1fr,1fr] md:w-auto md:grid-cols-3 ">
          <div
            id="hero-review-card"
            className="flex snap-center flex-col items-center gap-4 rounded-3xl bg-[#C3CDF4] p-[24px] shadow-xl md:col-span-3"
          >
            <p className="text-3xl font-sans tracking-tight sm:text-6xl max-w-[450px] text-center font-black lg:max-w-full">
              “ <br /> Digital Dollars takes the crown for best overall platform
              on the market
            </p>
            <img
              width={132}
              height={21}
              className="-mb-3 w-[160px]"
              alt="Investopedia logo"
              loading="lazy"
              src="./testimonial/investopedia.svg"
            />
            <p className="text-base leading-tight pt-2 font-medium">2022</p>
          </div>
          <div id="review-one-card">
            <div className="flex h-full snap-center snap-always flex-col justify-between gap-4 rounded-3xl bg-white p-[24px] shadow-xl">
              <p className="text-xl pb-2 font-bold">
                The best way for me to maximize every one of my hard earned
                dollars.
              </p>
              <div className="flex gap-2">
                <div className="h-[50px] w-[50px] shrink-0 rounded-[50%] border-[1px] border-solid border-content-divider bg-gradient-to-b from-lime to-lightYellow" />
                <div className="pt-1">
                  <p className="copy-body font-bold">Stanley R</p>
                  <p className="copy-body">Cash Account</p>
                </div>
              </div>
            </div>
          </div>
          <div id="review-two-card">
            <div className="flex h-full snap-center snap-always flex-col justify-between gap-4 rounded-3xl bg-white p-[24px] shadow-xl">
              <p className="text-xl pb-2 font-bold">
                The single best resource for investing, managing retirement and
                seeing my entire financial picture.
              </p>
              <div className="flex gap-2">
                <div className="h-[50px] w-[50px] shrink-0 rounded-[50%] border-[1px] border-solid border-content-divider bg-gradient-to-b from-dawnPink to-blueChalk" />
                <div className="pt-1">
                  <p className="copy-body font-bold">Joshua B</p>
                  <p className="copy-body">Automated Investing Account</p>
                </div>
              </div>
            </div>
          </div>
          <div id="review-three-card">
            <div className="flex h-full snap-center snap-always flex-col justify-between gap-4 rounded-3xl bg-white p-[24px] shadow-xl">
              <p className="text-xl pb-2 font-bold">
                I LOVE Digital Dollars and have moved almost all of my finances
                there.
              </p>
              <div className="flex gap-2">
                <div className="h-[50px] w-[50px] shrink-0 rounded-[50%] border-[1px] border-solid border-content-divider bg-gradient-to-b from-tealBlue to-reddishOrange" />
                <div className="pt-1">
                  <p className="copy-body font-bold">Daniel C</p>
                  <p className="copy-body">Automated Bond Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-4 mb-3 flex w-full justify-center gap-2 md:hidden">
        <button name="hero-review-card">
          <div className="h-[10px] w-[10px] rounded-[50%] bg-lunar" />
        </button>
        <button name="review-one-card">
          <div className="h-[10px] w-[10px] rounded-[50%] bg-lunar" />
        </button>
        <button name="review-two-card">
          <div className="h-[10px] w-[10px] rounded-[50%] bg-lunar" />
        </button>
        <button name="review-three-card">
          <div className="h-[10px] w-[10px] rounded-[50%] bg-lunar" />
        </button>
      </div>
      <SecondaryButton text="Read more reviews" />
      <img
        width={663}
        height={663}
        className="w-[400px] object-cover h-[300px] -mt-2"
        alt=""
        loading="lazy"
        src="./testimonial/house.webp"
      />
      <div className="flex flex-col items-center gap-10 px-6 md:gap-8">
        <h2 className="text-6xl font-serif text-center">
          Ready for your money’s new home?
        </h2>
        <div className="grid w-full grid-cols-1 font-sans md:w-auto md:grid-cols-4 [&>*]:border-t-[1px] [&>*]:border-purple-dark [&>*]:border-opacity-40 [&>*]:py-10 last:[&>*]:border-r-0 md:[&>*]:border-r-[1px] md:[&>*]:border-t-0 md:[&>*]:px-10 md:[&>*]:py-4">
          <div className="w-full text-center">
            <p className="font-bold leading-none tracking-tighter text-[42px]">
              800{/* */}K +
            </p>
            <p className="text-xl leading-tight tracking-tighter">
              clients trust us with
            </p>
          </div>
          <div className="w-full text-center">
            <p className="font-bold leading-none tracking-tighter text-[42px]">
              $60B{/* */}+
            </p>
            <p className="text-xl leading-tight tracking-tighter">
              of their money
            </p>
          </div>
          <div className="w-full text-center">
            <div className="inline-flex items-baseline space-x-2 font-bold leading-none tracking-tighter text-[42px]">
              <span>4.8</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                className="h-[28px] w-[28px]"
              >
                <path
                  d="M9.94 1.342c.239-.737 1.282-.737 1.521 0l1.866 5.742a.8.8 0 0 0 .76.553h6.04c.774 0 1.097.992.47 1.448l-4.886 3.549a.8.8 0 0 0-.29.894l1.866 5.743c.24.737-.604 1.35-1.231.895l-4.886-3.55a.8.8 0 0 0-.94 0l-4.885 3.55c-.627.455-1.47-.158-1.231-.895l1.866-5.743a.8.8 0 0 0-.29-.894L.803 9.084c-.627-.455-.305-1.447.47-1.447h6.039a.8.8 0 0 0 .76-.552L9.94 1.341z"
                  fill="#230B59"
                ></path>
              </svg>
            </div>
            <p className="text-xl leading-tight tracking-tighter">
              Apple App Store <sup>2</sup>
            </p>
          </div>
          <div className="w-full text-center">
            <div className="inline-flex items-baseline space-x-2 font-bold leading-none tracking-tighter text-[42px]">
              <span>4.9</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 21"
                className="h-[28px] w-[28px]"
              >
                <path
                  d="M9.94 1.342c.239-.737 1.282-.737 1.521 0l1.866 5.742a.8.8 0 0 0 .76.553h6.04c.774 0 1.097.992.47 1.448l-4.886 3.549a.8.8 0 0 0-.29.894l1.866 5.743c.24.737-.604 1.35-1.231.895l-4.886-3.55a.8.8 0 0 0-.94 0l-4.885 3.55c-.627.455-1.47-.158-1.231-.895l1.866-5.743a.8.8 0 0 0-.29-.894L.803 9.084c-.627-.455-.305-1.447.47-1.447h6.039a.8.8 0 0 0 .76-.552L9.94 1.341z"
                  fill="#230B59"
                ></path>
              </svg>
            </div>
            <p className="text-xl leading-tight tracking-tighter">
              Google Play Store <sup>2</sup>
            </p>
          </div>
        </div>
        <a
          className="z-10 relative button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__ipohF bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap"
          
        >
          Get started
        </a>
      </div>
    </div>
  );
}
