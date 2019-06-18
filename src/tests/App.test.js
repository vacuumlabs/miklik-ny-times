import React from 'react'
import { render } from '@testing-library/react';
import App from '../App'
import { fullResponse } from './apiFixtures'
import { commonSetup } from './testUtils'

describe('App', () => {
  commonSetup()

  it('list title of returned response', async () => {
    fetch.mockResponseOnce(JSON.stringify(fullResponse))
    
    const { findByText } = render(<App />)
    return findByText(fullResponse.results[0].title)
  })

  it('shows error if API fails', async () => {
    const error = new Error('API failed')
    fetch.mockRejectOnce(error)
    
    const { findByText } = render(<App />)
    return findByText(`${error}`)
  })

})
