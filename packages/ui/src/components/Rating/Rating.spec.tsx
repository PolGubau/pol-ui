import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Rating } from './Rating'

describe.concurrent('Components / Rating', () => {
  describe.concurrent('Rendering', () => {
    it('should visually distinguish unfilled stars in secondary color', () => {
      render(<AdvancedRating />)

      expect(stars()[1]).toHaveClass('text-secondary-300')
    })
  })
})

const AdvancedRating = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <Rating stars={2} filled={1} />
  </div>
)

const stars = () => screen.getAllByTestId('ui-rating-star')
