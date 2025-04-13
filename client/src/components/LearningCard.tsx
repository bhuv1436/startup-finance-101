import { motion } from "framer-motion";
import { Link } from "wouter";

interface LearningCardProps {
  color: string;
  icon: string;
  title: string;
  description: string;
  lessons: number;
  duration: number;
  delay?: number;
  link?: string;
}

const LearningCard = ({ 
  color, 
  icon, 
  title, 
  description, 
  lessons, 
  duration, 
  delay = 0,
  link
}: LearningCardProps) => {
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

  // Helper function to determine URL from title
  const getUrl = () => {
    if (link) return link;
    
    if (title === "Burn Rate & Runway") return "/learn/burn-rate";
    if (title === "Fundraising Basics") return "/learn/fundraising-basics";
    if (title === "Term Sheets") return "/learn/term-sheets";
    if (title === "Unit Economics") return "/learn/unit-economics";
    if (title === "Financial Modeling") return "/learn/financial-modeling";
    if (title === "Cap Tables & Dilution") return "/learn/cap-tables";
    if (title.includes("Burn Rate")) return "/learn/burn-rate";
    if (title.includes("Fundraising")) return "/learn/fundraising-basics";
    if (title.includes("SAFE") || title.includes("Safe Notes")) return "/learn/safe-notes";
    
    // Default URL based on title (lowercase, hyphenated)
    return `/learn/${title.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <div className={`h-3 ${colorClasses.border}`}></div>
      <div className="p-6">
        <div className={colorClasses.bg + " mb-3"}>
          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colorClasses.bgLight} dark:${colorClasses.bgDark}`}>
            <i className={`fa-solid ${icon} ${colorClasses.bg}`}></i>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">{lessons} lessons • {duration} min</span>
          <Link href={getUrl()} className={`${colorClasses.text} hover:underline font-medium`}>
            Start Learning
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LearningCard;
