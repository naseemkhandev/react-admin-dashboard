import Analytics from "../../components/Analytics";
import TotalSpend from "../../components/TotalSpend";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-5">
			<Analytics />
			<div className="flex items-start justify-between gap-5">
				<TotalSpend />
			</div>
		</div>
	);
};

export default Dashboard;
