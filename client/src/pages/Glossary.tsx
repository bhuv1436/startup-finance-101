import { motion } from "framer-motion";
import { useState } from "react";
import GlossaryTerm from "@/components/GlossaryTerm";
import glossaryTerms from "@/data/glossaryTerms.json";

// Create an alphabet array
const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("A");
  
  // Filter terms based on search
  const filteredTerms = searchTerm 
    ? glossaryTerms.filter(term => 
        term.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        term.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : glossaryTerms;
    
  // Group terms by first letter
  const termsByLetter = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.title[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

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
              Startup Finance Glossary
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Decode the jargon of startup finance with our comprehensive glossary.
            </motion.p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search bar */}
            <motion.div 
              className="relative max-w-xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
            
            {/* Alphabet navigation */}
            {!searchTerm && (
              <motion.div 
                className="flex flex-wrap justify-center mb-8 space-x-1 sm:space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {alphabet.map((letter) => (
                  <a 
                    key={letter}
                    href={`#section-${letter}`}
                    onClick={() => setActiveSection(letter)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      activeSection === letter 
                        ? 'bg-primary-50 dark:bg-primary-900 text-primary-500' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    } font-medium`}
                  >
                    {letter}
                  </a>
                ))}
              </motion.div>
            )}
            
            {/* Glossary terms */}
            <div>
              {searchTerm ? (
                <div className="space-y-6 mt-8">
                  {filteredTerms.length > 0 ? (
                    filteredTerms.map((term, index) => (
                      <GlossaryTerm
                        key={index}
                        title={term.title}
                        category={term.category}
                        description={term.description}
                        example={term.example}
                        delay={index * 0.1}
                      />
                    ))
                  ) : (
                    <motion.div 
                      className="text-center py-8 text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      No terms match your search criteria.
                    </motion.div>
                  )}
                </div>
              ) : (
                Object.keys(termsByLetter).sort().map((letter) => (
                  <div key={letter} id={`section-${letter}`}>
                    <motion.h2 
                      className="text-2xl font-bold mb-6 mt-12 first:mt-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {letter}
                    </motion.h2>
                    
                    <div className="space-y-6">
                      {termsByLetter[letter].map((term, index) => (
                        <GlossaryTerm
                          key={index}
                          title={term.title}
                          category={term.category}
                          description={term.description}
                          example={term.example}
                          delay={index * 0.1}
                        />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Glossary;
