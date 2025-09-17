import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import { teamMembers } from '../data/team';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - ImpanoSoft</title>
        <meta name="description" content="Learn about ImpanoSoft and our mission" />
      </Head>
      
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1>About ImpanoSoft</h1>
          <p>Bridging the gap between education and industry</p>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <motion.div 
              className="story-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2>Our Story</h2>
              <p>ImpanoSoft was founded in 2018 with a vision to revolutionize how students gain real-world experience. Our name "Impano" means "to give" in Kinyarwanda, reflecting our commitment to giving opportunities to aspiring professionals.</p>
              <p>We noticed a significant gap between academic learning and industry requirements. Many graduates struggled to find employment because they lacked practical experience. ImpanoSoft was created to solve this problem by connecting students with meaningful internship opportunities.</p>
              <p>Today, we've grown into a platform that serves thousands of students across multiple countries, partnering with both startups and established corporations to provide diverse opportunities.</p>
            </motion.div>
            <motion.div 
              className="story-image"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="image-placeholder"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <motion.div 
              className="mv-card mission"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Our Mission</h3>
              <p>To empower the next generation of professionals by providing real-world experience, mentorship, and career opportunities that bridge the gap between academic learning and industry requirements.</p>
            </motion.div>
            <motion.div 
              className="mv-card vision"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Our Vision</h3>
              <p>To create a world where every student has access to meaningful work experience, regardless of their background, enabling them to launch successful careers and contribute to economic growth.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of working together with educational institutions, companies, and students to create meaningful opportunities.</p>
            </motion.div>
            <motion.div 
              className="value-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="value-icon">🌍</div>
              <h3>Inclusion</h3>
              <p>We're committed to creating opportunities for students from diverse backgrounds and ensuring equal access to our programs.</p>
            </motion.div>
            <motion.div 
              className="value-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We continuously evolve our programs and platform to meet the changing needs of the job market and our students.</p>
            </motion.div>
            <motion.div 
              className="value-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="value-icon">💡</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from matching students with opportunities to supporting them throughout their journey.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="section-description"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Passionate professionals dedicated to transforming career pathways
          </motion.p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="team-member"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* <div className="member-image">
                  <div className="image-placeholder"></div>
                </div> */}
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
                <div className="social-links">
                  {member.linkedin && <a href={member.linkedin}>LinkedIn</a>}
                  {/* {member.twitter && <a href={member.twitter}>Twitter</a>} */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Partners
          </motion.h2>
          <motion.p 
            className="section-description"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We collaborate with leading companies and educational institutions
          </motion.p>
          <motion.div 
            className="partners-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="partner-logo">Company A</div>
            <div className="partner-logo">Company B</div>
            <div className="partner-logo">Company C</div>
            <div className="partner-logo">Company D</div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}