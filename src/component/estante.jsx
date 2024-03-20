import { Libros } from './libro'
export function Estanteria({ producto, update }) {
  return (
    <div className='estante'>
      <ul>
        {producto.map(value => {
          return (
            <li key={value.book.ISBN} onClick={update}>
              <Libros poster={value.book.cover} title={value.book.title} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
