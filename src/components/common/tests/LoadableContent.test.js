import { render } from '@testing-library/react'
import React from 'react'
import { commonSetup } from '../../../tests/testUtils'
import LoadableContent from '../LoadableContent'
import RequestStatus from '../../../app/common/RequestStatus'

describe('LoadableContent', () => {
  commonSetup()

  it('shows spinner if request is pending', () => {
    const { getByRole, queryByText } = render(
      <LoadableContent status={RequestStatus.PENDING}>Content</LoadableContent>
    )

    expect(queryByText('Content')).toBeFalsy()
    expect(getByRole('progressbar')).toBeDefined()
  })

  it('shows error if request failed', () => {
    const { queryByText } = render(
      <LoadableContent status={RequestStatus.ERROR} error={new Error('Wrong')}>
        Content
      </LoadableContent>
    )

    expect(queryByText('Content')).toBeFalsy()
    expect(queryByText('Wrong')).toBeDefined()
  })

  it('shows content once request is done', () => {
    const { getByText } = render(
      <LoadableContent status={RequestStatus.OK}>
        Content
      </LoadableContent>
    )

    expect(getByText('Content')).toBeDefined()
  })

})
