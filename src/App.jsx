import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./Review";
import ProfileView from "./ProfileView";
import Error from "./Error";
import TaskBoard from "./TaskBoard";


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<TaskBoard />} />
    <Route path="/review" element={<Review />}/>
    <Route path="/profile/:profileId" element={<ProfileView />}/>
    <Route path="*" element={<Error />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
