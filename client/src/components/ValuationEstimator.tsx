import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ValuationEstimator = () => {
  // Inputs
  const [annualRevenue, setAnnualRevenue] = useState(500000);
  const [growthRate, setGrowthRate] = useState(30);
  const [industry, setIndustry] = useState("saas");
  const [stage, setStage] = useState("early");
  const [margin, setMargin] = useState(20);
  
  // Calculated values
  const [valuationRange, setValuationRange] = useState<[number, number]>([0, 0]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [multiple, setMultiple] = useState<[number, number]>([0, 0]);

  // Industry revenue multiples (conservative and optimistic)
  const industryMultiples: Record<string, Record<string, [number, number]>> = {
    saas: {
      early: [5, 10],
      growth: [8, 15],
      mature: [5, 12]
    },
    ecommerce: {
      early: [1, 3],
      growth: [2, 4],
      mature: [1.5, 3.5]
    },
    fintech: {
      early: [6, 12],
      growth: [10, 20],
      mature: [8, 16]
    },
    consumer: {
      early: [2, 5],
      growth: [4, 8],
      mature: [3, 6]
    },
    healthcare: {
      early: [3, 7],
      growth: [5, 10],
      mature: [4, 8]
    }
  };

  useEffect(() => {
    // Get base multiple range for industry and stage
    let baseMultiple: [number, number] = [0, 0];
    if (industryMultiples[industry] && industryMultiples[industry][stage]) {
      baseMultiple = industryMultiples[industry][stage];
    }
    
    // Adjust multiple based on growth rate
    let growthAdjustment = 0;
    if (growthRate > 100) {
      growthAdjustment = 2;
    } else if (growthRate > 50) {
      growthAdjustment = 1;
    } else if (growthRate < 10) {
      growthAdjustment = -0.5;
    }
    
    // Adjust multiple based on margin
    let marginAdjustment = 0;
    if (margin > 40) {
      marginAdjustment = 1;
    } else if (margin > 20) {
      marginAdjustment = 0.5;
    } else if (margin < 0) {
      marginAdjustment = -1;
    }
    
    // Calculate adjusted multiples
    const adjustedMultiple: [number, number] = [
      Math.max(0, baseMultiple[0] + growthAdjustment + marginAdjustment),
      Math.max(0, baseMultiple[1] + growthAdjustment * 1.5 + marginAdjustment * 1.5)
    ];
    
    setMultiple(adjustedMultiple);
    
    // Calculate valuation range
    const calculatedRange: [number, number] = [
      Math.round(annualRevenue * adjustedMultiple[0]),
      Math.round(annualRevenue * adjustedMultiple[1])
    ];
    
    setValuationRange(calculatedRange);
    
    // Generate chart data for 5-year projection
    const data = [];
    let projectedRevenue = annualRevenue;
    
    for (let year = 0; year <= 5; year++) {
      const conservativeValuation = projectedRevenue * adjustedMultiple[0];
      const optimisticValuation = projectedRevenue * adjustedMultiple[1];
      
      data.push({
        year: `Year ${year}`,
        conservative: conservativeValuation,
        optimistic: optimisticValuation,
        revenue: projectedRevenue
      });
      
      projectedRevenue = projectedRevenue * (1 + (growthRate / 100));
    }
    
    setChartData(data);
  }, [annualRevenue, growthRate, industry, stage, margin]);

  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    } else {
      return `$${value.toFixed(0)}`;
    }
  };

  const getIndustryLabel = (industry: string) => {
    const labels: Record<string, string> = {
      saas: "SaaS / Software",
      ecommerce: "E-commerce / Retail",
      fintech: "Fintech",
      consumer: "Consumer / Social",
      healthcare: "Healthcare / Biotech"
    };
    return labels[industry] || industry;
  };
  
  const getStageLabel = (stage: string) => {
    const labels: Record<string, string> = {
      early: "Early Stage",
      growth: "Growth Stage",
      mature: "Mature Stage"
    };
    return labels[stage] || stage;
  };

  return (
    <Card className="col-span-1 md:col-span-3 bg-white dark:bg-gray-800 shadow-lg mb-8 overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Startup Valuation Estimator</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Estimate your startup's potential valuation range based on key metrics and industry standards.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <Label htmlFor="revenue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Annual Revenue ($)
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <Input
                  type="number"
                  id="revenue"
                  min="0"
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  className="block w-full pl-8 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="growth" className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <span>Annual Growth Rate (%)</span>
                <span className="text-purple-600 dark:text-purple-400">{growthRate}%</span>
              </Label>
              <Slider
                id="growth"
                min={0}
                max={200}
                step={5}
                value={[growthRate]}
                onValueChange={(value) => setGrowthRate(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
                <span>150%</span>
                <span>200%</span>
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="margin" className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <span>Profit Margin (%)</span>
                <span className="text-purple-600 dark:text-purple-400">{margin}%</span>
              </Label>
              <Slider
                id="margin"
                min={-20}
                max={60}
                step={5}
                value={[margin]}
                onValueChange={(value) => setMargin(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>-20%</span>
                <span>0%</span>
                <span>20%</span>
                <span>40%</span>
                <span>60%</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry
                </Label>
                <Select 
                  value={industry}
                  onValueChange={(value) => setIndustry(value)}
                >
                  <SelectTrigger id="industry" className="w-full">
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS / Software</SelectItem>
                    <SelectItem value="ecommerce">E-commerce / Retail</SelectItem>
                    <SelectItem value="fintech">Fintech</SelectItem>
                    <SelectItem value="consumer">Consumer / Social</SelectItem>
                    <SelectItem value="healthcare">Healthcare / Biotech</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="stage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Stage
                </Label>
                <Select 
                  value={stage}
                  onValueChange={(value) => setStage(value)}
                >
                  <SelectTrigger id="stage" className="w-full">
                    <SelectValue placeholder="Select Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="early">Early Stage</SelectItem>
                    <SelectItem value="growth">Growth Stage</SelectItem>
                    <SelectItem value="mature">Mature Stage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg border border-purple-100 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Estimation Method:</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This calculator uses revenue multiple method based on industry benchmarks, adjusted for growth rate and profitability. 
                Results are estimates only and may vary significantly from actual valuation in a funding round.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="text-center mb-6 p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-purple-200 dark:border-gray-600 shadow-inner">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Estimated Valuation Range</h3>
              <motion.div 
                className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-3"
                key={`${valuationRange[0]}-${valuationRange[1]}`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {formatCurrency(valuationRange[0])} - {formatCurrency(valuationRange[1])}
              </motion.div>
              <div className="flex justify-between text-sm">
                <div className="text-left">
                  <div className="text-gray-600 dark:text-gray-400">Conservative</div>
                  <div className="font-medium">{multiple[0].toFixed(1)}x Revenue</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-600 dark:text-gray-400">Optimistic</div>
                  <div className="font-medium">{multiple[1].toFixed(1)}x Revenue</div>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <span>5-Year Valuation Projection</span>
                <span className="text-purple-600 dark:text-purple-400">{growthRate}% Annual Growth</span>
              </div>
              <div className="h-64 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="year" />
                    <YAxis 
                      tickFormatter={(value) => formatCurrency(value)} 
                    />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    <Area 
                      type="monotone" 
                      dataKey="conservative" 
                      stackId="1"
                      stroke="#8884d8" 
                      fill="#d8b4fe" 
                      name="Conservative Valuation" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="optimistic" 
                      stackId="2"
                      stroke="#8884d8" 
                      fill="#a855f7" 
                      name="Optimistic Valuation" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-auto text-gray-600 dark:text-gray-300 text-sm">
              <div className="mb-3 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>
                  {getIndustryLabel(industry)} companies at the {getStageLabel(stage).toLowerCase()} typically have valuations 
                  ranging from {multiple[0].toFixed(1)}x to {multiple[1].toFixed(1)}x annual revenue.
                </span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>Remember that actual valuations depend on many factors including market conditions, team quality, IP, and investor sentiment.</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ValuationEstimator;