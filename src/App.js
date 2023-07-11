import { Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Article";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="articles" element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;
