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
  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }
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
              <DropDownButton text="Bond" innerHeading="Automated Bond Ladder" content="Take advantage of current rates with Treasuries, and skip the state income taxes." image="./navigation/automated-bond-ladder.png"/>
              <DropDownButton text="Automated Investing" innerHeading="Automated Index Investing" content="We’ll build and manage a diversified portfolio of low-cost index funds personalized for you." image="./navigation/hourglass.png"/>
              <LinkButton text="Stocks" />
              <DropDownButton text="Learn" innerHeading="Blog" content="Nerd out with us and learn more about investing." image="./navigation/construction.png"/>
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
          <a href="/">
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
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}

>
  <div className="mx-auto max-w-screen-xs">
    <div className="flex w-full py-2">
      <a className="z-10 relative font-medium underline text-purple-dark" href="/">
        <img
          width={150}
          height={150}
          alt="Wealthfront Logo"
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
      <a
        href="/cash"
        className="group relative py-4 text-2xl font-normal text-white"
      >
        Cash
      </a>
      <a
        role="button"
        href="#"
        className="group relative py-4 text-2xl font-normal text-white"
      >
        Bonds{" "}
        <svg
          fill="none"
          viewBox="0 0 9 6"
          xmlns="http://www.w3.org/2000/svg"
          data-testid="chevron-down"
          className="inline h-1.5"
        >
          <path
            d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </a>
      <div
        className="overflow-hidden rounded text-center font-medium text-eggplant"
        style={{ height: 0 }}
      >
        <div className="bg-white">
          <div className="flex flex-col items-center justify-center py-4 px-8">
            <img
              width={120}
              height={120}
              alt="hourglass"
              loading="eager"
              src="/next/contenthash/next/automated_bond_ladder/bonds-header.contenthash.71a9f19e0d52952cdee692b1f8b36c007a15b01a.png"
            />
            <a
              href="/automated-bond-ladder"
              className="group relative whitespace-nowrap text-eggplant text-xl font-bold"
            >
              Automated Bond Ladder
              <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0" />
              <div className="pointer-events-none absolute -bottom-0.5 -right-4 font-serif">
                ↗
              </div>
            </a>
            <div className="copy-body max-w-[250px] font-normal">
              Take advantage of current rates with Treasuries, and skip the
              state income taxes.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 bg-gray-100 py-6 px-8">
          <a
            href="/automated-bond-portfolio"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Automated Bond Portfolio
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
        </div>
      </div>
      <a
        role="button"
        href="#"
        className="group relative py-4 text-2xl font-normal text-white"
      >
        Automated Investing{" "}
        <svg
          fill="none"
          viewBox="0 0 9 6"
          xmlns="http://www.w3.org/2000/svg"
          data-testid="chevron-down"
          className="inline h-1.5"
        >
          <path
            d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </a>
      <div
        className="overflow-hidden rounded text-center font-medium text-eggplant"
        style={{ height: 0 }}
      >
        <div className="bg-white">
          <div className="flex flex-col items-center justify-center py-4 px-8">
            <img
              width={120}
              height={120}
              alt="hourglass"
              loading="eager"
              src="/next/contenthash/next/optimized/hourglass.contenthash.a39b6b5c4ee7aefbae8df8c13688ea731c570ba3.png"
            />
            <a
              href="/investing"
              className="group relative whitespace-nowrap text-eggplant text-xl font-bold"
            >
              Automated Index Investing
              <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0" />
              <div className="pointer-events-none absolute -bottom-0.5 -right-4 font-serif">
                ↗
              </div>
            </a>
            <div className="copy-body max-w-[250px] font-normal">
              We’ll build and manage a diversified portfolio of low-cost index
              funds personalized for you.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 bg-gray-100 py-6 px-8">
          <a
            href="/socially-responsible-investing"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Socially Responsible (SRI)
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
          <a
            href="/retirement"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Retirement (IRAs)
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
          <a
            href="/college"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            College (529s)
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
          <hr className="w-full border-gray-300" />
          <a
            href="/explore"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Explore all investments
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
        </div>
      </div>
      <a
        href="/stock-investing"
        className="group relative py-4 text-2xl font-normal text-white"
        data-testid="/stock-investing"
      >
        Stocks
      </a>
      <a
        role="button"
        href="#"
        className="group relative py-4 text-2xl font-normal text-white"
      >
        Learn{" "}
        <svg
          fill="none"
          viewBox="0 0 9 6"
          xmlns="http://www.w3.org/2000/svg"
          data-testid="chevron-down"
          className="inline h-1.5"
        >
          <path
            d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </a>
      <div
        className="overflow-hidden rounded text-center font-medium text-eggplant"
        style={{ height: 0 }}
      >
        <div className="bg-white">
          <div className="flex flex-col items-center justify-center py-4 px-8">
            <img
              width={120}
              height={120}
              alt="hourglass"
              loading="eager"
              src="/next/contenthash/next/alchemist/construction_graph.contenthash.42645559e7876700b86eac51b45b804e48380450.png"
            />
            <a
              href="https://blog.wealthfront.com/"
              className="group relative whitespace-nowrap text-eggplant text-xl font-bold"
            >
              Blog
              <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0" />
              <div className="pointer-events-none absolute -bottom-0.5 -right-4 font-serif">
                ↗
              </div>
            </a>
            <div className="copy-body max-w-[250px] font-normal">
              Nerd out with us and learn more about investing
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 bg-gray-100 py-6 px-8">
          <a
            href="https://support.wealthfront.com/hc/en-us"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Help Center
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
          <a
            href="/pricing"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Pricing
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
          <a
            href="/tax-loss-harvesting"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Tax-Loss Harvesting
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
          <a
            href="/historical-performance"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Historical Performance
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
          <a
            href="/reviews"
            className="group relative whitespace-nowrap text-eggplant font-medium"
          >
            Reviews
            <div className="absolute left-0 right-0 h-0.5 transition-all bg-eggplant w-full group-hover:w-full bottom-0.5" />
          </a>
        </div>
      </div>
      <div className="my-4 flex flex-col space-y-4">
        <a
          className="z-10 relative button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_secondaryButtonOnDark__7qK6q hover:border-transparent border border-lavender text-lavender inline-flex whitespace-nowrap"
          href="/login"
          data-testid="mobile-logged-out-header-login"
        >
          Log in
        </a>
        <a
          className="z-10 relative button_button__SRc2Y relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 copy-body button_primaryButton__ipohF bg-white text-eggplant overflow-hidden inline-flex whitespace-nowrap"
          href="/start/account-type?intent=home"
        >
          Get started
        </a>
        <div className="flex items-center justify-between gap-2">
          <a
            className="z-10 relative font-medium underline text-eggplant"
            href="https://apps.apple.com/us/app/wealthfront-save-and-invest/id816020992"
          >
            <img
              width={150}
              height={50}
              className="h-[50px] w-[150px] object-contain object-center"
              alt="Download Wealthfront on the App Store"
              loading="eager"
              src="/next/contenthash/next/svg/optimized/app-store-badge.contenthash.6fcb118c0caf6afdc248ade0f1f7cf31a368fc77.svg"
            />
          </a>
          <a
            className="z-10 relative font-medium underline text-eggplant"
            href="https://play.google.com/store/apps/details?id=com.wealthfront"
          >
            <img
              width={150}
              height={50}
              className="h-[50px] w-[150px] object-contain object-center"
              alt="Get Wealthfront on Google Play"
              loading="eager"
              src="/next/contenthash/next/svg/optimized/google-play-badge.contenthash.92218e88ff049ebb93aec59cd7a8ff1f41a6baa5.svg"
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
