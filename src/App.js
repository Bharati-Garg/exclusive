import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import ProductData from "./components/ProductData";
 import About from "./components/About";
 import LogIn from "./components/LogIn";
 import Home from "./components/Home";
 

 function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<LogIn />} />
         <Route path="/Home" element={<Home />} />
         <Route path="/product" element={<ProductData />} />
         <Route path="/about" element={<About />} />
       </Routes>
     </BrowserRouter>
   );
 }

export default App;
