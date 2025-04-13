import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const RunwayCalculator = () => {
  const [cash, setCash] = useState(500000);
  const [burnRate, setBurnRate] = useState(50000);
  const [runway, setRunway] = useState(10);
  const [chartData, setChartData] = useState<{ month: string; cash: number }[]>([]);

  useEffect(() => {
    // Calculate runway
    const calculatedRunway = burnRate > 0 ? Math.round(cash / burnRate) : 0;
    setRunway(calculatedRunway);

    // Generate chart data
    const data = [];
    let remainingCash = cash;
    
    for (let i = 0; i <= calculatedRunway && i <= 24; i++) {
      data.push({
        month: `Month ${i}`,
        cash: Math.max(0, remainingCash)
      });
      remainingCash -= burnRate;
    }
    
    setChartData(data);
  }, [cash, burnRate]);

  const getRunwayMessage = () => {
    if (runway < 6) {
      return 'Warning: You have less than 6 months of runway. Consider reducing expenses or raising funds soon.';
    } else if (runway < 12) {
      return 'Warning: You have less than a year of runway. Start planning your next funding round.';
    } else {
      return 'Good: You have a healthy runway. Use this time to focus on growth and hitting key milestones.';
    }
  };

  return (
    <Card className="col-span-1 md:col-span-3 bg-white dark:bg-gray-800 shadow-lg mb-8 overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Runway Calculator</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Calculate how long your startup's funding will last at your current burn rate.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <Label htmlFor="cash" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Cash Balance ($)
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  id="cash"
                  min="0"
                  value={cash}
                  onChange={(e) => setCash(Number(e.target.value))}
                  className="block w-full pl-8 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="burn" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Monthly Burn Rate ($)
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  id="burn"
                  min="1"
                  value={burnRate}
                  onChange={(e) => setBurnRate(Number(e.target.value))}
                  className="block w-full pl-8 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
            
            <div className="bg-primary-50 dark:bg-gray-800 p-4 rounded-lg border border-primary-100 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Formula Used:</h3>
              <div className="font-mono text-sm">
                Runway (months) = Cash Balance / Monthly Burn Rate
              </div>
            </div>
            
            <div className="text-center mt-6 p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-primary-200 dark:border-gray-600 shadow-inner md:hidden">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Your Runway</h3>
              <motion.div 
                className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-1"
                key={runway}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {runway}
              </motion.div>
              <div className="text-gray-500 dark:text-gray-400">Months</div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="hidden md:block">
              <div className="text-center mb-4 p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-primary-200 dark:border-gray-600 shadow-inner">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Your Runway</h3>
                <motion.div 
                  className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-1"
                  key={runway}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {runway}
                </motion.div>
                <div className="text-gray-500 dark:text-gray-400">Months</div>
              </div>
            </div>
            
            <div className="h-40 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis 
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => value >= 1000 ? `$${value/1000}k` : `$${value}`} 
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Cash Balance']}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="cash" 
                    stroke="#3B82F6" 
                    fill="#93C5FD" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              <div className="mb-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>
                  {getRunwayMessage()}
                </span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>Most investors recommend maintaining at least 12-18 months of runway.</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RunwayCalculator;
