import { render } from '@testing-library/react';
import React from 'react';
import { commonSetup } from '../../../tests/testUtils';
import AppHeader from '../AppHeader';

describe('AppHeader', () => {
  commonSetup()

  it('allows to login is there is not user', () => {
    const { getByText } = render(<AppHeader />)

    expect(getByText('Login')).toBeDefined()
  })

  it('allows more actions if user is logged in', () => {
    const { queryByText, getByLabelText } = render(<AppHeader currentUser={{ name: 'test' }} />)

    expect(queryByText('Login')).toBeFalsy()
    expect(getByLabelText('More actions')).toBeDefined();
  })
})
