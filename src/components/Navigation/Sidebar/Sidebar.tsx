import { Link } from "../../Buttons";
import { Accordion } from "../../Layout";

function Sidebar() {
	return (
		<div className="h-full w-64 py-4 px-2  ">
			<ul className="flex gap-2 flex-col">
				<Link href="/" variant="text" icon="user" fullWidth>
					Dashboard
				</Link>
				<Link href="/" variant="text" icon="user" fullWidth>
					Dashboard
				</Link>
				<Link href="/" variant="text" icon="user" fullWidth>
					Dashboard
				</Link>
				<Accordion
					hasBorder={false}
					titleSize={7}
					hasDividers={false}
					rounded="lg"
					data={[
						{
							title: "Profile",
							content: "Account",
							href: "/profile",
							icon: "arrowDown",
						},
					]}
				/>
				<Link href="/" variant="text" icon="user" fullWidth>
					Dashboard
				</Link>
				<Link href="/" variant="text" icon="user" fullWidth>
					Dashboard
				</Link>
			</ul>
		</div>
	);
}

export default Sidebar;
