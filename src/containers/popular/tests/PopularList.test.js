import React from 'react'
import { render, within, fireEvent } from '@testing-library/react'
import { commonSetup } from '../../../tests/testUtils'
import { fullResponse } from '../../../tests/apiFixtures'
import PopularList from '../PopularList'

describe('PopularList', () => {
  commonSetup()

  const first = fullResponse.results[0]
  const second = fullResponse.results[1]

  it('shows brief info for articles in list', async () => {
    fetch.mockResponseOnce(JSON.stringify(fullResponse))

    const { findByText, getByText } = render(<PopularList />)
    const titleEl = await findByText(first.title)
    // search other parts of ListItem
    const { queryByText } = within(titleEl.parentElement)
    expect(queryByText(first.byline)).toBeDefined()
    expect(queryByText(first.published_date)).toBeDefined()
    expect(queryByText(first.abstract)).toBeFalsy()
    // also second article is there
    getByText(second.title)
  })

  it('can go to detail and back', async () => {
    fetch.mockResponseOnce(JSON.stringify(fullResponse))

    const { findByText, queryByText, getByLabelText } = render(<PopularList />)
    const titleEl = await findByText(first.title)
    expect(queryByText(second.title)).toBeDefined()

    fireEvent.click(titleEl)

    await findByText(first.abstract)
    expect(queryByText(second.title)).toBeFalsy()

    fireEvent.click(getByLabelText('Back'))

    await findByText(second.title)
  })
})
