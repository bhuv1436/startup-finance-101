import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  delay?: number;
}

const TeamMember = ({ name, role, bio, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-600 mx-auto mb-4 overflow-hidden flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-primary-500 font-medium text-sm mb-3">{role}</p>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {bio}
      </p>
    </motion.div>
  );
};

export default TeamMember;
