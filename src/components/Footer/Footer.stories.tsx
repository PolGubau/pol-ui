import type { Meta, StoryFn } from '@storybook/react'
import { BsDribbble, BsGithub, BsInstagram } from 'react-icons/bs'
import { Button } from '../Button'
import { Copyright } from '../Copyright'
import { Divider } from '../Divider'
import { IconButton } from '../IconButton'
import { Link } from '../Link'
import { Footer } from './Footer'
import { FooterBrand } from './FooterBrand'
import { FooterLinkGroup } from './FooterLinkGroup'

export default {
  title: 'Components/Footer',
  component: Footer,
  tags: ['Footer', 'autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-end justify-end h-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn = ({ children }) => <Footer>{children}</Footer>
const thisYear = new Date().getFullYear()
export const DefaultFooter = Template.bind({})
DefaultFooter.storyName = 'Default'
DefaultFooter.args = {
  children: (
    <div className="flex w-full justify-between p-6">
      <Copyright href="#" by="Pol-ui" year={thisYear} />
      <FooterLinkGroup>
        <Link href="#">About</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Licensing</Link>
        <Link href="#">Contact</Link>
        <Button size="sm">Get Started</Button>
      </FooterLinkGroup>
    </div>
  ),
}

export const WithLogoFooter = Template.bind({})
WithLogoFooter.storyName = 'With Logo'
WithLogoFooter.args = {
  children: (
    <div className="w-full p-6 text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <FooterBrand href="https://ui.polgubau.com" src="https://ui.polgubau.com/logo.png" alt="Pol-ui Logo" />
        <FooterLinkGroup>
          <Link href="#">About</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Licensing</Link>
          <Link href="#">Contact</Link>
        </FooterLinkGroup>
      </div>
      <Divider />
      <Copyright href="#" by="Pol-ui™" year={2022} />
    </div>
  ),
}

export const WithSocialMediaFooter = Template.bind({})
WithSocialMediaFooter.storyName = 'Social Media Icons'
WithSocialMediaFooter.args = {
  container: true,
  children: (
    <div className="w-full p-6">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
          <FooterBrand href="https://ui.polgubau.com" src="https://ui.polgubau.com/logo.png" alt="Pol-ui Logo" />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <FooterLinkGroup col title="about">
              <Link href="#">Pol-ui</Link>
              <Link href="#">Tailwind CSS</Link>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterLinkGroup col title="Follow us">
              <Link href="#">Github</Link>
              <Link href="#">Discord</Link>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterLinkGroup col title="Legal">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms &amp; Conditions</Link>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Copyright href="#" by="Pol-ui™" year={2022} />
        <div className="mt-4 flex space-x-2 sm:mt-0 sm:justify-center">
          <IconButton>
            <BsDribbble size={20} />
          </IconButton>
          <IconButton>
            <BsInstagram size={20} />
          </IconButton>
          <IconButton>
            <BsGithub size={20} />
          </IconButton>
          <IconButton>
            <BsDribbble size={20} />
          </IconButton>
        </div>
      </div>
    </div>
  ),
}

export const SitemapLinksFooter = Template.bind({})
SitemapLinksFooter.storyName = 'Sitemap Links'
SitemapLinksFooter.args = {
  children: (
    <div className="w-full ">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <FooterLinkGroup col title="Company">
            <Link href="#">About</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Brand Center</Link>
            <Link href="#">Blog</Link>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterLinkGroup col title="help center">
            <Link href="#">Discord Server</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Contact Us</Link>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterLinkGroup col title="legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Licensing</Link>
            <Link href="#">Terms &amp; Conditions</Link>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterLinkGroup col title="download">
            <Link href="#">iOS</Link>
            <Link href="#">Android</Link>
            <Link href="#">Windows</Link>
            <Link href="#">MacOS</Link>
          </FooterLinkGroup>
        </div>
      </div>
      <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between sm:px-10">
        <Copyright href="#" by="Pol-ui" year={2022} />
        <div className="mt-4 flex space-x-2 sm:mt-0 sm:justify-center">
          <IconButton>
            <BsDribbble size={20} />
          </IconButton>
          <IconButton>
            <BsInstagram size={20} />
          </IconButton>
          <IconButton>
            <BsGithub size={20} />
          </IconButton>
          <IconButton>
            <BsDribbble size={20} />
          </IconButton>
        </div>
      </div>
    </div>
  ),
}
