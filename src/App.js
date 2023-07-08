import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import TopUp from "./pages/TopUp";
import Children from "./pages/Children";
import SeatSelector from "./pages/Seat";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
