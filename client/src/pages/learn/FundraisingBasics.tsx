import LearningLayout from "@/components/LearningLayout";

const FundraisingBasicsPage = () => {
  return (
    <LearningLayout 
      title="Fundraising Basics: A Guide for Startup Founders" 
      color="primary"
      icon="fa-money-bill-trend-up"
      readingTime="8 minutes"
    >
      <h2>Introduction to Startup Fundraising</h2>
      <p>
        Fundraising is a critical activity for many startups, providing the capital necessary to build, 
        grow, and scale a business. This guide will introduce you to the fundamentals of startup 
        fundraising, from understanding different funding sources to preparing for investor meetings.
      </p>

      <div className="bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>Key concept:</strong> Fundraising isn't just about getting money; it's about finding the right partners 
          at the right time who can help your business grow beyond capital investment.
        </p>
      </div>

      <h2>The Fundraising Journey</h2>
      <p>
        Most successful startups go through multiple rounds of funding as they grow. Each stage has 
        different expectations, investment sizes, and types of investors.
      </p>

      <h3>Common Funding Stages</h3>
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li>
          <strong>Pre-seed:</strong> Earliest stage funding typically from founders, friends and family, 
          or angel investors ($10K-$500K)
        </li>
        <li>
          <strong>Seed:</strong> First significant capital raise to validate product-market fit and 
          build initial traction ($500K-$2M)
        </li>
        <li>
          <strong>Series A:</strong> Focuses on optimizing product and business model with proven traction ($2M-$15M)
        </li>
        <li>
          <strong>Series B:</strong> Scaling the business after finding product-market fit ($10M-$30M)
        </li>
        <li>
          <strong>Series C and beyond:</strong> Substantial growth, market expansion, or preparing for exit ($30M+)
        </li>
      </ul>

      <h2>Types of Funding Sources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h3 className="text-lg font-semibold mb-3">Bootstrapping</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Building your business without external investment, using personal savings 
            and revenue from the business to fund growth.
          </p>
          <div className="mt-3 text-sm">
            <strong>Pros:</strong> Maintain full control, focus on customers not investors
          </div>
          <div className="mt-1 text-sm">
            <strong>Cons:</strong> Slower growth, limited by personal resources
          </div>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h3 className="text-lg font-semibold mb-3">Angel Investors</h3>
          <p className="text-gray-600 dark:text-gray-400">
            High-net-worth individuals who invest their own money in early-stage startups, 
            often providing mentorship along with capital.
          </p>
          <div className="mt-3 text-sm">
            <strong>Pros:</strong> More flexibility, valuable expertise, smaller checks
          </div>
          <div className="mt-1 text-sm">
            <strong>Cons:</strong> Limited funds, may lack formal processes
          </div>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h3 className="text-lg font-semibold mb-3">Venture Capital</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Professional investors who manage pooled funds from limited partners to 
            invest in high-growth potential startups.
          </p>
          <div className="mt-3 text-sm">
            <strong>Pros:</strong> Large capital infusions, strategic advice, connections
          </div>
          <div className="mt-1 text-sm">
            <strong>Cons:</strong> Dilution, pressure for rapid growth and exits
          </div>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h3 className="text-lg font-semibold mb-3">Accelerators & Incubators</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Programs that provide mentorship, resources, and often small investments 
            in exchange for equity, typically over a fixed time period.
          </p>
          <div className="mt-3 text-sm">
            <strong>Pros:</strong> Structured guidance, network effects, demo day exposure
          </div>
          <div className="mt-1 text-sm">
            <strong>Cons:</strong> Small investment, standard terms, time commitment
          </div>
        </div>
      </div>

      <h2>Common Funding Instruments</h2>
      <p>
        Different stages and funding sources often use different investment mechanisms. 
        Here are the most common instruments used in startup fundraising:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Instrument</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Typical Stage</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Key Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><a href="/learn/safe-notes" className="text-primary-500 hover:underline">SAFE Notes</a></td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple agreements that convert to equity during future priced rounds</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pre-seed, Seed</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Valuation caps, discounts, MFN provisions</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Convertible Notes</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Debt that converts to equity, with interest and maturity date</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Seed</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Interest rates, maturity, conversion discounts</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Priced Equity</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Direct purchase of company shares at an agreed valuation</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Series A+</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Preferred terms, liquidation preferences, board seats</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Revenue-Based Financing</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Funding repaid as a percentage of ongoing revenues</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Growth stage</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Repayment caps, revenue percentages</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Preparing for Fundraising</h2>
      <p>
        Successful fundraising requires significant preparation. Before approaching investors, make sure you have:
      </p>

      <div className="my-6 space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mt-1">
            <span className="text-primary-700 dark:text-primary-300 text-sm font-bold">1</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium">Compelling Story</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A clear and compelling narrative about your company's mission, vision, and the problem you're solving.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mt-1">
            <span className="text-primary-700 dark:text-primary-300 text-sm font-bold">2</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium">Pitch Deck</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A concise presentation (10-15 slides) covering the problem, solution, market size, 
              traction, team, business model, and use of funds.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mt-1">
            <span className="text-primary-700 dark:text-primary-300 text-sm font-bold">3</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium">Financial Models</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Realistic projections for 3-5 years, showing growth potential, unit economics, 
              and path to profitability.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mt-1">
            <span className="text-primary-700 dark:text-primary-300 text-sm font-bold">4</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium">Target Investor List</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Research investors who focus on your stage, industry, and investment size, 
              identifying potential champions and warm introductions.
            </p>
          </div>
        </div>
      </div>

      <h2>Valuation Fundamentals</h2>
      <p>
        Determining your startup's valuation is part art, part science. Early-stage 
        valuations are often based on:
      </p>

      <ul className="list-disc pl-5 space-y-2 my-4">
        <li>Market comparables (similar companies at similar stages)</li>
        <li>Traction metrics (users, revenue, growth rates)</li>
        <li>Team experience and track record</li>
        <li>Market size and opportunity</li>
        <li>Proprietary technology or defensibility</li>
        <li>Current fundraising environment</li>
      </ul>

      <div className="bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>Pro tip:</strong> Focus on raising the right amount rather than maximizing valuation. 
          An artificially high valuation now can lead to a "down round" later, which can be damaging 
          to your company's reputation and morale.
        </p>
      </div>

      <h2>Common Fundraising Mistakes</h2>
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li>Starting too late (allow 6+ months for the process)</li>
        <li>Raising too little (or too much) for your stage</li>
        <li>Poorly defining how funds will be used</li>
        <li>Neglecting due diligence preparation</li>
        <li>Taking money from investors who don't align with your vision</li>
        <li>Spending too much time fundraising vs. building the business</li>
      </ul>

      <h2>Resources to Learn More</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="font-medium mb-1">Y Combinator Startup Library</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive resources on all aspects of startup fundraising</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="font-medium mb-1">Venture Deals (Book)</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Brad Feld and Jason Mendelson's essential guide to VC deals</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Next in Your Learning Path</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/learn/safe-notes" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <h4 className="font-medium group-hover:text-primary-500 transition-colors">SAFE Notes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Understand this popular early-stage funding instrument</p>
            </div>
          </a>
          <a href="/learn/cap-tables" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <h4 className="font-medium group-hover:text-primary-500 transition-colors">Cap Tables & Dilution</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Learn how funding affects equity ownership over time</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default FundraisingBasicsPage;