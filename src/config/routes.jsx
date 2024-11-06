import App from '../App.jsx';
import { Home } from '../routes/Home.jsx';
import { About } from '../routes/About.jsx';
import { ErrorPage } from '../routes/ErrorPage.jsx';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         { path: '/', element: <Home /> },
         { path: 'about', element: <About /> },
      ],
   },
]);
