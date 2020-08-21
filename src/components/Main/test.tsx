import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /retro mission/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/a board to make retrospective meetings/i))
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      background:
        'linear-gradient(90deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)'
    })
  })
})
