import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/Store.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";


const Root = () => (
  <div>
    <h1>Redux Practice Project</h1>
    <Outlet />  {/* This renders the child routes */}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
       
      },
      {
       
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
