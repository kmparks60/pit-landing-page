import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="text-white">
      <div className="bg-white py-16 px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <motion.img
              src="https://64.media.tumblr.com/e9a8d49c02f9e0a54878253d672d73bd/805a1dfea3737c30-e6/s540x810/5204acdde7140a3fd9b480360e3f4ef842157d7c.jpg" 
              alt="About Us" 
              className="rounded-xl shadow-xl w-full"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            />
			      <p>Image by <a href="https://www.freepik.com/author/pressfoto" target="_blank" rel="noopener noreferrer" className="underline">pressfoto</a> on Freepik</p>
          </div>

          <div className="md:w-2/3 text-[#3b5787]">
            <motion.h2 
              className="text-4xl font-bold mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              About Us
            </motion.h2>
            <motion.p 
              className="text-xl mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              We are driven by a passion for creating innovative inventory management solutions that help businesses grow efficiently and eliminate waste. Our system is designed to streamline operations for small and medium-sized companies, with a focus on personal service and affordable pricing.
            </motion.p>
            <motion.p 
              className="text-xl mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              We believe in giving small businesses the same tools as large enterprises, but with a personal touch and a focus on what matters most to you: growing your business.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#FFE8F0] to-[#FF9966] py-16 px-8 text-[#3b5787]">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            <motion.h2 
              className="text-4xl font-bold mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              Our Background
            </motion.h2>
            <motion.p 
              className="text-xl mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              With over 10 years of experience in property management, inventory control, and the chemical industry, we have developed a deep understanding of what it takes to manage and streamline business operations.
            </motion.p>
            <motion.p 
              className="text-xl mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Our founder, having worked in various industries, noticed a gap in the availability of affordable, customizable inventory solutions for small businesses, and decided to create something that could help companies thrive.
            </motion.p>
          </div>

          <div className="md:w-1/3 text-[#FF9966]">
            <motion.img
              src="https://64.media.tumblr.com/31220c9a491340e272140cc8e7fc88ae/27ddcc02e9b93f34-20/s540x810/28f3f9bac0c01e189cbc6f4daf0e41c1336f04f6.jpg"
              alt="Background" 
              className="rounded-xl shadow-xl w-full"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            />
			      <p>Image by <a href="https://www.freepik.com/author/wirestock" target="_blank" rel="noopener noreferrer" className="underline">wirestock</a> on Freepik</p>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#3b5787] py-16 px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              Our mission is to provide small and medium-sized businesses with the tools they need to succeed. By offering affordable, easy-to-use inventory management solutions, we enable businesses to focus on what they do best: growing their operations.
            </motion.p>
          </div>

          <div>
            <motion.h2 
              className="text-4xl font-bold mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              Our Key Values
            </motion.h2>
            <motion.p 
              className="text-xl mb-6" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              Efficiency is key. We believe in streamlining business processes to save time, reduce errors, and minimize waste. Every client gets a tailored solution that fits their needs exactly.
            </motion.p>
            <motion.p 
              className="text-xl" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Support is at the heart of our approach. We are here to ensure every business has the ongoing support needed to thrive. No matter the issue, we’ll be there to help.
            </motion.p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
