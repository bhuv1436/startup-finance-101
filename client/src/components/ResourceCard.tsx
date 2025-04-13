import { motion } from "framer-motion";

interface ResourceCardProps {
  type: string;
  fileType: string;
  title: string;
  description: string;
  downloads: number;
  color: string;
  icon: string;
  delay?: number;
}

const ResourceCard = ({ 
  type, 
  fileType, 
  title, 
  description, 
  downloads, 
  color, 
  icon, 
  delay = 0 
}: ResourceCardProps) => {
  // Map color names to Tailwind classes
  const colorMap: Record<string, { border: string, bg: string, text: string }> = {
    primary: {
      border: "bg-primary-500",
      bg: "bg-primary-100 dark:bg-primary-900",
      text: "text-primary-500"
    },
    green: {
      border: "bg-green-500",
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-500"
    },
    amber: {
      border: "bg-amber-500",
      bg: "bg-amber-100 dark:bg-amber-900",
      text: "text-amber-500"
    },
    purple: {
      border: "bg-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900",
      text: "text-purple-500"
    }
  };

  const colorClasses = colorMap[color] || colorMap.primary;
  const buttonClass = color === 'primary' 
    ? 'bg-primary-500 hover:bg-primary-600' 
    : color === 'green' 
      ? 'bg-green-500 hover:bg-green-600' 
      : color === 'amber' 
        ? 'bg-amber-500 hover:bg-amber-600' 
        : 'bg-purple-500 hover:bg-purple-600';

  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`h-2 ${colorClasses.border}`}></div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className={`inline-block px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-medium rounded-full mb-3`}>
              {fileType}
            </span>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          </div>
          <div className={`text-4xl ${colorClasses.text}`}>
            <i className={`fa-solid ${icon}`}></i>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
          <span className="text-sm text-gray-500 dark:text-gray-400">{downloads} downloads this week</span>
          <a href="#" className={`inline-flex items-center px-4 py-2 ${buttonClass} text-white rounded-lg transition-colors`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
