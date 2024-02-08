import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
