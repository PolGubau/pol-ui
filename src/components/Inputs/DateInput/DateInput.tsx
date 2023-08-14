import "../../../style/baseTheme.scss";

interface Props {
	value?: string;
	label?: string;
	onChange?: (newDate: string) => void;
	className?: string;
	id?: string;
}

const DateInput: React.FC<Props> = ({ label, value, onChange, className, id }) => {
	const handleDateChange = (e: { target: { value: string } }) => {
		const selectedDate = e.target.value;
		onChange?.(selectedDate);
	};

	const formatValue = (value: string | undefined) => {
		// if not value, return the actual date
		if (!value) return new Date().toISOString().split("T")[0];

		// take the date string and format it to yyyy-mm-dd
		// if the value is empty, return an empty string
		// if the value is not empty, return the formatted value
		return new Date(value).toISOString().split("T")[0];
	};

	return (
		<div className="position-relative flex flex-col w-fit px-2 py-1 transition-all  ring-1 ring-primary  border-primary/50 rounded-lg focus-within:shadow-lg    hover:ring-2  focus-within:ring-accent/50 ">
			{label && (
				<label className="text-xs" htmlFor="date">
					{label}
				</label>
			)}
			<input
				type="date"
				name="date"
				id={id}
				className={`
        bg-transparent
         outline-none
         ${className}`}
				value={formatValue(value)}
				onChange={handleDateChange}
			/>
		</div>
	);
};

export default DateInput;
