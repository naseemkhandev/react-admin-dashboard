import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "users",
					element: <Users />,
				},
			],
		},
		{
			path: "*",
			element: <PageNotFound />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
