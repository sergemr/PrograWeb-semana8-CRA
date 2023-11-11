import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home";
import List from "./components/list/list";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
