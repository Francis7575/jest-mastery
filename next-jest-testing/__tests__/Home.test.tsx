import {render} from '@testing-library/react'
import Home from '@/app/page'

it('should have Deploy text', () => {
  const { getByText } = render(<Home />); 
  const myElement = getByText(/deploy/i);
  expect(myElement).toBeInTheDocument();
})

