import { PrimaryButton, SecondaryButton } from "./UI/buttons";

export function Navigation() {
  return (
    <>
      <div className="hidden lg:block">
        <div className=" mx-auto max-w-[2024px] px-0 md:px-12  lg:px-11 xl:px-16">
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                src="/logo.svg"
                width="200"
                height="26"
                alt="Digital Dollars Logo"
                loading="eager"
              />
            </a>
            <nav className="flex items-center space-x-8 lg:space-x-5 xl:space-x-8 2xl:space-x-12">
              <a role="button" className="group relative font-medium">
                Cash
                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all bg-purple-dark group-hover:w-full"></div>
              </a>
              <a className="group relative font-medium">
                Bond
                <svg
                  fill="none"
                  viewBox="0 0 9 6"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="chevron-down"
                  className="inline h-1.5 pl-1"
                >
                  <path
                    d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all bg-purple-dark group-hover:w-full"></div>
              </a>
              <a className="group relative font-medium">
                Automated Investing
                <svg
                  fill="none"
                  viewBox="0 0 9 6"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="chevron-down"
                  className="inline h-1.5 pl-1"
                >
                  <path
                    d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all bg-purple-dark group-hover:w-full"></div>
              </a>
              <a role="button" className="group relative font-medium">
                Stocks
                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all bg-purple-dark group-hover:w-full"></div>
              </a>
              <a className="group relative font-medium">
                Learn
                <svg
                  fill="none"
                  viewBox="0 0 9 6"
                  xmlns="http://www.w3.org/2000/svg"
                  data-testid="chevron-down"
                  className="inline h-1.5 pl-1"
                >
                  <path
                    d="M.47 1.624A.754.754 0 111.58.602l2.552 2.772a.5.5 0 00.736 0L7.42.602a.754.754 0 111.11 1.022L5.236 5.201a1 1 0 01-1.472 0L.47 1.624z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all bg-purple-dark group-hover:w-full"></div>
              </a>
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
