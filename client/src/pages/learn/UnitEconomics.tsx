import LearningLayout from "@/components/LearningLayout";

const UnitEconomicsPage = () => {
  return (
    <LearningLayout 
      title="Unit Economics: The Building Blocks of Startup Profitability" 
      color="blue"
      icon="fa-users"
      readingTime="7 minutes"
    >
      <h2>What are Unit Economics?</h2>
      <p>
        <strong>Unit economics</strong> refers to the direct revenues and costs associated with a particular business model, 
        expressed on a per-unit basis. For startups, this unit is typically a single customer, transaction, or product.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>In simple terms:</strong> Unit economics is about understanding how much money you make and spend 
          on a single customer. It helps you determine if your core business is fundamentally profitable.
        </p>
      </div>

      <h2>Why Unit Economics Matter</h2>
      <p>
        Strong unit economics are crucial for startup success because:
      </p>
      <ul>
        <li><strong>Sustainable growth:</strong> You can't grow out of poor unit economics</li>
        <li><strong>Fundraising success:</strong> Investors heavily scrutinize these metrics</li>
        <li><strong>Strategic focus:</strong> They help identify the most profitable customer segments</li>
        <li><strong>Operational clarity:</strong> They reveal which parts of your business model need improvement</li>
        <li><strong>Valuation impact:</strong> Better unit economics generally lead to higher valuations</li>
      </ul>

      <h2>Key Unit Economics Metrics</h2>
      
      <h3>Customer Acquisition Cost (CAC)</h3>
      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg my-6">
        <h4 className="font-semibold text-lg mb-2">CAC: The Cost to Acquire a New Customer</h4>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 mb-4">
          <p className="font-mono text-center">CAC = Total Sales & Marketing Cost / Number of New Customers Acquired</p>
        </div>
        <p className="mb-3">
          This includes all costs related to acquiring new customers: marketing expenses, sales team salaries, advertising costs, etc.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          <h5 className="font-medium mb-1">Example:</h5>
          <p className="text-sm">
            If you spent $100,000 on marketing and sales in a month and acquired 500 new customers, your CAC would be:
            <br />
            <span className="font-mono">$100,000 ÷ 500 = $200 per customer</span>
          </p>
        </div>
      </div>

      <h3>Customer Lifetime Value (LTV or CLV)</h3>
      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg my-6">
        <h4 className="font-semibold text-lg mb-2">LTV: The Revenue a Customer Generates Over Time</h4>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 mb-4">
          <p className="font-mono text-center">LTV = Average Revenue Per Customer × Customer Lifetime × Gross Margin</p>
        </div>
        <p className="mb-3">
          This represents the total profit you expect to make from a typical customer during their entire relationship with your company.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          <h5 className="font-medium mb-1">Example:</h5>
          <p className="text-sm">
            If a customer pays $50/month for your SaaS product, stays for 24 months on average, and your gross margin is 80%:
            <br />
            <span className="font-mono">$50 × 24 × 0.8 = $960 lifetime value</span>
          </p>
        </div>
      </div>

      <h3>LTV:CAC Ratio</h3>
      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg my-6">
        <h4 className="font-semibold text-lg mb-2">LTV:CAC: The Efficiency of Your Growth Engine</h4>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 mb-4">
          <p className="font-mono text-center">LTV:CAC Ratio = Lifetime Value / Customer Acquisition Cost</p>
        </div>
        <p className="mb-3">
          This ratio tells you how much value you generate for each dollar spent on customer acquisition.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          <h5 className="font-medium mb-1">Benchmark:</h5>
          <p className="text-sm">
            <strong>Ideal ratio: 3:1 or higher</strong> — For every dollar spent acquiring a customer, you should generate at least $3 in profit.
            <br />
            <span className="font-mono">Using previous examples: $960 ÷ $200 = 4.8:1 ratio (very healthy)</span>
          </p>
        </div>
      </div>

      <h3>CAC Payback Period</h3>
      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg my-6">
        <h4 className="font-semibold text-lg mb-2">CAC Payback: How Long Until You Recover Acquisition Costs</h4>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 mb-4">
          <p className="font-mono text-center">CAC Payback Period = CAC ÷ (ARPU × Gross Margin)</p>
          <p className="text-xs text-center mt-1 text-gray-500">Where ARPU = Average Revenue Per User (monthly)</p>
        </div>
        <p className="mb-3">
          This metric shows how many months it takes to recover the money spent on acquiring a customer.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          <h5 className="font-medium mb-1">Benchmark:</h5>
          <p className="text-sm">
            <strong>SaaS Industry:</strong> 12-18 months is considered good
            <br />
            <strong>Example:</strong> <span className="font-mono">$200 ÷ ($50 × 0.8) = 5 months</span> (excellent)
          </p>
        </div>
      </div>

      <h2>Unit Economics Visualization</h2>
      
      <div className="my-8">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="relative h-80 bg-gray-50 dark:bg-gray-800 rounded overflow-hidden">
            {/* Timeline */}
            <div className="absolute bottom-10 left-0 right-0 h-px bg-gray-300 dark:bg-gray-600"></div>
            
            {/* Time indicators */}
            <div className="absolute bottom-5 left-0 w-full flex justify-between px-6">
              <div className="text-xs text-gray-500">Month 0</div>
              <div className="text-xs text-gray-500">Month 6</div>
              <div className="text-xs text-gray-500">Month 12</div>
              <div className="text-xs text-gray-500">Month 18</div>
              <div className="text-xs text-gray-500">Month 24</div>
            </div>
            
            {/* CAC */}
            <div className="absolute bottom-10 left-6 h-40 w-10 bg-red-500/20 border border-red-500 flex items-center justify-center">
              <div className="transform -rotate-90 whitespace-nowrap text-xs font-medium text-red-600 dark:text-red-400">$200 CAC</div>
            </div>
            
            {/* Monthly revenue */}
            <div className="absolute bottom-10 left-20 right-6 flex items-end">
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-20 w-full bg-green-500/20 border-t border-l border-r border-green-500 flex items-center justify-center"
                  style={{ height: `${Math.min(20 + i * 2, 60)}px` }}
                >
                  {i % 6 === 0 && (
                    <div className="text-xs text-green-600 dark:text-green-400">${40 + i}</div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Break-even point */}
            <div className="absolute bottom-10 left-[140px] h-64 w-px bg-blue-500 z-10">
              <div className="absolute top-0 -translate-x-1/2 -translate-y-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded whitespace-nowrap">
                Break-even at month 5
              </div>
            </div>
            
            {/* Profit area */}
            <div className="absolute top-4 right-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded px-3 py-2">
              <p className="text-sm font-medium text-green-700 dark:text-green-300">Profit</p>
              <p className="text-xs text-green-600 dark:text-green-400">LTV = $960</p>
            </div>
            
            {/* Legend */}
            <div className="absolute top-4 left-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-red-500/20 border border-red-500 mr-2"></div>
                <span className="text-xs">Initial Cost (CAC)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500/20 border border-green-500 mr-2"></div>
                <span className="text-xs">Monthly Revenue</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
            Visualization of CAC, monthly revenue, and break-even point for a subscription business
          </div>
        </div>
      </div>

      <h2>Improving Your Unit Economics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-5">
          <h3 className="text-blue-700 dark:text-blue-300 font-semibold mb-3">Reducing CAC</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Optimize conversion rates</strong> across your marketing funnel</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Focus on customer segments</strong> with lower acquisition costs</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Leverage customer referrals</strong> and viral marketing</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Improve marketing ROI</strong> by testing and optimizing channels</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Create content marketing</strong> for organic, lower-cost acquisition</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg p-5">
          <h3 className="text-green-700 dark:text-green-300 font-semibold mb-3">Increasing LTV</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Reduce churn</strong> through improved customer experiences</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Implement effective upselling</strong> and cross-selling strategies</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Optimize pricing strategy</strong> based on value delivered</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Create premium offerings</strong> or additional service tiers</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Improve customer engagement</strong> through product/service enhancements</span>
            </li>
          </ul>
        </div>
      </div>

      <h2>Industry-Specific Unit Economics</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">Business Model</th>
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">Key Metrics</th>
              <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">Target Benchmarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">SaaS</td>
              <td className="px-6 py-4">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>CAC</li>
                  <li>LTV</li>
                  <li>Monthly Churn Rate</li>
                  <li>ARPU</li>
                </ul>
              </td>
              <td className="px-6 py-4">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>LTV:CAC ratio &gt; 3:1</li>
                  <li>CAC payback &lt; 12 months</li>
                  <li>Monthly churn &lt; 2%</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">E-commerce</td>
              <td className="px-6 py-4">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>CAC</li>
                  <li>Average Order Value (AOV)</li>
                  <li>Gross Margin</li>
                  <li>Repeat Purchase Rate</li>
                </ul>
              </td>
              <td className="px-6 py-4">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>CAC:AOV ratio &lt; 1:3</li>
                  <li>Gross margin &gt; 30%</li>
                  <li>&gt;25% repeat purchases</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Marketplace</td>
              <td className="px-6 py-4">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>CAC (both sides)</li>
                  <li>Take Rate</li>
                  <li>GMV per User</li>
                  <li>Liquidity</li>
                </ul>
              </td>
              <td className="px-6 py-4">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Take rate &gt; 10%</li>
                  <li>CAC payback &lt; 6 months</li>
                  <li>High liquidity (match rate)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
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
              The famous venture capitalist Bill Gurley advocates for what he calls the "rake" principle: 
              the best marketplaces have a take rate (commission) that's high enough to generate strong unit economics, 
              but low enough not to encourage disintermediation. This delicate balance is crucial for marketplace startups 
              to achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Related Terms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/glossary#cac" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <h4 className="font-medium group-hover:text-blue-500 transition-colors">Customer Acquisition Cost (CAC)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">The total cost of acquiring a new customer</p>
            </div>
          </a>
          <a href="/glossary#ltv" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <h4 className="font-medium group-hover:text-blue-500 transition-colors">Lifetime Value (LTV)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">The total revenue expected from a customer throughout their relationship</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default UnitEconomicsPage;