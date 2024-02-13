import "./App.css";
import Unity from "./pages/Unity";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RealStream from "./components/RealStream";
import Details from "./pages/Details";
import CourseDetails from "./pages/Teacher/CourseDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/streaming" element={<Unity />} />
          <Route path="/rs" element={<RealStream />} />
          {/* Recontruct */}
          <Route path="/details/:role" element={<Details />} />
          <Route path="/newCourse" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
