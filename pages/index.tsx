import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProgramCard from '../components/ProgramCard';
import TestimonialCard from '../components/TestimonialCard';
import { programs } from '../data/programs';
import { testimonials } from '../data/testimonials';

export default function Home() {
  const featuredPrograms = programs.filter(program => program.featured);
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);
  const [isHovered, setIsHovered] = useState(false);
  const constraintsRef = useRef(null);
  
  // Animation values for parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Typewriter effect for hero text
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Real Work Experience",
    "Internship Opportunities",
    "Career Transformation"
  ];

  useEffect(() => {
    if (currentIndex < texts.length) {
      const timeout = setTimeout(() => {
        setCurrentText(texts[currentIndex].substring(0, currentText.length + 1));
        
        if (currentText.length === texts[currentIndex].length) {
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCurrentText('');
          }, 2000);
        }
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, texts]);

  return (
    <Layout>
      <Head>
        <title>ImpanoSoft - Real Work Experience and Internship Opportunities</title>
        <meta name="description" content="ImpanoSoft provides real work experience and internship opportunities for aspiring professionals" />
      </Head>
      
      {/* Hero Section with Parallax Effect */}
      <section 
        className="hero"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        ref={constraintsRef}
      >
        <div className="hero-background">
          <div className="floating-shapes">
            <motion.div 
              className="shape shape-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="shape shape-2"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="shape shape-3"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div 
              className="shape shape-4"
              animate={{
                y: [0, 18, 0],
                rotate: [0, -7, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="pre-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Welcome to ImpanoSoft
              </motion.span>
              
              <h1>
                <span className="gradient-text">Transform Your Career</span>
                <br />
                <span className="typewriter">{currentText}</span>
                <span className="cursor">|</span>
              </h1>
              
              <p>Bridge the gap between education and industry with our immersive internship programs designed to give you real-world experience and accelerate your career.</p>
              
              <div className="hero-buttons">
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button primary"
                >
                  Explore Programs
                </motion.button>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="cta-button secondary">
                    <span>Watch Video</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="floating-cards">
                <motion.div 
                  className="card card-1"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="card-content">
                    <span className="card-icon">💼</span>
                    <h4>Real Projects</h4>
                    <p>Work on actual client projects</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="card card-2"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="card-content">
                    <span className="card-icon">👥</span>
                    <h4>Mentorship</h4>
                    <p>Guidance from industry experts</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="card card-3"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <div className="card-content">
                    <span className="card-icon">🚀</span>
                    <h4>Career Growth</h4>
                    <p>Boost your employability</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="main-visual">
                <div className="visual-element"></div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <div className="arrow"></div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="container">
          <motion.h3 
            className="partners-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by leading companies and universities
          </motion.h3>
          
          <motion.div 
            className="partners-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.1 }}
            >
              <div className="logo-placeholder">TechCorp</div>
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.1 }}
            >
              <div className="logo-placeholder">InnoSoft</div>
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.1 }}
            >
              <div className="logo-placeholder">DataFlow</div>
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.1 }}
            >
              <div className="logo-placeholder">WebSolutions</div>
            </motion.div>
            <motion.div 
              className="partner-logo"
              whileHover={{ scale: 1.1 }}
            >
              <div className="logo-placeholder">CloudTech</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-background">
            <div className="stats-overlay"></div>
          </div>
          
          <motion.h2 
            className="stats-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Impact in Numbers
          </motion.h2>
          
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">👥</div>
              <motion.h3 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                500+
              </motion.h3>
              <p>Students Placed</p>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">📊</div>
              <motion.h3 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                95%
              </motion.h3>
              <p>Placement Rate</p>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">🤝</div>
              <motion.h3 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                50+
              </motion.h3>
              <p>Partner Companies</p>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">🎓</div>
              <motion.h3 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                12
              </motion.h3>
              <p>Programs Available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Featured Programs</h2>
            <p>Explore our most popular internship programs designed to give you real-world experience</p>
          </motion.div>
          
          <div className="programs-grid">
            {featuredPrograms.map((program, index) => (
              <ProgramCard 
                key={program.id} 
                program={program} 
                index={index} 
              />
            ))}
          </div>
          
          <motion.div 
            className="view-all-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/programs" className="view-all-button">
              View All Programs
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>How It Works</h2>
            <p>Our simple process to get you started on your career journey</p>
          </motion.div>
          
          <div className="process-container">
            <div className="process-line"></div>
            
            <div className="process-steps">
              <motion.div 
                className="process-step"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Apply Online</h3>
                  <p>Submit your application through our portal. Tell us about your skills, interests, and career goals.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="process-step"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Skill Assessment</h3>
                  <p>Complete our skill assessment to help us match you with the right opportunity.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="process-step"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Get Matched</h3>
                  <p>We'll match you with a company based on your skills, interests, and career aspirations.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="process-step"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Start Your Journey</h3>
                  <p>Begin your internship, gain valuable experience, and build your professional network.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Success Stories</h2>
            <p>Hear from our alumni who have transformed their careers through our programs</p>
          </motion.div>
          
          <div className="testimonials-grid">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to Launch Your Career?</h2>
            <p>Join hundreds of students who have accelerated their careers through our programs</p>
            
            <div className="cta-buttons">
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="cta-button primary"
              >
                Apply Now
              </motion.button>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="cta-button secondary"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}