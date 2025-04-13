import LearningLayout from "@/components/LearningLayout";

const CapTablesPage = () => {
  return (
    <LearningLayout 
      title="Cap Tables & Dilution: Understanding Equity Ownership" 
      color="purple"
      icon="fa-chart-pie"
      readingTime="6 minutes"
    >
      <h2>What is a Cap Table?</h2>
      <p>
        A <strong>capitalization table</strong>, or "cap table," is a spreadsheet or table that shows the equity ownership 
        in your startup. It lists all the company's securities (common shares, preferred shares, options, warrants, etc.), 
        who owns them, and their respective ownership percentages.
      </p>

      <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>Definition:</strong> A cap table tracks who owns what percentage of your company, including founders, 
          employees, and investors. It's a living document that evolves throughout your company's lifecycle.
        </p>
      </div>

      <h2>Why Cap Tables Matter</h2>
      <p>
        Understanding your cap table is crucial for several reasons:
      </p>
      <ul>
        <li><strong>Ownership clarity:</strong> Knowing exactly who owns what portion of your company</li>
        <li><strong>Fundraising preparation:</strong> Showing potential investors the current ownership structure</li>
        <li><strong>Dilution modeling:</strong> Understanding how new investments will affect existing shareholders</li>
        <li><strong>Option pool management:</strong> Tracking employee equity allocations</li>
        <li><strong>Financial planning:</strong> Modeling exit scenarios and potential payouts</li>
      </ul>

      <h2>Key Components of a Cap Table</h2>
      
      <div className="my-8">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Shareholder</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Security Type</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Shares / Options</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ownership %</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fully Diluted %</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Sarah (CEO)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Common</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">4,500,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">45.0%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">36.0%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Michael (CTO)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Common</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">4,000,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">40.0%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">32.0%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Angel Investor</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Preferred A</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">1,500,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">15.0%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">12.0%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Employee Option Pool</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Options</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">2,500,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">0.0%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">20.0%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Total</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold">12,500,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold">100.0%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold">100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            Example cap table for a seed-stage startup with founders, one investor, and an employee option pool
          </div>
        </div>
      </div>

      <h2>Understanding Dilution</h2>
      
      <p>
        <strong>Dilution</strong> is the reduction in ownership percentage that occurs when a company issues new shares. 
        It's an inevitable part of startup growth as you raise funding rounds, but understanding and managing dilution 
        is crucial for founders.
      </p>

      <h3>How Dilution Works</h3>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg my-6">
        <p className="mb-4">Let's see how dilution works with a simple example:</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Initial Cap Table (Post-Seed)</h4>
            <ul className="list-disc pl-5 my-2 space-y-1">
              <li>Founders: 8,000,000 shares (80%)</li>
              <li>Seed Investors: 2,000,000 shares (20%)</li>
              <li>Total Shares: 10,000,000 (100%)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium">Series A Funding ($5M at $20M pre-money valuation)</h4>
            <ul className="list-disc pl-5 my-2 space-y-1">
              <li>New shares issued: 2,500,000 shares (20% of post-money)</li>
              <li>Post-money total: 12,500,000 shares</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium">New Cap Table (Post-Series A)</h4>
            <ul className="list-disc pl-5 my-2 space-y-1">
              <li>Founders: 8,000,000 shares (64%, down from 80%)</li>
              <li>Seed Investors: 2,000,000 shares (16%, down from 20%)</li>
              <li>Series A Investors: 2,500,000 shares (20%)</li>
              <li>Total Shares: 12,500,000 (100%)</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Note: In this example, each existing shareholder was diluted by 20% of their original ownership percentage.
        </p>
      </div>

      <h3>Dilution Visualization</h3>
      
      <div className="my-6">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="relative h-60 bg-gray-50 dark:bg-gray-800 rounded overflow-hidden">
            {/* Pre-money visualization */}
            <div className="absolute top-0 left-0 bottom-0 w-1/2 border-r border-gray-300 dark:border-gray-600 flex flex-col">
              <div className="text-center py-2 text-sm font-medium">Pre-Money</div>
              <div className="flex-1 flex flex-col">
                <div className="h-4/5 bg-purple-200 dark:bg-purple-900 flex items-center justify-center text-sm">
                  Founders (80%)
                </div>
                <div className="h-1/5 bg-blue-200 dark:bg-blue-900 flex items-center justify-center text-sm">
                  Seed (20%)
                </div>
              </div>
            </div>
            
            {/* Post-money visualization */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 flex flex-col">
              <div className="text-center py-2 text-sm font-medium">Post-Money</div>
              <div className="flex-1 flex flex-col">
                <div className="h-[64%] bg-purple-200 dark:bg-purple-900 flex items-center justify-center text-sm">
                  Founders (64%)
                </div>
                <div className="h-[16%] bg-blue-200 dark:bg-blue-900 flex items-center justify-center text-sm">
                  Seed (16%)
                </div>
                <div className="h-[20%] bg-green-200 dark:bg-green-900 flex items-center justify-center text-sm">
                  Series A (20%)
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg className="h-10 w-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
            Dilution visualization showing ownership before and after Series A funding
          </div>
        </div>
      </div>

      <h2>Option Pools and Their Impact</h2>
      
      <p>
        An <strong>option pool</strong> is a portion of shares reserved for future employees. Creating or expanding an 
        option pool also causes dilution, but it's typically done before a funding round, affecting the pre-money valuation.
      </p>

      <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-5 my-6">
        <h3 className="text-purple-700 dark:text-purple-300 font-semibold mb-3">Option Pool Best Practices</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Size appropriately:</strong> Typical option pools range from 10% (early stage) to 20% (growth stage)</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Negotiate timing:</strong> Creating the pool post-financing rather than pre-financing reduces dilution for founders</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Plan ahead:</strong> Size the pool to last until your next fundraising round</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Consider refreshes:</strong> Create a strategy for granting additional options to valuable employees over time</span>
          </li>
        </ul>
      </div>

      <h2>Pro Tips for Managing Your Cap Table</h2>

      <ol className="space-y-4 my-6">
        <li>
          <strong>Keep it clean and updated:</strong> Regularly review and update your cap table after every equity event 
          (investments, option grants, etc.)
        </li>
        <li>
          <strong>Use specialized software:</strong> As your cap table grows more complex, consider using dedicated cap table 
          management software like Carta, Pulley, or Shareworks
        </li>
        <li>
          <strong>Model future scenarios:</strong> Before raising new rounds, model different investment scenarios to understand 
          potential dilution impacts
        </li>
        <li>
          <strong>Share thoughtfully:</strong> Provide investors with accurate cap table information, but consider limiting 
          detailed compensation information to necessary parties only
        </li>
        <li>
          <strong>Get legal review:</strong> Have your legal counsel review your cap table periodically to ensure it correctly 
          reflects all legal documents
        </li>
      </ol>

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
              While dilution reduces your percentage ownership, it often increases the overall value of your shares. 
              Owning a smaller slice of a much larger pie can be more valuable than owning a large slice of a small pie. 
              Many founders who ended up with single-digit percentage ownership of their companies still became very wealthy 
              when those companies achieved unicorn status.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Related Terms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/glossary#equity" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
              <h4 className="font-medium group-hover:text-purple-500 transition-colors">Equity</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ownership interest in a company represented by shares</p>
            </div>
          </a>
          <a href="/glossary#pre-money-valuation" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
              <h4 className="font-medium group-hover:text-purple-500 transition-colors">Pre-Money Valuation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Company's value before receiving new investment</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default CapTablesPage;