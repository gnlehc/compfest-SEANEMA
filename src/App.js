import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import TopUp from "./pages/TopUp";
import Children from "./pages/Children";
import Register from "./components/Register";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Middleware from "./components/middleware";
import Seat from "./pages/Seat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie/:id" element={<MovieDetail />} />
          <Route path="/TopUp" element={<Middleware><TopUp /></Middleware>} />
          <Route path="/Children" element={<Children />} />
          <Route path="/Register" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Book" element={<Seat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
