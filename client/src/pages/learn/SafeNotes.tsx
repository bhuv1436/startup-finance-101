import LearningLayout from "@/components/LearningLayout";

const SafeNotesPage = () => {
  return (
    <LearningLayout 
      title="SAFE Notes: Simplified Startup Funding" 
      color="primary"
      icon="fa-money-bill-trend-up"
      readingTime="5 minutes"
    >
      <h2>What is a SAFE Note?</h2>
      <p>
        A <strong>SAFE</strong> (Simple Agreement for Future Equity) is a funding instrument created by Y Combinator 
        in 2013 to streamline early-stage investments. It's a legal agreement that provides investors the right to 
        receive equity in a startup at a future date when a "trigger event" occurs, typically a priced funding round.
      </p>

      <div className="bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>In simple terms:</strong> A SAFE is not debt or equity—it's a promise to provide equity to investors 
          in the future when specific conditions are met, without the complexity of traditional convertible notes.
        </p>
      </div>

      <h2>How SAFEs Work</h2>
      
      <p>Here's a simplified example of how a SAFE works in practice:</p>
      
      <ol>
        <li>
          <strong>Initial Investment:</strong> An angel investor provides $100,000 to your startup using a SAFE with a 
          $5 million valuation cap.
        </li>
        <li>
          <strong>Company Growth:</strong> Your company uses the funds to grow and develop its product.
        </li>
        <li>
          <strong>Trigger Event:</strong> Six months later, your startup raises a $2 million seed round at a $10 million 
          valuation (the "trigger event").
        </li>
        <li>
          <strong>Conversion:</strong> The SAFE automatically converts to equity based on the valuation cap ($5 million, 
          not the $10 million of the new round).
        </li>
        <li>
          <strong>Equity Allocation:</strong> The investor receives equity worth $100,000 ÷ $5,000,000 = 2% of your company 
          (ignoring dilution from the new round).
        </li>
      </ol>

      <h2>SAFE Notes vs. Convertible Notes</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">Feature</th>
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">SAFE Notes</th>
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">Convertible Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Legal Structure</td>
              <td className="px-6 py-4">Agreement for future equity</td>
              <td className="px-6 py-4">Debt instrument</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Maturity Date</td>
              <td className="px-6 py-4">None</td>
              <td className="px-6 py-4">Typically 18-24 months</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Interest</td>
              <td className="px-6 py-4">None</td>
              <td className="px-6 py-4">Usually 4-8% annually</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Repayment Requirement</td>
              <td className="px-6 py-4">No repayment obligation</td>
              <td className="px-6 py-4">Must be repaid at maturity if not converted</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Conversion Event</td>
              <td className="px-6 py-4">Future equity financing</td>
              <td className="px-6 py-4">Future equity financing or maturity date</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Documentation</td>
              <td className="px-6 py-4">Simpler (5-7 pages)</td>
              <td className="px-6 py-4">More complex (15-20 pages)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Pros and Cons for Founders</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg p-5">
          <h3 className="text-green-700 dark:text-green-400 font-semibold mb-3">Advantages</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Simplicity:</strong> Faster to negotiate with fewer legal costs</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>No maturity date:</strong> No pressure to raise another round by a specific date</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>No interest accrual:</strong> Equity stake is predictable and doesn't grow over time</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Standardized terms:</strong> Less negotiation, especially with Y Combinator's standard template</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg p-5">
          <h3 className="text-red-700 dark:text-red-400 font-semibold mb-3">Disadvantages</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>No forced conversion:</strong> SAFEs may remain outstanding indefinitely without a "trigger event"</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Cap table complexity:</strong> Multiple SAFEs with different terms can complicate your cap table</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Potential dilution:</strong> Multiple SAFEs converting at once can significantly dilute founder ownership</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Not universally understood:</strong> Some investors prefer traditional convertible notes</span>
            </li>
          </ul>
        </div>
      </div>

      <h2>Key Terms to Understand</h2>

      <div className="space-y-6 my-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Valuation Cap</h3>
          <p className="text-gray-700 dark:text-gray-300">
            The valuation cap sets a maximum company valuation at which the SAFE can convert to equity, regardless of 
            the actual valuation in the triggering funding round. It effectively sets a maximum price per share that the 
            SAFE investor will pay, potentially giving them a better deal than new investors if your company's value has 
            increased significantly.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            <strong>Example:</strong> With a $5M valuation cap, if you raise at a $10M valuation, SAFE investors still convert 
            as if the company were valued at $5M, giving them twice as many shares per dollar invested compared to new investors.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Discount Rate</h3>
          <p className="text-gray-700 dark:text-gray-300">
            A discount rate gives SAFE investors a percentage discount on the price per share paid by new investors in the 
            triggering round. It rewards early investors for taking on more risk by investing earlier.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            <strong>Example:</strong> With a 20% discount rate, if new investors pay $1.00 per share, SAFE investors would 
            pay $0.80 per share, getting 25% more shares for their investment.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">MFN (Most Favored Nation) Clause</h3>
          <p className="text-gray-700 dark:text-gray-300">
            An MFN clause ensures that if you later issue SAFEs with better terms (like a lower valuation cap), the earlier 
            SAFE investors can elect to adopt those more favorable terms.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            <strong>Example:</strong> If you issue a SAFE with a $5M cap, then later issue one with a $4M cap, investors with 
            the original SAFE can choose to switch to the $4M cap.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Pro Rata Rights</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Pro rata rights give SAFE investors the option to invest additional money in future financing rounds to maintain 
            their ownership percentage and avoid dilution.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            <strong>Example:</strong> If a SAFE investor ends up with 5% ownership after conversion, pro rata rights allow them 
            to invest enough in the next round to maintain that 5% stake.
          </p>
        </div>
      </div>

      <h2>Examples of SAFE Notes in Early-Stage Startups</h2>

      <div className="my-6">
        <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Case Study: Dropbox</h3>
          <p className="mb-3">
            In its early days, Dropbox raised capital using agreements similar to SAFEs before the official Y Combinator template existed. 
            These early investments with simple terms enabled them to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Close deals quickly with angel investors</li>
            <li>Avoid complex negotiations during their critical development phase</li>
            <li>Maintain operational focus without debt obligations</li>
          </ul>
          <p>
            When Dropbox later raised their Series A at a significantly higher valuation, these early investors benefited 
            substantially from their valuation caps, while the company had already achieved significant product-market fit.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-8">
        <div className="flex items-start">
          <div className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 dark:text-amber-300">Did You Know?</h4>
            <p className="text-sm">
              Y Combinator updated the SAFE template in 2018 to use "post-money" valuation caps instead of "pre-money" 
              caps, making it easier to calculate exactly how much ownership SAFE investors will receive. This change 
              makes SAFEs more founder and investor-friendly by providing greater clarity on dilution.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Related Glossary Terms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="/glossary#valuation-cap" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <h4 className="font-medium group-hover:text-primary-500 transition-colors">Valuation Cap</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Maximum valuation at which an investment converts to equity</p>
            </div>
          </a>
          <a href="/glossary#equity" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <h4 className="font-medium group-hover:text-primary-500 transition-colors">Equity</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ownership stake in a company represented by shares</p>
            </div>
          </a>
          <a href="/glossary#dilution" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <h4 className="font-medium group-hover:text-primary-500 transition-colors">Dilution</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Reduction in ownership percentage when new shares are issued</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default SafeNotesPage;