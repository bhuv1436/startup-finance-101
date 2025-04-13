import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface LearningLayoutProps {
  children: ReactNode;
  title: string;
  color: string;
  icon: string;
  readingTime: string;
}

const LearningLayout = ({ 
  children, 
  title, 
  color,
  icon,
  readingTime
}: LearningLayoutProps) => {
  // Map color names to Tailwind classes
  const colorMap: Record<string, { border: string, bg: string, text: string, bgLight: string, bgDark: string }> = {
    primary: {
      border: "bg-primary-500",
      bg: "text-primary-500",
      text: "text-primary-500",
      bgLight: "bg-primary-100",
      bgDark: "bg-primary-900"
    },
    green: {
      border: "bg-green-500",
      bg: "text-green-500",
      text: "text-green-500",
      bgLight: "bg-green-100",
      bgDark: "bg-green-900"
    },
    purple: {
      border: "bg-purple-500",
      bg: "text-purple-500",
      text: "text-purple-500",
      bgLight: "bg-purple-100",
      bgDark: "bg-purple-900"
    },
    blue: {
      border: "bg-blue-500",
      bg: "text-blue-500",
      text: "text-blue-500",
      bgLight: "bg-blue-100",
      bgDark: "bg-blue-900"
    },
    amber: {
      border: "bg-amber-500",
      bg: "text-amber-500",
      text: "text-amber-500",
      bgLight: "bg-amber-100",
      bgDark: "bg-amber-900"
    },
    pink: {
      border: "bg-pink-500",
      bg: "text-pink-500",
      text: "text-pink-500",
      bgLight: "bg-pink-100",
      bgDark: "bg-pink-900"
    }
  };

  const colorClasses = colorMap[color] || colorMap.primary;

  return (
    <div className="animate-fade-in">
      <section className={`${colorClasses.bgLight} dark:${colorClasses.bgDark} py-16 transition-colors duration-200`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/learn" className={`${colorClasses.text} inline-flex items-center mb-6 hover:underline`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Learning
            </Link>
            <div className="flex items-center mb-3">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colorClasses.bgLight} dark:${colorClasses.bgDark} border-2 ${colorClasses.border}`}>
                <i className={`fa-solid ${icon} ${colorClasses.bg}`}></i>
              </div>
              <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">{readingTime} reading time</span>
            </div>
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto prose dark:prose-invert lg:prose-lg prose-img:rounded-xl prose-headings:font-bold prose-a:text-primary-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LearningLayout;