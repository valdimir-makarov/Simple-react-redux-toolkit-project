import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/Store.jsx";
import FilteredProduct from "./features/FilteredProduct.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { ProductList } from "./components/ProductList.jsx";
import CartSlice from "./features/CartSlice.jsx";
import LoginPage from "./components/LoginPage.jsx";

const Root = () => (
  <div>
    <App></App>
    <Outlet /> {/* This renders the child routes */}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/filteredProducts", element: <FilteredProduct /> },
      { path: "/productList", element: <ProductList></ProductList> },

      {
        path: "cartSlice",
        element: <CartSlice></CartSlice>,
      },

      {
        path:'login',
        element:<LoginPage></LoginPage>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
