import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	Dashboard,
	Layout,
	NftMarketplace,
	Tables,
	Kanban,
	Profile,
	SignIn,
	PageNotFound,
} from "./pages/index";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Dashboard />,
				},
				{
					path: "nft-marketplace",
					element: <NftMarketplace />,
				},
				{
					path: "tables",
					element: <Tables />,
				},
				{
					path: "kanban",
					element: <Kanban />,
				},
				{
					path: "profile",
					element: <Profile />,
				},
			],
		},
		{
			path: "sign-in",
			element: <SignIn />,
		},
		{
			path: "*",
			element: <PageNotFound />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
