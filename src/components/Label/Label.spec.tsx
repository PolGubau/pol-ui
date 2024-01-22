import { render, screen } from '@testing-library/react'
import { HiGlobe, HiLockClosed } from 'react-icons/hi'
import { describe, expect, it } from 'vitest'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { FileInput } from '../FileInput'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { Radio } from '../Radio'
import { RangeSlider } from '../RangeSlider'
import { Select } from '../Select'
import { TextInput } from '../TextInput'
import { Textarea } from '../Textarea'
import { Switch } from '../Switch'
import { Label } from './Label'

describe.concurrent('Components / Label', () => {
  describe.concurrent('A11y', () => {
    it('should provide accessible name to any form control associated by `htmlFor`', () => {
      const inputLabels = [
        'Your email',
        'Your password',
        'Remember me',
        'Enable notifications',
        'Upload file',
        'United States',
        'Your message',
        'Price',
      ]

      const { getByLabelText } = render(<TestForm />)

      inputLabels.forEach(label => expect(getByLabelText(label)).toHaveAccessibleName(label))
    })

    describe('Theme', () => {
      it('should use `disabled` classes', () => {
        const theme: CustomPoluiTheme = {
          label: {
            root: {
              disabled: 'opacity-50',
            },
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <Label disabled />
          </PoluiProvider>,
        )

        expect(label()).toHaveClass('opacity-50')
      })
    })
  })
})

const label = () => screen.getByTestId('ui-label')

const TestForm = (): JSX.Element => (
  <form>
    <div>
      <Switch checked={false} label="Enable notifications" onChange={console.log} />
    </div>
    <div>
      <Label htmlFor="email">Your email</Label>
      <TextInput id="email" type="email" placeholder="name@PoluiProvider.com" required />
    </div>
    <div>
      <Label htmlFor="password">Your password</Label>
      <TextInput
        addon="Make sure it is at least 12 characters!"
        icon={HiLockClosed}
        id="password"
        type="password"
        required
      />
    </div>
    <div>
      <Checkbox id="remember" />
      <Label htmlFor="remember">Remember me</Label>
    </div>
    <div>
      <Label htmlFor="countries">Select your country</Label>
      <Select
        addon={<span>Or just pick any country</span>}
        helperText="Or just pick any country"
        icon={HiGlobe}
        id="countries"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
    </div>
    <div>
      <Label htmlFor="file">Upload file</Label>
      <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
    </div>
    <fieldset>
      <legend>Choose your favorite country</legend>
      <div>
        <Radio id="united-state" name="countries" value="USA" defaultChecked />
        <Label htmlFor="united-state">United States</Label>
      </div>
      <div>
        <Radio id="germany" name="countries" value="Germany" />
        <Label htmlFor="germany">Germany</Label>
      </div>
      <div>
        <Radio id="spain" name="countries" value="Spain" />
        <Label htmlFor="spain">Spain</Label>
      </div>
      <div>
        <Radio id="uk" name="countries" value="United Kingdom" />
        <Label htmlFor="uk">United Kingdom</Label>
      </div>
      <div>
        <Radio id="china" name="countries" value="China" disabled />
        <Label>China (disabled)</Label>
      </div>
      <div>
        <Label htmlFor="comment">Your message</Label>
        <Textarea id="comment" helperText="Leave a comment..." required rows={4} />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <RangeSlider id="price" min={0} max={100} />
      </div>
    </fieldset>
    <Button type="submit">Submit</Button>
  </form>
)
