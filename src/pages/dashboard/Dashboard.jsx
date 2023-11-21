import Analytics from "../../components/Analytics";
import TotalSpend from "../../components/TotalSpend";
import WeeklyRevenue from "../../components/WeeklyRevenue";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-5">
			<Analytics />
			<div className="flex justify-between xl:items-start flex-col md:flex-row gap-5">
				<TotalSpend />
				<WeeklyRevenue />
			</div>
		</div>
	);
};

export default Dashboard;
