import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
	return (
		<div>
			<Sidebar />
			<div className="bg-lightBg dark:bg-darkBg pl-[19.5rem] min-h-screen">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
