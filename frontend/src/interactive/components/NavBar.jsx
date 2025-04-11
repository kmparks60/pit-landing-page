import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="https://64.media.tumblr.com/91edfdd023280bdd7d99095195ce6f1b/6b13eb4d55e25749-6f/s640x960/a840d44d6b08550fe50961966d8547374a9db40d.pnj"
            alt="Logo"
            className="h-10 w-auto"
          />
          <motion.h1
            className="text-2xl font-bold text-[#3b5787]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Systems
          </motion.h1>
        </div>

        <div className="space-x-4">
          <button className="px-4 py-2 text-[#3b5787] font-semibold border border-[#3b5787] rounded hover:bg-[#f0f4f9] transition">
            Login
          </button>
          <button className="px-4 py-2 bg-[#3b5787] text-white font-semibold rounded hover:bg-[#ff9966] transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
