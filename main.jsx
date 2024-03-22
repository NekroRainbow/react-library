import { createRoot } from 'react-dom/client'
import './src/estilos/buscador.css'

import { Buscador } from './src/component/buscador'
import { FilterProvider } from './src/component/filtros'
import { CartProvider } from './src/component/carritoProveedor'

const root = createRoot(document.getElementById('app'))

root.render(
  <>
    <FilterProvider>
      <CartProvider>
        <Buscador />
      </CartProvider>
    </FilterProvider>
  </>
)
