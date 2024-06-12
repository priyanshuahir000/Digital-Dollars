import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";

function Tabs() {
  const [{ x, y }, setScroll] = useWindowScroll();
  return (
    <div className="sticky top-0 z-50 h-[75px] border-b-[1px] border-purple-dark border-opacity-40 hidden lg:block xl:h-[90px] text-purple-dark bg-white">
      <nav className="grid h-full">
        <div className="grid border-opacity-40 border-purple-dark lg:grid-cols-4 2xl:border-l-[1px] [&>*]:border-r-[1px] [&>*]:border-opacity-40 lg:last:[&>*]:border-r-0 2xl:last:[&>*]:border-r-[1px]">
          <button
            className={`relative overflow-hidden border-purple-dark border-opacity-40  hover:bg-gradient-to-b hover:from-lime hover:to-lightYellow`}
            onClick={() => setScroll({ top: 800, left: 0, behavior: "smooth" })}
          >
            <div className="relative px-4 text-left 2xl:px-6 2xl:py-4">
              <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                "Now" Money
              </p>
              <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                Cash Account
              </p>
            </div>
            {y >= 750 && y < 1360 && (
              <div
                className={`absolute top-0 flex h-full w-full flex-col bg-gradient-to-b from-lime to-lightYellow`}
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
            )}
          </button>
          <button
            className={`relative overflow-hidden border-purple-dark border-opacity-40  hover:bg-gradient-to-b hover:from-dawnPink hover:to-blueChalk `}
            onClick={() =>
              setScroll({ top: 1360, left: 0, behavior: "smooth" })
            }
          >
            <div className="relative px-4 text-left 2xl:px-6 2xl:py-4">
              <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                "Soon" Money
              </p>
              <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                Automated Bond Ladder
              </p>
            </div>
            {y >= 1360 && y < 1975 && (
              <div
                className={`absolute top-0 flex h-full w-full flex-col bg-gradient-to-b from-dawnPink to-blueChalk`}
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
            )}
          </button>
          <button
            className={`relative overflow-hidden border-purple-dark border-opacity-40  hover:bg-gradient-to-b hover:from-tealBlue hover:to-reddishOrange `}
            onClick={() =>
              setScroll({ top: 1975, left: 0, behavior: "smooth" })
            }
          >
            <div className="relative px-4 text-left 2xl:px-6 2xl:py-4">
              <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                "Later" Money
              </p>
              <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                Automated Investing Account
              </p>
            </div>
            {y >= 1975 && y < 2560 && (
              <div
                className={`absolute top-0 flex h-full w-full flex-col bg-gradient-to-b from-tealBlue to-reddishOrange`}
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
            )}
          </button>
          <button
            className={`relative overflow-hidden border-purple-dark border-opacity-40  hover:bg-gradient-to-b hover:from-violentViolet hover:to-bluePurple hover:text-white `}
            onClick={() =>
              setScroll({ top: 2560, left: 0, behavior: "smooth" })
            }
          >
            <div className="relative px-4 text-left 2xl:px-6 2xl:py-4">
              <p className="uppercase font-medium text-[11px] xl:text-[11px] 2xl:text-[12px]">
                "DIY" Money
              </p>
              <p className="leading-tight text-[21px] font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[20px]">
                Stock Investing Account
              </p>
            </div>
            {y >= 2560 && (
              <div
                className={`absolute top-0 flex h-full w-full flex-col bg-gradient-to-b from-violentViolet to-bluePurple text-white`}
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
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Tabs;
