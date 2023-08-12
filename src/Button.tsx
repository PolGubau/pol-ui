import "./Button.scss";

export function Button({ title }: { title: string }) {
	return (
		<div className="myComponent">
			<h1>{title}</h1>
			<span>Thanks for using Polui</span>
		</div>
	);
}
