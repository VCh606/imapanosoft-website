import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-logo"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          ImpanoSoft
        </motion.div>
        <p>Real Work Experience and Internship Opportunities</p>
        <div className="social-links">
          <motion.a whileHover={{ scale: 1.2 }} href="#">Facebook</motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#">Twitter</motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#">LinkedIn</motion.a>
        </div>
        <p>&copy; {new Date().getFullYear()} ImpanoSoft. All rights reserved.</p>
      </div>
    </footer>
  );
}