import { useState } from "react";
import { motion } from "framer-motion";
import RunwayCalculator from "@/components/RunwayCalculator";
import DilutionCalculator from "@/components/DilutionCalculator";
import CacLtvCalculator from "@/components/CacLtvCalculator";
import ValuationEstimator from "@/components/ValuationEstimator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tools = () => {
  const [activeTab, setActiveTab] = useState("runway");

  return (
    <div className="animate-fade-in">
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Financial Tools
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Interactive calculators to help you make better financial decisions for your startup.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full flex justify-center">
                  <TabsTrigger value="runway" className="flex-1 md:flex-none">Runway Calculator</TabsTrigger>
                  <TabsTrigger value="dilution" className="flex-1 md:flex-none">Dilution Calculator</TabsTrigger>
                  <TabsTrigger value="cacltv" className="flex-1 md:flex-none">CAC/LTV Calculator</TabsTrigger>
                  <TabsTrigger value="valuation" className="flex-1 md:flex-none">Valuation Estimator</TabsTrigger>
                </TabsList>
                
                <TabsContent value="runway">
                  <RunwayCalculator />
                </TabsContent>
                
                <TabsContent value="dilution">
                  <DilutionCalculator />
                </TabsContent>
                
                <TabsContent value="cacltv">
                  <CacLtvCalculator />
                </TabsContent>
                
                <TabsContent value="valuation">
                  <ValuationEstimator />
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div 
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveTab("runway")}
                style={{ cursor: "pointer" }}
              >
                <div className="text-primary-500 text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Runway Calculator</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Calculate how long your startup's funding will last at your current burn rate.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveTab("dilution")}
                style={{ cursor: "pointer" }}
              >
                <div className="text-blue-500 text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="6" width="18" height="12" rx="2" />
                    <path d="M19 6V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2" />
                    <path d="M5 12h14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Dilution Calculator</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">See how your ownership percentage changes after new funding rounds.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveTab("cacltv")}
                style={{ cursor: "pointer" }}
              >
                <div className="text-green-500 text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">CAC/LTV Calculator</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Understand your customer acquisition costs and lifetime value ratio.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveTab("valuation")}
                style={{ cursor: "pointer" }}
              >
                <div className="text-purple-500 text-3xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="21" r="2" />
                    <circle cx="20" cy="21" r="2" />
                    <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Valuation Estimator</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Get a ballpark estimate of your startup's potential valuation range.</p>
              </motion.div>
            </div>
            
            <div className="mt-12 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Need Help With Your Startup Finance?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
                Our tools provide estimates based on industry standards. For professional advice tailored to your specific situation, 
                consider working with a financial advisor or accountant who specializes in startups.
              </p>
              <a 
                href="/learn" 
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
              >
                <span>Explore Our Learning Resources</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
