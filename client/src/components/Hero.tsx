import { Link } from "wouter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-purple-500 text-white py-20 md:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[length:400%_400%] animate-gradient"
        style={{
          background: "linear-gradient(-45deg, #3B82F6, #4F46E5, #8B5CF6, #3B82F6)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite"
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Master Startup Finance Without the MBA
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything first-time founders need to know about fundraising, burn rates, runways, and financial planning.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/learn">
              <motion.div 
                className="px-8 py-4 bg-gray-900 bg-opacity-30 text-white font-bold rounded-lg border border-white border-opacity-30 hover:bg-opacity-40 transition-all cursor-pointer"
                whileHover={{ y: -4 }}
                whileTap={{ y: 0 }}
              >
                Start Learning
              </motion.div>
            </Link>
            <Link href="/tools">
              <motion.div 
                className="px-8 py-4 bg-gray-900 bg-opacity-30 text-white font-bold rounded-lg border border-white border-opacity-30 hover:bg-opacity-40 transition-all cursor-pointer"
                whileHover={{ y: -4 }}
                whileTap={{ y: 0 }}
              >
                Try Our Tools
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;