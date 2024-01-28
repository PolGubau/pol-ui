import type { Meta, StoryFn } from '@storybook/react'
import { HiInformationCircle, HiX } from 'react-icons/hi'
import { theme } from '../../theme'
import type { AlertProps } from './Alert'
import { Alert } from './Alert'
import { MdLightbulb } from 'react-icons/md'
import { ColorsEnum } from '../../types/enums'
import { Button } from '../Button'
import { BiCheck, BiTrash } from 'react-icons/bi'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    color: {
      options: Object.keys(theme.alert.color),
      control: { type: 'inline-radio' },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col  min-h-[400px] justify-center items-center bg-secondary-50">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<AlertProps> = props => <Alert {...props} />

export const DefaultAlert = Template.bind({})
DefaultAlert.storyName = 'Default'
DefaultAlert.args = {
  onDismiss: false,
  children: (
    <>
      An alert could be an incredible useful component when showing an important advice is needed. You can easily
      customize it's colors, actions and texts. Use it for feedback or warnings.
    </>
  ),
}

export const AlertWithIcons = Template.bind({})
AlertWithIcons.storyName = 'With Icon'
AlertWithIcons.args = {
  icon: MdLightbulb,
  onDismiss: false,
  children: (
    <>
      Our recommendation is to use a descriptible icon with the content so the user will know faster what the context or
      the alert is, examples could be a LightBulb, a question mark, a info symbol...
    </>
  ),
}

export const AlertDismissible = Template.bind({})
AlertDismissible.storyName = 'Dismissible'
AlertDismissible.args = {
  color: ColorsEnum.success,
  onDismiss: () => alert('Alert dismissed!'),
  children: (
    <>
      Yeyy, that's a success alert! How the component has 'onDismiss' as a prop, you can trigger an action when clicking
      the cross.
    </>
  ),
}

export const AlertRounded = Template.bind({})
AlertRounded.storyName = 'Not rounded'
AlertRounded.args = {
  color: ColorsEnum.warning,
  rounded: false,
  onDismiss: false,
  children: <>Warning alert! This alert is trying to advice you, be carefully that this actions is not undonable.</>,
}

export const AlertWithBorderAccent = Template.bind({})
AlertWithBorderAccent.storyName = 'Bordered'
AlertWithBorderAccent.args = {
  color: ColorsEnum.warning,
  onDismiss: false,
  withBorderAccent: true,
  children: (
    <>Easier to see, right? Use this border when you have complexe contrast to increase the Alert visual importance</>
  ),
}

export const AlertWithAdditionalContent = Template.bind({})
AlertWithAdditionalContent.storyName = 'Additional content'
AlertWithAdditionalContent.args = {
  color: 'info',
  icon: HiInformationCircle,
  onDismiss: false,
  withBorderAccent: true,
  additionalContent: (
    <>
      <div className="mb-4 mt-2 text-sm text-info-700 dark:text-info-800">
        This is the component comming from additionalContent as a prop, could be used when you need to present a large
        text that is better be cutted due to the icon.
      </div>
      <div className="flex gap-2">
        <Button color={ColorsEnum.info}>
          <BiCheck className="h-4 w-4" />
          Understood
        </Button>

        <Button color={ColorsEnum.secondary}>Dismiss</Button>
      </div>
    </>
  ),
  children: (
    <>
      <h3 className="text-lg font-medium text-cyan-700 dark:text-cyan-800">This is a info alert</h3>
      This content is the real one, the children.
    </>
  ),
}

export const AlertWithAllOptions = Template.bind({})
AlertWithAllOptions.storyName = 'Complexe Error Example'
AlertWithAllOptions.args = {
  color: ColorsEnum.error,
  rounded: false,
  withBorderAccent: true,
  onDismiss: () => alert('Alert dismissed!'),
  icon: BiTrash,
  additionalContent: (
    <>
      <div className="mb-4 mt-2 text-sm text-green-700 dark:text-green-800"></div>
      <div className="flex gap-2">
        <Button color={ColorsEnum.error}>
          <HiX /> Delete Data
        </Button>
        <Button color={ColorsEnum.secondary}>Return</Button>
      </div>
    </>
  ),
  children: <>Error Alert! Example: If you continue all data stored here will be deleted forever (a lot of time)</>,
}
