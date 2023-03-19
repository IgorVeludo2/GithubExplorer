//import { render } from 'react-dom' JEITO ANTIGO
import { createRoot } from 'react-dom/client' // JEITO NOVO
import { App } from './App'

import { ReactHTMLElement } from 'react';

/**
 * O método render é responsável por injetar toda a aplicação react dentro da
 * div root do intex.html que está dentro da pasta public. Fazendo assim a aplicação ser renderizada
 */

// JEITO ANTIGO
//  render(<App />, document.getElementById('root'))

// JEITO NOVO

const container: HTMLElement | null = document.getElementById('root');

if(container) {
  const root = createRoot(container)
  root.render(<App />);
}

