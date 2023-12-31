import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
// import 'bootstrap/dist/css/bootstrap.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PrivateRoutes from "./components/PrivateRoutes";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetail from "./screens/OrderDetail";
import UserProfile from "./screens/UserProfile";
import ProductEditScreen from "./screens/admin/ProductEditScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";
import UserList from "./screens/admin/UserList";
// admin //////////////////

import AdminRoutes from "./components/AdminRoute";
import OrderList from "./screens/admin/OrderList";
import ProductsList from "./screens/admin/ProductsList";
import Gallery from "./components/Gallary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/page/:pageNumber" element={<HomeScreen />} />
      <Route path="/search/:keyword" element={<HomeScreen />} />
      <Route path="/search/gallery/:pageNumber/fashion" element={<Gallery />} />
      <Route path="/search/category/:category" element={<HomeScreen />} />
      <Route path="/search/" element={<HomeScreen />} />
      <Route path="/search/category/:categoryParam/:filterName" element={<HomeScreen />} />
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<HomeScreen />}
      />
      <Route path="/product/:id" element={<ProductsScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="" element={<PrivateRoutes />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/orderproduct" element={<OrderScreen />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/profile" element={<UserProfile />} />
      </Route>
      <Route path="" element={<AdminRoutes />}>
        <Route path="/admin/orderList" element={<OrderList />} />
        <Route path="/admin/productList" element={<ProductsList />} />
        <Route
          path="/admin/productList/:pageNumber"
          element={<ProductsList />}
        />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
        <Route path="/admin/userList" element={<UserList />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
