import type { Meta, StoryFn } from '@storybook/react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Input } from '../Input'
import type { ModalProps } from './Modal'
import { Modal } from './Modal'
import React from 'react'
import { PasswordInput } from '../PasswordInput'
import { useBoolean } from '../../hooks'

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

const Template: StoryFn<ModalProps> = (props): JSX.Element => {
  const { value, setTrue, setFalse } = useBoolean(false)
  return (
    <>
      <div className="flex">
        <Button onClick={setTrue}>Open modal</Button>
      </div>
      <Modal
        deleteButton
        {...props}
        onClose={() => {
          setFalse()
        }}
        show={value}
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Terms of Service</h3>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply. The European Union’s
            General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set
            of data rights in the European Union. It requires organizations to notify users as soon as possible of
            high-risk data breaches that could personally affect them.
          </p>
          <footer className="flex gap-2 pt-4 ">
            <Button
              onClick={() => {
                alert('custom action')
                setFalse()
              }}
            >
              I accept
            </Button>
            <Button color="error" onClick={setFalse}>
              Decline
            </Button>
          </footer>
        </div>
      </Modal>
    </>
  )
}

export const Default = Template.bind({})

const WarningTemplate: StoryFn<ModalProps> = (): JSX.Element => {
  const { value, setTrue, setFalse } = useBoolean(false)

  return (
    <>
      <div className="flex">
        <Button onClick={setTrue}>Open modal</Button>
      </div>
      <Modal
        onClose={() => {
          setFalse()
        }}
        show={value}
      >
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="error"
              onClick={() => {
                setFalse()
              }}
            >
              Yes, I&apos;m sure
            </Button>
            <Button
              color="secondary"
              onClick={() => {
                setFalse()
              }}
            >
              No, cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
export const Warning = WarningTemplate.bind({})

const TemplateForm: StoryFn<ModalProps> = (): JSX.Element => {
  const { value, setTrue, setFalse } = useBoolean(false)

  return (
    <>
      <Button
        onClick={() => {
          setTrue()
        }}
      >
        Toggle modal
      </Button>
      <Modal
        onClose={() => {
          setFalse()
        }}
        show={value}
      >
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create an account</h3>
          <Input label="Email" id="email" placeholder="name@company.com" required />
          <PasswordInput label="Password" id="password" required />
          <Checkbox id="remember" label="Remember me" />
          <Button>Log in to your account</Button>
        </div>
      </Modal>
    </>
  )
}
export const Form = TemplateForm.bind({})
