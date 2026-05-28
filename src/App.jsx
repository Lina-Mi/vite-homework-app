import { useState, createElement } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const year = new Date().getFullYear();

  return (
      createElement('section', { id: 'center' },
        createElement('div', { className: 'hero' },
          createElement('img', { src: heroImg, className: 'base', width: '170', height: '179', alt: '' }),
          createElement('img', { src: reactLogo, className: 'framework', alt: 'React logo' }),
          createElement('img', { src: viteLogo, className: 'vite', alt: 'Vite logo' })),
          createElement('div', null,
              createElement('h1', null, 'Get started'),
                createElement('p', null,'Edit ', createElement('code', null, 'src/App.jsx'),' and save to test ',
                createElement('code', null, 'HMR')
           )
        ),
        createElement('a', { className: 'App-link',
					href:'https://reactjs.org',
					target: 'target',
					rel: 'noopener noreferrer',
				}, 'Learn React'),
         createElement('button', {
          type: 'button',
          className: 'counter',
          onClick: () => setCount((count) => count + 1)
          }, 'Count is ', count),
          createElement('footer', null, year)
        )
    );
};

export default App;
