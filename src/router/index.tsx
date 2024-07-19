import { createBrowserRouter, RouteObject } from 'react-router-dom';

import ErrorPage from '../pages/error/ErrorPage';
import App from '../App';
import Overview from '../pages/overview/Overview';
import Contacts from '../pages/contacts/Contacts';
import Favorites from '../pages/favorites/Favorites';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index:true,
        element:<Overview/>,
      },
      {
        path:'contacts',
        element:<Contacts/>
      },
      {
        path:'favorites',
        element:<Favorites/>
      }
    ]
    
  },
  {
    path:'*',
    element: <ErrorPage />
  }
];

export const router = createBrowserRouter(routes);
  