import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-primary-500 text-3xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Startup Finance <span className="text-primary-500">101</span>
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Empowering founders with financial knowledge to build sustainable companies.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Learning Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/learn" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Fundraising</Link></li>
                <li><Link href="/learn" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Burn Rate & Runway</Link></li>
                <li><Link href="/learn" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Cap Tables</Link></li>
                <li><Link href="/learn" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Unit Economics</Link></li>
                <li><Link href="/tools" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Financial Calculators</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Startup Finance 101. Created by Bhuvnesh Suthar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;