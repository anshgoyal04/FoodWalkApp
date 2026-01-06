import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import BecomeGuidePage from "./pages/BecomeGuidePage";
import FaqPage from "./pages/FaqPage";
import GuideDetail from './pages/GuideDetail';
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/guide/:name" element={<GuideDetail />} />
      <Route path="/become-guide" element={<BecomeGuidePage />} />
    </Routes>
  );
}

export default App;
