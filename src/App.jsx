import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css"; 
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; 
import Home from "./pages/home/home";
import JoinPage from "./pages/joinPage";
import VisitUsPage from "./pages/visit";
import Layout from "./components/layout/layout";
import ClassPage from "./pages/classPage";
import Blog from "./pages/blog";
import DetailCard from "./components/card/detailCard";
import SignInPage from "./pages/auth/signIn/SignInPage";
import SignUpPage from "./pages/auth/signUp/SignUpPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/visit" element={<VisitUsPage />} />
          <Route path="/classes" element={<ClassPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post-:id" element={<DetailCard />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </Router>
  );
};

export default App;
