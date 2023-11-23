import Analytics from "../../components/Analytics";
import CheckTable from "../../components/CheckTable";
import DailyTraffic from "../../components/DailyTraffic";
import DailyEarning from "../../components/DailyEarning";
import TotalSpend from "../../components/TotalSpend";
import WeeklyRevenue from "../../components/WeeklyRevenue";
import ComplexTable from "../../components/ComplexTable";
import Tasks from "../../components/Tasks";
import DatePicker from "../../components/DatePicker";
import BusinessCard from "../../components/BusinessCard";
import TeamMembers from "../../components/TeamMembers";
import Security from "../../components/Security";
import Brand from "../../components/Brand";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-5 pb-8">
			<Analytics />
			<div className="flex justify-between xl:items-start flex-col md:flex-row gap-5">
				<TotalSpend />
				<WeeklyRevenue />
			</div>

			<div className="flex justify-between flex-col 2xl:flex-row gap-5">
				<div className="w-full">
					<CheckTable />
				</div>

				<div className="w-full flex flex-col sm:flex-row gap-5">
					<DailyTraffic />
					<DailyEarning />
				</div>
			</div>
			<div className="flex justify-between flex-col 2xl:flex-row gap-5">
				<div className="w-full">
					<ComplexTable />
				</div>

				<div className="w-full flex flex-col md:flex-row gap-5">
					<Tasks />
					<DatePicker />
				</div>
			</div>

			<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
				<BusinessCard />
				<TeamMembers />
				<Security />
				<Brand />
			</div>
		</div>
	);
};

export default Dashboard;
