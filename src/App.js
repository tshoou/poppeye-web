import Home from "./pages/home";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
