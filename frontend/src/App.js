import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import BookPage from "./pages/BookPage";
import { Container } from 'react-bootstrap';
import Footer from "./components/Footer";
import CheckoutPage from "./components/CheckoutSteps";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <ToastContainer position='bottom-right' transition={Zoom} hideProgressBar autoClose={2000} limit={1} />
        <header>
          <NavigationBar />
        </header>
        <main>
          <Container className="my-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/book/:slug" element={<BookPage />} />
              {/* <Route path="/about" element={<AboutPage />} /> */}
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/placeorder" element={<PlaceOrderPage />} />
              <Route path="/orderdetails" element={<OrderDetailsPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
