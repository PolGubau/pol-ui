import React from "react";
import { Modal } from "./Modal";
import { ToastProps } from "./Toast/types";
import { ModalProps } from "./Modal/types";
import ToastSystem from "./ToastSystem/ToastSystem";
import { SizesComplete, SizesWithNone } from "../../types";

interface Props {
	toasts?: ToastProps[];
	modal?: ModalProps;
	setToast?: (toasts: ToastProps[]) => void;
	setModal?: (model: ModalProps) => void;
	children?: React.ReactNode;
	modalPadding?: SizesWithNone;
	modalRounded?: SizesComplete;
}

const PopupsProvider: React.FC<Props> = ({
	toasts,
	modal,
	setToast,
	setModal,
	children,
	modalPadding,
	modalRounded,
}) => {
	return (
		<>
			{modal?.isOpen && setModal && (
				<Modal state={modal} setState={setModal} padding={modalPadding} rounded={modalRounded} />
			)}
			{toasts && setToast && <ToastSystem toasts={toasts} onChange={setToast} />}
			{children}
		</>
	);
};

export default PopupsProvider;
