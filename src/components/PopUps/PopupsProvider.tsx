import React from "react";
import { Modal } from "./Modal";
import { Toast } from "./Toast/Toast";
import { ToastProps } from "./Toast/types";
import { ModalProps } from "./Modal/types";

interface Props {
	toastState: ToastProps;
	modalState: ModalProps;
	setToast: React.Dispatch<React.SetStateAction<ToastProps>>;
	setModal: React.Dispatch<React.SetStateAction<ModalProps>>;
	children?: React.ReactNode;
}

const PopupsProvider: React.FC<Props> = ({
	toastState,
	modalState,
	setToast,
	setModal,

	children,
}) => {
	return (
		<>
			{modalState.isOpen && <Modal state={modalState} setState={setModal} />}
			{toastState.isOpen && <Toast state={toastState} setState={setToast} />}
			{children}
		</>
	);
};

export default PopupsProvider;
