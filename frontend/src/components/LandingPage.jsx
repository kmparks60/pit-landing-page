import { motion } from "framer-motion";

function LandingPage() {
  
  const handleTryDemo = () => {
    window.open('/demo', '_blank');
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 bg-white px-8 py-20 flex flex-col justify-center">
        <motion.h1
          className="text-5xl font-bold text-[#FF9966] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Smarter Inventory Starts Here
        </motion.h1>

        <motion.p
          className="text-lg text-[#3b5787] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Product Inventory Tracker (PIT) helps small and medium-sized businesses
          streamline their inventory, reduce waste, and gain real-time insights — 
          all from a single, easy-to-use dashboard.
        </motion.p>

        <motion.ul
          className="space-y-3 text-[#3b5787] font-medium mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>✅ Real-time inventory tracking</li>
          <li>✅ Custom user roles & permissions</li>
          <li>✅ Automated restock alerts</li>
          <li>✅ Personalized onboarding & support</li>
        </motion.ul>

        <div className="flex gap-4">
          <motion.button
            className="px-6 py-3 bg-[#3b5787] text-white rounded-md font-semibold hover:bg-[#FF9966] transition"
            whileHover={{ scale: 1.05 }}
            onClick={handleTryDemo}  
          >
            Try the Demo
          </motion.button>
          <motion.button
            className="px-6 py-3 border-2 border-[#3b5787] text-[#3b5787] rounded-md font-semibold hover:bg-[#f0f4f9] transition"
            whileHover={{ scale: 1.05 }}
            onClick={handleLearnMore}  
          >
            Learn More
          </motion.button>
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-br from-[#48acda] to-[#3b5787] px-6 pt-30 pb-20 flex flex-col">
        <div className="my-auto flex flex-col items-center">
          <motion.img
            src="https://64.media.tumblr.com/ae3d303ebcc600290168dd684507b5d8/b2b8e928ae7fd356-df/s540x810/a5f07853b3f3fa1c546dc472d709cc29505334aa.jpg"
            alt="Inventory mockup"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <p className="text-xs text-[#3b5787] mt-2 opacity-50">
            Image by{" "}
            <a
              href="https://www.freepik.com/author/pressfoto"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              pressfoto
            </a>{" "}
            on Freepik
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
