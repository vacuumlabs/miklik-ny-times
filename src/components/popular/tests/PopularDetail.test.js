import React from 'react'
import { render } from '@testing-library/react'
import PopularDetail from '../PopularDetail'
import { firstArticle } from '../../../tests/articleFixture'
import { commonSetup } from '../../../tests/testUtils'

describe('PopularDetail', () => {
  commonSetup()

  it('prints detail', () => {
    const { container } = render(
      <PopularDetail item={firstArticle} onClose={() => 0} />
    )
    expect(container).toMatchSnapshot()
  })
})
