import React from 'react'
import { render } from '@testing-library/react'
import PopularListItem from '../PopularListItem'
import { firstArticle } from '../../../tests/articleFixture'
import { commonSetup } from '../../../tests/testUtils'

describe('PopularListItem', () => {
  commonSetup()

  it('prints one list item', () => {
    const { container } = render(
      <PopularListItem item={firstArticle} onSelect={() => 0} />
    )
    expect(container).toMatchSnapshot()
  })
})
