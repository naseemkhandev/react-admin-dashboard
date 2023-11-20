import { Link } from "react-router-dom";
import { sidebarLinks } from "../constants/sidebar";

const Sidebar = () => {
	const pathname = window.location.pathname;
	console.log(pathname);

	return (
		<div className="fixed top-0 left-0 w-72 bg-white dark:bg-darkBg h-screen overflow-auto">
			<div className="px-10 py-7 border-b">
				<h2 className="text-2xl font-extrabold text-dark-color dark:text-white">
					Visric
				</h2>
			</div>

			<ul className="flex flex-col gap-5 pl-8 py-7">
				{sidebarLinks.map((link) => (
					<li key={link.path}>
						<Link
							to={link.path}
							className={`flex items-center gap-3 py-[.4rem] w-full relative before:absolute before:top-0 before:right-0 before:h-full before:bg-primary before:rounded-full capitalize ${
								pathname === link.path
									? "before:w-1 text-primary font-[500] dark:text-white"
									: "hover:before:w-1 hover:text-primary text-textColor font-normal"
							}`}
						>
							{pathname === link.path ? (
								<link.activeIcon className="text-2xl" />
							) : (
								<link.icon className="text-2xl" />
							)}
							<span
								className={`font-semibold ${
									pathname === link.path ? "" : " hover:text-primary"
								}`}
							>
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
