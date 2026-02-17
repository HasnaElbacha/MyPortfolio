
import React ,{useState} from 'react';
import { motion } from 'framer-motion';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import SectionWrapper from './components/SectionWrapper';
import { portfolioData } from './data';
import { 
  ArrowRight, 
  Database, 
  Code, 
  Brain, 
  Layers, 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Terminal,
  Activity,
  Briefcase,
  Zap,
  Globe,
  Binary,
  Copy,
  Download,
  Send,
  ChevronLeft
} from 'lucide-react';
import { FiCopy } from 'react-icons/fi';

const App: React.FC = () => {
  // Group skills by their custom logic
  const skillsByCategory = {
    "Data Ecosystem": portfolioData.skills.filter(s => s.category === "Data Engineering" || s.category === "Visualization"),
    "AI / Intelligence": portfolioData.skills.filter(s => s.category === "AI / ML"),
    "DEV / Engineering": portfolioData.skills.filter(s => s.category === "Web Development" || s.category === "Programming" || s.category === "Cloud / DevOps")
  };
  const [copied, setCopied] = useState(false);

const handleCopy = (e: React.MouseEvent, text: string) => {
  e.preventDefault();
  e.stopPropagation();
  
  navigator.clipboard.writeText(text);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};
  const [currentExpPage, setCurrentExpPage] = useState(1);
  const expPerPage = 4;

  // Calcul des index
  const indexOfLastExp = currentExpPage * expPerPage;
  const indexOfFirstExp = indexOfLastExp - expPerPage;
  const currentExperiences = portfolioData.experience.slice(indexOfFirstExp, indexOfLastExp);
  const totalExpPages = Math.ceil(portfolioData.experience.length / expPerPage);

  const handleExpPageChange = (pageNumber: number) => {
    setCurrentExpPage(pageNumber);
    // Petit scroll fluide vers le début de la liste
    const expSection = document.getElementById('experience-start');
    if (expSection) expSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <div className="relative selection:bg-cyan-500 selection:text-slate-950">
      <Background3D />
      <Navbar />
      
      {/* Home Section */}
      <SectionWrapper id="home">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <h2 className="text-cyan-400 font-mono tracking-widest text-lg uppercase">Hello, World. I am</h2>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-glow">
                {portfolioData.name.split(' ')[0]} <br/>
                <span className="text-cyan-400">{portfolioData.name.split(' ').slice(1).join(' ')}</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {portfolioData.title}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="#projects" 
                className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all flex items-center gap-2 group cyber-glow"
              >
                Launch Projects <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
              href="/Hasna_El-Bacha_CV.pdf"
              download="Hasna_El_Bacha_CV.pdf"
              className="px-8 py-4 bg-slate-900 border border-cyan-500/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all flex items-center gap-2 group"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-bold rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                Contact Protocol
              </a>
            </motion.div>
          </div>

          {/* Profile Image with Cyber Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-dashed border-cyan-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="absolute inset-8 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900 group shadow-[0_0_30px_rgba(34,211,238,0.2)]">
  <img 
    src="/profile_logo.png" 
    alt="Hasna EL BACHA" 
    className="w-full h-full object-cover hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
      e.currentTarget.parentElement!.innerHTML = '<div class="text-cyan-500 text-6xl font-bold">H</div>';
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent pointer-events-none"></div>
</div>
            
            <div className="absolute -top-4 -right-4 bg-slate-900 border border-cyan-500/50 p-3 rounded-lg flex items-center gap-2 backdrop-blur-md ">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-cyan-400">ENGINEER_DETECTED</span>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-2xl">01.</span>
              Core Profile
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-cyan-500/30 pl-6">
              {portfolioData.summary}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.softSkills.map(skill => (
                <div key={skill} className="flex items-center gap-2 text-slate-400 font-mono text-sm hover:text-cyan-300 transition-colors cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Terminal className="w-48 h-48" />
               </div>
               <div className="font-mono text-sm space-y-4 text-cyan-400/80">
                 <p className="flex gap-2"><span className="text-blue-500">$</span> hasna.location = <span className="text-slate-200">"{portfolioData.contact.location}"</span>;</p>
                 <p className="flex gap-2"><span className="text-blue-500">$</span> hasna.specialization = <span className="text-slate-200">["Full-Stack Dev", "Data", "AI"]</span>;</p>
                 <p className="flex gap-2"><span className="text-blue-500">$</span> hasna.isInnovating = <span className="text-slate-200">true</span>;</p>
                 <div className="pt-4 space-y-2">
                   {portfolioData.languages.map(lang => (
                     <p key={lang.name} className="flex gap-2"><span className="text-blue-500">$</span> lang.{lang.name.toLowerCase()} = <span className="text-slate-200">"{lang.level}"</span>;</p>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold inline-flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-2xl">02.</span>
              Technical Architecture
            </h2>
            <p className="text-slate-500 font-mono text-sm">Mapping cross-functional expertise across the stack</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <motion.div 
                key={category}
                whileHover={{ y: -5 }}
                className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                    {category.includes('Data') ? <Database className="w-6 h-6" /> : category.includes('AI') ? <Brain className="w-6 h-6" /> : <Code className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-tighter">{category}</h3>
                </div>
                <div className="space-y-4">
                  {skills.map(skill => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span>{skill.name}</span>
                      </div>
                      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          className="h-full bg-cyan-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <span className="text-cyan-400 font-mono text-2xl">03.</span>
            Professional Nodes
          </h2>

          {/* <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.experience.map((exp) => (
              <motion.div
                key={exp.id}
                className="relative p-[1px] rounded-3xl bg-gradient-to-b from-slate-700 to-transparent group overflow-hidden"
              >
                <div className="relative bg-slate-950 p-8 rounded-[23px] h-full flex flex-col border border-white/5">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shadow-inner">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500">
                      {exp.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors mb-1">{exp.title}</h3>
                  <p className="text-cyan-500/70 text-sm font-mono mb-6 tracking-wide uppercase">{exp.company}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.techStack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}
          {/* Ancre pour le scroll automatique lors du changement de page */}
          <div id="experience-start"></div>

          <div className="grid md:grid-cols-2 gap-8 min-h-[400px]">
            {currentExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative p-[1px] rounded-3xl bg-gradient-to-b from-slate-700 to-transparent group overflow-hidden"
              >
                <div className="relative bg-slate-950 p-8 rounded-[23px] h-full flex flex-col border border-white/5">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shadow-inner">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500">
                      {exp.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors mb-1">{exp.title}</h3>
                  <p className="text-cyan-500/70 text-sm font-mono mb-6 tracking-wide uppercase">{exp.company}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.techStack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- CONTROLES DE PAGINATION EXPERIENCE --- */}
          {totalExpPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8 pt-4">
              {/* Bouton Précédent */}
              <button
                onClick={() => handleExpPageChange(currentExpPage - 1)}
                disabled={currentExpPage === 1}
                className={`p-3 rounded-xl border transition-all ${
                  currentExpPage === 1
                    ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Numéros de page */}
              <div className="flex gap-2">
                {Array.from({ length: totalExpPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => handleExpPageChange(number)}
                    className={`w-10 h-10 rounded-xl font-mono text-sm font-bold border transition-all ${
                      currentExpPage === number
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                        : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:border-cyan-500/30 hover:text-cyan-400'
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>

              {/* Bouton Suivant */}
              <button
                onClick={() => handleExpPageChange(currentExpPage + 1)}
                disabled={currentExpPage === totalExpPages}
                className={`p-3 rounded-xl border transition-all ${
                  currentExpPage === totalExpPages
                    ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                    : 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {portfolioData.projects.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.4)' }}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-2xl transition-all group cursor-default"
              >
                <h4 className="font-bold mb-2 group-hover:text-cyan-400 transition-colors">{proj.title}</h4>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">{proj.description[0]}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[9px] font-mono text-cyan-500/50 px-2 py-0.5 rounded-full border border-cyan-500/20">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Education & Certs */}
      <SectionWrapper id="education">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-2xl">04.</span>
              Education
            </h2>
            <div className="space-y-10">
              {portfolioData.education.map((edu, i) => (
                <div key={i} className="relative pl-10 border-l border-slate-800 py-2">
                  <div className="absolute top-2 left-[-6px] w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-cyan-400/80 font-medium mb-1">{edu.institution}</p>
                  <p className="text-slate-500 text-xs font-mono">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl font-bold">Certifications</h2>
            <div className="grid gap-4">
              {portfolioData.certifications.map((cert, i) => (
                <div key={i} className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 flex justify-between items-center group hover:border-cyan-500/30 transition-all">
                  <div>
                    <h4 className="font-bold text-sm mb-1">{cert.name}</h4>
                    <p className="text-xs text-slate-500 font-mono uppercase">{cert.issuer} • {cert.date}</p>
                  </div>
                  <Activity className="w-5 h-5 text-slate-700 group-hover:text-cyan-400 transition-colors animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact">
        <div className="text-center max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Get In <span className="text-cyan-400">Touch</span>
            </motion.h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Seeking opportunities as a Data & Software Engineer. Ready to collaborate on innovative projects worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
  {/* BLOC EMAIL */}
  <div className="group p-8 bg-slate-900/30 rounded-3xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all flex flex-col items-center gap-5 relative">
    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">
      <Mail className="w-8 h-8" />
    </div>
    <div className="space-y-1 text-center">
      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Protocol</span>
      <div className="flex flex-col items-center gap-2">
        <a href={`mailto:${portfolioData.contact.email}`} className="text-sm font-bold hover:text-cyan-400 transition-colors">
          {portfolioData.contact.email}
        </a>
        <button
          type="button"
          onClick={(e) => handleCopy(e, portfolioData.contact.email)}
          className="p-2 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition-all text-slate-400 hover:text-cyan-400"
          title="Copy Email"
        >
          <Copy size={16} />
        </button>
      </div>
    </div>
  </div>

  {/* BLOC TELEPHONE */}
  <div className="group p-8 bg-slate-900/30 rounded-3xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all flex flex-col items-center gap-5 relative">
    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">
      <Phone className="w-8 h-8" />
    </div>
    <div className="space-y-1 text-center">
      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Secure Line</span>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-bold">{portfolioData.contact.phone}</p>
        <button
          type="button"
          onClick={(e) => handleCopy(e, portfolioData.contact.phone)}
          className="p-2 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition-all text-slate-400 hover:text-cyan-400"
          title="Copy Phone"
        >
          <Copy size={16} />
        </button>
      </div>
    </div>
  </div>

  {/* BLOC LOCALISATION */}
  <div className="group p-8 bg-slate-900/30 rounded-3xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all flex flex-col items-center gap-5">
    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">
      <MapPin className="w-8 h-8" />
    </div>
    <div className="space-y-1 text-center">
      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Coordinates</span>
      <p className="text-sm font-bold">{portfolioData.contact.location.split('(')[0]}</p>
    </div>
  </div>
  <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-md relative"
      >
        <form action="https://formspree.io/f/VOTRE_ID" method="POST" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 ml-1">Full Name</label>
              <input 
                type="text" name="name" required placeholder="Ex: John Doe"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 ml-1">Email Address</label>
              <input 
                type="email" name="email" required placeholder="Ex: john@company.com"
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 ml-1">Subject of Inquiry</label>
            <input 
              type="text" name="subject" required placeholder="Ex: Project Collaboration"
              className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 ml-1">Message Content</label>
            <textarea 
              name="message" required rows={5} placeholder="Type your message here..."
              className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-cyan-500 text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-cyan-500/10"
          >
            SEND MESSAGE
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>
  {/* Notification de copie (flottante en bas) */}
  {copied && (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-6 py-2 rounded-full font-bold shadow-lg animate-bounce z-50">
      Copied to clipboard !
    </div>
  )}
</div>

          
        </div>
      </SectionWrapper>
      
      <footer className="py-16 border-t border-slate-900/50 text-center relative z-10 bg-slate-950/20 backdrop-blur-md">
        <div className="flex justify-center gap-6 mb-8 text-slate-500">
           <a href="https://www.linkedin.com/in/hasna-el-bacha-455303247/" className="hover:text-cyan-400 transition-colors font-mono text-xs">LINKEDIN</a>
           <a href="https://github.com/HasnaElbacha" className="hover:text-cyan-400 transition-colors font-mono text-xs">GITHUB</a>
        </div>
        <p className="text-slate-600 font-mono text-[10px] tracking-widest">
          &copy; {new Date().getFullYear()} HASNA EL BACHA | BUILT WITH REACTIONARY LOGIC & HUD CORE
        </p>
        <div className="mt-4 flex justify-center gap-2">
           <div className="w-1 h-1 rounded-full bg-cyan-500/30"></div>
           <div className="w-1 h-1 rounded-full bg-cyan-500/50"></div>
           <div className="w-1 h-1 rounded-full bg-cyan-500/30"></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
