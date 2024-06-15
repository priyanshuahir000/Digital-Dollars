export function RiskSection() {
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-6 overflow-hidden border-t-[1px] border-purple-dark border-opacity-40 bg-lightLime py-8 sm:gap-10 lg:items-center lg:py-20">
        <div className="relative pb-4 pt-12 lg:pt-0">
          <img
            className="absolute top-0 right-1/2 translate-x-1/2 lg:translate-x-0 xl:top-6 lg:-right-20 xl:-right-40 w-[160px] xl:w-[200px] h-auto"
            width="750"
            height="800"
            alt="paper airplane"
            loading="eager"
            src="./risk-section/airplane.webp"
          />
          <h2 className="text-5xl font-thin font-serif tracking-tighter px-6 pt-16 text-center lg:w-[800px] lg:py-8 xl:py-6">
            Choose the right level of risk for different chunks of your change.
          </h2>
        </div>
        <div
          className=" max-w-full snap-x snap-mandatory overflow-scroll px-8 lg:max-w-[2024px] xl:px-16"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="grid min-w-[1100px] grid-cols-4 gap-6 md:max-w-full lg:w-full lg:min-w-full lg:gap-4 ">
            <div>
              <div className="flex snap-center flex-col gap-2 xl:gap-4">
                <p className="uppercase font-medium text-[12px]">
                  Cash Account
                </p>
                <h3 className="font-black text-[30px]">High-yield savings</h3>
                <p className="text-lg leading-tight max-w-[325px]">
                  Best for your daily expenses and your emergency fund, until
                  youre ready to invest.
                </p>
                <a className="z-10 relative font-medium underline text-purple-dark">
                  Learn more
                </a>
              </div>
            </div>
            <div>
              <div className="flex snap-center flex-col gap-2 xl:gap-4">
                <p className="uppercase font-medium  text-[12px]">
                  Automated Bond Ladder
                </p>
                <h3 className="font-black text-[30px] ">US Treasuries</h3>
                <p className="text-lg leading-tight max-w-[325px]">
                  Backed by the Federal government, Treasuries can earn a steady
                  rate and are considered one of the safest investments in the
                  world.
                </p>
                <a className="z-10 relative font-medium underline text-purple-dark">
                  Learn more
                </a>
              </div>
            </div>
            <div>
              <div className="flex snap-center flex-col gap-2 xl:gap-4">
                <p className="uppercase font-medium  text-[12px]">
                  AUTOMATED INVESTING ACCOUNT
                </p>
                <h3 className="font-black text-[30px] ">Index Investing</h3>
                <p className="text-lg leading-tight max-w-[325px]">
                  The time-tested method designed to maximize returns over the
                  long term, while we automatically manage the risk for you.
                </p>
                <a className="z-10 relative font-medium underline text-purple-dark">
                  Learn more
                </a>
              </div>
            </div>
            <div>
              <div className="flex snap-center flex-col gap-2 xl:gap-4">
                <p className="uppercase font-medium  text-[12px]">
                  STOCK INVESTING ACCOUNT
                </p>
                <h3 className="font-black text-[30px] ">Individual stocks</h3>
                <p className="text-lg leading-tight max-w-[325px]">
                  At risk of higher volatility, but useful when investing in
                  specific companies you believe in.
                </p>
                <a className="z-10 relative font-medium underline text-purple-dark">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <img
            className="-mt-10 h-full min-w-[1100px] object-cover lg:w-full lg:min-w-full lg:max-w-full"
            width="1881"
            height="309"
            alt="risk line chart"
            loading="eager"
            src="./risk-section/linechart.svg"
          />
        </div>
      </div>
    </>
  );
}
