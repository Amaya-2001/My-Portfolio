import { Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Article";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Research from "./components/Research";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Article />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/research" element={<Research />}></Route>
      </Routes>
    </div>
  );
}

export default App;
