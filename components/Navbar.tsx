
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, User, Database, Briefcase, GraduationCap, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Cpu },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Database },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <span className="text-cyan-400 font-bold text-xl">H</span>
            </div>
            <span className="hidden sm:block font-bold text-xl tracking-tighter">
              HASNA<span className="text-cyan-400">.EL-BACHA</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-1 bg-slate-900/40 backdrop-blur-lg border border-slate-800 p-1 rounded-full shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-400/10 hover:text-cyan-400 transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 md:hidden bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl font-bold hover:text-cyan-400 transition-colors"
              >
                <item.icon className="w-8 h-8 text-cyan-400" />
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
