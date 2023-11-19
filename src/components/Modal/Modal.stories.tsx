import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import Link from 'next/link';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Label } from '../Label';
import { TextInput } from '../TextInput';
import type { ModalProps } from './Modal';
import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    show: false,
  },
} as Meta;

const Template: StoryFn<ModalProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <>
      <Button onClick={action('open')}>Toggle modal</Button>
      <Modal onClose={action('close')} {...rest}>
        {children}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={action('close')}>I accept</Button>
        <Button color="gray" onClick={action('close')}>
          Decline
        </Button>
      </Modal.Footer>
    </>
  ),
};

export const PopUp = Template.bind({});
PopUp.storyName = 'Pop-up modal';
PopUp.args = {
  children: (
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this product?
        </h3>
        <div className="flex justify-center gap-4">
          <Button color="red" onClick={action('close')}>
            Yes, I&apos;m sure
          </Button>
          <Button color="gray" onClick={action('close')}>
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  ),
};

export const FormElements = Template.bind({});
FormElements.storyName = 'Form elements';
FormElements.args = {
  children: (
    <>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" placeholder="name@company.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Link href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
              Lost Password?
            </Link>
          </div>
          <div className="w-full">
            <Button>Log in to your account</Button>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <Link href="/modal" className="text-cyan-700 hover:underline dark:text-cyan-500">
              Create account
            </Link>
          </div>
        </div>
      </Modal.Body>
    </>
  ),
};
