import { commonSetup } from '../../../tests/testUtils'
import { fullResponse, faultResponse } from '../../../tests/apiFixtures'
import { getPopularArticles } from '../popularApi'

describe('getPopularArticles', () => {
  commonSetup()

  async function expectMessage(expMsg) {
    let error = false
    try {
      await getPopularArticles()
    } catch (e) {
      error = true
      expect(e.message).toBe(expMsg)
    }

    expect(error).toBe(true)
  }

  it('properly extract response from API', async () => {
    fetch.mockResponseOnce(JSON.stringify(fullResponse))

    const response = await getPopularArticles()

    expect(response[0]).toMatchSnapshot()
  })

  it('extracts error from fault error', async () => {
    fetch.mockResponseOnce(JSON.stringify(faultResponse))
    await expectMessage('API failed')
  })

  it('fallback to standard error message for other errors', async () => {
    fetch.mockResponseOnce('{}')
    await expectMessage('Request failed')
  })

})
