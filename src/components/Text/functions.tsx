interface Props {
	size: number | undefined;
	value: string;
}

export const textSizer: React.FC<Props> = ({ size, value }) => {
	switch (size) {
		case 1:
			return <h1>{value}</h1>;
		case 2:
			return <h2>{value}</h2>;
		case 3:
			return <h3>{value}</h3>;
		case 4:
			return <h4>{value}</h4>;
		case 5:
			return <h5>{value}</h5>;
		case 6:
			return <h6>{value}</h6>;
		default:
			return <p>{value}</p>;
	}
};
