export function FAQ() {
  return (
    <footer data-testid="footer" className="relative overflow-hidden bg-navy">
      <div className="mx-auto max-w-[2024px] divide-y divide-white px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-x-6 pt-8 pb-8 md:flex-row md:pt-16">
          <a className="z-10 relative font-medium underline">
            <img
              data-testid="logo-dark-wordmark"
              className="text-3xl font-bold text-white"
              width={200}
              height={26}
              alt="Digital Dollars"
              loading="eager"
              src="./logo-white.png"
            />
          </a>
          <nav className="cursor-pointer grid grid-cols-1 items-start gap-x-8 gap-y-8 py-8 sm:grid-cols-2 md:py-0 lg:gap-x-10 xl:grid-cols-4 xl:gap-x-14">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                  Investing
                </h3>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Automated Investing
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Stock Investing
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Explore all investments
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Retirement
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    College
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Socially Responsible
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Pricing
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Tax-loss Harvesting
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Historical Performance
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Whitepapers
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                  Save
                </h3>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Cash
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    ATM Locator
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                  Bonds
                </h3>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Automated Bond Ladder
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Automated Bond Portfolio
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                  Borrow
                </h3>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Borrow
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                  Learn
                </h3>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Blog
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Help Center
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    What level of risk suits you best?
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Home Planning Guide
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Financial Health Guide
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Equity and IPO Guide
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    IRA Contributions Calculator
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                  About
                </h3>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Newsroom
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Reviews
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Careers
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Legal
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
                <a className="group whitespace-nowrap text-white">
                  <div className="relative inline-block">
                    Sitemap
                    <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </div>
                </a>
              </div>
              <a className="group whitespace-nowrap text-white">
                <div className="relative inline-block">
                  Back to top
                  <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                </div>
              </a>
            </div>
          </nav>
        </div>
        <div className="prose-periwinkle text-mediumGray prose max-w-full space-y-4 pt-8 pb-16 text-xs text-steel md:px-0 lg:px-0">
          <p>
            Review Digital Dollars Brokerage LLC with FINRA’s{" "}
            <a target="_blank" rel="noreferrer noopener">
              BrokerCheck here.
            </a>
          </p>
          <p>
            All UI screenshots provided are for illustrative purposes only and
            any performance figures displayed should not be considered
            representative of actual performance.
          </p>
          <ol data-testid="footnotes">
            <li>
              Nerdwallet receives cash compensation for referring potential
              clients to Digital Dollars Advisers, LLC (“Digital Dollars
              Advisers”) via advertisements placed on their website. Nerdwallet
              and Digital Dollars Advisers are not associated with one another
              and have no formal relationship outside of this arrangement.
              Nerdwallet’s opinions are their own. Their ratings are determined
              by their editorial team. The scoring formula for online brokers
              and robo-advisors takes into account over 15 factors, including
              account fees and minimums, investment choices, customer support
              and mobile app capabilities. Nerdwallet ranking as of June 2021.
              Digital Dollars provides{" "}
              <button type="button" className="underline !m-0">
                cash compensation
              </button>{" "}
              in connection with obtaining this ranking. Bankrate’s endorsements
              were voluntarily given and neither Digital Dollars Advisers or
              Digital Dollars Brokerage has a formal relationship with Bankrate.
              Bankrate evaluates firms based on many factors including cost
              factors, account features, and consumer experience aspects, such
              as mobile apps and customer support. The evaluation process was
              conducted by Bankrate’s editorial team. Digital Dollars pays an
              annual license fee to use Bankrate’s awards in marketing
              materials.
            </li>
            <li>
              <p>
                Apple App Store and Google Play Store ratings based on user
                ratings from February 2014 (Apple) and December 2015 (Google)
                through Oct 2023. Ratings compiled by Apple, Inc., and Google,
                Inc., who receive compensation for hosting our app.
              </p>
            </li>
          </ol>
          <p>
            Please note, Real-Time Payments (RTP) transfers may be limited by
            destination institutions, daily transaction caps, and by
            participating entities such as Wells Fargo and the{" "}
            <a target="_blank" rel="noreferrer">
              RTP® Network
            </a>
            . New Cash Account deposits are subject to a 2-4 day holding period
            before becoming available for transfer. Digital Dollars doesn’t
            charge for transfers, but receiving institutions may impose an RTP
            fee.
          </p>
          <p data-testid="termsandconditions">
            By using this website, you understand the information being
            presented is provided for informational purposes only and agree to
            our{" "}
            <a target="_blank" rel="noreferrer">
              Terms of Use
            </a>{" "}
            and{" "}
            <a target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            . Digital Dollars Advisers relies on information from various
            sources believed to be reliable, including clients and third
            parties, but cannot guarantee the accuracy and completeness of that
            information. Nothing in this communication should be construed as an
            offer, recommendation, or solicitation to buy or sell any
            security.Additionally, Digital Dollars Advisers or its affiliates do
            not provide tax advice and investors are encouraged to consult with
            their personal tax advisors.
          </p>
          <p>
            The effectiveness of the Tax-Loss Harvesting strategy to reduce the
            tax liability of the client will depend on the client’s entire tax
            and investment profile, including purchases and dispositions in a
            client’s (or client’s spouse’s) accounts outside of Digital Dollars
            Advisers and type of investments (e.g., taxable or nontaxable) or
            holding period (e.g., short- term or long-term).Tax loss harvesting
            may generate a higher number of trades due to attempts to capture
            losses. There is a chance that trading attributed to tax loss
            harvesting may create capital gains and wash sales and could be
            subject to higher transaction costs and market impacts. In addition,
            tax loss harvesting strategies may produce losses, which may not be
            offset by sufficient gains in the account and may be limited to a
            $3,000 deduction against income. The utilization of losses harvested
            through the strategy will depend upon the recognition of capital
            gains in the same or a future tax period, and in addition may be
            subject to limitations under applicable tax laws, e.g., if there are
            insufficient realized gains in the tax period, the use of harvested
            losses may be limited to a $3,000 deduction against income and
            distributions. Losses harvested through the strategy that are not
            utilized in the tax period when recognized (e.g., because of
            insufficient capital gains and/or significant capital loss
            carryforwards), generally may be carried forward to offset future
            capital gains, if any.
          </p>
          <p>
            The cash balance in the Cash Account is swept to one or more banks
            (the “
            <a target="_blank" rel="noreferrer noopener">
              program banks
            </a>
            ”) where it earns a variable rate of interest and is eligible for
            FDIC insurance. FDIC insurance is not provided until the funds
            arrive at the program banks. FDIC insurance coverage is limited to
            $250,000 per qualified customer account per banking institution.
            Digital Dollars uses more than one program bank to ensure FDIC
            coverage of up to $8 million for your cash deposits. For more
            information on FDIC insurance coverage, please visit{" "}
            <a>www.FDIC.gov</a>. Customers are responsible for monitoring their
            total assets at each of the program banks to determine the extent of
            available FDIC insurance coverage in accordance with FDIC rules. The
            deposits at program banks are not covered by SIPC.
          </p>
          <p>
            All investing involves risk, including the possible loss of money
            you invest, and past performance does not guarantee future
            performance. Please see our <a>Full Disclosure</a> for important
            details.
          </p>
          <p data-testid="finra-sipc">
            Cash Account is offered by Digital Dollars Brokerage LLC (“Digital
            Dollars Brokerage”), a Member of{" "}
            <a target="_blank" rel="noreferrer">
              FINRA
            </a>{" "}
            /{" "}
            <a target="_blank" rel="noreferrer">
              SIPC
            </a>
            . Neither Digital Dollars Brokerage nor any of its affiliates are a
            bank, and Cash Account is not a checking or savings account. We
            convey funds to partner banks who accept and maintain deposits,
            provide the interest rate, and provide FDIC insurance. Investment
            management and advisory services--which are not FDIC insured--are
            provided by Digital Dollars Advisers LLC (“Digital Dollars
            Advisers”), an SEC-registered investment adviser, and financial
            planning tools are provided by Digital Dollars Software LLC
            (“Digital Dollars”). The Stock Investing Account is a
            limited-discretion investment product offered by Digital Dollars
            Advisers LLC.
          </p>
          <p>
            Digital Dollars Advisers, Digital Dollars Brokerage and Digital
            Dollars Software are wholly owned subsidiaries of Digital Dollars
            Corporation.
          </p>
          <p> © 2024 Digital Dollars Corporation. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
}
