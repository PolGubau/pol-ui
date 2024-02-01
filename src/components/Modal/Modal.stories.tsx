import type { Meta, StoryFn } from '@storybook/react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Input } from '../Input'
import type { ModalProps } from './Modal'
import { Modal } from './Modal'
import React from 'react'
import { PasswordInput } from '../PasswordInput'

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col w-full bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<ModalProps> = (): JSX.Element => {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setShow(true)
        }}
      >
        Toggle modal
      </Button>
      <Modal
        onClose={() => {
          setShow(false)
        }}
        show={show}
      >
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
          <Button onClick={() => setShow(false)}>I accept</Button>
          <Button color="error" onClick={() => alert('custom action')}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export const Default = Template.bind({})

const TemplatePopup: StoryFn<ModalProps> = (): JSX.Element => {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setShow(true)
        }}
      >
        Toggle modal
      </Button>
      <Modal
        onClose={() => {
          setShow(false)
        }}
        show={show}
      >
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="error"
                onClick={() => {
                  setShow(false)
                }}
              >
                Yes, I&apos;m sure
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  setShow(false)
                }}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export const Popup = TemplatePopup.bind({})

const TemplateForm: StoryFn<ModalProps> = (): JSX.Element => {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setShow(true)
        }}
      >
        Toggle modal
      </Button>
      <Modal
        onClose={() => {
          setShow(false)
        }}
        show={show}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create an account</h3>
            <Input label="Email" id="email" placeholder="name@company.com" required />
            <PasswordInput label="Password" id="password" required />
            <Checkbox id="remember" label="Remember me" />
            <Button>Log in to your account</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export const Form = TemplateForm.bind({})
