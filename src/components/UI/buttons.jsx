import "./buttons.css";

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

export { PrimaryButton, SecondaryButton };
