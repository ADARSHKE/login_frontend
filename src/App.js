import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const url = isLogin
      ? "https://login-3-xo1m.onrender.com/api/auth/login"
      : "https://login-3-xo1m.onrender.com/api/auth/register";

    try {
      const res = await axios.post(url, { email, password });

      if (isLogin) {
        alert("Login Successful");
        localStorage.setItem("token", res.data.token);
        navigate("/welcome"); // 🔥 redirect
      } else {
        alert("Registered Successfully");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>
        {isLogin ? "Login" : "Register"}
      </button>

      <p
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>
    </div>
  );
}

function Welcome() {
  return (
    <div className="container">
      {/* NavBar */}
      <div className="navMain">
        <nav className="navBar">
          <h1 className="navHead">Your Logo</h1>

          <div className="navOptions">
            <ul className="optionsList">
              <ul className="optionsList">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/welcome">Reservations</Link></li>
  <li><Link to="/welcome">Menu</Link></li>
  <li><Link to="/welcome">Pages</Link></li>
  <li><Link to="/welcome">Blog</Link></li>
  <li><Link to="/welcome">Shop</Link></li>
  <li><Link to="/welcome">Elements</Link></li>
</ul>
            </ul>
          </div>
          

          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-btn">🔍</button>
          </div>

          <div className="cartIcon">
            <p>Cart 🛒</p>
          </div>
        </nav>

        <div className="mainHead">
          <h1 className="heading">FOOD GALLERY</h1>
          <p className="mainPara">
            Sed tincidunt pretium ligula nan varius crat
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid-container">
        {[
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
          "https://images.unsplash.com/photo-1551218808-94e220e084d2",
          "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
          "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
          "https://i.pinimg.com/1200x/13/ab/d3/13abd32a71432a178a6b76a9c08ddbe2.jpg",
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
          "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
          "https://i.pinimg.com/1200x/d8/26/bd/d826bde49888d593d7210a43986c1853.jpg",
          "https://i.pinimg.com/1200x/00/a2/c7/00a2c7b2ff5cc3b9a384fdc4d5727c50.jpg",
          "https://i.pinimg.com/1200x/85/d3/8a/85d38ada75eaa9e29ab807eab4d5fd98.jpg"

        ].map((img, index) => (
          <div className="grid-item" key={index}>
            <img src={img} alt={`Food ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mainFooter">
        <div>
          <h1>Your Logo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Minima, vitae id numquam blanditiis molestiae nostrum.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;