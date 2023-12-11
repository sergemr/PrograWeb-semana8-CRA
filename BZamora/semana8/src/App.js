import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
