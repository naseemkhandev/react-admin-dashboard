import { MdHome, MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { HiOutlineUser, HiUser } from "react-icons/hi2";
import {
	RiDashboardFill,
	RiLock2Line,
	RiLock2Fill,
	RiDashboardLine,
} from "react-icons/ri";

export const sidebarLinks = [
	{
		name: "dashboard",
		path: "/",
		icon: HiOutlineHome,
		activeIcon: MdHome,
	},
	{
		name: "NFT marketplace",
		path: "/nft-marketplace",
		icon: MdOutlineShoppingCart,
		activeIcon: IoMdCart,
	},
	{
		name: "tables",
		path: "/tables",
		icon: FiBarChart2,
		activeIcon: FiBarChart2,
	},
	{
		name: "kanban",
		path: "/kanban",
		icon: RiDashboardLine,
		activeIcon: RiDashboardFill,
	},
	{
		name: "profile",
		path: "/profile",
		icon: HiOutlineUser,
		activeIcon: HiUser,
	},
	{
		name: "sign in",
		path: "/sign-in",
		icon: RiLock2Line,
		activeIcon: RiLock2Fill,
	},
];
