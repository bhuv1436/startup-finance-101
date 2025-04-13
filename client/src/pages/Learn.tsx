import { motion } from "framer-motion";
import { Link } from "wouter";
import LearningCard from "@/components/LearningCard";
import learningModules from "@/data/learningModules.json";
import timelineItems from "@/data/timelineItems.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Learn = () => {
  // Helper function to determine URL from timeline item title
  const getTimelineLink = (title: string) => {
    if (title.includes("Startup Finance Fundamentals")) return "/learn/startup-finance-fundamentals";
    if (title.includes("Burn Rate") || title.includes("Runway")) return "/learn/burn-rate";
    if (title.includes("Fundraising")) return "/learn/fundraising-basics";
    if (title.includes("SAFE") || title.includes("Safe Notes")) return "/learn/safe-notes";
    if (title.includes("Cap Tables")) return "/learn/cap-tables";
    if (title.includes("Unit Economics")) return "/learn/unit-economics";
    if (title.includes("Term Sheets")) return "/learn/term-sheets";
    if (title.includes("Financial Modeling")) return "/learn/financial-modeling";
    
    // Default URL based on title (lowercase, hyphenated)
    return `/learn/${title.toLowerCase().replace(/\s+/g, '-')}`;
  };

  // Helper function to determine URL from module title
  const getModuleLink = (module: any) => {
    if (module.title === "Burn Rate & Runway") return "/learn/burn-rate";
    if (module.title === "Fundraising Basics") return "/learn/fundraising-basics";
    if (module.title === "Term Sheets") return "/learn/term-sheets";
    if (module.title === "Unit Economics") return "/learn/unit-economics";
    if (module.title === "Financial Modeling") return "/learn/financial-modeling";
    if (module.title === "Cap Tables & Dilution") return "/learn/cap-tables";
    
    // Default URL based on title (lowercase, hyphenated)
    return `/learn/${module.title.toLowerCase().replace(/\s+/g, '-')}`;
  };

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
              Learn Startup Finance
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Clear, concise lessons on the financial concepts every founder needs to master.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {learningModules.map((module, index) => (
                <LearningCard
                  key={index}
                  color={module.color}
                  icon={module.icon}
                  title={module.title}
                  description={module.description}
                  lessons={module.lessons}
                  duration={module.duration}
                  delay={index * 0.1}
                  link={getModuleLink(module)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Learning Path */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Your Learning Path
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Follow this recommended sequence to build your financial knowledge from the ground up.
              </motion.p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>
              
              {/* Timeline items */}
              <div className="relative z-10">
                {timelineItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`mb-12 flex flex-col md:flex-row items-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {index % 2 === 0 ? (
                      <>
                        <div className="order-1 md:w-5/12"></div>
                        <div className="z-10 flex items-center order-1 bg-primary-500 shadow-xl w-8 h-8 rounded-full">
                          <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                        </div>
                        <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md px-6 py-4 md:w-5/12 mx-3 md:mx-0">
                          <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{item.description}</p>
                          <div className="mt-3">
                            <Link href={getTimelineLink(item.title)} className="text-primary-500 text-sm font-medium">
                              {item.linkText} →
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md px-6 py-4 md:w-5/12 mx-3 md:mx-0">
                          <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{item.description}</p>
                          <div className="mt-3">
                            <Link href={getTimelineLink(item.title)} className="text-primary-500 text-sm font-medium">
                              {item.linkText} →
                            </Link>
                          </div>
                        </div>
                        <div className="z-10 flex items-center order-1 bg-primary-500 shadow-xl w-8 h-8 rounded-full">
                          <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                        </div>
                        <div className="order-1 md:w-5/12"></div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
