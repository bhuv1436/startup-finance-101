import { motion } from "framer-motion";
import { useLocation } from "wouter";

interface FeatureCardProps {
  icon: string;            // Font Awesome class
  title: string;
  description: string;
  delay?: number;
  link: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
  link
}: FeatureCardProps) => {
  const [, navigate] = useLocation();

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={() => navigate(link)} // ✅ hash-safe routing
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="text-primary-500 text-3xl mb-4">
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
