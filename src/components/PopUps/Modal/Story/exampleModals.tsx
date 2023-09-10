import { Button } from "../../../Buttons";
import { IconNames } from "../../../Base/Icon";
import { Field, Switch } from "../../../Inputs";
import Tabs from "../../../Layout/Tabs/Tabs";
import { Autocomplete } from "../../../Selects";
import { ModalProps } from "../types";
import { Text } from "../../../Text";
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
		color: "accent",
		icon: "check",
		text: "Submit",
		onClick: () => {},
	},
};
export const modalWithLogin: ModalProps = {
	isOpen: true,
	handleClose: () => {
		alert(texts.handleClose);
	},
	children: (
		<Tabs
			hasBorder={false}
			data={[
				{
					title: "Login",
					content: (
						<div className="flex gap-4 flex-col">
							<h3>Already have an account? Login.</h3>
							<Field label="Email" fullWidth />
							<Field label="password" type="password" fullWidth />
							<Switch label="Remember me" checked={true} onChange={() => {}} />
							<Button icon={IconNames.arrow} color="accent" iconPosition="right">
								Login
							</Button>
						</div>
					),
				},
				{
					title: "Create Account",
					content: (
						<div className="flex gap-4 flex-col">
							<h3>First time here? Create an account.</h3>
							<div className="flex gap-4">
								<Field label="Email" fullWidth />
								<Field label="Username" fullWidth />
							</div>
							<Field label="password" type="password" fullWidth />
							<Button icon={IconNames.arrow} color="accent" iconPosition="right">
								Create an account
							</Button>
						</div>
					),
				},
			]}
		/>
	),
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
		color: "accent",
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
		variant: "text",
		icon: "close",
		text: "Cancel",
		color: "contrast",
		onClick: () => {},
	},

	submitButton: {
		color: "accent",
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
export const rounded: ModalProps = {
	isOpen: true,
	handleClose: () => {
		alert(texts.handleClose);
	},

	children: (
		<div className="flex flex-col gap-2">
			<Text size={4} value="This is a rounded modal" />
			<Button fullWidth centered>
				Cool🤠
			</Button>
		</div>
	),
	title: "Can you see that?",
};
