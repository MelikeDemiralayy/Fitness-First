import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import JoinPage from "./pages/joinPage";
import VisitUsPage from "./pages/visit";
import Layout from "./components/layout/layout";
import ClassPage from "./pages/classPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/visit" element={<VisitUsPage />} />
          <Route path="/classes" element={<ClassPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

