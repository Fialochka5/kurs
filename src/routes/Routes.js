import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../index"; // ✅ Импорт главной страницы
import NotFound from "../js/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
