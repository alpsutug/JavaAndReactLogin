import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hesap from "./Hesap";
import Login from "./Login";
import Bos from "./Bos";

const App = () => {
  return (
    <div className="App">
      <div>
        <header className="header">
          <h1>My React App</h1>
          <nav>
            <ul></ul>
          </nav>
        </header>

        <hr />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Bos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hesap" element={<Hesap />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div class="error-container">
                <h1>Oops! Bir Hata Oluştu.</h1>
                <p>Üzgünüz, isteğinizle ilgili bir hata oluştu.</p>
                <p>Lütfen sayfa yolunu kontrol ediniz...</p>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
