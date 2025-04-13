import { motion } from "framer-motion";

interface GlossaryTermProps {
  title: string;
  category: string;
  description: string;
  example: string;
  delay?: number;
}

const GlossaryTerm = ({ title, category, description, example, delay = 0 }: GlossaryTermProps) => {
  // Map category to colors
  const categoryColorMap: Record<string, { bg: string, text: string }> = {
    'Fundraising': {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-500'
    },
    'Cap Table': {
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-500'
    },
    'Finance': {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-500'
    }
  };

  const colorClass = categoryColorMap[category] || {
    bg: 'bg-gray-100 dark:bg-gray-900',
    text: 'text-gray-500'
  };

  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">{title}</h3>
        <span className={`inline-block px-3 py-1 ${colorClass.bg} ${colorClass.text} text-xs font-medium rounded-full`}>
          {category}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 text-sm">
        <div className="flex items-start">
          <div className="text-primary-500 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            <span className="font-medium">Example:</span> {example}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GlossaryTerm;
