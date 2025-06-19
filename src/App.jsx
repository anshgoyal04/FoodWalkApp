import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuideDetail from './pages/GuideDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guide/:name" element={<GuideDetail />} />
    </Routes>
  );
}

export default App;
