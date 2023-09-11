const str = require('../src/index.js')
test("capitalize", () => {
  expect(str.capitalize('bear')).toBe('Bear')
  expect(str.capitalize('bear arms')).toBe('Bear arms')
})
test("all caps", () => {
  expect(str.allCaps('bear')).toBe('BEAR')
  expect(str.allCaps('bear arms')).toBe('BEAR ARMS')
})
test("capitalize words", () => {
  expect(str.capitalizeWords('bear')).toBe('Bear')
  expect(str.capitalizeWords('bear arms')).toBe('Bear Arms')
  expect(str.capitalizeWords('bear arms not bare arms')).toBe('Bear Arms Not Bare Arms')
})
test("remove extra spaces", () => {
  expect(str.removeExtraSpaces('bear    arms')).toBe('bear arms')
  expect(str.removeExtraSpaces('  hello  world  ')).toBe('hello world')
})
test("kebab case", () => {
  expect(str.kebabCase('bear arms')).toBe('bear-arms')
})
test("snake case", () => {
  expect(str.snakeCase('bear arms')).toBe('bear_arms')
})
test("camel case", () => {
  expect(str.camelCase('bear arms')).toBe('BearArms')
})
test("shift", () => {
  expect(str.shift('bear')).toBe('earb')
  expect(str.shift('bear', 2)).toBe('arbe')
})
test("isEmpty", () => {
  expect(str.isEmpty('bear')).toBe(false)
  expect(str.isEmpty('')).toBe(true)
  expect(str.isEmpty(' ')).toBe(true)
  expect(str.isEmpty('\n \r \t')).toBe(true)
})