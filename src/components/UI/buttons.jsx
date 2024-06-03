import "./buttons.css";
import { forwardRef } from "react";

function PrimaryButton(props) {
  return (
    <a
      className=" primary-button relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 border border-purple text-purple inline-flex whitespace-nowrap group"
      role="button"
    >
      <div className="block">
        <span className="group-hover:text-gradient group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-b group-hover:from-purple group-hover:from-40% group-hover:to-brownOrange font-semibold">
          {props.text}
        </span>
      </div>
    </a>
  );
}

function SecondaryButton(props) {
  return (
    <a
      className="z-10 relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3  bg-purple text-white overflow-hidden inline-flex whitespace-nowrap hover:shadow-[rgba(0,_0,_0,_0.3)_0px_5px_15px] hover:bg-gradient-to-b hover:from-purple hover:to-brownOrange"
      href="#"
    >
      {props.text}
    </a>
  );
}

function LinkButton(props) {
  return (
    <a role="button" className="group relative">
      {props.text}
      <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all bg-purple-dark group-hover:w-full"></div>
    </a>
  );
}

function LinkButtonBold(props) {
  return (
    <a role="button" className="group relative font-bold text-xl">
      {props.text}
      <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 transition-all bg-purple-dark group-hover:w-full"></div>
      <div className="pointer-events-none absolute -bottom-0.5 -right-4 font-serif">
        ↗
      </div>
    </a>
  );
}

const DropDownButton = forwardRef(({ text, ...props }, ref) => {
  return (
    <a className="group relative font-medium">
      {text}
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
  );
});

export {
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  LinkButtonBold,
  DropDownButton,
};
