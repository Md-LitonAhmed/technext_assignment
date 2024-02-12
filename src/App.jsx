import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./Review";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/review" element={<Review />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
