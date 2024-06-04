function Tabs() {
  return (
    <div className="stick top-0 z-50 h-[75px] border-b-[1px] border-purple-dark border-opacity-40 hidden lg:block xl:h-[90px] text-purple-dark">
      <nav className="grid h-full 2xl:grid-cols-[64px,auto,64px] 3xl:grid-cols-[auto,2024px,auto]">
        <div className="grid border-opacity-40 border-purple-dark lg:grid-cols-4 2xl:col-start-2 2xl:border-l-[1px] [&>*]:border-r-[1px] [&>*]:border-opacity-40 lg:last:[&>*]:border-r-0 2xl:last:[&>*]:border-r-[1px]">
          <button
            className={`relative overflow-hidden border-purple-dark border-opacity-40  hover:bg-gradient-to-b hover:from-lime hover:to-lightYellow`}
          >
            <div className="relative px-4 text-left 2xl:px-6 2xl:py-4">
              <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                "Now" Money
              </p>
              <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                Cash Account
              </p>
            </div>
            <div
              className={`absolute top-0 flex h-full w-full flex-col bg-gradient-to-b from-lime to-lightYellow`}
              style={{ opacity: 0 }}
            >
              <div className="flex h-full w-full flex-col justify-center px-4 text-left 2xl:px-6 2xl:py-4">
                <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                  "Now" Money
                </p>
                <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                  Cash Account
                </p>
              </div>
            </div>
          </button>
          <button
            className={`relative overflow-hidden border-purple-dark border-opacity-40  hover:bg-gradient-to-b hover:from-dawnPink hover:to-blueChalk `}
          >
            <div className="relative px-4 text-left 2xl:px-6 2xl:py-4">
              <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                "Soon" Money
              </p>
              <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                Automated Bond Ladder
              </p>
            </div>
            <div
              className={`absolute top-0 flex h-full w-full flex-col bg-gradient-to-b from-dawnPink to-blueChalk`}
              style={{ opacity: 0 }}
            >
              <div className="flex h-full w-full flex-col justify-center px-4 text-left 2xl:px-6 2xl:py-4">
                <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                  "Soon" Money
                </p>
                <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                  Automated Bond Ladder
                </p>
              </div>
            </div>
          </button>
          <button
            className={`relative overflow-hidden border-purple-dark border-opacity-40  hover:bg-gradient-to-b hover:from-tealBlue hover:to-reddishOrange `}
          >
            <div className="relative px-4 text-left 2xl:px-6 2xl:py-4">
              <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                "Later" Money
              </p>
              <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                Automated Investing Account
              </p>
            </div>
            <div
              className={`absolute top-0 flex h-full w-full flex-col bg-gradient-to-b from-tealBlue to-reddishOrange`}
              style={{ opacity: 0 }}
            >
              <div className="flex h-full w-full flex-col justify-center px-4 text-left 2xl:px-6 2xl:py-4">
                <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                  "Later" Money
                </p>
                <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                  Automated Investing Account
                </p>
              </div>
            </div>
          </button>
          <button
            className={`relative overflow-hidden border-purple-dark border-opacity-40  hover:bg-gradient-to-b hover:from-violentViolet hover:to-bluePurple hover:text-white `}
          >
            <div className="relative px-4 text-left 2xl:px-6 2xl:py-4">
              <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                "DIY" Money
              </p>
              <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                Stock Investing Account
              </p>
            </div>
            <div
              className={`absolute top-0 flex h-full w-full flex-col bg-gradient-to-b from-violentViolet to-bluePurple hover:text-white`}
              style={{ opacity: 0 }}
            >
              <div className="flex h-full w-full flex-col justify-center px-4 text-left 2xl:px-6 2xl:py-4">
                <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                  "DIY" Money
                </p>
                <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                  Stock Investing Account
                </p>
              </div>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Tabs;
