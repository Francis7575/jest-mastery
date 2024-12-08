import {render} from '@testing-library/react'
import Home from '@/app/page'

it('should have Deploy text', () => {
  const { getByText } = render(<Home />); 
  const myElement = getByText(/deploy/i);
  expect(myElement).toBeInTheDocument();
})

it('should display the Next.js logo', () => {
  const { getByAltText } = render(<Home />);
  const logo = getByAltText(/next.js logo/i);
  expect(logo).toBeInTheDocument();
});

it('should have a link to Vercel deployment', () => {
  const { getByRole } = render(<Home />);
  const deployLink = getByRole('link', { name: /deploy now/i });
  expect(deployLink).toHaveAttribute(
    'href',
    'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
  );
});

it('should display the "Read our docs" link', () => {
  const { getByText } = render(<Home />);
  const docsLink = getByText(/read our docs/i);
  expect(docsLink).toBeInTheDocument();
  expect(docsLink).toHaveAttribute(
    'href',
    'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
  );
});