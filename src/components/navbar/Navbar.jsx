import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Gautam
        </motion.span>
        <div className="social">
                <a href="https://www.linkedin.com/in/gautam-adhikari/"><img src="./linkedin.png" alt="" /></a>
                <a href="https://github.com/Gautam-Adhikari"><img src="./github.png" alt="" /></a>
                <a href="https://leetcode.com/GAUTAMAK47/"><img src="./leetcode.png" alt="" /></a>
                <a href="https://www.hackerrank.com/profile/CSB_21B0121101"><img src="./hackerrank.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;