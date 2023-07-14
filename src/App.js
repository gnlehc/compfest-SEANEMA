import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import TopUp from "./pages/TopUp";
import Children from "./pages/Children";
import SeatSelector from "./pages/Seat";
import Register from "./components/Register";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie/:id" element={<MovieDetail />} />
          <Route path="/TopUp" element={<TopUp />} />
          <Route path="/Children" element={<Children />} />
          <Route path="/Book" element={<SeatSelector />} />
          <Route path="/Register" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
