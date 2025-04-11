import { motion } from 'framer-motion';

function ContactUs() {
  return (
    <div className="min-h-screen bg-white py-16">
      <motion.h1
        className="text-5xl lg:text-6xl font-extrabold text-center text-[#3b5787] mb-12"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Let’s Work Together.
      </motion.h1>

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center text-[#FFFFFF]">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://64.media.tumblr.com/743b4fa8488862b410b43ae23f02918b/2799de957f37b54b-9e/s540x810/43b464ccb97a0015f985cd91cdf7864eb841cac3.jpg"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full object-cover h-[400px]"
          />
          <p className="text-sm text-[#FFFFF] mt-2">
            Image by{" "}
            <a href="https://www.freepik.com/author/rawpixel-com" target="_blank" rel="noopener noreferrer" className="underline">
              wirestock
            </a>{" "}
            on Freepik
          </p>

          <p className="text-lg font-semibold text-[#3b5787] mt-6">
            If you’d like to contact me personally, reach out at:{" "}
            <a href="mailto:pitsystems64@gmail.com" className="text-[#ff9966] underline hover:text-[#ff8532] transition" >
              pitsystems64@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <form className="space-y-6 bg-[#f4f7fc] p-6 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="placeholder-gray-600 p-3 w-full rounded-md border border-[#2d466b] focus:ring-[#3b5787] focus:border-[#3b5787] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="placeholder-gray-600 p-3 w-full rounded-md border border-[#2d466b] focus:ring-[#3b5787] focus:border-[#3b5787] transition"
            />
            <input
              type="text"
              placeholder="Company"
              className="placeholder-gray-600 p-3 w-full rounded-md border border-[#2d466b] focus:ring-[#3b5787] focus:border-[#3b5787] transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="placeholder-gray-600 p-3 w-full rounded-md border border-[#2d466b] focus:ring-[#3b5787] focus:border-[#3b5787] transition"
            />
            <textarea
              placeholder="Your Message"
              className="placeholder-gray-600 p-3 w-full rounded-md border border-[#2d466b] focus:ring-[#3b5787] focus:border-[#3b5787] transition"
            />

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="human-verification"
                className="h-4 w-4 text-[#3b5787] border-gray-300 rounded focus:ring-[#3b5787] transition"
              />
              <label htmlFor="human-verification" className="text-sm text-[#3b5787]">
                I'm not a robot
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#3b5787] text-white font-semibold rounded-md hover:bg-[#2d466b] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
