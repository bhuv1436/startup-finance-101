import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CacLtvCalculator = () => {
  // CAC inputs
  const [marketingCost, setMarketingCost] = useState(10000);
  const [salesCost, setSalesCost] = useState(5000);
  const [newCustomers, setNewCustomers] = useState(100);
  
  // LTV inputs
  const [averageRevenue, setAverageRevenue] = useState(100);
  const [grossMargin, setGrossMargin] = useState(70);
  const [churnRate, setChurnRate] = useState(5);
  const [discount, setDiscount] = useState(10);
  
  // Calculated values
  const [cac, setCac] = useState(0);
  const [ltv, setLtv] = useState(0);
  const [ltvCacRatio, setLtvCacRatio] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Calculate CAC
    const totalCost = marketingCost + salesCost;
    const calculatedCac = newCustomers > 0 ? totalCost / newCustomers : 0;
    setCac(calculatedCac);
    
    // Calculate LTV
    // Average monthly revenue per customer * gross margin percentage / monthly churn rate
    const monthlyMargin = averageRevenue * (grossMargin / 100);
    const monthlyChurnDecimal = churnRate / 100;
    const discountDecimal = discount / 100;
    
    // Using the formula: LTV = Monthly Margin / (Churn Rate + Discount Rate)
    // This is a simplified version of Margin / Churn with a discount factor added
    const calculatedLtv = monthlyChurnDecimal > 0 ? monthlyMargin / (monthlyChurnDecimal + discountDecimal) : 0;
    setLtv(calculatedLtv);
    
    // Calculate LTV:CAC ratio
    const ratio = calculatedCac > 0 ? calculatedLtv / calculatedCac : 0;
    setLtvCacRatio(ratio);
    
    // Calculate payback period (in months)
    const monthlyProfit = monthlyMargin;
    const months = monthlyProfit > 0 ? calculatedCac / monthlyProfit : 0;
    setPaybackPeriod(months);
    
    // Generate chart data for comparison
    setChartData([
      {
        name: 'Customer Economics',
        CAC: calculatedCac,
        LTV: calculatedLtv,
      }
    ]);
  }, [marketingCost, salesCost, newCustomers, averageRevenue, grossMargin, churnRate, discount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  const getRatioMessage = () => {
    if (ltvCacRatio < 1) {
      return 'Critical: Your LTV:CAC ratio is less than 1. You\'re losing money on each customer.';
    } else if (ltvCacRatio < 3) {
      return 'Warning: Your LTV:CAC ratio is below the recommended 3:1. Consider optimizing acquisition costs or improving customer retention.';
    } else if (ltvCacRatio > 5) {
      return 'Consider: Your LTV:CAC ratio may be too high. You might be under-investing in growth.';
    } else {
      return 'Good: Your LTV:CAC ratio is in the healthy range of 3:1 to 5:1.';
    }
  };
  
  const getPaybackMessage = () => {
    if (paybackPeriod < 1) {
      return 'Exceptional: You recover acquisition costs in less than a month.';
    } else if (paybackPeriod <= 6) {
      return 'Good: You recover acquisition costs within 6 months, which is considered healthy.';
    } else if (paybackPeriod <= 12) {
      return 'Caution: Your payback period is between 6-12 months. This is manageable but try to optimize.';
    } else {
      return 'Warning: Your payback period is over 12 months. Try to reduce acquisition costs or increase revenue.';
    }
  };

  return (
    <Card className="col-span-1 md:col-span-3 bg-white dark:bg-gray-800 shadow-lg mb-8 overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">CAC/LTV Calculator</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Calculate your Customer Acquisition Cost (CAC) and Lifetime Value (LTV) to evaluate your business economics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Customer Acquisition Cost (CAC)</h3>
            
            <div className="mb-4">
              <Label htmlFor="marketing" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Marketing Expenses (Monthly)
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  id="marketing"
                  min="0"
                  value={marketingCost}
                  onChange={(e) => setMarketingCost(Number(e.target.value))}
                  className="block w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="sales" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sales Expenses (Monthly)
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  id="sales"
                  min="0"
                  value={salesCost}
                  onChange={(e) => setSalesCost(Number(e.target.value))}
                  className="block w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="customers" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                New Customers (Monthly)
              </Label>
              <Input
                type="number"
                id="customers"
                min="1"
                value={newCustomers}
                onChange={(e) => setNewCustomers(Number(e.target.value))}
                className="block w-full pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-800"
              />
            </div>
            
            <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-lg border border-green-100 dark:border-gray-700 mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CAC Formula:</h4>
              <div className="font-mono text-sm">
                CAC = (Marketing Costs + Sales Costs) / New Customers
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Lifetime Value (LTV)</h3>
            
            <div className="mb-4">
              <Label htmlFor="revenue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Average Monthly Revenue per Customer
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  id="revenue"
                  min="0"
                  value={averageRevenue}
                  onChange={(e) => setAverageRevenue(Number(e.target.value))}
                  className="block w-full pl-8 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="margin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Gross Margin Percentage (%)
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  id="margin"
                  min="0"
                  max="100"
                  value={grossMargin}
                  onChange={(e) => setGrossMargin(Number(e.target.value))}
                  className="block w-full pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">%</span>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="churn" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Monthly Churn Rate (%)
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  id="churn"
                  min="0.1"
                  max="100"
                  value={churnRate}
                  onChange={(e) => setChurnRate(Number(e.target.value))}
                  className="block w-full pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">%</span>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="discount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Discount Rate (%)
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  id="discount"
                  min="0"
                  max="100"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                  className="block w-full pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg border border-purple-100 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">LTV Formula:</h4>
              <div className="font-mono text-sm">
                LTV = (Monthly Revenue × Gross Margin) / (Churn Rate + Discount Rate)
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg border border-green-200 dark:border-gray-600 text-center">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Customer Acquisition Cost</h4>
              <motion.div 
                className="text-xl font-bold text-green-600 dark:text-green-400"
                key={cac.toFixed(2)}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {formatCurrency(cac)}
              </motion.div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg border border-purple-200 dark:border-gray-600 text-center">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Customer Lifetime Value</h4>
              <motion.div 
                className="text-xl font-bold text-purple-600 dark:text-purple-400"
                key={ltv.toFixed(2)}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {formatCurrency(ltv)}
              </motion.div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg border border-blue-200 dark:border-gray-600 text-center">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LTV:CAC Ratio</h4>
              <motion.div 
                className="text-xl font-bold text-blue-600 dark:text-blue-400"
                key={ltvCacRatio.toFixed(2)}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {ltvCacRatio.toFixed(2)}:1
              </motion.div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg border border-amber-200 dark:border-gray-600 text-center">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Payback Period</h4>
              <motion.div 
                className="text-xl font-bold text-amber-600 dark:text-amber-400"
                key={paybackPeriod.toFixed(2)}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {paybackPeriod.toFixed(1)} months
              </motion.div>
            </div>
          </div>
          
          <div className="h-64 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
                <Bar dataKey="CAC" fill="#10B981" name="Customer Acquisition Cost" />
                <Bar dataKey="LTV" fill="#8B5CF6" name="Lifetime Value" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>{getRatioMessage()}</span>
            </div>
            
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{getPaybackMessage()}</span>
            </div>
            
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Industry benchmark: SaaS companies generally aim for an LTV:CAC ratio of at least 3:1 and a payback period of less than 12 months.</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CacLtvCalculator;