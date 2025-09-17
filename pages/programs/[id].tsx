import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { programs } from '../../data/programs';

export default function ProgramDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const program = programs.find(p => p.id === id);
  
  if (!program) {
    return (
      <Layout>
        <div className="container">
          <h1>Program not found</h1>
          <p>The program you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{program.title} - ImpanoSoft</title>
        <meta name="description" content={program.description} />
      </Head>
      
      {/* Hero Section */}
      <section className="program-hero">
        <div className="container">
          <motion.div 
            className="program-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="program-category">{program.category}</span>
            <h1>{program.title}</h1>
            <p>{program.description}</p>
            <div className="program-meta">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{program.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Type</span>
                <span className="meta-value">{program.type}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">{program.location}</span>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button primary"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="program-details">
        <div className="container">
          <div className="details-grid">
            <motion.div 
              className="details-content"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2>About This Program</h2>
              <p>Our {program.title} is designed to provide you with hands-on experience in a real-world setting. You'll work on meaningful projects, collaborate with experienced professionals, and develop the skills that employers are looking for.</p>
              
              <h3>What You'll Learn</h3>
              <ul>
                {program.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              
              <h3>Key Responsibilities</h3>
              <ul>
                {program.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="details-sidebar"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="sidebar-card">
                <h3>Program Benefits</h3>
                <ul>
                  {program.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="sidebar-card">
                <h3>Ready to Apply?</h3>
                <p>Submit your application today and take the first step toward launching your career.</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button primary"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="program-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <motion.div 
              className="faq-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>What are the eligibility requirements for this program?</h3>
              <p>Applicants should be currently enrolled in or recently graduated from a relevant degree program. Specific requirements vary by program, but generally include a strong academic record and demonstrated interest in the field.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Is this program paid?</h3>
              <p>Most of our internships are paid positions. The compensation varies based on the role, company, and location. Details are provided during the application process.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Can international students apply?</h3>
              <p>Yes, we welcome applications from international students. However, visa requirements and work authorization vary by country, so please check the specific requirements for this program.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>What is the application process?</h3>
              <p>The application process typically includes submitting an online application, completing a skills assessment, and participating in one or more interviews. The entire process usually takes 2-3 weeks.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="program-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to Start Your Journey?</h2>
            <p>Join hundreds of students who have launched their careers through our {program.title}</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button primary"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}