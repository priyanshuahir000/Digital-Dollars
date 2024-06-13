// https://www.radix-ui.com/primitives/docs/components/navigation-menu

import { Popover } from "@radix-ui/themes";
import {
  DropDownButton,
  LinkButton,
  LinkButtonBold,
  PrimaryButton,
  SecondaryButton,
} from "./UI/buttons";

function Navigation() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[2024px] px-0 md:px-12  lg:px-11 xl:px-16">
          <div className="flex h-24 justify-between items-center">
            <a href="/">
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
              <DropDownButton text="Bond" />
              <DropDownButton text="Automated Investing" />
              <LinkButton text="Stocks" />
              <DropDownButton text="Learn" />
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
          <a href="/">
            <img
              src="./logo-white.png"
              width="200"
              height="26"
              alt="Digital Dollars Logo"
              loading="eager"
            />
          </a>
          <button>
            <img
              src="/hamburger-menu-icon.svg"
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
          <a href="/">
            <img
              src="/logo.svg"
              width="200"
              height="26"
              alt="Digital Dollars Logo"
              loading="eager"
            />
          </a>
          <button>
            <img
              src="/hamburger-menu-icon.svg"
              width="28"
              height="23"
              loading="eager"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
