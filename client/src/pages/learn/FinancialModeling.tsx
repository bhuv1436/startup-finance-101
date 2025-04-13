import LearningLayout from "@/components/LearningLayout";

const FinancialModelingPage = () => {
  return (
    <LearningLayout 
      title="Financial Modeling: Projecting Your Startup's Future" 
      color="pink"
      icon="fa-chart-line"
      readingTime="7 minutes"
    >
      <h2>What is Financial Modeling?</h2>
      <p>
        <strong>Financial modeling</strong> is the process of creating a summary of a company's financial information in 
        the form of a spreadsheet that can be used to calculate the impact of future events or decisions. For startups, 
        it's a way to quantify your business plan and test different scenarios before they happen.
      </p>

      <div className="bg-pink-50 dark:bg-pink-900/30 border-l-4 border-pink-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>Think of it as:</strong> A financial model is like a flight simulator for your business—it lets you 
          test different scenarios and strategies without the real-world consequences of crashing.
        </p>
      </div>

      <h2>Why Financial Modeling Matters</h2>
      <p>
        Good financial models are essential for startups because they:
      </p>
      <ul>
        <li><strong>Provide clarity on unit economics</strong> and the path to profitability</li>
        <li><strong>Help determine how much funding</strong> you need to raise</li>
        <li><strong>Allow you to test different pricing strategies</strong> before implementing them</li>
        <li><strong>Enable you to plan hiring</strong> based on projected growth and cash flow</li>
        <li><strong>Form the basis for conversations with investors</strong> about your business</li>
        <li><strong>Help identify key drivers</strong> and sensitivities in your business</li>
      </ul>

      <h2>Key Components of a Startup Financial Model</h2>
      
      <h3>Revenue Projections</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">Building Revenue Projections</h4>
        <p className="text-sm mb-4">
          The most important (and most scrutinized) part of your model. Always build this from the bottom up:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-medium text-pink-600 dark:text-pink-400 mb-2">SaaS Revenue Model</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Start with new customers per month</li>
              <li>Calculate monthly churn rate</li>
              <li>Determine average revenue per user (ARPU)</li>
              <li>Project expansion revenue from existing customers</li>
              <li>Sum all revenue streams</li>
            </ul>
            <div className="mt-3 text-xs">
              <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                Monthly Revenue = <br />
                (Previous Customers - Churned + New) × ARPU + Expansion Revenue
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-medium text-pink-600 dark:text-pink-400 mb-2">E-commerce Revenue Model</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Project monthly visitors</li>
              <li>Estimate conversion rate to customers</li>
              <li>Calculate average order value (AOV)</li>
              <li>Determine repeat purchase frequency</li>
              <li>Multiply to get total revenue</li>
            </ul>
            <div className="mt-3 text-xs">
              <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                Monthly Revenue = <br />
                Visitors × Conversion Rate × AOV + Repeat Customer Revenue
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Expense Projections</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">Mapping Out Your Costs</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h5 className="font-medium text-pink-600 dark:text-pink-400 mb-2">Fixed Costs</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Employee salaries and benefits</li>
              <li>Office space and utilities</li>
              <li>Software subscriptions</li>
              <li>Insurance</li>
              <li>Professional services (legal, accounting)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-pink-600 dark:text-pink-400 mb-2">Variable Costs</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Cost of goods sold (COGS)</li>
              <li>Sales commissions</li>
              <li>Payment processing fees</li>
              <li>Customer support (based on volume)</li>
              <li>Cloud hosting (usage-based)</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
          <h5 className="font-medium mb-2">Pro Tip on Expenses</h5>
          <p className="text-sm">
            Always build in a buffer of 10-20% for unexpected expenses. Startups consistently underestimate costs, 
            especially around hiring, sales, and marketing.
          </p>
        </div>
      </div>

      <h3>Cash Flow Projections</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">Tracking Your Runway</h4>
        <p className="text-sm mb-4">
          Cash flow projections show when you'll need to raise more money and help you manage your burn rate:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-medium text-pink-600 dark:text-pink-400 mb-2">Operating Cash Flow</h5>
            <p className="text-sm">
              Cash generated from your core business operations
            </p>
            <div className="mt-3 text-xs">
              <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                Revenue - Expenses<br />
                ± Changes in Working Capital
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-medium text-pink-600 dark:text-pink-400 mb-2">Investing Cash Flow</h5>
            <p className="text-sm">
              Cash used for long-term investments
            </p>
            <div className="mt-3 text-xs">
              <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                Purchase of Equipment<br />
                Capitalized Software<br />
                Other Long-term Investments
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-medium text-pink-600 dark:text-pink-400 mb-2">Financing Cash Flow</h5>
            <p className="text-sm">
              Cash from investors and debt
            </p>
            <div className="mt-3 text-xs">
              <div className="font-mono bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                Equity Investments<br />
                Debt Financing<br />
                Loan Repayments
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Financial Modeling Best Practices</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800 rounded-lg p-5">
          <h3 className="text-pink-700 dark:text-pink-300 font-semibold mb-3">Structure and Organization</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-pink-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Separate assumptions from calculations</strong> — put all key assumptions in one place so they can be easily adjusted</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-pink-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Use different worksheets</strong> for different sections (assumptions, revenue, expenses, cash flow, etc.)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-pink-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Include a dashboard</strong> with key metrics and charts for easy viewing</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-pink-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Color-code cells</strong> to distinguish between inputs, calculations, and outputs</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-5">
          <h3 className="text-blue-700 dark:text-blue-300 font-semibold mb-3">Modeling Approach</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Build multiple scenarios</strong> — base case, upside case, and downside case</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Perform sensitivity analysis</strong> on key variables like conversion rate, churn, pricing, etc.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Use realistic growth patterns</strong> — growth is rarely linear month-over-month</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong>Include flexibility for pivots</strong> in your model as startups often change direction</span>
            </li>
          </ul>
        </div>
      </div>

      <h2>Three Crucial Startup Models</h2>
      
      <h3>1. The Runway Model</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 my-6">
        <p className="text-sm mb-4">
          A simple but critical model that helps you understand how long your cash will last and when you need to raise more.
        </p>
        <div className="mt-3 text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Key Components:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Starting cash balance</li>
            <li>Monthly burn rate (fixed and variable costs)</li>
            <li>Revenue growth projections</li>
            <li>Planned fundraising timelines</li>
          </ul>
        </div>
        <div className="mt-4 text-sm">
          <h4 className="font-medium mb-2">Calculation:</h4>
          <div className="font-mono bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            Months of Runway = Current Cash / Monthly Net Burn
          </div>
        </div>
      </div>

      <h3>2. The Unit Economics Model</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 my-6">
        <p className="text-sm mb-4">
          A model that breaks down the economics of a single customer to determine if your business can be profitable at scale.
        </p>
        <div className="mt-3 text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Key Components:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Customer Acquisition Cost (CAC)</li>
            <li>Lifetime Value (LTV)</li>
            <li>Payback period</li>
            <li>Gross margin per customer</li>
          </ul>
        </div>
        <div className="mt-4 text-sm">
          <h4 className="font-medium mb-2">Key Metrics:</h4>
          <div className="font-mono bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            LTV:CAC Ratio = Lifetime Value / Customer Acquisition Cost<br />
            Payback Period = CAC / (Monthly Revenue per Customer × Gross Margin)
          </div>
        </div>
      </div>

      <h3>3. The Growth Model</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 my-6">
        <p className="text-sm mb-4">
          A model that focuses on how you'll acquire customers and grow revenue over time.
        </p>
        <div className="mt-3 text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Key Components:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Customer acquisition channels and effectiveness</li>
            <li>Conversion rates at each funnel stage</li>
            <li>Customer retention/churn analysis</li>
            <li>Expansion revenue from existing customers</li>
            <li>Viral/referral growth components</li>
          </ul>
        </div>
        <div className="mt-4 text-sm">
          <h4 className="font-medium mb-2">Key Metrics:</h4>
          <div className="font-mono bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            Month-over-Month Growth Rate = (Current Month Revenue / Previous Month Revenue) - 1<br />
            Compound Monthly Growth Rate (CMGR) = (Last Month / First Month)^(1/n) - 1
          </div>
        </div>
      </div>

      <h2>Financial Model Visualization</h2>
      
      <div className="my-8">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="relative h-80 bg-gray-50 dark:bg-gray-800 rounded overflow-hidden">
            
            {/* X and Y axes */}
            <div className="absolute bottom-10 left-16 right-10 h-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="absolute bottom-10 top-10 left-16 w-px bg-gray-300 dark:bg-gray-600"></div>
            
            {/* X axis labels */}
            <div className="absolute bottom-6 left-16 right-10 flex justify-between text-xs text-gray-500">
              <div>Q1</div>
              <div>Q2</div>
              <div>Q3</div>
              <div>Q4</div>
              <div>Q5</div>
              <div>Q6</div>
              <div>Q7</div>
              <div>Q8</div>
            </div>
            
            {/* Y axis labels */}
            <div className="absolute left-2 bottom-10 top-10 flex flex-col justify-between text-xs text-gray-500">
              <div>$1M</div>
              <div>$750K</div>
              <div>$500K</div>
              <div>$250K</div>
              <div>$0</div>
            </div>
            
            {/* Revenue line */}
            <svg className="absolute inset-0" viewBox="0 0 400 240" preserveAspectRatio="none">
              <polyline 
                points="64,170 114,160 164,140 214,110 264,70 314,20 364,10" 
                fill="none" 
                stroke="#ec4899" 
                strokeWidth="2"
              />
              <text x="370" y="10" className="text-xs fill-pink-500">Revenue</text>
            </svg>
            
            {/* Expense line */}
            <svg className="absolute inset-0" viewBox="0 0 400 240" preserveAspectRatio="none">
              <polyline 
                points="64,180 114,170 164,160 214,150 264,130 314,110 364,90" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="2"
              />
              <text x="370" y="90" className="text-xs fill-blue-500">Expenses</text>
            </svg>
            
            {/* Cash line */}
            <svg className="absolute inset-0" viewBox="0 0 400 240" preserveAspectRatio="none">
              <polyline 
                points="64,140 114,130 164,120 214,100 264,60 314,10 364,15" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <text x="370" y="20" className="text-xs fill-green-500">Cash</text>
            </svg>
            
            {/* Break-even point */}
            <div className="absolute top-10 left-[310px] h-[200px] w-px bg-red-500 z-10 border-l border-dashed border-red-500">
              <div className="absolute top-0 -translate-x-1/2 -translate-y-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs px-2 py-1 rounded whitespace-nowrap border border-red-200 dark:border-red-800">
                Break-even point
              </div>
            </div>
            
            {/* Legend */}
            <div className="absolute top-4 left-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
              <div className="text-xs font-medium mb-1">Financial Projections</div>
              <div className="flex items-center mb-1">
                <div className="w-3 h-px bg-pink-500 mr-2"></div>
                <span className="text-xs">Revenue</span>
              </div>
              <div className="flex items-center mb-1">
                <div className="w-3 h-px bg-blue-500 mr-2"></div>
                <span className="text-xs">Expenses</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-px bg-green-500 border-t border-dashed border-green-500 mr-2"></div>
                <span className="text-xs">Cash Balance</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
            Visualization of a typical SaaS startup financial model showing revenue, expenses, and cash balance
          </div>
        </div>
      </div>

      <h2>Common Financial Modeling Pitfalls</h2>
      
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg p-5 my-8">
        <h3 className="text-red-700 dark:text-red-300 font-semibold mb-3">Mistakes to Avoid</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium">Overly Optimistic Growth Projections</span>
              <p className="text-sm mt-1">
                The "hockey stick" growth curve is rarely achieved. Be realistic about customer acquisition and revenue growth rates.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium">Underestimating Expenses</span>
              <p className="text-sm mt-1">
                Startups consistently underestimate how much things will cost, especially hiring, sales, and marketing.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium">Ignoring Cash Flow Timing</span>
              <p className="text-sm mt-1">
                Revenue recognized is not the same as cash received. Account for payment terms and collection delays.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium">Making the Model Too Complex</span>
              <p className="text-sm mt-1">
                Ultra-detailed models with hundreds of inputs are hard to maintain and explain. Focus on key drivers.
              </p>
            </div>
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
              The "Rule of 40" is a principle commonly applied to SaaS companies that suggests a healthy 
              SaaS business should have its growth rate plus profit margin equal to or greater than 40%. 
              For example, if your company is growing at 60% but losing 30% on margin, your combined score 
              is 30%, which is below the target. This rule helps balance the trade-offs between growth and profitability.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Related Terms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/glossary#arr" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-pink-500 dark:hover:border-pink-500 transition-colors">
              <h4 className="font-medium group-hover:text-pink-500 transition-colors">Annual Recurring Revenue (ARR)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Predictable revenue a company expects annually from subscriptions</p>
            </div>
          </a>
          <a href="/glossary#burn-rate" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-pink-500 dark:hover:border-pink-500 transition-colors">
              <h4 className="font-medium group-hover:text-pink-500 transition-colors">Burn Rate</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Rate at which a company spends cash reserves before profitability</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default FinancialModelingPage;