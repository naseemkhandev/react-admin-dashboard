import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { LuInfo } from "react-icons/lu";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";

import { useTheme } from "../context/ThemeProvider";

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const [openUserMenu, setOpenUserMenu] = useState(false);

	return (
		<div className="flex items-end justify-between py-7">
			<div className="capitalize">
				<p className="text-sm text-[#707EAE] dark:text-white font-[500] mb-1">
					pages/dashboard
				</p>
				<h1 className="text-3xl font-bold text-headingColor dark:text-white">
					main dashboard
				</h1>
			</div>
			<div className="bg-white rounded-full dark:bg-dark-color flex items-center w-fit p-2 gap-4">
				<div className="relative">
					<span className="absolute top-1/2 -translate-y-1/2 left-4 text-lg">
						<IoSearch className="text-black dark:text-white" />
					</span>
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Search"
						className="rounded-full bg-lightBg dark:bg-darkBg dark:text-white pr-3 pl-10 py-2 outline-none border focus-within:border-primary border-transparent"
					/>
				</div>
				<FaRegBell className="text-textColor dark:text-white text-lg cursor-pointer" />
				{theme === "light" ? (
					<IoMdMoon
						onClick={() => setTheme("dark")}
						className="text-textColor dark:text-white text-lg cursor-pointer"
					/>
				) : (
					<MdLightMode
						onClick={() => setTheme("light")}
						className="text-textColor dark:text-white text-lg cursor-pointer"
					/>
				)}
				<LuInfo className="text-textColor dark:text-white text-lg cursor-pointer" />
				<div className="relative">
					<img
						src="/assets/user.png"
						alt="user"
						onClick={() => setOpenUserMenu(!openUserMenu)}
						className="rounded-full w-[41px] aspect-square cursor-pointer object-cover object-top"
					/>

					<div
						className={`bg-white dark:bg-dark-color dark:text-white rounded-lg absolute top-14 right-0 w-52 font-[500] transition-all duration-500 overflow-hidden ${
							openUserMenu ? "h-32" : "h-0"
						}`}
					>
						<div className="m-4">
							<p>Naseem Khan</p>
							<p>18 Years</p>
							<p>BSCS</p>
							<p>Frontend Developer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
