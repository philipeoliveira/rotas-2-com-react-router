import { Outlet, Link } from 'react-router-dom';

export default function App() {
   return (
      <div>
         <nav>
            <ul>
               <li>
                  <Link to={'/'}>
                     <button type='button' aria-label='Link para página Inicial'>
                        Página Inicial
                     </button>
                  </Link>
               </li>
               <li>
                  <Link to={'/about'}>
                     <button type='button' aria-label='Link para página About'>
                        Sobre o site
                     </button>
                  </Link>
               </li>
            </ul>
         </nav>
         <main>
            <Outlet />
         </main>
         <footer>
            <p>
               Desenvolvido por{' '}
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
               >
                  Philipe Oliveira
               </a>
            </p>
         </footer>
      </div>
   );
}
