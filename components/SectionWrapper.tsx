
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  id: string;
}

const SectionWrapper: React.FC<Props> = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
