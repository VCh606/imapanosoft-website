import { motion } from 'framer-motion';
import Link from 'next/link';
import { Program } from '../data/programs';

interface ProgramCardProps {
  program: Program;
  index: number;
}

export default function ProgramCard({ program, index }: ProgramCardProps) {
  return (
    <motion.div 
      className="program-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="program-header">
        <h3>{program.title}</h3>
        <span className="program-type">{program.type}</span>
      </div>
      <p className="program-description">{program.description}</p>
      <div className="program-details">
        <div className="detail-item">
          <span className="detail-label">Duration:</span>
          <span>{program.duration}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Location:</span>
          <span>{program.location}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Category:</span>
          <span>{program.category}</span>
        </div>
      </div>
      <div className="skills-container">
        {program.skills.slice(0, 3).map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
        {program.skills.length > 3 && (
          <span className="skill-tag">+{program.skills.length - 3} more</span>
        )}
      </div>
      <Link href={`/programs/${program.id}`} className="program-link">
        Learn More
      </Link>
    </motion.div>
  );
}