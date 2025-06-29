import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FaqPage from "./pages/FaqPage";
import GuideDetail from './pages/GuideDetail';
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/guide/:name" element={<GuideDetail />} />
    </Routes>
  );
}

export default App;
