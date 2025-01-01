import type { Meta, StoryFn } from "@storybook/react";
import { BsDribbble, BsGithub, BsInstagram } from "react-icons/bs";
import { Button } from "../Button";
import { Copyright } from "../Copyright";
import { Divider } from "../Divider";
import { IconButton } from "../IconButton";
import { Footer } from "./Footer";
import { FooterBrand } from "./FooterBrand";
import { FooterLinkGroup } from "./FooterLinkGroup";

export default {
  title: "Components/Footer",
  component: Footer,
  tags: ["Footer", "autodocs"],
  decorators: [
    (Story) => (
      <div className="flex h-full flex-col items-end justify-end p-6">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn = ({ children }) => <Footer>{children}</Footer>;
const thisYear = new Date().getFullYear();
export const DefaultFooter = Template.bind({});
DefaultFooter.storyName = "Default";
DefaultFooter.args = {
  children: (
    <div className="flex w-full justify-between p-6">
      <Copyright href="#test" by="Pol-ui" year={thisYear} />
      <FooterLinkGroup>
        <a href="#test">About</a>
        <a href="#test">Privacy Policy</a>
        <a href="#test">Licensing</a>
        <a href="#test">Contact</a>
        <Button size="sm">Get Started</Button>
      </FooterLinkGroup>
    </div>
  ),
};

export const WithLogoFooter = Template.bind({});
WithLogoFooter.storyName = "With Logo";
WithLogoFooter.args = {
  children: (
    <div className="w-full p-6 text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <FooterBrand href="https://ui.polgubau.com" src="https://ui.polgubau.com/logo.png" alt="Pol-ui Logo" />
        <FooterLinkGroup>
          <a href="#test">About</a>
          <a href="#test">Privacy Policy</a>
          <a href="#test">Licensing</a>
          <a href="#test">Contact</a>
        </FooterLinkGroup>
      </div>
      <Divider />
      <Copyright href="#test" by="Pol-ui™" year={2022} />
    </div>
  ),
};

export const WithSocialMediaFooter = Template.bind({});
WithSocialMediaFooter.storyName = "Social Media Icons";
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
            <FooterLinkGroup col={true} title="about">
              <a href="#test">Pol-ui</a>
              <a href="#test">Tailwind CSS</a>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterLinkGroup col={true} title="Follow us">
              <a href="#test">Github</a>
              <a href="#test">Discord</a>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterLinkGroup col={true} title="Legal">
              <a href="#test">Privacy Policy</a>
              <a href="#test">Terms &amp; Conditions</a>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Copyright href="#test" by="Pol-ui™" year={2022} />
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
};

export const SitemapLinksFooter = Template.bind({});
SitemapLinksFooter.storyName = "Sitemap Links";
SitemapLinksFooter.args = {
  children: (
    <div className="w-full ">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <FooterLinkGroup col={true} title="Company">
            <a href="#test">About</a>
            <a href="#test">Careers</a>
            <a href="#test">Brand Center</a>
            <a href="#test">Blog</a>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterLinkGroup col={true} title="help center">
            <a href="#test">Discord Server</a>
            <a href="#test">Twitter</a>
            <a href="#test">Facebook</a>
            <a href="#test">Contact Us</a>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterLinkGroup col={true} title="legal">
            <a href="#test">Privacy Policy</a>
            <a href="#test">Licensing</a>
            <a href="#test">Terms &amp; Conditions</a>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterLinkGroup col={true} title="download">
            <a href="#test">iOS</a>
            <a href="#test">Android</a>
            <a href="#test">Windows</a>
            <a href="#test">MacOS</a>
          </FooterLinkGroup>
        </div>
      </div>
      <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between sm:px-10">
        <Copyright href="#test" by="Pol-ui" year={2022} />
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
};
