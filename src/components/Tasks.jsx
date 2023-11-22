import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { tasks } from "../constants/TablesData";

const Tasks = () => {
	const [handleChecked, setHandleChecked] = useState(false);

	return (
		<div className="w-full h-full bg-white dark:bg-dark-color p-6 rounded-2xl flex flex-col gap-8">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<input
						type="checkbox"
						name="name"
						id="name"
						className="cursor-pointer w-4 2xl:w-5 aspect-square accent-primary"
					/>
					<h2 className="capitalize 2xl:text-lg font-bold text-headingColor dark:text-white">
						Tasks
					</h2>
				</div>
				<div className="w-fit bg-primary/5 text-primary dark:text-white dark:bg-white/5 text-xl p-2 rounded-lg">
					<BsThreeDots />
				</div>
			</div>

			<div className="flex flex-col gap-5">
				{tasks.map((task) => (
					<div className="capitalize flex items-center justify-between">
						<div key={task.id} className="flex items-center gap-2">
							<input
								type="checkbox"
								name="task"
								id="task"
								onClick={() => setHandleChecked(!handleChecked)}
								className="cursor-pointer w-3 2xl:w-4 aspect-square accent-primary"
							/>
							<label
								htmlFor="task"
								className={`text-xs 2xl:text-base font-semibold cursor-pointer select-none ${
									handleChecked ? "text-black" : "text-textColor"
								}`}
							>
								landing page designs
							</label>
						</div>
						<div className="text-textColor 2xl:text-2xl cursor-pointer">
							<PiDotsSixVerticalBold />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tasks;