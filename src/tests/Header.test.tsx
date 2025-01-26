import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/ui/Header/Header'
import { BrowserRouter } from 'react-router-dom'

describe('Header component', () => {
  it('render header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    expect(screen.getAllByRole('link').length).toBe(5)
    expect(screen.getByText(/online bank/i)).toBeInTheDocument()
  })
  it('header navigation', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const cardPage = screen.getByRole('link', { name: 'Credit card' })
    fireEvent.click(cardPage)
    expect(window.location.pathname).toBe('/loan')
  })
})
