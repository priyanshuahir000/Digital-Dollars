import { PrimaryButton, SecondaryButton } from "../UI/buttons";
import { Number } from "../UI/Number";
function Sec3() {
  return (
    <div className="relative overflow-hidden border-purple-dark  border-opacity-40 border-t-[1px] text-purple-dark">
      <div className="absolute -top-[90px] lg:-top-[75px] xl:-top-[90px]" />
      <div className="grid  ">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:col-start-2 min-h-[1050px] xs:min-h-[1000px] lg:min-h-[600px] 2xl:min-h-[700px] h-[calc(100vh-90px)] lg:h-[calc(100vh-75px)] xl:h-[calc(100vh-90px)]">
          <div className="row-start-2 flex min-h-full items-center justify-center border-0 border-purple-dark  border-opacity-40 px-6 py-10 md:px-28 lg:row-start-1 lg:border-r-[1px] lg:px-11 lg:py-0 2xl:border-x-[1px] 2xl:px-12 3xl:px-16">
            <div className="flex w-full flex-col gap-y-4 md:gap-y-6">
              <div className="pt-[1px] before:block before:-mt-[17px]">
                <div className="flex flex-row flex-wrap -ml-medium justify-start items-start">
                  <div className="leading-[1em] min-w-0 pt-4 pl-0">
                    <div className="min-h-large items-center rounded-full bg-blueGray px-3 py-2">
                      <p className="uppercase font-medium text-[12px] md:text-[15px]">
                        LONG-TERM GOALS
                      </p>
                    </div>
                  </div>
                  <div className="leading-[1em] min-w-0 pt-4 pl-4">
                    <div className="min-h-large items-center rounded-full bg-blueGray px-3 py-2">
                      <p className="uppercase font-medium text-[12px] md:text-[15px]">
                        MODERATE RISK
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 max-w-full">
                <div className="space-y-4">
                  <h2 className="font-sans text-[34px] 2xl:text-[55px] leading-[1.05] tracking-tight font-extrabold ">
                    Automated, diversified index investing.
                    <br />
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="font-sans leading-tight text-sm lg:text-base font-bold">
                    Come bears or bulls, our expert-built portfolios help you
                    stay diversified for your goals. Limit your risk, minimize
                    your taxes, and maximize your returns — all with built-in
                    automated easy-ness.
                  </p>
                  <div className="grid max-w-full grid-cols-1 gap-3 xl:grid-cols-2">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0 mt-1 flex items-start">
                        <img
                          height="22"
                          width="18"
                          alt="sparkle-icon"
                          loading="eager"
                          src="./sections/sec-3/sparkle.svg"
                        />
                      </div>
                      <div className="copy-body">
                        Personalized with up to 17 global asset classes
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0 mt-1 flex items-start">
                        <svg
                          viewBox="0 0 64 64"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[20px h-[20px]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.792 14.707a1.6 1.6 0 00.901.901l5.333 2.103c1.35.533 1.35 2.445 0 2.977l-5.333 2.104a1.6 1.6 0 00-.901.901l-2.104 5.333c-.532 1.35-2.444 1.35-2.976 0l-2.104-5.333a1.6 1.6 0 00-.901-.901l-5.333-2.104c-1.35-.532-1.35-2.444 0-2.977l5.333-2.103a1.6 1.6 0 00.901-.901l2.104-5.333c.532-1.35 2.444-1.35 2.976 0l2.104 5.333zm-.307 3.004c1.35.533 1.35 2.445 0 2.977l-.642.253a1.6 1.6 0 00-.901.902l-.254.642c-.532 1.35-2.444 1.35-2.976 0l-.253-.642a1.6 1.6 0 00-.902-.902l-.642-.253c-1.35-.532-1.35-2.444 0-2.977l.642-.253a1.6 1.6 0 00.902-.901l.253-.642c.532-1.35 2.444-1.35 2.976 0l.254.642a1.6 1.6 0 00.9.901l.643.253zM17.6 39.6a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0zm-2.4 0a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"
                            fill="#230B59"
                          ></path>
                          <path
                            d="M29.766 48.049c-.346-.877-1.586-.877-1.932 0-.105.268-.317.48-.585.585-.876.346-.876 1.586 0 1.932.268.105.48.317.585.585.346.876 1.586.876 1.932 0 .105-.268.317-.48.585-.585.876-.346.876-1.586 0-1.932a1.039 1.039 0 01-.585-.585zm10.868-35.2c.346-.877 1.586-.877 1.932 0 .105.268.317.48.585.585.876.346.876 1.586 0 1.932-.268.105-.48.317-.585.585-.346.876-1.586.876-1.932 0a1.039 1.039 0 00-.585-.585c-.876-.346-.876-1.586 0-1.932.268-.106.48-.317.585-.585z"
                            fill="#230B59"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M27.419 31.944a1.6 1.6 0 010-2.263l2.262-2.263a1.6 1.6 0 012.263 0L56.89 52.365a1.6 1.6 0 010 2.262l-2.263 2.263a1.6 1.6 0 01-2.262 0L27.419 31.944zm2.828-.566a.8.8 0 111.131-1.131l8.222 8.221a.8.8 0 01-1.131 1.132l-8.222-8.222z"
                            fill="#230B59"
                          ></path>
                        </svg>
                      </div>
                      <div className="copy-body">
                        Automated reinvestment and rebalancing
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0 mt-1 flex items-start">
                        <svg
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-[24px] w-[21px]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.5 0L14.0003 0.436703C13.7155 0.184324 13.2845 0.184324 12.9997 0.436703L13.5 0ZM14.7715 15.936C14.6193 16.1431 14.25 16.0421 14.25 15.7859V15.5728C14.25 15.3095 14.3573 15.0583 14.5393 14.8663C14.5582 14.8463 14.5775 14.8259 14.5971 14.8049C14.9437 14.4347 15.405 13.8998 15.8671 13.2377C16.7815 11.9277 17.75 10.0463 17.75 7.9173C17.75 5.78827 16.7815 3.90694 15.8671 2.59687C15.405 1.93477 14.9437 1.39993 14.5971 1.02967C14.4235 0.844168 14.2777 0.698989 14.1738 0.598783C14.1218 0.548655 14.0802 0.509705 14.0507 0.482515C14.036 0.468918 14.0243 0.458254 14.0158 0.450597L14.0055 0.441371L14.0023 0.438464L14.0011 0.43744L14.0007 0.437036L13.5 0L12.9993 0.437036L12.9989 0.43744L12.9977 0.438464L12.9945 0.441371L12.9842 0.450597C12.9757 0.458254 12.964 0.468918 12.9493 0.482515C12.9198 0.509705 12.8782 0.548655 12.8262 0.598783C12.7223 0.698989 12.5765 0.844168 12.4029 1.02967C12.0563 1.39993 11.595 1.93477 11.1329 2.59687C10.2185 3.90694 9.25 5.60358 9.25 7.73261C9.25 9.86164 10.2185 11.9277 11.1329 13.2377C11.595 13.8998 12.0563 14.4347 12.4029 14.8049C12.4225 14.8259 12.4418 14.8463 12.4607 14.8663C12.6427 15.0583 12.75 15.3095 12.75 15.5728V15.786C12.75 16.0421 12.3806 16.1432 12.2285 15.936C12.0211 15.6536 11.7894 15.3814 11.5303 15.1251C10.1333 13.7425 8.27295 13.1456 6.82796 12.8841C6.09693 12.7517 5.44963 12.7011 4.98385 12.6835C4.75046 12.6747 4.56129 12.6741 4.42835 12.6758C4.36185 12.6766 4.3093 12.6781 4.27222 12.6794C4.25367 12.68 4.23898 12.6806 4.22834 12.6811L4.21541 12.6817L4.21127 12.6819L4.20978 12.682L4.20918 12.682C3.82748 12.7029 3.5222 13.0045 3.50114 13.3823L3.50108 13.3834L3.501 13.3848L3.50079 13.3889L3.50017 13.4017C3.49969 13.4123 3.49907 13.4268 3.49842 13.4452C3.49712 13.4819 3.49567 13.5339 3.49481 13.5997C3.49308 13.7312 3.49369 13.9185 3.50262 14.1494C3.52043 14.6104 3.57154 15.251 3.70526 15.9745C3.96956 17.4045 4.57269 19.2457 5.96967 20.6282C7.36665 22.0108 9.22704 22.6076 10.672 22.8692C11.4031 23.0016 12.0504 23.0521 12.5161 23.0698C12.646 23.0747 12.75 23.1794 12.75 23.3079V23.9464C12.75 24.428 12.3595 24.8202 11.8735 24.8446C5.68434 25.156 1.84838 27.2055 0.234193 28.7189C-0.0665062 29.0008 -0.0793359 29.4706 0.205537 29.7682C0.49041 30.0658 0.965111 30.0785 1.26581 29.7966C2.68131 28.4694 6.64864 26.2888 13.5 26.2888C20.3514 26.2888 24.3187 28.4694 25.7342 29.7966C26.0349 30.0785 26.5096 30.0658 26.7945 29.7682C27.0793 29.4706 27.0665 29.0008 26.7658 28.7189C25.1516 27.2055 21.3157 25.156 15.1265 24.8446C14.6405 24.8202 14.25 24.428 14.25 23.9464V23.3079C14.25 23.1793 14.354 23.0747 14.4839 23.0698C14.9496 23.0521 15.5969 23.0015 16.328 22.8692C17.773 22.6076 19.6333 22.0108 21.0303 20.6282C22.4273 19.2457 23.0304 17.4045 23.2947 15.9745C23.4285 15.251 23.4796 14.6104 23.4974 14.1494C23.5063 13.9185 23.5069 13.7312 23.5052 13.5997C23.5043 13.5339 23.5029 13.4819 23.5016 13.4452C23.5011 13.4329 23.5007 13.4223 23.5003 13.4135C23.5002 13.4091 23.5 13.4052 23.4998 13.4017L23.4992 13.3889L23.499 13.3848L23.4989 13.3834L23.4989 13.3828C23.4778 13.005 23.173 12.7029 22.7913 12.682L22.7902 12.682L22.7887 12.6819L22.7846 12.6817L22.7717 12.6811C22.761 12.6806 22.7463 12.68 22.7278 12.6794C22.6907 12.6781 22.6382 12.6766 22.5716 12.6758C22.4387 12.6741 22.2495 12.6747 22.0161 12.6835C21.5504 12.7011 20.9031 12.7517 20.172 12.8841C18.727 13.1456 16.8667 13.7425 15.4697 15.1251C15.2106 15.3814 14.9789 15.6536 14.7715 15.936ZM16.0581 21.4089C15.9329 21.4316 15.8542 21.2849 15.941 21.1928L19.6382 17.2707C19.84 17.0567 19.8342 16.7229 19.625 16.5158C19.4158 16.3088 19.0785 16.303 18.8622 16.5028L14.8992 20.1617C14.8062 20.2477 14.6579 20.1698 14.6808 20.0459C14.9202 18.7507 15.442 17.2518 16.5303 16.1747C17.6186 15.0977 19.1332 14.5812 20.4419 14.3443C20.6012 14.3155 20.7561 14.291 20.9053 14.2703C21.4876 14.1895 21.9757 14.6725 21.894 15.2488C21.8731 15.3965 21.8483 15.5498 21.8192 15.7074C21.5798 17.0025 21.058 18.5015 19.9697 19.5785C18.8814 20.6556 17.3668 21.172 16.0581 21.4089ZM7.3821 16.5242C7.58612 16.3137 7.92307 16.3045 8.13853 16.5035L12.1008 20.1617C12.1938 20.2477 12.3421 20.1698 12.3192 20.0459C12.0798 18.7507 11.558 17.2518 10.4697 16.1747C9.38136 15.0977 7.86676 14.5812 6.55807 14.3443C6.39881 14.3155 6.24391 14.291 6.09472 14.2703C5.51238 14.1895 5.02431 14.6725 5.10601 15.2488C5.12694 15.3965 5.15165 15.5498 5.18078 15.7074C5.42015 17.0025 5.94203 18.5015 7.03033 19.5785C8.11862 20.6556 9.63323 21.1721 10.9419 21.409C11.0676 21.4317 11.1468 21.2846 11.0599 21.1918L7.37561 17.2558C7.18172 17.0487 7.18456 16.7279 7.3821 16.5242ZM14.227 12.2708C14.2347 12.4876 14.5083 12.5725 14.6329 12.394C15.4685 11.1968 16.25 9.6143 16.25 7.9173C16.25 6.2203 15.4685 4.63781 14.6329 3.44057C14.4869 3.23139 14.3408 3.0362 14.1992 2.85663C13.8408 2.40196 13.1592 2.40196 12.8008 2.85663C12.6592 3.0362 12.5131 3.23139 12.3671 3.44057C11.5315 4.63781 10.75 6.2203 10.75 7.9173C10.75 9.6143 11.5315 11.1968 12.3671 12.394C12.4917 12.5725 12.7653 12.4876 12.773 12.2708L12.9823 6.43249C12.9922 6.15659 13.221 5.93797 13.5 5.93797C13.779 5.93797 14.0078 6.15659 14.0177 6.43249L14.227 12.2708Z"
                            fill="#230B59"
                          ></path>
                        </svg>
                      </div>
                      <div className="copy-body">
                        <a
                          className="z-10 relative underline"
                          
                        >
                          Tax-Loss Harvesting
                        </a>{" "}
                        can boost your after-tax returns with tax savings{" "}
                        <button
                          aria-label="open Tax-Loss Harvesting dialog"
                          className="mb-1 align-middle"
                          type="button"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            role="presentation"
                            className="inline-block h-[1.2em] align-[-0.25em] w-[20px] mt-1"
                            data-toolkit-component="Icon"
                          >
                            <path d="M10.748 10.798h.017c.422 0 .765.343.765.765v2.381a1 1 0 01-1 1h-.285a.745.745 0 000 1.49h4.01a.745.745 0 100-1.49H14a1 1 0 01-1-1v-3.642a1 1 0 00-1-1h-1.252a.748.748 0 000 1.496zm.223-2.927a.965.965 0 00.547.507c.132.05.277.073.435.073.325 0 .583-.09.772-.27a.935.935 0 00.29-.705.913.913 0 00-.29-.699c-.19-.185-.447-.277-.772-.277a1.255 1.255 0 00-.435.073 1.029 1.029 0 00-.33.198.934.934 0 00-.29.705c0 .14.024.272.073.395zM21 12a9 9 0 11-18 0 9 9 0 0118 0zm-1.5 0a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          height="22"
                          width="22"
                          alt="insight-icon"
                          loading="eager"
                          src="./sections/sec-3/insight.svg"
                        />
                      </div>
                      <div className="copy-body">
                        Designed to keep the cost of investing low
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:items-center lg:space-x-8">
                  <div className="pt-[1px] before:block before:-mt-[17px]">
                    <div
                      data-toolkit-component="Inline"
                      className="flex flex-row flex-wrap -ml-medium justify-start items-start"
                    >
                      <div className="leading-[1em] min-w-0 pt-4 pl-4">
                        <SecondaryButton text="Get Started" />
                      </div>
                      <div className="leading-[1em] min-w-0 pt-4 pl-4">
                        <PrimaryButton text="Learn More" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-start-1 h-full min-h-[350px] w-full overflow-hidden border-b-[1px] border-purple-dark border-opacity-40 lg:border-b-0 2xl:border-r-[1px]">
            <div className="relative h-full w-full bg-gradient-to-b from-tealBlue to-reddishOrange">
              <div className="absolute left-1/2 top-8 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div
                    className="aspect-[318/632] top-1/2 -translate-y-[48%] left-1/2 -translate-x-[55%] w-[90%] h-[95%] absolute rounded-3xl bg-[rgba(0,0,0,0.1)] blur-[0.72222px]"
                    data-testid="phone-shadow"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 359 692"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative h-[500px] max-h-[80vh] sm:h-[550px] sm:min-h-[540px] xl:h-[600px] 2xl:h-[660px]"
                  >
                    <g>
                      <g clipPath="url(#0bc1f8334a6687570153f5f046153da6)">
                        <g clipPath="url(#2e3c5e3a07ac91cc9fd097d9c6039345)">
                          <path d="M26-27.764h323.157V671.98H26z" fill="#fff" />
                          <path d="M26-27.764h323.157v37.917H26z" fill="#fff" />
                          <g clipPath="url(#b09031e581602e92270902de5a2c6980)">
                            <path d="M26-99.188h323v703H26z" fill="#fff" />
                            <path
                              d="M51.457 107.906a.859.859 0 011.488 0l2.976 5.154a.86.86 0 01-.744 1.289h-5.951a.86.86 0 01-.744-1.289l2.975-5.154z"
                              fill="#288067"
                            />

                            <path
                              d="M51.458 84.262a.859.859 0 011.488 0l2.975 5.154a.86.86 0 01-.744 1.289h-5.951a.859.859 0 01-.744-1.289l2.976-5.154z"
                              fill="#161338"
                              fillOpacity=".6"
                            />
                            <path
                              d="M116 448h43v2.58h-43V448z"
                              fill="#4840BB"
                            />
                            <path
                              d="M116.2 465.336h42.952v2.577H116.2z"
                              fill="#161338"
                              fillOpacity=".3"
                            />
                            <path d="M116 527h41v2.58h-41z" fill="#4840BB" />
                            <path
                              d="M116.2 544.369h40.375v2.577H116.2z"
                              fill="#161338"
                              fillOpacity=".3"
                            />
                            <path
                              d="M116.2 368.265h87.622v2.577H116.2z"
                              fill="#4840BB"
                            />
                            <path
                              d="M116 386h88v2.58h-88z"
                              fill="#161338"
                              fillOpacity=".3"
                            />
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                            >
                              <tspan x="96.052" y="115.78" />
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                            >
                              <tspan x="95.654" y="115.78">
                                all time
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#288067"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                              fontWeight={500}
                            >
                              <tspan x="59.073" y="115.78">
                                {<Number n={35} type="tspan" />}%
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                            >
                              <tspan x="79.353" y="140.692" />
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                            >
                              <tspan x="90.955" y="140.692">
                                estimated taxes saved
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#288067"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                              fontWeight={500}
                            >
                              <tspan x="47.904" y="140.692">
                                ${<Number n={579} type="tspan" />}
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="30.925"
                              fontWeight={700}
                            >
                              <tspan x="47.047" y="66.82">
                                ${<Number n={98650} type="tspan" />}
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="12.886"
                            >
                              <tspan x="59.075" y="91.951">
                                1.7% today
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                              fontWeight={500}
                            >
                              <tspan x="46.617" y="350.702">
                                US stocks
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="12.886"
                            >
                              <tspan x="46.617" y="372.234">
                                44% current
                              </tspan>
                              <tspan x="46.617" y="389.415">
                                44% target
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                              fontWeight={500}
                            >
                              <tspan x="46.617" y="430.755">
                                Foreign developed stocks
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="12.886"
                            >
                              <tspan x="46.617" y="452.288">
                                15% current
                              </tspan>
                              <tspan x="46.617" y="469.468">
                                15% target
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                              fontWeight={500}
                            >
                              <tspan x="46.617" y="510.808">
                                Emerging market stocks
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="12.886"
                            >
                              <tspan x="46.617" y="532.341">
                                15% current
                              </tspan>
                              <tspan x="46.617" y="549.522">
                                15% target
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.322"
                              fontWeight={500}
                            >
                              <tspan x="46.617" y="590.861">
                                Dividend growth stocks
                              </tspan>
                            </text>
                            <g clipPath="url(#1f8de9aa6d16ced15707b57aa732d536)">
                              <path
                                d="M25.997 229.771l3.797 15.865c.631 2.639 3.957 3.497 5.787 1.494v0c1.626-1.781 4.54-1.336 5.561.849l6.627 14.184c.874 1.87 3.532 1.875 4.413.008l.67-1.419c.709-1.501 2.89-1.353 3.389.231v0c.545 1.732 3.012 1.69 3.496-.061l4.335-15.656a4.298 4.298 0 012.276-2.724l2.136-1.029a4.294 4.294 0 001.62-1.357l2.562-3.552c2.051-2.846 6.465-2.165 7.563 1.167l.266.806a4.297 4.297 0 001.163 1.809l.33.306a4.295 4.295 0 005.833 0l.668-.618c.317-.293.588-.633.804-1.007l1.935-3.355a2.728 2.728 0 014.318-.539v0a2.73 2.73 0 002.711.718l.195-.056a3.064 3.064 0 013.837 2.255l1.266 5.485c.426 1.85 2.931 2.157 3.792.465v0c.694-1.363 2.588-1.501 3.472-.253l6.553 9.258c.989 1.398 3.158 1.02 3.617-.63v0c.586-2.106 3.627-1.93 3.966.229l.927 5.89c.509 3.236 4.896 3.865 6.294.903l2.256-4.782a4.313 4.313 0 011.263-1.569l4.273-3.292a4.293 4.293 0 001.424-1.961l1.69-4.742a3.086 3.086 0 012.907-2.051v0c.695 0 1.37-.234 1.915-.665l6.285-4.971a4.25 4.25 0 00.989-1.111l3.18-5.144c.32-.519.747-.963 1.252-1.304l2.444-1.647a4.29 4.29 0 013.594-.565l1.149.332a4.295 4.295 0 005.027-2.192l.493-.977a4.294 4.294 0 012.29-2.072l1.51-.582a3.487 3.487 0 014.415 1.781v0a3.487 3.487 0 004.625 1.693l4.111-1.901a4.299 4.299 0 011.803-.396h3.596a4.295 4.295 0 004.226-3.526l.615-3.374a4.296 4.296 0 012.173-3.004l3.639-1.979a4.296 4.296 0 002.007-2.369l.893-2.579a4.295 4.295 0 014.059-2.891h.465c.622 0 1.237-.135 1.802-.396l4.519-2.089a4.292 4.292 0 014.869.891l4.236 4.32c.364.371.792.673 1.264.891l6.318 2.921a2.757 2.757 0 011.465 1.651l.053.164c.74 2.28 3.871 2.521 4.952.381l.583-1.156c.829-1.643 3.216-1.517 3.867.205v0a2.117 2.117 0 003.455.767l5.406-5.263 5.18-4.727a3.348 3.348 0 014.788.283v0a3.348 3.348 0 002.532 1.157h.328a4.065 4.065 0 003.697-2.373l.689-1.504a4.296 4.296 0 015.887-2.022l1.14.593a4.007 4.007 0 005.026-1.112v0a4.007 4.007 0 013.176-1.564h.481c2.1 0 3.892-1.519 4.237-3.591l1.264-7.596a4.293 4.293 0 01.787-1.854l3.401-4.586a2.859 2.859 0 012.296-1.156v0c1.106 0 2.112.638 2.584 1.638l.28.592a3.89 3.89 0 004.521 2.099l.291-.078a4.25 4.25 0 002.71-2.212l6.265-12.577a4.292 4.292 0 011.773-1.848l2.08-1.144c2.584-1.423 5.8.123 6.303 3.03l1.542 8.909a4.29 4.29 0 001.531 2.607l4.098 3.315a4.294 4.294 0 005.486-.068L350 170.5"
                                stroke="#4840BB"
                                strokeLinecap="round"
                                strokeWidth="1.718"
                                strokeDashoffset="0px"
                                strokeDasharray="487.51861572265625px 487.51861572265625px"
                              />
                              <path
                                d="M30.11 248.696l-1.153-4.803c-.475-1.979-3.388-1.634-3.388.401v23.202c0 .948.769 1.718 1.718 1.718H347.28c.949 0 1.718-.77 1.718-1.718v-92.299c0-1.477-1.74-2.266-2.851-1.292l-7.468 6.548a1.717 1.717 0 01-2.211.045l-6.543-5.279a1.716 1.716 0 01-.603-.991l-2.445-11.882a1.719 1.719 0 00-1.683-1.372h-2.659c-.276 0-.548.067-.793.194l-3.207 1.667a1.717 1.717 0 00-.744.757l-7.144 14.303c-.22.441-.619.766-1.095.893l-3.164.841a1.719 1.719 0 01-1.995-.925l-1.367-2.889a1.718 1.718 0 00-1.553-.983h-1.307c-.543 0-1.055.257-1.379.693l-4.125 5.548a1.71 1.71 0 00-.316.742l-1.729 10.364a1.718 1.718 0 01-1.695 1.435h-3.81c-.532 0-1.035.247-1.36.669l-1.866 2.42a1.719 1.719 0 01-2.152.476l-5.272-2.735a1.718 1.718 0 00-2.352.808l-2.454 5.344a1.72 1.72 0 01-1.562 1.001h-2.595a1.72 1.72 0 01-1.298-.592l-1.592-1.836a1.718 1.718 0 00-2.454-.145l-6.438 5.86-5.864 5.692a1.718 1.718 0 01-2.803-.623l-.543-1.429c-.529-1.396-2.465-1.499-3.139-.167l-2.066 4.083c-.692 1.367-2.692 1.213-3.166-.245l-.925-2.841a1.715 1.715 0 00-.914-1.028l-7.179-3.311a1.72 1.72 0 01-.506-.355l-5.857-5.958a1.72 1.72 0 00-1.945-.356l-6.707 3.093a1.72 1.72 0 01-.719.158h-2.882c-.732 0-1.383.463-1.623 1.155l-1.825 5.259c-.14.405-.427.742-.804.947l-5.616 3.046a1.72 1.72 0 00-.871 1.202l-1.224 6.703a1.718 1.718 0 01-1.69 1.409h-6.337a1.72 1.72 0 00-.72.158l-6.252 2.883a1.718 1.718 0 01-2.276-.833l-1.45-3.104a1.717 1.717 0 00-2.173-.877l-3.997 1.536a1.719 1.719 0 00-.916.828l-1.911 3.775a1.718 1.718 0 01-2.009.875l-4.381-1.262a1.713 1.713 0 00-1.434.225l-3.917 2.633a1.717 1.717 0 00-.501.521l-3.72 6.003c-.105.17-.239.32-.396.444l-7.035 5.548a1.716 1.716 0 01-1.063.369h-1.453c-.726 0-1.373.456-1.617 1.14l-2.275 6.366a1.721 1.721 0 01-.571.785l-5.38 4.134c-.216.166-.39.382-.506.628l-4.773 10.086c-.723 1.528-2.986 1.203-3.25-.467l-1.975-12.522c-.287-1.824-2.856-1.972-3.352-.194l-.576 2.066c-.388 1.393-2.219 1.712-3.056.533l-7.269-10.242a1.718 1.718 0 00-2.931.214l-.642 1.258c-.729 1.428-2.843 1.168-3.204-.394l-1.788-7.73a1.72 1.72 0 00-2.15-1.264l-2.16.623a1.718 1.718 0 01-1.705-.451l-1.365-1.4a1.718 1.718 0 00-2.717.34l-2.809 4.856c-.086.15-.195.286-.322.403l-2.717 2.506a1.72 1.72 0 01-2.33 0l-2.581-2.381a1.72 1.72 0 01-.467-.724l-2.064-6.247c-.44-1.331-2.203-1.604-3.024-.468l-5.922 8.193c-.168.231-.39.418-.649.542l-3.792 1.821a1.72 1.72 0 00-.911 1.089l-4.76 17.142c-.456 1.648-2.779 1.688-3.293.057l-.197-.625c-.47-1.49-2.524-1.63-3.192-.218l-1.453 3.072c-.622 1.314-2.493 1.31-3.11-.006l-8.36-17.848a1.718 1.718 0 00-2.823-.432l-3.822 4.174c-.93 1.016-2.617.58-2.938-.759z"
                                fill="url(#61978034d33e23a8920c6f8f8178acb4)"
                                fillOpacity=".1"
                              />
                              <path
                                d="M26 255h46.097v-8.8h94.012v-6.4h46.324V227h66.08v-10.4h37.696V201H348"
                                stroke="#4840BB"
                                strokeDasharray="1.36 1.36"
                                strokeWidth="1.289"
                              />
                            </g>
                            <g clipPath="url(#4f440861ed927bc44b8aeba7b9f5486e)">
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fillOpacity=".6"
                                fontFamily="Montserrat"
                                fontSize="10.309"
                              >
                                <tspan x="62.961" y="299.837">
                                  3M
                                </tspan>
                              </text>
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fillOpacity=".6"
                                fontFamily="Montserrat"
                                fontSize="10.309"
                              >
                                <tspan x="110.022" y="299.837">
                                  6M
                                </tspan>
                              </text>
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fillOpacity=".6"
                                fontFamily="Montserrat"
                                fontSize="10.309"
                              >
                                <tspan x="159.132" y="299.837">
                                  1Y
                                </tspan>
                              </text>
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fillOpacity=".6"
                                fontFamily="Montserrat"
                                fontSize="10.309"
                              >
                                <tspan x="205.357" y="299.837">
                                  3Y
                                </tspan>
                              </text>
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fillOpacity=".6"
                                fontFamily="Montserrat"
                                fontSize="10.309"
                              >
                                <tspan x="252.539" y="299.837">
                                  5Y
                                </tspan>
                              </text>
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#4840BB"
                                fontFamily="Montserrat"
                                fontSize="10.309"
                                fontWeight={500}
                              >
                                <tspan x="296.218" y="299.837">
                                  ALL
                                </tspan>
                              </text>
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338f"
                                fillOpacity=".6"
                                fontFamily="Montserrat"
                                fontSize="10.309"
                              >
                                <tspan x="342.785" y="299.837">
                                  2021
                                </tspan>
                              </text>
                              <rect
                                height="20.617"
                                width="35.221"
                                fill="#4840BB"
                                fillOpacity=".1"
                                rx="10.309"
                                x="287.579"
                                y="285.972"
                              />
                            </g>
                            <g clipPath="url(#78d8f2c4b145623d7b37f3aedfe14e54)">
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fontFamily="Montserrat"
                                fontSize="13.322"
                              >
                                <tspan x="275.82" y="350.702">
                                  ${<Number n={33829} type="tspan" />}
                                </tspan>
                              </text>
                            </g>
                            <g
                              clipPath="url(#1a29cea97652795ff8a7c74fbd921fa5)"
                              fill="#288067"
                            >
                              <text
                                style={{ whiteSpace: "pre" }}
                                fontFamily="Montserrat"
                                fontSize="12.886"
                              >
                                <tspan x="293.38" y="371.852">
                                  {<Number n={36} type="tspan" />}%
                                </tspan>
                              </text>
                              <path d="M284.687 365.259a.859.859 0 011.488 0l2.976 5.154a.859.859 0 01-.744 1.288h-5.952a.859.859 0 01-.744-1.288l2.976-5.154z" />
                            </g>
                            <g clipPath="url(#5ad35f0d546eac99e27f6bba4dc3792e)">
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fontFamily="Montserrat"
                                fontSize="13.322"
                              >
                                <tspan x="275.672" y="430.755">
                                  ${<Number n={29633} type="tspan" />}
                                </tspan>
                              </text>
                            </g>
                            <g
                              clipPath="url(#850169a609582076361cf5eec65fecbd)"
                              fill="#288067"
                            >
                              <text
                                style={{ whiteSpace: "pre" }}
                                fontFamily="Montserrat"
                                fontSize="12.886"
                              >
                                <tspan x="293.557" y="451.905">
                                  {<Number n={32} type="tspan" />}%
                                </tspan>
                              </text>
                              <path d="M286.404 445.312a.859.859 0 011.488 0l2.975 5.154a.859.859 0 01-.744 1.289h-5.951a.86.86 0 01-.744-1.289l2.976-5.154z" />
                            </g>
                            <g clipPath="url(#551bef1cefd9687d9d109616de571f70)">
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fontFamily="Montserrat"
                                fontSize="13.322"
                              >
                                <tspan x="283.29" y="510.809">
                                  ${<Number n={10130} type="tspan" />}
                                </tspan>
                              </text>
                            </g>
                            <g
                              clipPath="url(#1372deb08aaca5498e8c7a7851bc2386)"
                              fill="#161338"
                              fillOpacity=".6"
                            >
                              <text
                                style={{ whiteSpace: "pre" }}
                                fontFamily="Montserrat"
                                fontSize="12.886"
                              >
                                <tspan x="307.883" y="531.958">
                                  ${<Number n={3} type="tspan" />}
                                </tspan>
                              </text>
                              <path d="M300.777 531.378a.86.86 0 01-1.488 0l-2.976-5.155a.86.86 0 01.744-1.288h5.952a.86.86 0 01.744 1.288l-2.976 5.155z" />
                            </g>
                            <g clipPath="url(#05953a8bc698d026bc7865b06c25ca44)">
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#161338"
                                fontFamily="Montserrat"
                                fontSize="13.322"
                              >
                                <tspan x="288.916" y="590.861">
                                  ${<Number n={6130} type="tspan" />}
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g filter="url(#e645fb1b57e7826a309fd76d79fb603d)">
                            <path
                              d="M26 603.812h323v39.945c0 10.675-8.654 19.329-19.328 19.329H45.328c-10.674 0-19.328-8.654-19.328-19.329v-39.945z"
                              fill="#fff"
                              fillOpacity="0.82"
                            />
                            <path
                              d="M316.615 622.016a4.99 4.99 0 014.993 4.994v1.048c0 .812-.195 1.584-.55 2.272a.585.585 0 00.223.772c2.13 1.202 3.271 3.212 3.271 5.19 0 .669-.368 1.291-.812 1.795-.462.523-1.095 1.021-1.82 1.452-1.447.86-3.37 1.519-5.295 1.546h-.01c-1.925 0-3.85-.632-5.299-1.474-.726-.421-1.361-.911-1.823-1.429-.447-.5-.816-1.12-.816-1.791v-.017c.048-2.003 1.155-4.023 3.287-5.257a.582.582 0 00.216-.769 4.947 4.947 0 01-.559-2.29v-1.048a4.99 4.99 0 014.994-4.994zm-1.905 10.318c-.564-.227-1.197-.352-1.742-.083-1.907.941-2.788 2.585-2.788 4.041 0 .129.088.405.437.801.332.376.832.78 1.46 1.154 1.259.748 2.926 1.311 4.543 1.335 1.617-.001 3.282-.541 4.539-1.271.628-.364 1.126-.76 1.456-1.131.342-.382.431-.652.434-.782 0-.397-.021-.745-.059-1.048-.304-2.43-3.927-2.648-6.375-2.648a5.108 5.108 0 01-1.905-.368zm5.395-4.631v-.693c0-1.931-1.56-3.49-3.49-3.49a3.485 3.485 0 00-3.49 3.49v.709a3.486 3.486 0 003.49 3.479c1.93 0 3.49-1.559 3.49-3.49v-.005zM260.91 622.887a.501.501 0 00-.739-.557l-17.022 9.993a1.001 1.001 0 00.109 1.783l3.663 1.588c.286.124.498.374.574.676l.89 3.561a.5.5 0 00.84.233l1.941-1.941c.29-.29.729-.374 1.107-.211l3.182 1.379a1.002 1.002 0 001.369-.669l4.086-15.835zm-10.462 11.168a1.002 1.002 0 00.286 1.652l2.629 1.139c1.13.49 2.43-.146 2.737-1.338l1.969-7.628c.094-.364-.346-.625-.621-.369l-7 6.544zm5.548-7.244c.109-.102-.02-.275-.149-.199l-10.235 6.008a.5.5 0 00.055.892l1.557.674c.366.159.791.085 1.083-.187l7.689-7.188zM128.645 637.766c-.732-.731-1.891-.758-2.816-.295a8.018 8.018 0 113.584-3.584c-.464.925-.437 2.085.295 2.816l2.054 2.054a.753.753 0 01-1.063 1.063l-2.054-2.054zm.11-7.467a6.514 6.514 0 10-13.03 0 6.514 6.514 0 0013.03 0z"
                              fill="#161338"
                              fillOpacity=".6"
                              fillRule="evenodd"
                            />
                            <path
                              d="M185.099 622.579a.75.75 0 10-1.028-1.096l-4.009 3.758a.75.75 0 000 1.097l4.009 3.758a.75.75 0 101.028-1.097l-.773-.725c-.663-.621-.223-1.733.685-1.733h8.093a.752.752 0 000-1.503h-8.093c-.908 0-1.348-1.112-.685-1.734l.773-.725zM181.328 636.313a.75.75 0 01.751-.752h8.093c.909 0 1.348-1.112.685-1.734l-.773-.724a.752.752 0 011.028-1.097l4.009 3.758a.751.751 0 010 1.097l-4.009 3.758a.75.75 0 11-1.028-1.097l.773-.724c.663-.622.224-1.734-.685-1.734h-8.093a.75.75 0 01-.751-.751z"
                              fill="#161338"
                              fillOpacity=".6"
                            />
                            <path
                              d="M66.662 640.321c.553 0 1.002-.448 1.002-1.002v-9.813a1 1 0 00-.349-.759l-8.017-6.905a1.004 1.004 0 00-1.308 0l-8.018 6.905a1 1 0 00-.348.759v9.813c0 .554.448 1.002 1.002 1.002h16.036zm-8.672-16.495a1.004 1.004 0 011.308 0l6.514 5.61c.221.19.348.468.348.759v6.619a2.004 2.004 0 01-2.004 2.004h-1.503a1.002 1.002 0 01-1.003-1.002v-4.51c0-.554-.448-1.002-1.002-1.002H56.64c-.553 0-1.002.448-1.002 1.002v4.51c0 .553-.449 1.002-1.002 1.002h-2.506a1.002 1.002 0 01-1.002-1.002v-7.621c0-.291.127-.569.348-.759l6.515-5.61zm-.85 10.983c0-.553.45-1.002 1.003-1.002h1.002c.553 0 1.002.449 1.002 1.002v3.007c0 .553-.449 1.002-1.002 1.002h-1.002a1.002 1.002 0 01-1.003-1.002v-3.007z"
                              fill="#4840BB"
                              fillRule="evenodd"
                            />
                          </g>
                        </g>
                      </g>
                      <rect
                        height="662.571"
                        width="332.68"
                        rx="24.2"
                        stroke="#F0F0F2"
                        strokeWidth="9.68"
                        x="21.16"
                        y="4.972"
                      />
                    </g>
                    <defs>
                      <clipPath id="0bc1f8334a6687570153f5f046153da6">
                        <rect
                          height="652.891"
                          width={323}
                          fill="#fff"
                          rx="19.36"
                          x={26}
                          y="9.813"
                        />
                      </clipPath>
                      <clipPath id="2e3c5e3a07ac91cc9fd097d9c6039345">
                        <path
                          d="M0 0h323.157v699.744H0z"
                          fill="#fff"
                          transform="translate(26 -27.764)"
                        />
                      </clipPath>
                      <clipPath id="b09031e581602e92270902de5a2c6980">
                        <path
                          d="M0 0h323v703H0z"
                          fill="#fff"
                          transform="translate(26 -99.188)"
                        />
                      </clipPath>
                      <clipPath id="1f8de9aa6d16ced15707b57aa732d536">
                        <path
                          d="M0 0h323v121.984H0z"
                          fill="#fff"
                          transform="translate(26 158.398)"
                        />
                      </clipPath>
                      <clipPath id="4f440861ed927bc44b8aeba7b9f5486e">
                        <path
                          d="M0 0h322.141v38.657H0z"
                          fill="#fff"
                          transform="translate(26.429 277.381)"
                        />
                      </clipPath>
                      <clipPath id="78d8f2c4b145623d7b37f3aedfe14e54">
                        <path
                          d="M0 0h68.723v20.617H0z"
                          fill="#fff"
                          transform="translate(259.659 334.762)"
                        />
                      </clipPath>
                      <clipPath id="1a29cea97652795ff8a7c74fbd921fa5">
                        <path
                          d="M0 0h68.723v20.617H0z"
                          fill="#fff"
                          transform="translate(259.659 355.379)"
                        />
                      </clipPath>
                      <clipPath id="5ad35f0d546eac99e27f6bba4dc3792e">
                        <path
                          d="M0 0h68.723v20.617H0z"
                          fill="#fff"
                          transform="translate(259.659 414.816)"
                        />
                      </clipPath>
                      <clipPath id="850169a609582076361cf5eec65fecbd">
                        <path
                          d="M0 0h68.723v20.617H0z"
                          fill="#fff"
                          transform="translate(259.659 435.433)"
                        />
                      </clipPath>
                      <clipPath id="551bef1cefd9687d9d109616de571f70">
                        <path
                          d="M0 0h68.723v20.617H0z"
                          fill="#fff"
                          transform="translate(259.659 494.869)"
                        />
                      </clipPath>
                      <clipPath id="1372deb08aaca5498e8c7a7851bc2386">
                        <path
                          d="M0 0h68.723v20.617H0z"
                          fill="#fff"
                          transform="translate(259.659 515.486)"
                        />
                      </clipPath>
                      <clipPath id="05953a8bc698d026bc7865b06c25ca44">
                        <path
                          d="M0 0h68.723v20.617H0z"
                          fill="#fff"
                          transform="translate(259.659 574.922)"
                        />
                      </clipPath>
                      <filter
                        id="e645fb1b57e7826a309fd76d79fb603d"
                        width="334.831"
                        height="132.198"
                        x="3.628"
                        y="531.628"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="10.186"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1645_26584"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="-0.375" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feBlend
                          in2="effect1_backgroundBlur_1645_26584"
                          result="effect2_dropShadow_1645_26584"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect2_dropShadow_1645_26584"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="61978034d33e23a8920c6f8f8178acb4"
                        gradientUnits="userSpaceOnUse"
                        x1="187.283"
                        x2="187.283"
                        y1="158.397"
                        y2="269.214"
                      >
                        <stop stopColor="#4840BB" />
                        <stop offset={1} stopColor="#4840BB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-2 right-4 lg:-right-12 xl:right-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="./sections/sec-3/whale.webp"
                    />
                    <img
                      className="hidden md:block w-[250px] lg:w-[270px] h-full"
                      width={750}
                      height={800}
                      alt="whale image"
                      loading="eager"
                      src="./sections/sec-3/whale.webp"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec3;
