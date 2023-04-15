import Header from "./components/Header";
import Home from "./pages/Home";
import EducationPage from "./pages/EducationPage";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<EducationPage />} />
        <Route
          path="*"
          element={<h1 style={{ margin: 80 }}>404 Not Found</h1>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
