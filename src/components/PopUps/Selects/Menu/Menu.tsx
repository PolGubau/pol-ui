import { useRef, useState } from "react";
import { Icon } from "../../../Icon";
import { Button, IconButton } from "../../../Buttons";
import useClickOutside from "../../../../hooks/useClickOutside";

interface Props {
	label?: string;
}

export default function Menu(props: Props) {
	const { label } = props;
	const [open, setOpen] = useState(false);
	const modalRef = useRef(null);
	useClickOutside(modalRef, () => setOpen(false));
	return (
		<div className="relative inline-block text-left" ref={modalRef}>
			{label ? (
				<Button
					onClick={() => {
						setOpen((prev) => !prev);
					}}
				>
					{label}
					<Icon icon="arrowDown" aria-hidden="true" />
				</Button>
			) : (
				<IconButton
					icon="arrowDown"
					onClick={() => {
						setOpen((prev) => !prev);
					}}
				/>
			)}

			{open && (
				<section className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="p-1">
						<Button icon="edit" type="text" fullWidth>
							Edit
						</Button>
						<Button icon="edit" type="text" fullWidth>
							Edit
						</Button>
					</div>
					<div className="p-1">
						<Button icon="edit" type="text" fullWidth>
							Edit
						</Button>
					</div>
				</section>
			)}
		</div>
	);
}
