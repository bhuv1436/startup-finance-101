
import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Tools from "./pages/Tools";
import Glossary from "./pages/Glossary";
import NotFound from "./pages/not-found";
import { Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from "react";

// Import learning pages
import BurnRate from "./pages/learn/BurnRate";
import SafeNotes from "./pages/learn/SafeNotes";
import RunwayCalculator from "./pages/learn/RunwayCalculator";
import StartupFinanceFundamentals from "./pages/learn/StartupFinanceFundamentals";
import CapTables from "./pages/learn/CapTables";
import UnitEconomics from "./pages/learn/UnitEconomics";
import TermSheets from "./pages/learn/TermSheets";
import FinancialModeling from "./pages/learn/FinancialModeling";
import FundraisingBasics from "./pages/learn/FundraisingBasics";

export default function App() {
  const [darkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Layout darkMode={darkMode} setDarkMode={() => {}}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/learn" component={Learn} />
          <Route path="/learn/burn-rate" component={BurnRate} />
          <Route path="/learn/safe-notes" component={SafeNotes} />
          <Route path="/learn/runway-calculator" component={RunwayCalculator} />
          <Route path="/learn/startup-finance-fundamentals" component={StartupFinanceFundamentals} />
          <Route path="/learn/cap-tables" component={CapTables} />
          <Route path="/learn/unit-economics" component={UnitEconomics} />
          <Route path="/learn/term-sheets" component={TermSheets} />
          <Route path="/learn/financial-modeling" component={FinancialModeling} />
          <Route path="/learn/fundraising-basics" component={FundraisingBasics} />
          <Route path="/tools" component={Tools} />
          <Route path="/glossary" component={Glossary} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      <Toaster />
    </div>
  );
}
