import { motion } from 'framer-motion';

function LandingPage() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-[#48acda] to-[#3b5787] text-white"> 
			<div className="flex flex-col items-center justify-center h-screen text-center px-6 pt-16">
			<motion.img
				src="https://64.media.tumblr.com/dba9cb7db11254a0c02515318a33b1c1/5b775601ec4d0a00-70/s540x810/1a6ff241220da21c6d2cae6fc22f748b0f5cd0ae.pnj"
				alt="Company Logo"
				className="h-24 mb-4"
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			/>

			<motion.h1
				className="text-5xl font-extrabold leading-tight"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
			>
				Product Inventory Tracker
			</motion.h1>

			<motion.p
				className="text-xl text-[#FFE8F0] mt-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.9 }}
			>
				Track Smarter and Stay Ahead with PIT
			</motion.p>

			<motion.p
				className="text-lg text-[#FFE8F0] mt-4 max-w-2xl"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 1.2 }}
			>
				A smart and efficient way to manage your inventory needs, built for professionals.
			</motion.p>
			</div>
		</div>
	)
};

export default LandingPage;