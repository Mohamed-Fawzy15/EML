import "./App.css";
import AboutUs from "./component/About Us/AboutUs";
import HomePage from "./component/Home/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
