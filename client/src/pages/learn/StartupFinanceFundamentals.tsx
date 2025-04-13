import LearningLayout from "@/components/LearningLayout";

const StartupFinanceFundamentalsPage = () => {
  return (
    <LearningLayout 
      title="Startup Finance Fundamentals: The Basics Every Founder Needs to Know" 
      color="primary"
      icon="fa-money-bill-trend-up"
      readingTime="9 minutes"
    >
      <h2>Introduction</h2>
      <p>
        Understanding the basics of startup finance is essential for any founder, regardless of your background. 
        This guide provides a foundation in key financial concepts that will help you manage your startup's resources, 
        communicate with investors, and make informed business decisions. No accounting degree required—just practical 
        knowledge every entrepreneur needs.
      </p>

      <h2>Why Financial Literacy Matters for Founders</h2>
      <p>
        As a founder, financial literacy allows you to:
      </p>
      <ul>
        <li>Make strategic decisions based on data, not just intuition</li>
        <li>Anticipate cash flow challenges before they become critical</li>
        <li>Communicate effectively with investors and stakeholders</li>
        <li>Set realistic goals and measure progress</li>
        <li>Identify opportunities for growth and optimization</li>
      </ul>

      <h2>Essential Financial Statements</h2>
      
      <h3>Income Statement</h3>
      <p>
        Also called a Profit & Loss (P&L) statement, this shows your revenue, expenses, and profitability over a period of time.
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg my-4">
        <h4 className="font-semibold mb-2">Key components:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Revenue:</strong> Money earned from selling products/services</li>
          <li><strong>Cost of Goods Sold (COGS):</strong> Direct costs of delivering your product</li>
          <li><strong>Gross Margin:</strong> Revenue minus COGS</li>
          <li><strong>Operating Expenses:</strong> Salaries, rent, marketing, etc.</li>
          <li><strong>Net Income:</strong> What's left after all expenses</li>
        </ul>
      </div>

      <div className="my-8">
        <h4 className="text-center mb-4">Simple Income Statement Breakdown</h4>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Item</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">% of Revenue</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Revenue</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">$100,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">100%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600 dark:text-red-400">Cost of Goods Sold</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400">($40,000)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400">40%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Gross Profit</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$60,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">60%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600 dark:text-red-400">Operating Expenses</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400">($45,000)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600 dark:text-red-400">45%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Net Income</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$15,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3>Balance Sheet</h3>
      <p>
        A snapshot of what your company owns (assets), owes (liabilities), and the residual value (equity) at a specific point in time.
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg my-4">
        <h4 className="font-semibold mb-2">Key components:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Assets:</strong> Cash, accounts receivable, inventory, equipment, etc.</li>
          <li><strong>Liabilities:</strong> Loans, accounts payable, deferred revenue, etc.</li>
          <li><strong>Equity:</strong> Founder investment, investor capital, retained earnings</li>
        </ul>
        <p className="mt-2 text-sm italic">Remember the basic accounting equation: Assets = Liabilities + Equity</p>
      </div>

      <h3>Cash Flow Statement</h3>
      <p>
        Tracks the actual flow of cash in and out of your business, helping you understand your liquidity position.
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg my-4">
        <h4 className="font-semibold mb-2">Key components:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Operating Activities:</strong> Cash generated/used by core business operations</li>
          <li><strong>Investing Activities:</strong> Purchase/sale of long-term assets</li>
          <li><strong>Financing Activities:</strong> Raising capital, repaying loans, dividends</li>
        </ul>
      </div>

      <div className="bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>Important:</strong> A company can be profitable on paper (income statement) but still run out of cash if it doesn't 
          manage its cash flow properly. This is why the cash flow statement is often the most important financial statement for startups.
        </p>
      </div>

      <h2>Key Financial Metrics for Startups</h2>

      <h3>Growth Metrics</h3>
      <ul>
        <li><strong>Month-over-Month (MoM) Growth Rate:</strong> The percentage increase in a metric from one month to the next</li>
        <li><strong>Year-over-Year (YoY) Growth Rate:</strong> The percentage increase in a metric compared to the same period in the previous year</li>
        <li><strong>Compound Monthly Growth Rate (CMGR):</strong> The consistent growth rate needed to grow from an initial to final value over a specified time period</li>
      </ul>

      <h3>Efficiency Metrics</h3>
      <ul>
        <li><strong>Burn Rate:</strong> How quickly you're spending money</li>
        <li><strong>Runway:</strong> How long until you run out of cash</li>
        <li><strong>Unit Economics:</strong> Revenue and costs on a per-customer basis</li>
        <li><strong>Gross Margin:</strong> Percentage of revenue left after direct costs</li>
      </ul>

      <h3>Fundraising Metrics</h3>
      <ul>
        <li><strong>Valuation:</strong> Estimated worth of your company</li>
        <li><strong>Dilution:</strong> Percentage of ownership given up in funding rounds</li>
        <li><strong>Cost of Capital:</strong> True cost of the funding you receive</li>
      </ul>

      <h2>Financial Planning for Startups</h2>

      <h3>Budgeting</h3>
      <p>
        Effective startup budgeting involves:
      </p>
      <ol>
        <li><strong>Zero-based budgeting:</strong> Justify all expenses, not just increases</li>
        <li><strong>Scenario planning:</strong> Best, worst, and most likely cases</li>
        <li><strong>Rolling forecasts:</strong> Update regularly as conditions change</li>
        <li><strong>Growth-focused allocation:</strong> Invest where you'll see the most impact</li>
      </ol>

      <h3>Cash Management</h3>
      <p>
        Strategies to optimize cash flow:
      </p>
      <ul>
        <li><strong>Extend payables:</strong> Negotiate favorable payment terms</li>
        <li><strong>Accelerate receivables:</strong> Incentivize early payment</li>
        <li><strong>Minimize fixed costs:</strong> Use variable costs where possible</li>
        <li><strong>Capital efficiency:</strong> Get maximum impact per dollar spent</li>
        <li><strong>Raise before you need it:</strong> Secure funding before cash gets tight</li>
      </ul>

      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-8">
        <h3 className="text-blue-700 dark:text-blue-300 text-lg font-semibold mb-3">Financial Planning Best Practices</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-1">For Pre-Revenue Startups</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Focus on extending runway</li>
              <li>Use milestones instead of time-based budgets</li>
              <li>Plan for 1.5x the expected time to revenue</li>
              <li>Maintain 18+ months of runway if possible</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">For Revenue-Generating Startups</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Balance growth vs. profitability</li>
              <li>Use unit economics to drive decisions</li>
              <li>Monitor customer acquisition costs closely</li>
              <li>Develop a path to profitability</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Common Financial Pitfalls for Startups</h2>
      <ul>
        <li><strong>Unrealistic revenue projections:</strong> Overestimating how quickly you'll grow</li>
        <li><strong>Underestimating expenses:</strong> Forgetting hidden costs and overruns</li>
        <li><strong>Premature scaling:</strong> Increasing costs before your model is proven</li>
        <li><strong>Vanity metrics:</strong> Focusing on numbers that don't drive value</li>
        <li><strong>Ignoring unit economics:</strong> Not understanding cost per customer</li>
        <li><strong>Insufficient runway buffer:</strong> Not raising enough to achieve milestones</li>
      </ul>

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
              According to CB Insights, 38% of startups fail because they run out of cash or fail to raise new capital. 
              Strong financial management is literally a matter of survival.
            </p>
          </div>
        </div>
      </div>

      <h2>Financial Resources for Founders</h2>
      <p>
        Even if you're not a finance expert, these tools can help you manage your startup's finances:
      </p>
      <ul>
        <li>Financial modeling templates</li>
        <li>Accounting software (QuickBooks, Xero, etc.)</li>
        <li>Spend management platforms (Brex, Ramp, etc.)</li>
        <li>Cap table management software (Carta, etc.)</li>
        <li>Fractional CFO services</li>
      </ul>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Next in Your Learning Path</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/learn/burn-rate" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <h4 className="font-medium group-hover:text-primary-500 transition-colors">Burn Rate & Runway</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Learn how to calculate and manage your cash burn</p>
            </div>
          </a>
          <a href="/learn/safe-notes" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <h4 className="font-medium group-hover:text-primary-500 transition-colors">Fundraising Basics</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Understand startup funding instruments and strategies</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default StartupFinanceFundamentalsPage;