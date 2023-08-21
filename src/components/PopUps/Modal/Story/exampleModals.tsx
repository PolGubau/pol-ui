import { Button } from "../../../Buttons";
import { Field, Switch } from "../../../Inputs";
import { Autocomplete } from "../../../Selects";
import { ModalProps } from "../types";
const texts = {
	handleClose: "Closing modal",
};
export const defaultModal: ModalProps = {
	isOpen: true,
	handleClose: () => {
		alert(texts.handleClose);
	},
	children: (
		<div className="flex flex-col gap-4">
			<span className="flex gap-4">
				Your payment has been successfully submitted. We’ve sent you an email with all of the
				details of your order.
			</span>
			<Field label="Card number" value="**** **** **** 4242" />
			<Switch label="Pay now" checked={true} onChange={() => {}} />
		</div>
	),
	title: "Payment successful",
	icon: "idCard",

	submitButton: {
		buttonType: "main",
		icon: "check",
		text: "Submit",
		onClick: () => {},
	},
};
export const defaultModalWithSelect: ModalProps = {
	isOpen: true,
	handleClose: () => {
		alert(texts.handleClose);
	},
	children: (
		<div className="flex flex-col gap-4">
			<span className="flex gap-4">
				Your payment has been successfully submitted. We’ve sent you an email with all of the
				details of your order.
			</span>
			<Autocomplete
				variant="outlined"
				label="Card number"
				items={[
					{ label: "**** **** **** 4242" },
					{ label: "**** **** **** 2485" },
					{ label: "**** **** **** 7525" },
					{ label: "**** **** **** 0025" },
				]}
			/>
			<Switch label="Pay now" checked={true} onChange={() => {}} />
		</div>
	),
	title: "Payment successful",
	icon: "idCard",

	submitButton: {
		buttonType: "main",
		icon: "check",
		text: "Submit",
		onClick: () => {},
	},
};
export const modalWithBothButtons: ModalProps = {
	isOpen: true,
	handleClose: () => {
		alert(texts.handleClose);
	},
	children: (
		<div className="flex flex-col gap-4">
			<span className="flex gap-4">
				Your payment has been successfully submitted. We’ve sent you an email with all of the
				details of your order.
			</span>
			<Field label="Card number" value="**** **** **** 4242" />
			<Switch label="Pay now" checked={true} onChange={() => {}} />
		</div>
	),
	title: "Payment successful",
	icon: "idCard",
	cancelButton: {
		buttonType: "normal",
		icon: "close",
		text: "Cancel",
		onClick: () => {},
	},

	submitButton: {
		buttonType: "main",
		icon: "check",
		text: "Submit",
		onClick: () => {},
	},
};
export const modalWithoutButtons: ModalProps = {
	isOpen: true,
	handleClose: () => {
		alert(texts.handleClose);
	},
	children: (
		<span>
			We sent @johndoe a friend request. Once they accept we’ll let you know and you’ll be able to
			see each other’s posts.
		</span>
	),
	title: "Friend request sent",
	icon: "world",
};
export const modalWithCutomButtons: ModalProps = {
	isOpen: true,
	handleClose: () => {
		alert(texts.handleClose);
	},
	children: (
		<div className="flex gap-2">
			<Button> Just me </Button>
			<Button> Me and my dog </Button>
			<Button> More than 3.164.854 workers </Button>
		</div>
	),
	title: "How many people are in your team?",
	icon: "binary",
};
