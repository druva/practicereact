// src/App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";


// Home Page Component
const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() =>
                 navigate("/contact")}>Go to Contact</button>
        </div>
    );
};

// Login Page Component 
const Login = () => (
    <div>
        <div>
            <div>
                <h2>Login</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <div>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    </div>
);

// Login Page Component 
const SignUp = () => (
    <div>
        <div>
            <div>
                <h2>Sign Up</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <input
                        type="confirmpassword"
                        placeholder="confirm Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
);

// About Page Component 
const About = () => (
    <div>
        <h2>About Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to="team">Our Team</Link>
                </li>
                <li>
                    <Link to="company">Our Company</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
);

// Components for other pages
const Contact = () => <h2>Contact Page</h2>;
const Team = () => <h2>Team Page</h2>;
const Company = () => <h2>Company Page</h2>;
const Users = () => <h2>Users Page</h2>;
const Profile = () => <h2>Profile Page</h2>;
const Orders = () => <h2>Orders Page</h2>;
const Checout = () => <h2>Checkout Page</h2>;
const Staff = () => <h2>Staff Page</h2>;
const Reviews = () => <h2>Reviews Page</h2>;
const Settings = () => <h2>Settings Page</h2>;

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                        <Link to="/staff">Staff</Link>
                    </li>
                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                </ul>
            </nav>
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/checkout" element={<Checout />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="company" element={<Company />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
