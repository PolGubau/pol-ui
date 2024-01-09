import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from '.'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'

describe('Components / Avatar', () => {
  describe('Theme', () => {
    it('should use custom sizes', () => {
      const theme: CustomPoluiTheme = {
        avatar: {
          root: {
            size: {
              xxl: 'h-64 w-64',
            },
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Avatar size="xxl" />
        </PoluiProvider>,
      )

      expect(img()).toHaveClass('h-64 w-64')
    })

    it('should use custom colors', () => {
      const theme: CustomPoluiTheme = {
        avatar: {
          root: {
            color: {
              rose: 'ring-rose-500 dark:ring-rose-400',
            },
          },
        },
      }
      render(
        <PoluiProvider theme={{ theme }}>
          <Avatar
            bordered
            color="rose"
            img="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75"
            alt="Your avatar"
          />
        </PoluiProvider>,
      )

      expect(img()).toHaveClass('ring-rose-500 dark:ring-rose-400')
    })
  })
  describe('Placeholder', () => {
    it('should display placeholder initials', () => {
      render(
        <PoluiProvider>
          <Avatar placeholderInitials="RR" />
        </PoluiProvider>,
      )

      expect(initialsPlaceholderText()).toHaveTextContent('RR')
    })

    it('should support explicit sizes with placeholder initials', () => {
      render(
        <PoluiProvider>
          <Avatar placeholderInitials="RR" size="xl" />
        </PoluiProvider>,
      )

      expect(initialsPlaceholder()).toHaveClass('h-36 w-36')
    })
    it('should support border color with placeholder initials', () => {
      render(
        <PoluiProvider>
          <Avatar placeholderInitials="RR" bordered color="success" />
        </PoluiProvider>,
      )

      expect(initialsPlaceholder()).toHaveClass('ring-green-500 dark:ring-green-500')
    })
  })
  describe('Image', () => {
    it('should support custom image elements', () => {
      render(
        <PoluiProvider>
          <Avatar img={props => <img alt="" referrerPolicy="no-referrer" {...props} />} />
        </PoluiProvider>,
      )

      expect(img()).toHaveAttribute('referrerpolicy', 'no-referrer')
    })
  })
  describe('Status', () => {
    it('should have online status indicator', () => {
      render(
        <PoluiProvider>
          <Avatar status="online" />
        </PoluiProvider>,
      )

      expect(status()).toHaveClass('bg-success')
    })
  })
})

const status = () => screen.getByTestId('ui-avatar-status')
const img = () => screen.getByTestId('ui-avatar-img')
const initialsPlaceholder = () => screen.getByTestId('ui-avatar-initials-placeholder')
const initialsPlaceholderText = () => screen.getByTestId('ui-avatar-initials-placeholder-text')
