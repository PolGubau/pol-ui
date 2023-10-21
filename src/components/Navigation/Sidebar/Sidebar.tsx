import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { useMediaQuery } from "../../../hooks";
import { IconButton, Link } from "../../Buttons";
import { Icon, IconNames } from "../../Base";
import { JustifyContents, Variants } from "../../../types";
import { Text } from "../../Text";
import { Logo } from "../../../assets";

interface SidebarProps {
	brandName?: string;
	brandLogo?: React.ReactNode;
	links?: { label: string; href: string; icon: IconNames }[];
}

const Sidebar: React.FC<SidebarProps> = ({
	brandName = "Acme",
	brandLogo = <Logo />,
	links = [
		{ label: "Dashboard", href: "/", icon: IconNames.home },
		{ label: "Settings", href: "/settings", icon: IconNames.settings },
		{ label: "Logout", href: "/logout", icon: IconNames.arrowBarLeft },
	],
}) => {
	let isTabletMid = useMediaQuery(768);

	const [open, setOpen] = useState(!isTabletMid);
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isTabletMid) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}, [isTabletMid]);

	const Nav_animation = isTabletMid
		? {
				open: {
					x: 0,
					width: "16rem",
					transition: {
						damping: 40,
					},
				},
				closed: {
					x: -250,
					width: 0,
					transition: {
						damping: 40,
						delay: 0.15,
					},
				},
		  }
		: {
				open: {
					width: "16rem",
					transition: {
						damping: 40,
					},
				},
				closed: {
					width: "4rem",
					transition: {
						damping: 40,
					},
				},
		  };

	return (
		<div>
			<motion.div
				ref={sidebarRef}
				variants={Nav_animation}
				initial={{ x: isTabletMid ? -250 : 0 }}
				animate={open ? "open" : "closed"}
				className="shadow-xl z-[999] overflow-hidden md:relative min-h-screen "
			>
				<div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
					<div className="w-[50px] max-w-[50px]">{brandLogo}</div>

					{open && <span className="text-xl whitespace-pre">{brandName}</span>}
				</div>

				<div className="flex flex-col  h-full">
					<ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
						{links.map((link, i) => (
							<li key={i}>
								<Link
									href={link.href}
									fullWidth
									variant={Variants.text}
									justify={JustifyContents.start}
								>
									<Icon icon={IconNames.apps} />
									{open && <Text>{link.label}</Text>}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<motion.div
					onClick={() => {
						setOpen(!open);
					}}
					animate={
						open
							? {
									x: 0,
									rotate: 0,
							  }
							: {
									x: -10,
									rotate: 180,
							  }
					}
					transition={{ duration: 0 }}
					className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
				>
					<Icon icon={IconNames.arrowleft} size={35} />
				</motion.div>
			</motion.div>

			<IconButton
				className="m-3 md:hidden"
				variant={Variants.text}
				icon={IconNames.arrowBarRight}
				onClick={() => setOpen(true)}
			/>
		</div>
	);
};

export default Sidebar;
