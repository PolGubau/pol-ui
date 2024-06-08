import type { Meta, StoryFn } from '@storybook/react'
import type { NavigationMenuProps } from './NavigationMenu'
import { NavigationMenu } from './NavigationMenu'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { NavigationMenuTrigger } from './navigation-menu-trigger'
import { NavigationMenuItem, NavigationMenuLink } from './navigation-menu-extras'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { NavigationMenuContent } from './navigation-menu-content'

export default {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],

  decorators: [
    Story => (
      <div className="flex p-6 flex-col w-full min-h-[400px] bg-secondary-200">
        <div className="">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<NavigationMenuProps> = args => <NavigationMenu {...args} />

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={twMerge(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Learn</NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
            <li className="row-span-3 grid">
              <NavigationMenuLink asChild>
                <a
                  className="focus:shadow-md from-primary to-primary/20 flex
            h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-br p-[25px] no-underline outline-none"
                  href="/"
                >
                  <div className="mt-4 text-3xl font-medium leading-[1.2] text-black dark:text-white">Pol-ui</div>
                  <p className="text-mauve4 text-[14px] leading-[1.3]">A styled wrapper for your navigation</p>
                </a>
              </NavigationMenuLink>
            </li>

            <ListItem href="#" title="Styled">
              Powered with Tailwind CSS and Radix.
            </ListItem>
            <ListItem href="#" title="Composable">
              A detail component, already included in the navbar.
            </ListItem>
            <ListItem href="#" title="Animation">
              All animations are running in css, quite smooth.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Overview</NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
            <ListItem title="Introduction" href="#">
              A component ready for your exigences.
            </ListItem>
            <ListItem title="Features" href="#">
              This is a children, you can put anything here.
            </ListItem>
            <ListItem title="Usage" href="#">
              The component is fully customizable.
            </ListItem>

            <li className="row-span-3 grid">
              <NavigationMenuLink asChild>
                <a
                  className="focus:shadow-md from-primary to-primary/20 flex
            h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-br p-[25px] no-underline outline-none"
                  href="/"
                >
                  <div className="mt-4 text-3xl font-medium leading-[1.2] text-black dark:text-white">Pol-ui</div>
                  <p className="text-mauve4 text-[14px] leading-[1.3]">A styled wrapper for your navigation</p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Account</NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul className="grid p-6 sm:w-[500px] sm:grid-cols-[0.50fr_1fr] gap-6">
            <h3>Login</h3>
            <div className="flex flex-col gap-2">
              <Input placeholder="Your name" defaultValue={'polui'} label="Your name" />
              <Input placeholder="Your email" defaultValue={'pol@ui.com'} label="Your email" />
            </div>
            <h3>Security</h3>
            <div className="flex flex-col gap-2">
              <Checkbox defaultChecked label="Sell my data please" />
            </div>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink active href="#">
          Github
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  ),
}

ListItem.displayName = 'ListItem'
