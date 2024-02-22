import type { Meta, StoryFn } from '@storybook/react'
import type { NavigationMenuProps } from './navigation-menu'
import { NavigationMenu } from './navigation-menu'
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
                  className="focus:shadow-md from-purple-500 to-indigo-300 flex
            h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none"
                  href="/"
                >
                  <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">Radix Primitives</div>
                  <p className="text-mauve4 text-[14px] leading-[1.3]">Unstyled, accessible components for React.</p>
                </a>
              </NavigationMenuLink>
            </li>

            <ListItem href="https://stitches.dev/" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </ListItem>
            <ListItem href="/colors" title="Colors">
              Beautiful, thought-out palettes with auto dark mode.
            </ListItem>
            <ListItem href="https://icons.radix-ui.com/" title="Icons">
              A crisp set of 15x15 icons, balanced and consistent.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Overview</NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
            <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
              Build high-quality, accessible design systems and web apps.
            </ListItem>
            <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
              A quick tutorial to get you up and running with Radix Primitives.
            </ListItem>
            <ListItem title="Styling" href="/primitives/docs/guides/styling">
              Unstyled and compatible with any styling solution.
            </ListItem>
            <ListItem title="Animation" href="/primitives/docs/guides/animation">
              Use CSS keyframes or any animation library of your choice.
            </ListItem>
            <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">
              Tested in a range of browsers and assistive technologies.
            </ListItem>
            <ListItem title="Releases" href="/primitives/docs/overview/releases">
              Radix Primitives releases and their changelogs.
            </ListItem>
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
        <NavigationMenuLink active href="https://ui.polgubau.com">
          Github
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  ),
}

ListItem.displayName = 'ListItem'
