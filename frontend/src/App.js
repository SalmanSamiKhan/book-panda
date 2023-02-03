import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import BookScreen from "./screens/BookScreen";
function App() {
  return (
    <Router>
    <div>
      <header>
        <Navbar />
      </header>
      <main>
      <div className="container">
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/book/:slug" element={<BookScreen/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        </Routes>
        </div>
      </main>
      <footer>

      </footer>
    </div>
    </Router>
  );
}

export default App;
