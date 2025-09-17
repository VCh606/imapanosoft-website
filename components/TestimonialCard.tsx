import { motion } from 'framer-motion';
import { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div 
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="testimonial-content">
        <p className="quote">"{testimonial.quote}"</p>
        <div className="testimonial-author">
          <div className="author-image">
            <div className="image-placeholder"></div>
          </div>
          <div className="author-details">
            <h4>{testimonial.name}</h4>
            <p>{testimonial.position} at {testimonial.company}</p>
            <p className="program">Completed: {testimonial.program}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}