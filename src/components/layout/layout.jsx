import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import "./layout.css";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
