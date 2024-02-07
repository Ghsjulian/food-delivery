import {
    BrowserRouter as Router,
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";
import "./vendor/bootstrap-icons/bootstrap-icons.css";
import Protection from "./Protection/Protected";
import PrivateRoute from "./Protection/PrivateRoute";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AddCart from "./components/AddCart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Skills from "./components/Skills";
import ViewProduct from "./components/ViewProduct";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/view/product/:product_id"
                        element={<ViewProduct />}
                    />
                    <Route
                        path="/cart"
                        element={<PrivateRoute value={<AddCart />} />}
                    />
                </Route>
                {/*   Protected Routes   */}
                <Route
                    path="/login"
                    element={<Protection value={<Login />} />}
                />
                <Route
                    path="/signup"
                    element={<Protection value={<Signup />} />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;