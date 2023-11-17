import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
	return (
		<div>
			<Sidebar />
			<div>
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
