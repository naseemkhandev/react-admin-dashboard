import { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DatePicker = () => {
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: "selection",
		},
	]);

	return (
		<div className="md:w-fit h-auto bg-white dark:bg-dark-color p-6 rounded-2xl flex items-center justify-center">
			<DateRange
				editableDateInputs={true}
				onChange={(item) => setDate([item.selection])}
				moveRangeOnFirstSelection={false}
				ranges={date}
				className="dark:bg-dark-color checked:text-white dark:text-white md:w-fit mx-auto"
			/>
		</div>
	);
};

export default DatePicker;
