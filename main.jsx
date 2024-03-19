import { createRoot } from 'react-dom/client'
import './src/estilos/buscador.css'
import { FilterProvider } from './src/component/filtros'
import { Buscador } from './src/component/buscador'

const root = createRoot(document.getElementById('app'))

root.render(
  <>
    <FilterProvider>
      <Buscador />
    </FilterProvider>
  </>
)
