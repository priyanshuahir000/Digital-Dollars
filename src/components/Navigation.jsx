// https://www.radix-ui.com/primitives/docs/components/navigation-menu
import {
  DropDownButton,
  LinkButton,
  PrimaryButton,
  SecondaryButton,
} from "./UI/buttons";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[2024px] px-0 md:px-12  lg:px-11 xl:px-16">
          <div className="flex h-24 justify-between items-center">
            <a>
              <img
                src="/logo-purple.png"
                width="250"
                height="26"
                alt="Digital Dollars Logo"
                loading="eager"
              />
            </a>
            <nav className="flex items-center space-x-8 lg:space-x-5 xl:space-x-8 2xl:space-x-12">
              <LinkButton text="Cash" />
              <DropDownButton
                text="Bond"
                innerHeading="Automated Bond Ladder"
                content="Take advantage of current rates with Treasuries, and skip the state income taxes."
                image="./navigation/automated-bond-ladder.png"
              />
              <DropDownButton
                text="Automated Investing"
                innerHeading="Automated Index Investing"
                content="We’ll build and manage a diversified portfolio of low-cost index funds personalized for you."
                image="./navigation/hourglass.png"
              />
              <LinkButton text="Stocks" />
              <DropDownButton
                text="Learn"
                innerHeading="Blog"
                content="Nerd out with us and learn more about investing."
                image="./navigation/construction.png"
              />
            </nav>
            <div className="flex items-center justify-center space-x-3">
              <PrimaryButton text="Log In" />
              <SecondaryButton text="Get Started" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 hidden px-0 md:block md:px-12 lg:hidden lg:px-16">
        <div className="static left-0 right-0 px-6 py-6 flex justify-between items-center md:static md:px-0">
          <a>
            <img
              src="./logo-white.png"
              width="200"
              height="26"
              alt="Digital Dollars Logo"
              loading="eager"
            />
          </a>
          <button onClick={toggleMenu}>
            <img
              src="/menu-open.svg"
              width="28"
              height="23"
              loading="eager"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="relative block md:hidden ">
        <div className="static px-4 py-6 flex justify-between items-center">
          <a>
            <img
              src="./logo-purple.png"
              width="200"
              height="26"
              alt="Digital Dollars Logo"
              loading="eager"
            />
          </a>
          <button onClick={toggleMenu}>
            <img
              src="/menu-open.svg"
              width="28"
              height="23"
              loading="eager"
              alt=""
            />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 overflow-auto bg-purple-dark p-6 text-white transform transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="mx-auto max-w-screen-xs">
          <div className="flex w-full py-2">
            <a className="z-10 relative font-medium underline text-purple-dark">
              <img
                width={150}
                height={150}
                alt="DigitalDollars Logo"
                loading="eager"
                src="./logo-white.png"
              />
            </a>
            <div className="flex-shrink flex-grow" />
            <button type="button" onClick={toggleMenu}>
              <img
                width={22}
                height={22}
                alt="Close menu"
                loading="eager"
                src="menu-close.svg"
              />
            </button>
          </div>
          <div className="flex flex-col py-4 text-center">
            <a className="group relative py-4 text-2xl font-normal text-white">
              Cash
            </a>
            <a
              role="button"
              className="group relative py-4 text-2xl font-normal text-white"
            >
              Bonds{" "}
            </a>

            <a
              role="button"
              className="group relative py-4 text-2xl font-normal text-white"
            >
              Automated Investing{" "}
            </a>

            <a
              className="group relative py-4 text-2xl font-normal text-white"
              data-testid="/stock-investing"
            >
              Stocks
            </a>
            <a
              role="button"
              className="group relative py-4 text-2xl font-normal text-white"
            >
              Learn{" "}
            </a>

            <div className="my-4 flex flex-col space-y-4">
              <a
                className="primary-button relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 border border-white text-white hover:bg-white inline-flex whitespace-nowrap group"
                role="button"
              >
                <div className="block">
                  <span className="group-hover:text-gradient group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-b  group-hover:from-purple group-hover:from-40% group-hover:to-brownOrange font-semibold">
                    Log In
                  </span>
                </div>
              </a>
              <SecondaryButton text="Get Started" />
              <div className="flex items-center justify-between gap-2">
                <a className="z-10 relative font-medium underline text-eggplant">
                  <img
                    width={150}
                    height={50}
                    className="h-[50px] w-[150px] object-contain object-center"
                    alt="Download DigitalDollars on the App Store"
                    loading="eager"
                    src="./navigation/app-store.svg"
                  />
                </a>
                <a className="z-10 relative font-medium underline text-eggplant">
                  <img
                    width={150}
                    height={50}
                    className="h-[50px] w-[150px] object-contain object-center"
                    alt="Get DigitalDollars on Google Play"
                    loading="eager"
                    src="./navigation/play-store.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
