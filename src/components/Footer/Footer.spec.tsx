import { cleanup, render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { describe, expect, it } from 'vitest';
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider';
import { Footer } from './Footer';

describe('Components / Footer', () => {
  describe('Rendering', () => {
    it('should render an `<a>` with an `<img>` on `Footer.Brand href=".."`', () => {
      render(
        <Footer>
          <Footer.Brand
            alt="PoluiProvider"
            href="https://ui-polgubau.com"
            src="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75"
          >
            Pol-ui
          </Footer.Brand>
        </Footer>,
      );
      const a = screen.getByTestId('ui-footer-brand');
      const img = screen.getByAltText('PoluiProvider');

      expect(a).toBeInTheDocument();
      expect(a).toContainElement(img);
    });
  });

  it('should render an `<img>` on `Footer.Brand src=".."`', () => {
    render(
      <Footer>
        <Footer.Brand alt="PoluiProvider" src="">
          PoluiProvider
        </Footer.Brand>
      </Footer>,
    );
    const img = screen.getByAltText('PoluiProvider');

    expect(img).toBeInTheDocument();
  });

  it('should render an `<a>` on `Footer.Copyright href=".."`', () => {
    render(
      <Footer>
        <Footer.Copyright by="PoluiProvider" href="https://PoluiProvider.com" year={2022}>
          PoluiProvider
        </Footer.Copyright>
      </Footer>,
    );

    expect(copyright()).toContainElement(screen.getByRole('link'));
  });

  it('should render an `<a>` on `Footer.Icon href=".."`', () => {
    render(
      <Footer>
        <Footer.Icon ariaLabel="Icon" href="/" icon={BsFacebook} />
      </Footer>,
    );
    const iconLink = screen.getAllByRole('link')[0];

    expect(iconLink).toContainElement(icon());
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme: CustomPoluiTheme = {
        footer: {
          root: {
            base: 'text-gray-100',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <TestFooter />
        </PoluiProvider>,
      );

      expect(footer()).toHaveClass('text-gray-100');
    });

    it('should use `bgDark` classes', () => {
      const theme: CustomPoluiTheme = {
        footer: {
          root: {
            bgDark: 'text-gray-100',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <TestFooter />
        </PoluiProvider>,
      );

      expect(footer()).toHaveClass('text-gray-100');
    });

    it('should use `container` classes', () => {
      const theme: CustomPoluiTheme = {
        footer: {
          root: {
            container: 'text-gray-100',
          },
        },
      };
      render(
        <PoluiProvider theme={{ theme }}>
          <TestFooter />
        </PoluiProvider>,
      );

      expect(footer()).toHaveClass('text-gray-100');
    });

    describe('`Footer.Brand`', () => {
      it('should use `brand` classes', () => {
        const theme: CustomPoluiTheme = {
          footer: {
            brand: {
              base: 'text-gray-100',
              img: 'text-gray-200',
              span: 'text-gray-300',
            },
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer>
              <Footer.Brand alt="PoluiProvider" href="https://PoluiProvider.com" src="">
                PoluiProvider
              </Footer.Brand>
            </Footer>
          </PoluiProvider>,
        );

        expect(brand()).toHaveClass('text-gray-100');
        expect(screen.getByRole('img')).toHaveClass('text-gray-200');

        cleanup();
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer>
              <Footer.Brand href="/" src="">
                PoluiProvider
              </Footer.Brand>
            </Footer>
          </PoluiProvider>,
        );

        expect(screen.getByTestId('ui-footer-brand-span')).toHaveClass('text-gray-300');
      });
    });

    describe('`Footer.Copyright`', () => {
      it('should use `copyright` classes', () => {
        const theme: CustomPoluiTheme = {
          footer: {
            copyright: {
              base: 'text-gray-100',
              href: 'text-gray-200',
              span: 'text-gray-300',
            },
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer>
              <Footer.Copyright by="PoluiProvider" year={2022}>
                Test
              </Footer.Copyright>
            </Footer>
          </PoluiProvider>,
        );

        expect(copyright()).toHaveClass('text-gray-100');
        expect(screen.getByTestId('ui-footer-copyright-span')).toHaveClass('text-gray-300');

        cleanup();
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer>
              <Footer.Copyright by="PoluiProvider" href="/" year={2022}>
                Test
              </Footer.Copyright>
            </Footer>
          </PoluiProvider>,
        );

        expect(screen.getByRole('link')).toHaveClass('text-gray-200');
      });
    });

    describe('`Footer.Icon`', () => {
      it('should use `icon` classes', () => {
        const theme: CustomPoluiTheme = {
          footer: {
            icon: {
              base: 'text-gray-800',
              size: 'text-gray-900',
            },
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer>
              <Footer.Icon ariaLabel="Icon" href="/" icon={BsFacebook} />
            </Footer>
          </PoluiProvider>,
        );

        expect(icon()).toHaveClass('text-gray-800');

        cleanup();
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer>
              <Footer.Icon ariaLabel="Icon" icon={BsFacebook} />
            </Footer>
          </PoluiProvider>,
        );

        expect(icon()).toHaveClass('text-gray-900');
      });
    });

    describe('`Footer.Title`', () => {
      it('should use `title` classes', () => {
        const theme: CustomPoluiTheme = {
          footer: {
            title: {
              base: 'text-gray-100',
            },
          },
        };
        render(
          <PoluiProvider theme={{ theme }}>
            <Footer.Title title="PoluiProvider" />
          </PoluiProvider>,
        );

        expect(title()).toHaveClass('text-gray-100');
      });
    });
  });
});

const TestFooter: FC = () => (
  <Footer bgDark container>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
          <Footer.Brand
            href="https://PoluiProvider.com"
            src="https://PoluiProvider.com/docs/images/logo.svg"
            alt="PoluiProvider Logo"
            name="PoluiProvider"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">PoluiProvider</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="PoluiProvider™" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon href="#" icon={BsGithub} />
          <Footer.Icon href="#" icon={BsDribbble} />
        </div>
      </div>
    </div>
  </Footer>
);

const brand = () => screen.getByTestId('ui-footer-brand');

const copyright = () => screen.getByTestId('ui-footer-copyright');

const footer = () => screen.getByTestId('ui-footer');

const icon = () => screen.getByTestId('ui-footer-icon');

const title = () => screen.getByTestId('ui-footer-title');
