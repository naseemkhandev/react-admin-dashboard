import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { sidebarLinks } from "../constants/sidebar";
import { IoCloseCircleSharp } from "react-icons/io5";

const Sidebar = ({ handleSidebar, setHandleSidebar }) => {
	const pathname = useLocation().pathname;

	return (
		<div
			className={`fixed top-0 bg-white dark:bg-dark-color min-h-screen h-full overflow-hidden transition-all duration-500 z-50 ${
				handleSidebar
					? "-left-full md:left-0 w-20 xl:w-72"
					: "left-0 w-72 shadow-2xl drop-shadow-md lg:shadow-none lg:drop-shadow-none"
			}`}
		>
			<div className="px-7 lg:px-10 py-7 border-b dark:border-white/10 relative">
				<h2 className="text-2xl font-extrabold text-headingColor dark:text-white">
					<span
						className={`transition-all duration-500 ${
							handleSidebar
								? "ml-2 lg:-ml-1 xl:ml-0 text-3xl xl:text-2xl"
								: "ml-0"
						}`}
					>
						V
					</span>
					<span
						className={`transition-all duration-500 ${
							handleSidebar ? "ml-8 xl:ml-0" : "ml-0"
						}`}
					>
						isric
					</span>
				</h2>
				<span
					onClick={() => setHandleSidebar(true)}
					className="block md:hidden text-xl text-primary dark:text-white p-2 rounded-md cursor-pointer hover:bg-primary/5 dark:hover:bg-white/5 absolute top-6 right-3"
				>
					<IoCloseCircleSharp />
				</span>

				<span
					onClick={() => setHandleSidebar(!handleSidebar)}
					className={`absolute top-5 right-0 bg-primary/5 md:block hidden dark:text-white dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-white/10 py-4 text-lg cursor-pointer xl:hidden ${
						!handleSidebar ? "rotate-0 rounded-l-lg" : "rotate-180 rounded-r-lg"
					}`}
				>
					<MdOutlineKeyboardArrowLeft />
				</span>
			</div>

			<ul className="flex flex-col gap-5 pl-8 py-7 relative">
				{sidebarLinks.map((link) => (
					<li key={link.path}>
						<Link
							to={link.path}
							className={`flex items-center dark:text-white dark:before:bg-secondary before:rounded-full capitalize transition-all duration-500 py-[.4rem] before:right-0 w-full ${
								handleSidebar
									? "gap-8 xl:gap-3 w-[13rem] before:absolute before:h-10 before:bg-primary"
									: "gap-3 w-full relative before:absolute before:top-0 before:h-full before:bg-primary"
							}
							 ${
									pathname === link.path
										? "before:w-1 text-primary font-[500] dark:text-white"
										: "hover:before:w-1 hover:text-primary text-textColor font-normal"
								} 
							`}
						>
							{pathname === link.path ? (
								<link.activeIcon className="text-2xl" />
							) : (
								<link.icon className="text-2xl" />
							)}
							<span className="font-semibold whitespace-nowrap">
								{link.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
