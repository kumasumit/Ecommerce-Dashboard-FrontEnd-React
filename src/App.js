import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* all routes within a common route defined on Nav will be defined here */}
        <Routes>
          {/* all private routes will be wrapped around Private Component Wrapper */}
          <Route element={<PrivateComponent/>}>
            {/* all the components that require sign-in/login to access is protected under Private Component */}
            <Route path="/" element={<h1>Product Component</h1>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1> Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>

          {/* here private components are closed */}
          {/* both signup and login are public components */}

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
      {/* since we wont be doing any routing for footer, hence it will be outside BrowserRouter */}
      <Footer/>
    </div>
  );
}

export default App;
