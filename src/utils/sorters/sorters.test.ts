import { alphabeticalArraySorter } from './sorters'

describe('Given a alphabeticalArraySorter', () => {
  describe('When invoked with an array not sorted alphabetically', () => {
    test('Then it should return an array sorted alphabetically', () => {
      // Arrange
      const array = ['b', 'a', 'c', 'c', 'b', 'a']
      const expected = ['a', 'a', 'b', 'b', 'c', 'c']
      // Act
      const result = alphabeticalArraySorter(array)
      // Assert
      expect(result).toEqual(expected)
    })
  })
})
