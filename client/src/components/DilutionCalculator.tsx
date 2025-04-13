import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const DilutionCalculator = () => {
  const [companyValuation, setCompanyValuation] = useState(5000000);
  const [investmentAmount, setInvestmentAmount] = useState(1000000);
  const [founderShares, setFounderShares] = useState(8000000);
  const [investorShares, setInvestorShares] = useState(0);
  const [postMoneyValuation, setPostMoneyValuation] = useState(0);
  const [founderOwnership, setFounderOwnership] = useState(0);
  const [investorOwnership, setInvestorOwnership] = useState(0);
  const [pieData, setPieData] = useState<any[]>([]);

  const COLORS = ['#3B82F6', '#10B981', '#6366F1', '#F59E0B', '#EC4899'];

  useEffect(() => {
    // Calculate post-money valuation
    const calculatedPostMoney = companyValuation + investmentAmount;
    setPostMoneyValuation(calculatedPostMoney);

    // Calculate new shares to issue
    const newShares = (investmentAmount / calculatedPostMoney) * (founderShares / (1 - (investmentAmount / calculatedPostMoney)));
    setInvestorShares(Math.round(newShares));

    // Calculate ownership percentages
    const totalShares = founderShares + newShares;
    const founderPercent = (founderShares / totalShares) * 100;
    const investorPercent = (newShares / totalShares) * 100;
    setFounderOwnership(founderPercent);
    setInvestorOwnership(investorPercent);

    // Update chart data
    setPieData([
      { name: 'Founders', value: founderPercent },
      { name: 'New Investors', value: investorPercent },
    ]);
  }, [companyValuation, investmentAmount, founderShares]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return value.toFixed(2) + '%';
  };

  return (
    <Card className="col-span-1 md:col-span-3 bg-white dark:bg-gray-800 shadow-lg mb-8 overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dilution Calculator</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Calculate how your ownership stake changes after raising a funding round.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <Label htmlFor="valuation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Pre-Money Valuation ($)
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  id="valuation"
                  min="0"
                  value={companyValuation}
                  onChange={(e) => setCompanyValuation(Number(e.target.value))}
                  className="block w-full pl-8 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="investment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Investment Amount ($)
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  id="investment"
                  min="1"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="block w-full pl-8 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="shares" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Shares Outstanding
              </Label>
              <Input
                type="number"
                id="shares"
                min="1"
                value={founderShares}
                onChange={(e) => setFounderShares(Number(e.target.value))}
                className="block w-full pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800"
              />
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">How to use this calculator:</h3>
              <ol className="text-sm space-y-1 list-decimal pl-4 text-gray-600 dark:text-gray-400">
                <li>Enter your current company valuation (pre-money)</li>
                <li>Enter the amount of new investment you're raising</li>
                <li>Enter your current shares outstanding</li>
                <li>See how your ownership percentage changes after the investment</li>
              </ol>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="text-center mb-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-600 shadow-inner">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Post-Money Valuation</h3>
                  <motion.div 
                    className="text-xl font-bold text-blue-600 dark:text-blue-400"
                    key={postMoneyValuation}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {formatCurrency(postMoneyValuation)}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Investor Shares</h3>
                  <motion.div 
                    className="text-xl font-bold text-blue-600 dark:text-blue-400"
                    key={investorShares}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {investorShares.toLocaleString()}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Ownership</h3>
                  <motion.div 
                    className="text-xl font-bold text-blue-600 dark:text-blue-400"
                    key={founderOwnership.toFixed(2)}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {formatPercent(founderOwnership)}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Investor Ownership</h3>
                  <motion.div 
                    className="text-xl font-bold text-blue-600 dark:text-blue-400"
                    key={investorOwnership.toFixed(2)}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {formatPercent(investorOwnership)}
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="h-60 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatPercent(Number(value))} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              <div className="mb-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>
                  This calculator shows a simplified view of dilution. Actual cap tables may include option pools, multiple investor classes, and other complexities.
                </span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>The formula used is based on the standard VC investment calculation: Investment / Post-Money = % Ownership.</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DilutionCalculator;