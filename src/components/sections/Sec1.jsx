import { PrimaryButton, SecondaryButton } from "../UI/buttons";

function Sec1() {
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
                        SHORT-TERM SAVINGS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 max-w-full">
                <div className="space-y-4">
                  <h2 className="font-sans text-[34px] 2xl:text-[55px] leading-[1.05] tracking-tight font-extrabold ">
                    More interest on your cash.
                    <br />
                    <span className="font-medium">Earn 5.00% APY.</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="font-sans leading-tight text-sm lg:text-base  font-bold">
                    Earn more on your short-term savings with a high APY
                    delivered through our partner banks. Your cash is easy to
                    access and easy to invest, with no sneaky requirements and
                    no strings attached.
                  </p>
                  <div className="grid max-w-full grid-cols-1 gap-3 xl:grid-cols-2">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          role="presentation"
                          className="inline-block h-[1.2em] align-[-0.25em] mb-1"
                          data-toolkit-component="Icon"
                        >
                          <path d="M11.293 10.233a1 1 0 001.414 0L17.44 5.5a.75.75 0 111.06 1.06l-4.733 4.733a1 1 0 000 1.414L18.5 17.44a.75.75 0 11-1.06 1.06l-4.733-4.732a1 1 0 00-1.414 0L6.56 18.5a.75.75 0 11-1.06-1.06l4.732-4.733a1 1 0 000-1.414L5.5 6.56A.75.75 0 116.56 5.5l4.733 4.733z"></path>
                        </svg>
                      </div>
                      <div className="copy-body">No account fees</div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          role="presentation"
                          className="inline-block h-[1.2em] align-[-0.25em] mb-1"
                          data-toolkit-component="Icon"
                        >
                          <path d="M9.263 3.297l-.772.723c-.661.62-.222 1.73.684 1.73h8.075a.75.75 0 110 1.5H9.175c-.906 0-1.345 1.11-.684 1.73l.772.723a.75.75 0 11-1.026 1.094l-4-3.75a.75.75 0 010-1.094l4-3.75a.75.75 0 111.026 1.094zM5.5 17a.75.75 0 01.75-.75h8.075c.906 0 1.345-1.11.683-1.73l-.771-.723a.75.75 0 111.026-1.094l4 3.75a.75.75 0 010 1.094l-4 3.75a.75.75 0 11-1.026-1.094l.771-.724c.662-.62.223-1.73-.684-1.73H6.25A.75.75 0 015.5 17z"></path>
                        </svg>
                      </div>
                      <div className="copy-body">
                        Unlimited transfers &amp; free same-day withdrawals{" "}
                        <button
                          aria-label="open same-day withdrawal information dialog"
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
                    <div
                      className="flex space-x-4"
                      data-testid="cash-module-feature-item-apy"
                    >
                      <div className="flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          role="presentation"
                          className="inline-block h-[1.2em] align-[-0.25em] mb-1"
                          data-toolkit-component="Icon"
                        >
                          <path d="M18.53 7.47a.75.75 0 010 1.06l-8 8a.75.75 0 01-1.06 0l-4-4a.75.75 0 011.06-1.06l2.763 2.762a1 1 0 001.414 0L17.47 7.47a.75.75 0 011.061 0h-.001z"></path>
                        </svg>
                      </div>
                      <div className="copy-body">
                        No minimum or maximum balance to earn 5.00%APY
                      </div>
                    </div>
                    <div
                      className="flex space-x-4"
                      data-testid="cash-module-feature-item-fdic"
                    >
                      <div className="flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          role="presentation"
                          className="inline-block h-[1.2em] align-[-0.25em] mb-1"
                          data-toolkit-component="Icon"
                        >
                          <path d="M12 7.25a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-.75 2.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm-.5 4.5v3a.75.75 0 11-1.5 0v-3a.75.75 0 111.5 0zm3.25-.75a.75.75 0 01.75.75v3a.75.75 0 11-1.5 0v-3a.75.75 0 01.75-.75zM12.49 3.277l8 4.5a1 1 0 01.51.871v2.29a1 1 0 01-1 1h-.313a1 1 0 00-1 1v2.625a1 1 0 001 1H20a1 1 0 011 1v2.438a1 1 0 01-1 1H4a1 1 0 01-1-1v-2.438a1 1 0 011-1h.313a1 1 0 001-1v-2.625a1 1 0 00-1-1H4a1 1 0 01-1-1v-2.29a1 1 0 01.51-.871l8-4.5a1 1 0 01.98 0zm-5.678 8.161v5.625a1 1 0 01-1 1h-.594a.72.72 0 000 1.438h13.564a.719.719 0 000-1.438h-.595a1 1 0 01-1-1v-5.625a1 1 0 011-1h.368a.945.945 0 00.463-1.768L12.49 4.998a1 1 0 00-.981 0L4.982 8.67a.945.945 0 00.463 1.768h.368a1 1 0 011 1z"></path>
                        </svg>
                      </div>
                      <div className="copy-body">
                        Up to 8M FDIC insurance through partner banks
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
                        <SecondaryButton text="Start saving with $1" />
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
            <div className="relative h-full w-full bg-gradient-to-b from-lime to-lightYellow">
              <div className="absolute left-1/2 top-8 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div
                    className="aspect-[318/632] top-1/2 -translate-y-[48%] left-1/2 -translate-x-[55%] w-[90%] h-[95%] absolute rounded-3xl bg-[rgba(0,0,0,0.1)] blur-[0.72222px]"
                    data-testid="phone-shadow"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 359 691"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative h-[500px] max-h-[80vh] sm:h-[550px] lg:min-h-[540px] xl:h-[600px] 2xl:h-[660px]"
                  >
                    <g>
                      <g clipPath="url(#6d0ea89e7227a06ba8f4fdb952b8adec)">
                        <g clipPath="url(#65e71af8339cf060b6197246fefb7946)">
                          <path d="M26-28h330.696v696H26z" fill="#fff" />
                          <g clipPath="url(#6484f31670f6825d3912c98d29a47851)">
                            <path d="M26-28h326.047v706H26z" fill="#fff" />
                            <path
                              d="M26 10.256h326.047v48.69H26z"
                              fill="#fff"
                            />
                            <path
                              d="M57.3 36.731H46.72l4.86-4.86-1.234-1.226-6.956 6.956 6.956 6.956 1.226-1.226-4.852-4.86H57.3v-1.74z"
                              fill="#4840BB"
                            />
                            <path
                              d="M208.11 207.188a4.348 4.348 0 11-.001 8.695 4.348 4.348 0 01.001-8.695zm0-.543a4.891 4.891 0 100 9.783 4.891 4.891 0 000-9.783z"
                              fill="#161338"
                              fillOpacity=".6"
                              fillRule="evenodd"
                            />
                            <path
                              d="M208.653 209.362a.543.543 0 10-1.086 0 .543.543 0 001.086 0z"
                              fill="#161338"
                              fillOpacity=".6"
                            />
                            <path
                              d="M208.11 214.253c.3 0 .543-.213.543-.476v-2.853c0-.262-.243-.475-.543-.475-.3 0-.544.213-.544.475v2.853c0 .263.244.476.544.476z"
                              fill="#161338"
                              fillOpacity=".6"
                              fillRule="evenodd"
                            />
                            <path
                              d="M168.866 172.41a4.347 4.347 0 110 8.695 4.348 4.348 0 010-8.695zm0-.543a4.89 4.89 0 10-.001 9.78 4.89 4.89 0 00.001-9.78z"
                              fill="#161338"
                              fillOpacity=".6"
                              fillRule="evenodd"
                            />
                            <path
                              d="M169.409 174.584a.544.544 0 10-1.087 0 .544.544 0 001.087 0z"
                              fill="#161338"
                              fillOpacity=".6"
                            />
                            <path
                              d="M168.866 179.474c.3 0 .543-.213.543-.475v-2.853c0-.263-.243-.476-.543-.476-.3 0-.544.213-.544.476v2.853c0 .262.244.475.544.475z"
                              fill="#161338"
                              fillOpacity=".6"
                              fillRule="evenodd"
                            />
                            <path
                              d="M62.228 272.192c0-.4.324-.724.724-.724h13.042c.4 0 .725.324.725.724v7.97a.724.724 0 01-.725.725H62.952a.724.724 0 01-.724-.725v-7.97zm1.087 1.087c0 .4.324.725.724.725h10.868a.725.725 0 000-1.449H64.04c-.4 0-.724.324-.724.724zm.724 2.898c-.4 0-.724.325-.724.725v2.174c0 .4.324.724.724.724h10.868c.4 0 .725-.324.725-.724v-2.174c0-.4-.325-.725-.725-.725H64.04z"
                              fill="#4840BB"
                              fillRule="evenodd"
                            />
                            <path
                              d="M173.808 266.956h19.847v19.847h-19.847z"
                              fill="#fff"
                              fillOpacity=".01"
                            />
                            <path
                              d="M184.397 272.331h-2.995a.632.632 0 00-.635.63c0 .348.284.629.635.629h1.724c.401 0 .727.323.727.72v1.68a.723.723 0 01-.727.719h-1.633a.723.723 0 00-.726.72v3.539c0 .397.325.72.726.72h3.086c.3 0 .544-.242.544-.54a.542.542 0 00-.544-.54h-1.876a.723.723 0 01-.726-.72v-1.319c0-.398.325-.72.726-.72h1.694a.723.723 0 00.726-.72v-4.078a.723.723 0 00-.726-.72zM177.862 272.331h-.847a.725.725 0 00-.726.724v.181c0 .3.244.544.544.544.301 0 .545.243.545.543v2.596c0 .3-.244.543-.545.543-.3 0-.544.243-.544.543v2.958c0 .4.325.725.726.725h1.815a.726.726 0 00.726-.725v-3.018a.483.483 0 00-.484-.483.484.484 0 01-.484-.483v-3.924c0-.4-.325-.724-.726-.724zM188.478 273.523h-1.532a.605.605 0 01-.613-.596c0-.329.275-.596.613-.596h2.696c.406 0 .735.32.735.715v3.522c0 .222.107.431.287.567l.223.166a.708.708 0 01.287.567v3.104a.726.726 0 01-.735.716h-3.493a.605.605 0 01-.613-.596c0-.33.275-.596.613-.596h1.532a.726.726 0 00.735-.716v-1.311a.725.725 0 00-.735-.715h-1.532a.605.605 0 01-.613-.596c0-.329.275-.596.613-.596h1.532c.406 0 .735-.32.735-.715v-1.609a.725.725 0 00-.735-.715z"
                              fill="#4840BB"
                            />
                            <path
                              d="M328.683 272.373h11.955c.398 0 .724.326.724.725v5.796a.727.727 0 01-.724.725h-11.955a.727.727 0 01-.725-.725v-5.796c0-.399.326-.725.725-.725zm10.868 6.159a.726.726 0 00.724-.724v-3.623a.727.727 0 00-.724-.725h-9.782a.727.727 0 00-.724.725v3.623c0 .398.326.724.724.724h9.782zm-9.782-3.804c0-.297.247-.543.544-.543h7.97c.297 0 .543.246.543.543a.548.548 0 01-.543.544h-7.97a.548.548 0 01-.544-.544zm0 1.811c0-.297.247-.543.544-.543h2.898c.297 0 .543.246.543.543a.547.547 0 01-.543.544h-2.898a.548.548 0 01-.544-.544z"
                              fill="#4840BB"
                              fillRule="evenodd"
                            />
                            <path
                              d="M26 311.954h326.047"
                              stroke="#161338"
                              strokeOpacity=".1"
                              strokeWidth=".869"
                            />
                            <path d="M26-28h326.047v38.256H26z" fill="#fff" />
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#4840BB"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                              fontWeight={700}
                            >
                              <tspan x="279.275" y="43.3">
                                Manage
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                              fontWeight={700}
                            >
                              <tspan x="144.704" y="43.3">
                                Cash Account
                              </tspan>
                            </text>
                            <text
                              data-testid="home-phone-savings-account-value"
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="31.3"
                              fontWeight="bold"
                            >
                              <tspan x="46.867" y="157.994">
                                $25,480.45
                              </tspan>
                            </text>
                            <text
                              data-testid="home-phone-apy"
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                              fontWeight={700}
                            >
                              <tspan x="46.867" y="241.133">
                                5.00%
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                            >
                              <tspan x="86.456" y="241.133" />
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                            >
                              <tspan x="90.102" y="241.133">
                                current APY
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                              fontWeight={700}
                            >
                              <tspan x="46.867" y="215.931">
                                $968.26
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                            >
                              <tspan x="99.636" y="215.931" />
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                            >
                              <tspan x="103.282" y="215.931">
                                interest earned
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                            >
                              <tspan x="46.867" y="181.152">
                                Available balance
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#4840BB"
                              fontFamily="Montserrat"
                              fontSize="11.042"
                              fontWeight={500}
                            >
                              <tspan x="85.123" y="280.371">
                                Debit card
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#4840BB"
                              fontFamily="Montserrat"
                              fontSize="11.042"
                              fontWeight={500}
                            >
                              <tspan x="197.611" y="281.073">
                                Account Numbers
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="10.434"
                            >
                              <tspan x="46.867" y="352.117">
                                SEPTEMBER
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                              fontWeight={700}
                            >
                              <tspan x="46.867" y="391.3">
                                Interest earned in September
                              </tspan>
                            </text>
                            <text
                              data-testid="home-phone-september-interest"
                              style={{ whiteSpace: "pre" }}
                              fill="#288067"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                            >
                              <tspan x="278.751" y="391.3">
                                +${/* */}106.17
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="13.042"
                            >
                              <tspan x="46.867" y="412.839">
                                Monday, Sep 8 · Interest
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                              fontWeight={700}
                            >
                              <tspan x="46.867" y="454.645">
                                Transfer to invest
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                            >
                              <tspan x="280.491" y="454.645">
                                $100.00
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="13.042"
                            >
                              <tspan x="46.867" y="476.184">
                                Monday, Sep 8 · Transfer
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="10.434"
                            >
                              <tspan x="46.867" y="510.673">
                                AUGUST
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                              fontWeight={700}
                            >
                              <tspan x="46.867" y="549.566">
                                Transfer to emergency fund
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fontFamily="Montserrat"
                              fontSize="13.52"
                            >
                              <tspan x="277.087" y="549.566">
                                $200.00
                              </tspan>
                            </text>
                            <text
                              style={{ whiteSpace: "pre" }}
                              fill="#161338"
                              fillOpacity=".6"
                              fontFamily="Montserrat"
                              fontSize="13.042"
                            >
                              <tspan x="46.867" y="571.105">
                                Monday, May 8 · Money in
                              </tspan>
                            </text>
                            <g clipPath="url(#e31a0e2f8ff4b4ec8b447926f0d445ba)">
                              <path
                                d="M74.69 118.938c15.366 0 27.822-12.456 27.822-27.822S90.056 63.293 74.69 63.293 46.867 75.75 46.867 91.116s12.457 27.822 27.823 27.822z"
                                fill="#4840BB"
                              />
                              <path
                                d="M87.674 103.045l-.001-.082a.573.573 0 00-.122-.131c-6.075-4.95-5.31-15.304-3.585-24.914.07-.387.116-.646-.192-.682-1.963-.229-8.503.838-10.38 1.35-.489.133-.533.274-.541.582-.515 19.238 11.322 23.265 14.54 23.892.072.014.233.032.281-.015zm-17.09-18.476c-2.41.47-4.641 1.385-6.571 2.207-.17.049-.441.337-.37.696.76 3.886 4.473 14.845 18.668 15.698.326.015.656-.045.399-.205-1.915-1.47-8.722-2.981-11.505-17.843-.028-.152-.025-.73-.621-.553zm-6.812 9.125c-.846.509-3.026 1.938-3.808 2.674-.155.146-.125.249-.057.498.631 2.3 4.357 6.333 13.614 6.02.437-.015.44-.148.21-.317-.148-.11-3.073-1.048-5.748-3.507-1.339-1.23-2.7-3.1-3.613-4.876-.227-.485-.341-.647-.598-.492z"
                                fill="#fff"
                                fillRule="evenodd"
                              />
                              <mask
                                height={27}
                                id="11256672ac6e4f6880450c15d91e77a4"
                                style={{ maskType: "alpha" }}
                                width={29}
                                x={59}
                                y={77}
                                maskUnits="userSpaceOnUse"
                              >
                                <path
                                  d="M87.674 103.045l-.001-.082a.573.573 0 00-.122-.131c-6.075-4.95-5.31-15.304-3.585-24.914.07-.387.116-.646-.192-.682-1.963-.229-8.503.838-10.38 1.35-.489.133-.533.274-.541.582-.515 19.238 11.322 23.265 14.54 23.892.072.014.233.032.281-.015zm-17.09-18.476c-2.41.47-4.641 1.385-6.571 2.207-.17.049-.441.337-.37.696.76 3.886 4.473 14.845 18.668 15.698.326.015.656-.045.399-.205-1.915-1.47-8.722-2.981-11.505-17.843-.028-.152-.025-.73-.621-.553zm-6.812 9.125c-.846.509-3.026 1.938-3.808 2.674-.155.146-.125.249-.057.498.631 2.3 4.357 6.333 13.614 6.02.437-.015.44-.148.21-.317-.148-.11-3.073-1.048-5.748-3.507-1.339-1.23-2.7-3.1-3.613-4.876-.227-.485-.341-.647-.598-.492z"
                                  fill="#fff"
                                  fillRule="evenodd"
                                />
                              </mask>
                              <g clipPath="url(#387c5db62c137f9c7403ab0e23bf8a2d)">
                                <rect
                                  height="55.645"
                                  width="55.645"
                                  fill="#fff"
                                  fillOpacity=".01"
                                  rx="27.823"
                                  x="46.867"
                                  y="63.293"
                                />
                                <path
                                  d="M74.69 118.938c15.366 0 27.822-12.456 27.822-27.822S90.056 63.293 74.69 63.293 46.867 75.75 46.867 91.116s12.457 27.822 27.823 27.822z"
                                  fill="#EDECF8"
                                />
                                <path
                                  d="M83.453 95.935a1.46 1.46 0 100-2.922 1.46 1.46 0 000 2.922z"
                                  fill="#4840BA"
                                />
                                <path
                                  d="M84.545 79.602a.974.974 0 00-1.243-.631l-8.82 2.994a.975.975 0 01-.312.051H63.004a2.922 2.922 0 00-2.912 2.686c0 .002-.004.003-.005 0-.001-.002-.005 0-.005.002v14.882a2.921 2.921 0 002.922 2.922h25.318a.974.974 0 00.974-.974V87.372a.974.974 0 00-.974-.973h-.938a.974.974 0 01-.93-.684l-1.91-6.113zm-21.541 3.875h5.55c.275 0 .338.386.078.474l-5.992 2.034c-.291.1-.63.067-.812-.18a1.46 1.46 0 011.176-2.327zm-1.46 5.356c0-.538.435-.974.973-.974h24.345c.538 0 .974.436.974.974v11.24a.974.974 0 01-.974.974H63.004a1.46 1.46 0 01-1.46-1.46V88.832zm20.283-2.434a2.434 2.434 0 002.323-3.16l-.553-1.772a.974.974 0 00-1.242-.632l-13.596 4.616c-.522.177-.394.948.156.948h12.912z"
                                  fill="#4840BA"
                                  fillRule="evenodd"
                                />
                              </g>
                            </g>
                            <g>
                              <path
                                d="M26 544.103h326.047v62.734H26z"
                                fill="#fff"
                              />
                              <rect
                                height="41.867"
                                width="284.313"
                                fill="#4840BA"
                                rx="13.911"
                                x="46.867"
                                y="554.537"
                              />
                              <text
                                style={{ whiteSpace: "pre" }}
                                fill="#fff"
                                fontFamily="Montserrat"
                                fontSize={19}
                              >
                                <tspan x="117.972" y="581.103">
                                  Transfer money
                                </tspan>
                              </text>
                            </g>
                            <g>
                              <path
                                d="M26 607h322v67.287H26z"
                                fill="#fff"
                                fillOpacity=".82"
                              />
                              <path
                                d="M316.274 624.389a4.766 4.766 0 014.769 4.77v.662a.009.009 0 01.001.005l-.001.012v.322c0 .775-.186 1.513-.525 2.17a.558.558 0 00.213.737c2.035 1.149 3.125 3.069 3.125 4.958 0 .639-.351 1.233-.776 1.715-.441.5-1.046.975-1.738 1.387-1.382.821-3.22 1.451-5.058 1.477h-.01c-1.839 0-3.678-.604-5.062-1.408-.694-.403-1.299-.871-1.742-1.366-.426-.477-.779-1.069-.779-1.71l.001-.017c.045-1.912 1.102-3.843 3.14-5.021a.558.558 0 00.206-.735 4.71 4.71 0 01-.534-2.187v-1.001a4.767 4.767 0 014.77-4.77zm-1.82 9.856c-.538-.218-1.143-.337-1.664-.079-1.821.898-2.663 2.469-2.663 3.859 0 .123.084.387.417.765.318.36.795.745 1.395 1.102 1.203.715 2.795 1.253 4.34 1.276 1.544-.001 3.135-.517 4.335-1.214.6-.348 1.076-.726 1.392-1.08.326-.366.411-.623.414-.748 0-.379-.02-.711-.056-1.001-.291-2.32-3.752-2.529-6.09-2.529a4.89 4.89 0 01-1.82-.351zm5.153-4.424v-.662a3.33 3.33 0 00-3.333-3.334 3.33 3.33 0 00-3.334 3.334v.677a3.33 3.33 0 003.334 3.324 3.33 3.33 0 003.333-3.334v-.005zM260.373 625.221a.48.48 0 00-.706-.533l-16.26 9.546a.957.957 0 00.104 1.704l3.499 1.516a.953.953 0 01.548.646l.851 3.401c.09.361.539.485.803.222l1.853-1.853a.955.955 0 011.057-.201l3.04 1.317a.958.958 0 001.307-.64l3.904-15.125zm-9.994 10.668a.957.957 0 00.273 1.578l2.511 1.088a1.916 1.916 0 002.616-1.279l1.88-7.286c.09-.348-.33-.598-.593-.352l-6.687 6.251zm5.3-6.92c.104-.098-.019-.263-.142-.191l-9.777 5.739a.479.479 0 00.052.852l1.487.645a.96.96 0 001.035-.179l7.345-6.866zM128.644 639.433c-.698-.698-1.806-.724-2.69-.281a7.623 7.623 0 01-3.427.807 7.657 7.657 0 01-7.658-7.658 7.658 7.658 0 1115.317 0 7.624 7.624 0 01-.808 3.427c-.443.883-.417 1.991.282 2.69l1.962 1.962c.28.28.28.735 0 1.015a.716.716 0 01-1.015 0l-1.963-1.962zm.106-7.132a6.223 6.223 0 10-12.446 0 6.223 6.223 0 0012.446 0z"
                                fill="#161338"
                                fillOpacity=".6"
                                fillRule="evenodd"
                              />
                              <path
                                d="M185.267 624.927a.719.719 0 00-.982-1.048l-3.829 3.59a.717.717 0 000 1.048l3.829 3.59a.719.719 0 00.982-1.048l-.739-.692c-.633-.594-.213-1.656.655-1.656h7.73a.718.718 0 000-1.436h-7.73c-.868 0-1.288-1.062-.655-1.656l.739-.692zM181.665 638.045c0-.397.321-.718.718-.718h7.73c.868 0 1.288-1.062.655-1.656l-.739-.692a.719.719 0 01.982-1.048l3.829 3.59a.717.717 0 010 1.048l-3.829 3.59a.719.719 0 01-.982-1.048l.739-.692c.633-.594.213-1.656-.655-1.656h-7.73a.718.718 0 01-.718-.718z"
                                fill="#161338"
                                fillOpacity=".6"
                              />
                              <path
                                d="M66.746 641.874a.957.957 0 00.958-.957v-9.374a.958.958 0 00-.333-.725l-7.659-6.595a.958.958 0 00-1.249 0l-7.659 6.595a.958.958 0 00-.332.725v9.374c0 .529.428.957.957.957h15.317zm-8.283-15.756a.958.958 0 011.25 0l6.222 5.358a.959.959 0 01.333.726v6.322a1.914 1.914 0 01-1.915 1.914h-1.436a.957.957 0 01-.957-.957v-4.308a.957.957 0 00-.958-.957h-3.829a.957.957 0 00-.957.957v4.308a.957.957 0 01-.958.957h-2.393a.957.957 0 01-.957-.957v-7.279c0-.279.121-.544.332-.726l6.223-5.358zm-.811 10.491c0-.529.428-.957.957-.957h.957c.53 0 .958.428.958.957v2.872a.957.957 0 01-.958.957h-.957a.957.957 0 01-.957-.957v-2.872z"
                                fill="#4840BB"
                                fillRule="evenodd"
                              />
                            </g>
                            <rect
                              height="31.911"
                              width="106.167"
                              fill="#4840BB"
                              fillOpacity=".1"
                              rx="15.956"
                              x="46.867"
                              y="260.222"
                            />
                            <rect
                              height="33.758"
                              width="147.625"
                              fill="#4840BB"
                              fillOpacity=".1"
                              rx="16.879"
                              x="159.896"
                              y={260}
                            />
                            <rect
                              height="31.911"
                              width="121.167"
                              fill="#4840BB"
                              fillOpacity=".1"
                              rx="15.956"
                              x="312.054"
                              y="260.222"
                            />
                          </g>
                        </g>
                      </g>
                      <rect
                        height="661.68"
                        width="332.68"
                        rx="24.2"
                        stroke="#F0F0F2"
                        strokeWidth="9.68"
                        x="21.16"
                        y="5.16"
                      />
                    </g>
                    <defs>
                      <clipPath id="6d0ea89e7227a06ba8f4fdb952b8adec">
                        <rect
                          height={652}
                          width={323}
                          fill="#fff"
                          rx="19.36"
                          x={26}
                          y={10}
                        />
                      </clipPath>
                      <clipPath id="65e71af8339cf060b6197246fefb7946">
                        <path
                          d="M0 0h330.696v696H0z"
                          fill="#fff"
                          transform="translate(26 -28)"
                        />
                      </clipPath>
                      <clipPath id="6484f31670f6825d3912c98d29a47851">
                        <path
                          d="M0 0h326.047v706H0z"
                          fill="#fff"
                          transform="translate(26 -28)"
                        />
                      </clipPath>
                      <clipPath id="e31a0e2f8ff4b4ec8b447926f0d445ba">
                        <path
                          d="M0 0h55.645v55.645H0z"
                          fill="#fff"
                          transform="translate(46.867 63.293)"
                        />
                      </clipPath>
                      <clipPath id="387c5db62c137f9c7403ab0e23bf8a2d">
                        <rect
                          height="55.645"
                          width="55.645"
                          fill="#fff"
                          rx="27.823"
                          x="46.867"
                          y="63.293"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-12 right-4 lg:-right-12 lg:bottom-3 xl:right-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="./sections/sec-1/cash.webp"
                    />
                    <img
                      className="hidden md:block md:w-[270px] h-full"
                      width={750}
                      height={800}
                      alt="falling cash image"
                      loading="eager"
                      src="./sections/sec-1/cash.webp"
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

export default Sec1;
