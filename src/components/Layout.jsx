import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ThemeProvider } from "../context/ThemeProvider";

const Layout = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div>
				<Sidebar />
				<div className="bg-lightBg dark:bg-darkBg pl-24 lg:pl-[19.5rem] pr-3 min-h-screen">
					<Navbar />
					<Outlet />
				</div>
			</div>
		</ThemeProvider>
	);
};

export default Layout;
