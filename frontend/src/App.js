import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomeScreen from "./pages/HomePage";
import About from "./pages/AboutPage";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Cart from "./pages/CartPage";
import BookScreen from "./pages/BookPage";
import { Container} from 'react-bootstrap';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div className="d-flex flex-column site-container">
    <header>
        <NavigationBar/>
        </header>
        <main>
      <Container>
        <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/book/:slug" element={<BookScreen/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Container>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
    </Router>
  );
}

export default App;
