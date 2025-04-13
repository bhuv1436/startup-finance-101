import LearningLayout from "@/components/LearningLayout";

const TermSheetsPage = () => {
  return (
    <LearningLayout 
      title="Term Sheets: Decoding Investor Agreements" 
      color="amber"
      icon="fa-file-contract"
      readingTime="8 minutes"
    >
      <h2>What is a Term Sheet?</h2>
      <p>
        A <strong>term sheet</strong> is a non-binding document that outlines the key terms and conditions of an 
        investment deal. It serves as a blueprint for the legal documents that will be created if you proceed with 
        the investment. While not legally binding in most parts, a term sheet sets expectations and demonstrates 
        serious intent from both parties.
      </p>

      <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>Think of it as:</strong> A term sheet is like an engagement before marriage—it outlines the major 
          components of your relationship with investors before you sign the final, binding agreements.
        </p>
      </div>

      <h2>Why Term Sheets Matter</h2>
      <p>
        Understanding term sheets is crucial because:
      </p>
      <ul>
        <li><strong>They set the economic terms</strong> that determine how much of your company you're giving up</li>
        <li><strong>They establish control provisions</strong> that affect your ability to run your company</li>
        <li><strong>They're difficult to renegotiate</strong> once agreed upon</li>
        <li><strong>They impact future funding rounds</strong> through precedents they set</li>
        <li><strong>They can include hidden terms</strong> that significantly affect founder outcomes</li>
      </ul>

      <h2>Key Components of a Term Sheet</h2>
      
      <h3>Economic Terms</h3>
      <div className="space-y-4 my-6">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Valuation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium text-amber-700 dark:text-amber-300">Pre-Money Valuation</h5>
              <p className="text-sm">The value of your company before the investment</p>
            </div>
            <div>
              <h5 className="text-sm font-medium text-amber-700 dark:text-amber-300">Post-Money Valuation</h5>
              <p className="text-sm">Pre-money valuation plus the new investment amount</p>
            </div>
          </div>
          <div className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <strong>Example:</strong> If your pre-money valuation is $8M and you raise $2M, your post-money valuation is $10M. 
            The investors will own 20% of the company ($2M ÷ $10M).
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Investment Amount & Structure</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Total funding being raised</li>
            <li>Investment tranches/milestones (if applicable)</li>
            <li>Type of security (preferred stock, convertible notes, etc.)</li>
            <li>Pro-rata rights for future rounds</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Liquidation Preference</h4>
          <p className="text-sm mb-3">
            Determines who gets paid first and how much in a "liquidation event" (acquisition, IPO, or shutdown).
          </p>
          <div className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <strong>Common structures:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li><strong>1x Non-participating:</strong> Investors get their money back first, then share remaining proceeds with everyone (founder-friendly)</li>
              <li><strong>1x Participating:</strong> Investors get their money back first, AND share in the remaining proceeds (investor-friendly)</li>
              <li><strong>Multiple preference (2x, 3x):</strong> Investors get 2-3x their investment before anyone else gets paid (very investor-friendly)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Option Pool</h4>
          <p className="text-sm mb-3">
            A reserved percentage of equity for future employee hires. Usually created or increased before a funding round.
          </p>
          <div className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <strong>Important note:</strong> Option pools are typically created from the pre-money valuation, meaning they dilute 
            existing shareholders (founders) but not the new investors.
          </div>
        </div>
      </div>

      <h3>Control Terms</h3>
      <div className="space-y-4 my-6">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Board Composition</h4>
          <p className="text-sm mb-3">
            Determines who sits on your board of directors and how voting rights are allocated.
          </p>
          <div className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <strong>Common structures:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li><strong>Seed stage:</strong> 3 seats (2 founders, 1 investor)</li>
              <li><strong>Series A:</strong> 5 seats (2 founders, 2 investors, 1 independent)</li>
              <li><strong>Later stages:</strong> Can become more investor-heavy</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Protective Provisions</h4>
          <p className="text-sm mb-3">
            Special veto rights for investors over major company decisions, regardless of their ownership percentage.
          </p>
          <div className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <strong>Common protective provisions:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Sale of the company</li>
              <li>Raising additional capital</li>
              <li>Changes to corporate charter</li>
              <li>Creating new equity classes</li>
              <li>Changing board size</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Founder Vesting</h4>
          <p className="text-sm mb-3">
            Schedules for founders to earn their equity over time, typically over 4 years.
          </p>
          <div className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <strong>Standard vesting schedule:</strong> 4-year vesting with a 1-year cliff (meaning you get 25% after 1 year, 
            then 1/48th each month thereafter)
          </div>
        </div>
      </div>

      <h3>Other Important Terms</h3>
      <div className="space-y-4 my-6">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Anti-Dilution Protection</h4>
          <p className="text-sm mb-3">
            Protects investors if the company raises money at a lower valuation in the future.
          </p>
          <div className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <strong>Types of anti-dilution:</strong>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li><strong>Full Ratchet:</strong> Very investor-friendly — adjusts price to the lowest subsequent round</li>
              <li><strong>Weighted Average:</strong> More balanced — adjusts based on amount of cheaper stock issued</li>
              <li><strong>No Anti-Dilution:</strong> Founder-friendly</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Information Rights</h4>
          <p className="text-sm mb-3">
            Defines what financial information you must provide to investors and how often.
          </p>
          <div className="mt-3 text-sm bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <strong>Typical requirements:</strong> Monthly financial statements, annual budgets, board meeting rights
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Drag-Along Rights</h4>
          <p className="text-sm mb-3">
            Allows majority shareholders to force minority shareholders to join in a sale of the company.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h4 className="font-semibold mb-2">Right of First Refusal (ROFR)</h4>
          <p className="text-sm mb-3">
            Gives the company and/or investors the right to purchase shares before they can be sold to a third party.
          </p>
        </div>
      </div>

      <h2>Term Sheet Red Flags</h2>
      
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg p-5 my-6">
        <h3 className="text-red-700 dark:text-red-300 font-semibold mb-3">Watch Out For These Terms</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span><strong>Multiple liquidation preferences (2x or higher)</strong> — can significantly reduce founder payout in an exit</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span><strong>Full ratchet anti-dilution</strong> — can severely dilute founders if you have a down round</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span><strong>Investor-controlled board</strong> — can lead to loss of founder control over company direction</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span><strong>Excessive option pool</strong> — unnecessarily dilutes founders before investment</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span><strong>Cumulative dividends</strong> — can significantly increase the liquidation preference over time</span>
          </li>
        </ul>
      </div>

      <h2>Term Sheet Visualization</h2>
      
      <div className="my-8">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg">Series A Term Sheet Summary</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Investment: $5M at $15M pre-money valuation</p>
          </div>
          
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Economics</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Pre-Money Valuation:</span>
                    <span className="font-medium">$15M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Investment Amount:</span>
                    <span className="font-medium">$5M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Post-Money Valuation:</span>
                    <span className="font-medium">$20M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Investor Ownership:</span>
                    <span className="font-medium">25%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Option Pool (post-financing):</span>
                    <span className="font-medium">15%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Liquidation Preference:</span>
                    <span className="font-medium">1x Non-participating</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-2">Control</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Board Seats:</span>
                    <span className="font-medium">2 Founders, 1 Investor, 1 Independent</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Protective Provisions:</span>
                    <span className="font-medium">Standard</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vesting Schedule:</span>
                    <span className="font-medium">4 years, 1-year cliff</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Anti-dilution:</span>
                    <span className="font-medium">Weighted Average</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pro-rata Rights:</span>
                    <span className="font-medium">Yes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Information Rights:</span>
                    <span className="font-medium">Monthly financials</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-medium mb-3">Cap Table (Post-Financing)</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Stakeholder</th>
                      <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Ownership %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-2 text-sm">Founders</td>
                      <td className="px-4 py-2 text-sm text-right">60%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">Series A Investors</td>
                      <td className="px-4 py-2 text-sm text-right">25%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">Option Pool</td>
                      <td className="px-4 py-2 text-sm text-right">15%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
          Example Series A term sheet overview for a startup raising $5M at $15M pre-money valuation
        </div>
      </div>

      <h2>Negotiation Tips for Founders</h2>
      
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg p-5 my-6">
        <h3 className="text-green-700 dark:text-green-300 font-semibold mb-3">How to Negotiate Better Terms</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Run a competitive process</strong> — having multiple term sheets gives you leverage</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Focus on the big items</strong> — valuation, liquidation preference, and board control matter most</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Get experienced legal counsel</strong> — attorneys who regularly work with startups will spot issues</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Talk to other founders</strong> — learn what terms they accepted and their consequences</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Understand the precedent</strong> — terms in this round will affect future rounds</span>
          </li>
        </ul>
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
              Y Combinator publishes open-source term sheets for seed rounds and Series A rounds that are designed 
              to be founder-friendly. Many founders use these as a starting point in negotiations with investors. 
              They're available on Y Combinator's website and are updated periodically to reflect current market conditions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Related Terms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/glossary#pre-money-valuation" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-amber-500 dark:hover:border-amber-500 transition-colors">
              <h4 className="font-medium group-hover:text-amber-500 transition-colors">Pre-Money Valuation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">The value assigned to a company before receiving investment</p>
            </div>
          </a>
          <a href="/glossary#liquidation-preference" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-amber-500 dark:hover:border-amber-500 transition-colors">
              <h4 className="font-medium group-hover:text-amber-500 transition-colors">Liquidation Preference</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Investor right to receive proceeds from a sale before common shareholders</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default TermSheetsPage;