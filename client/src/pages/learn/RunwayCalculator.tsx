import LearningLayout from "@/components/LearningLayout";
import { Link } from "wouter";

const RunwayCalculatorPage = () => {
  return (
    <LearningLayout 
      title="Understanding Startup Runway: Time is Money" 
      color="blue"
      icon="fa-calculator"
      readingTime="4 minutes"
    >
      <h2>What is Runway and Why Does it Matter?</h2>
      <p>
        <strong>Runway</strong> is the amount of time your startup has before it runs out of money at the current burn rate. 
        Think of it as how long your company can "fly" before it needs to "refuel" with additional funding or reach profitability.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>Definition:</strong> Runway is calculated by dividing your total available cash by your monthly burn rate, 
          resulting in the number of months your startup can operate before running out of money.
        </p>
      </div>

      <p>
        Runway is one of the most critical metrics for startups because:
      </p>
      <ul>
        <li><strong>It determines your fundraising timeline</strong> — generally, you want to start raising 6-9 months before your cash runs out</li>
        <li><strong>It influences your growth strategy</strong> — shorter runway may require focusing on revenue rather than growth</li>
        <li><strong>It affects hiring decisions</strong> — each new hire decreases your runway</li>
        <li><strong>It impacts your negotiating leverage</strong> — running out of cash puts you in a weak position with investors</li>
      </ul>

      <h2>Understanding the Runway Calculator Inputs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h3 className="font-semibold text-lg mb-3">Monthly Burn Rate</h3>
          <p className="mb-3">
            This is your total monthly expenses minus your monthly revenue (if any). It represents how much cash your 
            company uses each month to operate.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
            <h4 className="font-medium mb-1">Components:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Salaries and benefits</li>
              <li>Office space and utilities</li>
              <li>Software and services</li>
              <li>Marketing and advertising</li>
              <li>Legal and professional fees</li>
              <li>Other operational expenses</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <h3 className="font-semibold text-lg mb-3">Available Funds</h3>
          <p className="mb-3">
            This is the total cash your company has in the bank that can be used for operations. It includes 
            recently raised capital, cash reserves, and any other liquid assets.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
            <h4 className="font-medium mb-1">Components:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Cash in bank accounts</li>
              <li>Unused credit facilities</li>
              <li>Committed but not yet received investments</li>
              <li>Highly liquid investments</li>
              <li>Expected tax refunds or grants</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>The Runway Formula</h2>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6 text-center">
        <div className="inline-block bg-white dark:bg-gray-900 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <p className="text-xl font-mono">
            Runway (months) = Available Funds ÷ Monthly Burn Rate
          </p>
        </div>
      </div>

      <h2>A Practical Example</h2>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 my-6">
        <h3 className="font-semibold text-lg mb-4">TechStart, Inc. Runway Calculation</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Financial Situation:</h4>
            <ul className="list-disc pl-5 my-2 space-y-1">
              <li>Current bank balance: <strong>$500,000</strong></li>
              <li>Monthly expenses: <strong>$80,000</strong></li>
              <li>Monthly revenue: <strong>$20,000</strong></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium">Step 1: Calculate the net monthly burn rate</h4>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded my-2">
              <p className="font-mono">Net Monthly Burn Rate = Monthly Expenses - Monthly Revenue</p>
              <p className="font-mono">Net Monthly Burn Rate = $80,000 - $20,000 = $60,000</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium">Step 2: Calculate the runway</h4>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded my-2">
              <p className="font-mono">Runway = Available Funds ÷ Net Monthly Burn Rate</p>
              <p className="font-mono">Runway = $500,000 ÷ $60,000 = 8.33 months</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium">Result:</h4>
            <p>TechStart has approximately <strong>8.3 months</strong> of runway before running out of cash.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              This means they should start their fundraising process no later than month 2-3 to ensure they have enough time to close a round.
            </p>
          </div>
        </div>
      </div>

      <h2>What's Considered a "Safe" Runway?</h2>

      <div className="space-y-3 my-6">
        <p>
          While there's no one-size-fits-all answer, here are some general guidelines for what's considered a healthy runway:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-lg p-4 text-center">
            <h4 className="font-medium text-red-700 dark:text-red-400">Danger Zone</h4>
            <p className="text-2xl font-bold text-red-600 dark:text-red-500 my-2">0-6 months</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Immediate action needed</p>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900 rounded-lg p-4 text-center">
            <h4 className="font-medium text-amber-700 dark:text-amber-400">Caution Zone</h4>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-500 my-2">6-12 months</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fundraising should be a priority</p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900 rounded-lg p-4 text-center">
            <h4 className="font-medium text-green-700 dark:text-green-400">Healthy Zone</h4>
            <p className="text-2xl font-bold text-green-600 dark:text-green-500 my-2">12+ months</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Strong position for growth</p>
          </div>
        </div>
        
        <p>
          During economic downturns or tight funding environments, investors often recommend having 18-24+ months 
          of runway as a safety buffer.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-5 my-8">
        <h3 className="text-blue-700 dark:text-blue-300 text-lg font-semibold mb-3">Pro Tip: Extending Your Runway</h3>
        <p className="mb-4">To extend your runway without raising additional capital, consider these strategies:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-1">Reduce Expenses</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Renegotiate vendor contracts</li>
              <li>Move to smaller office space or go remote</li>
              <li>Implement hiring freezes</li>
              <li>Cut non-essential software subscriptions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">Increase Revenue</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Focus on sales to existing customers</li>
              <li>Consider price adjustments</li>
              <li>Identify quick-win revenue opportunities</li>
              <li>Explore strategic partnerships</li>
            </ul>
          </div>
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
              Investor Paul Graham coined the terms "default alive" and "default dead" to categorize startups. 
              A startup is "default alive" if its current growth rate and burn rate will lead to profitability before it runs out of money. 
              It's "default dead" if it will run out of money before reaching profitability without additional funding or changes to its trajectory.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Link href="/tools/runway-calculator">
          <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">
            Try Our Runway Calculator Tool
          </a>
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Related Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/learn/burn-rate" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <h4 className="font-medium group-hover:text-blue-500 transition-colors">Understanding Burn Rate</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Learn how to calculate and manage your startup's spending</p>
            </div>
          </a>
          <a href="/glossary#runway" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <h4 className="font-medium group-hover:text-blue-500 transition-colors">Runway in the Glossary</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">See detailed definitions and related financial terms</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default RunwayCalculatorPage;