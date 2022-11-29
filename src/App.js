import Home from "./pages/home";
import { Routes, Route, HashRouter } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
