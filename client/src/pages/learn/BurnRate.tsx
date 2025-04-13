import LearningLayout from "@/components/LearningLayout";

const BurnRatePage = () => {
  return (
    <LearningLayout 
      title="Understanding Burn Rate: A Founder's Guide" 
      color="green"
      icon="fa-calculator"
      readingTime="5 minutes"
    >
      <h2>What is Burn Rate?</h2>
      <p>
        In simple terms, <strong>burn rate</strong> is how quickly your startup spends money. It's typically 
        measured as the amount of cash your company uses each month to cover all expenses like salaries, 
        rent, marketing, and other operational costs.
      </p>

      <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 my-6 rounded">
        <p className="text-sm font-medium">
          <strong>Definition:</strong> Burn rate is the rate at which a company spends its cash reserves before 
          generating positive cash flow, typically measured in dollars per month.
        </p>
      </div>

      <h2>A Real-World Example: StartupX</h2>
      <p>
        Let's imagine StartupX, a software company with 10 employees. Their monthly expenses include:
      </p>
      <ul>
        <li>Salaries and benefits: $85,000</li>
        <li>Office space: $7,000</li>
        <li>Software subscriptions: $3,000</li>
        <li>Marketing: $15,000</li>
        <li>Miscellaneous expenses: $5,000</li>
      </ul>
      <p>
        StartupX's gross burn rate is $115,000 per month. If they're generating $40,000 in monthly revenue, 
        their net burn rate would be $75,000 per month ($115,000 - $40,000).
      </p>

      <h2>How to Calculate Burn Rate</h2>
      
      <h3>Manual Calculation</h3>
      <p>
        Burn rate comes in two flavors:
      </p>
      <ul>
        <li>
          <strong>Gross Burn Rate:</strong> Total monthly expenses (regardless of revenue)
          <br />
          <em>Formula: Sum of all monthly expenses</em>
        </li>
        <li>
          <strong>Net Burn Rate:</strong> How much cash you're losing each month after accounting for revenue
          <br />
          <em>Formula: Gross Burn Rate - Monthly Revenue</em>
        </li>
      </ul>

      <h3>Using a Calculator</h3>
      <p>
        To calculate burn rate in a more sophisticated way, you can use our <a href="/tools/runway-calculator">Runway Calculator</a> 
        which allows you to:
      </p>
      <ul>
        <li>Enter all expense categories</li>
        <li>Account for projected revenue</li>
        <li>View trends over time</li>
        <li>Calculate runway (how long your cash will last)</li>
      </ul>

      <h2>Why Tracking Burn Rate is Crucial</h2>
      <p>
        Understanding your burn rate is important because:
      </p>
      <ol>
        <li>
          <strong>It determines your runway:</strong> If your startup has $600,000 in the bank and burns $50,000/month, 
          you have a 12-month runway ($600,000 ÷ $50,000 = 12 months).
        </li>
        <li>
          <strong>It guides fundraising timing:</strong> Startups should typically start raising their next round when 
          they have 6-9 months of runway left. With a 12-month runway, that means beginning fundraising 
          efforts at around the 3-6 month mark.
        </li>
        <li>
          <strong>It forces financial discipline:</strong> Tracking burn rate helps identify unnecessary expenses 
          and prioritize spending on what truly matters.
        </li>
        <li>
          <strong>It's a key investor metric:</strong> Investors will always ask about your burn rate to evaluate 
          how responsibly you're managing their money.
        </li>
      </ol>

      <div className="my-8">
        <h3>Burn Rate Diagram</h3>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="relative h-56 bg-gray-50 dark:bg-gray-800 rounded overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full bg-green-500/10 h-12 border-t border-green-500 flex items-center justify-center">
              <span className="text-xs font-medium">Initial Cash: $600,000</span>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/4 bg-red-500/10 border-l border-red-500">
              <div className="h-full flex flex-col justify-between p-2">
                <span className="text-xs font-medium text-red-500">$50k/month burn</span>
                <span className="text-xs font-medium">12 months runway</span>
              </div>
            </div>
            <div className="absolute bottom-12 left-0 w-full h-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-xs font-medium p-1 bg-amber-100 dark:bg-amber-900/50 border border-amber-500 rounded">
                Start fundraising (month 6)
              </div>
            </div>
            <div className="absolute top-2 left-2 right-2 text-xs text-gray-500 dark:text-gray-400">
              Burn Rate & Runway Visualization
            </div>
          </div>
        </div>
      </div>

      <h2>Tips to Reduce Your Burn Rate</h2>
      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-6">
        <h3 className="text-blue-700 dark:text-blue-300 text-lg font-semibold mb-2">Strategic Cost Reduction</h3>
        <p className="mb-2">If you need to extend your runway, consider these strategies:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Renegotiate contracts</strong> with service providers for better terms</li>
          <li><strong>Consider remote work</strong> to reduce office costs</li>
          <li><strong>Use freelancers</strong> instead of full-time hires for specialized tasks</li>
          <li><strong>Focus marketing</strong> on channels with proven ROI</li>
          <li><strong>Delay non-essential purchases</strong> until you've secured additional funding</li>
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
              Most venture capitalists recommend maintaining at least 12-18 months of runway at all times. During economic downturns, 
              this recommendation often increases to 24+ months. Companies that run out of cash without achieving key milestones or securing 
              new funding are referred to as having "hit the wall."
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-3">Related Terms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/glossary#runway" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-green-500 dark:hover:border-green-500 transition-colors">
              <h4 className="font-medium group-hover:text-green-500 transition-colors">Runway</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Time until a company runs out of cash at the current burn rate</p>
            </div>
          </a>
          <a href="/glossary#cash-flow-positive" className="group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-green-500 dark:hover:border-green-500 transition-colors">
              <h4 className="font-medium group-hover:text-green-500 transition-colors">Cash Flow Positive</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">When a company's operations generate more cash than they consume</p>
            </div>
          </a>
        </div>
      </div>
    </LearningLayout>
  );
};

export default BurnRatePage;