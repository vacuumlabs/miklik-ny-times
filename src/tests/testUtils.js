import { cleanup } from '@testing-library/react'

export function commonSetup() {
  beforeEach(() => {
    fetch.resetMocks()
  })

  // https://github.com/testing-library/react-testing-library/issues/281#issuecomment-480349256
  const originalError = console.error
  beforeAll(() => {
    console.error = (...args) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return
      }
      originalError.call(console, ...args)
    }
  })

  afterAll(() => {
    console.error = originalError
  })

  afterEach(cleanup)
}
