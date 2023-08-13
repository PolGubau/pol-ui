import Markdown from "markdown-to-jsx";

export const textSizer = ({
	size,
	value,
	isMarkdown,
}: {
	size?: number;
	value: string;
	isMarkdown: boolean;
}): JSX.Element => {
	switch (size) {
		case 1:
			return <h1>{isMarkdown ? <Markdown>{value}</Markdown> : value}</h1>;
		case 2:
			return <h2>{isMarkdown ? <Markdown>{value}</Markdown> : value}</h2>;
		case 3:
			return <h3>{isMarkdown ? <Markdown>{value}</Markdown> : value}</h3>;
		case 4:
			return <h4>{isMarkdown ? <Markdown>{value}</Markdown> : value}</h4>;
		case 5:
			return <h5>{isMarkdown ? <Markdown>{value}</Markdown> : value}</h5>;
		case 6:
			return <h6>{isMarkdown ? <Markdown>{value}</Markdown> : value}</h6>;
		default:
			return <p>{isMarkdown ? <Markdown>{value}</Markdown> : value}</p>;
	}
};
export const shorterText = ({ value, maxLength }: { value: string; maxLength: number }): string => {
	if (value.length > maxLength) {
		return value.substring(0, maxLength) + "...";
	}
	return value;
};
