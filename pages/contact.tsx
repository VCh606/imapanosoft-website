import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - ImpanoSoft</title>
        <meta name="description" content="Get in touch with ImpanoSoft" />
      </Head>
      
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Get In Touch</h2>
              <p>Have questions about our programs or want to partner with us? Reach out to our team. We're here to help you navigate your career journey.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>info@impanosoft.com</p>
                  <p>support@impanosoft.com</p>
                </div>
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
                <div className="contact-item">
                  <h3>Address</h3>
                  <p>123 Innovation Drive</p>
                  <p>Tech City, TC 12345</p>
                </div>
                <div className="contact-item">
                  <h3>Hours</h3>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Instagram</a>
                </div>
              </div> */}
            </motion.div>

            <motion.div 
              className="contact-form-container"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Send us a Message</h2>
              {isSubmitted && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! We'll get back to you within 24 hours.
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category">Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="technical">Technical Support</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="submit-button"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="faq-grid">
            <motion.div 
              className="faq-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>How do I apply for an internship?</h3>
              <p>You can apply directly through our website by browsing available programs and submitting an application. Our team will review your application and contact you within 5-7 business days.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Are the internships paid?</h3>
              <p>Most of our internships are paid positions. The compensation varies based on the role, company, and location. Details are provided in each program description.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Can international students apply?</h3>
              <p>Yes, we welcome applications from international students. However, visa requirements and work authorization vary by country, so please check the specific requirements for each program.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>How long do internships typically last?</h3>
              <p>Internship durations vary from 3 to 12 months, depending on the program and company. Most summer internships last 10-12 weeks, while co-op programs may be longer.</p>
            </motion.div>
          </div>
          <motion.div 
            className="faq-cta"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>Didn't find the answer you're looking for? <a href="#">View our full FAQ page</a> or contact us directly.</p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Visit Our Office</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>ImpanoSoft Headquarters</h3>
              <p>123 Innovation Drive, Tech City, TC 12345</p>
              <p>We're available for in-person consultations by appointment.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}