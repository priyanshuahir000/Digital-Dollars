import { Inset, Popover } from "@radix-ui/themes";
import "./buttons.css";

function PrimaryButton(props) {
  return (
    <a
      className="primary-button relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 border border-purple text-purple inline-flex whitespace-nowrap group"
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
    <a className="z-10 relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3  bg-purple text-white overflow-hidden inline-flex whitespace-nowrap hover:shadow-[rgba(0,_0,_0,_0.3)_0px_5px_15px] hover:bg-gradient-to-b hover:from-purple hover:to-brownOrange">
      {props.text}
    </a>
  );
}

function LinkButton(props) {
  return (
    <a role="button" className="group relative font-medium">
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

function DropDownButton(props) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <a className="group relative font-medium">
          {props.text}
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
      </Popover.Trigger>
      <Popover.Content width={"1000px"} size="4">
        <Inset>
          <div className="filter-shadow flex items-stretch justify-center overflow-hidden rounded-xl bg-white font-medium text-purple-dark">
            <div className="flex-grow  py-9 px-4">
              <a>
                <div className="group flex items-center justify-center rounded p-1  text-left">
                  <div className="mr-4  flex-shrink-0 flex-grow-0 transition-transform group-hover:scale-110">
                    <img
                      src={props.image}
                      alt="Automated Bond Ladder"
                      width={90}
                    />
                  </div>
                  <div className="max-w-[300px] flex-grow">
                    <div className="group relative inline-block text-xl font-bold text-purple-dark">
                      {props.innerHeading}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 w-0 bg-purple-dark transition-all group-hover:w-full"></div>
                      <div className="pointer-events-none absolute -bottom-0.5 -right-4 font-serif">
                        ↗
                      </div>
                    </div>

                    <div className="font-normal">{props.content}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Inset>
      </Popover.Content>
    </Popover.Root>
  );
}

export {
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  LinkButtonBold,
  DropDownButton,
};
