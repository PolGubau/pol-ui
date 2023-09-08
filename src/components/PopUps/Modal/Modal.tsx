import React, { useEffect } from "react";
import { IconButton, Button } from "../../Buttons";
import { Icon } from "../../Base/Icon";
import { Wrapper } from "../../Wrappers";
import { ModalCloseReason, ModalProps } from "./types";
import { Text } from "../../Text";
import { applyMaxWidth, applyRoundedLarge, applySamePadding } from "../../../style";
import { SizesComplete, SizesWithNone } from "../../../types";
import { useLockBodyScroll } from "@uidotdev/usehooks";
interface Props {
	state: ModalProps;
	setState?: (state: ModalProps) => void;
	padding?: SizesWithNone;
	rounded?: SizesComplete;
}

const Modal = ({ state, setState, padding = "md", rounded = padding }: Props) => {
	useLockBodyScroll();

	const { handleClose, maxWidth, title, icon, children, cancelButton, submitButton } = state;
	const modalRef = React.useRef(null);
	const closeModal = (reason: ModalCloseReason) => {
		if (handleClose) {
			handleClose(reason);
		}
		setState?.({ ...state, isOpen: false });
	};
	useEffect(() => {
		// if you press esc key, close modal
		window.addEventListener("keydown", keyDownHandler);
		return () => {
			window.removeEventListener("keydown", keyDownHandler);
		};
	}, []);

	const keyDownHandler = (e: { key: string; shiftKey: any; preventDefault: () => void }) => {
		// only execute if tab is pressed

		// Scape function
		if (e.key === "Escape") {
			closeModal(ModalCloseReason.Escape);
		}

		// Tab trap
		if (e.key !== "Tab") return;

		if (!modalRef.current) return;
		const modal: any = modalRef.current;

		// here we query all focusable elements, customize as your own need
		const focusableModalElements = modal.querySelectorAll(
			"a[href], button:not([disabled]), textarea, input, select"
		);

		const firstElement = focusableModalElements[0];
		const lastElement = focusableModalElements[focusableModalElements.length - 1];

		// if going forward by pressing tab and lastElement is active shift focus to first focusable element
		if (!e.shiftKey && document.activeElement === lastElement) {
			firstElement.focus();
			return e.preventDefault();
		}

		// if going backward by pressing tab and firstElement is active shift focus to last focusable element
		if (e.shiftKey && document.activeElement === firstElement) {
			lastElement.focus();
			e.preventDefault();
		}
	};

	return (
		<Wrapper onClickOutside={() => closeModal(ModalCloseReason.ClickOutside)} hasOverlay={true}>
			<section
				onKeyDown={keyDownHandler}
				ref={modalRef}
				className={`animate-fade-up animate-once animate-ease-out flex flex-col gap-4 relative animate-duration-500    w-full bg-white dark:bg-gray-800 dark:ring-gray-700 dark:text-gray-200   justify-center  shadow-2xl max-w-[90vw] md:max-w-3xl ${applyMaxWidth(
					maxWidth
				)}
				${applySamePadding(padding)}
				${applyRoundedLarge(rounded)}
				`}
			>
				<IconButton
					className="absolute right-4 top-4"
					icon="close"
					onClick={() => closeModal(ModalCloseReason.Cancel)}
					variant="text"
				/>
				{title && (
					<header className="max-w-[85%] flex gap-4 items-center ">
						<Icon icon={icon} size="xl" />
						<Text size={4} className="" value={title} />
					</header>
				)}
				<section className=" min-h-20 text-black/70"> {children}</section>
				{(cancelButton || submitButton) && (
					<footer className="flex gap-4 w-full">
						{cancelButton && (
							<Button
								variant={cancelButton.variant ?? "filled"}
								color={cancelButton.color ?? "background"}
								onClick={() => {
									cancelButton.onClick?.();
									closeModal(ModalCloseReason.Cancel);
								}}
								icon={cancelButton?.icon}
							>
								{cancelButton.text}
							</Button>
						)}
						{submitButton && (
							<Button
								autoFocus
								variant={submitButton.variant ?? "filled"}
								color={submitButton.color ?? "accent"}
								onClick={() => {
									submitButton.onClick?.();
									closeModal(ModalCloseReason.Submit);
								}}
								icon={submitButton?.icon}
							>
								{submitButton.text}
							</Button>
						)}
					</footer>
				)}
			</section>
		</Wrapper>
	);
};

export default Modal;
