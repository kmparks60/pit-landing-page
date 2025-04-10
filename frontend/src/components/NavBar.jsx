import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="bg-white shadow-sm py-4 px-6 flex items-center w-full">
			<div className="flex items-center space-x-3">
        <Link to='/'>
          <img
            src="https://64.media.tumblr.com/dba9cb7db11254a0c02515318a33b1c1/5b775601ec4d0a00-70/s540x810/1a6ff241220da21c6d2cae6fc22f748b0f5cd0ae.pnj"
            alt="PIT Logo"
            className="h-10"
				/>
        </Link>
				<span className="text-lg font-semibold text-[#FF9966] hidden lg:block">
					Product Inventory Tracker
				</span>
			</div>

			<div className="flex-1 flex justify-between lg:justify-center items-center space-x-6 sm:space-x-8 lg:space-x-80">
				<Link
					to="/"
					className="text-[#3b5787] font-semibold text-sm lg:text-lg hover:text-[#48acda] transition duration-300"
				>
					Home
				</Link>
				<Link
					to="/about-us"
					className="text-[#3b5787] font-semibold text-sm lg:text-lg hover:text-[#48acda] transition duration-300"
				>
					About Us
				</Link>
				<Link
					to="/services"
					className="text-[#3b5787] font-semibold text-sm lg:text-lg hover:text-[#48acda] transition duration-300"
				>
					Services
				</Link>
				<Link
					to="/contact-us"
					className="text-[#3b5787] font-semibold text-sm lg:text-lg hover:text-[#48acda] transition duration-300"
				>
					Contact Us
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;