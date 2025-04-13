import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "wouter";
import features from "@/data/features.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What You'll Learn
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Practical, no-jargon startup finance knowledge you can apply immediately to your business.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to take control of your startup finances?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            No more guesswork. Get the knowledge and tools you need to make strategic financial decisions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/learn">
              <motion.a 
                className="inline-block px-8 py-4 bg-gray-900 bg-opacity-30 text-white font-bold rounded-lg border border-white border-opacity-30 hover:bg-opacity-40 transition-all cursor-pointer"
                whileHover={{ y: -4 }}
                whileTap={{ y: 0 }}
              >
                Start Your Financial Journey
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
