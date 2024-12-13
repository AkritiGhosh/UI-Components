import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SlideShowLayout from "./pages/SlideShowLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/component/:layoutId" Component={SlideShowLayout} />
      </Routes>
    </HashRouter>
  );
}

export default App;
