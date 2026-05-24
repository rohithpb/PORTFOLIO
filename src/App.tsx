/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FlowContainer, 
  FlowSection, 
  useFlow 
} from './components/story-scroll';
import { 
  Terminal, 
  Code2, 
  GitBranch, 
  Cpu, 
  BookOpen, 
  Briefcase, 
  FolderLock, 
  Award, 
  Mail, 
  Phone, 
  Linkedin, 
  ArrowUpRight, 
  MapPin, 
  FileCheck, 
  ExternalLink, 
  CheckCircle2, 
  User, 
  Wrench,
  Flame,
  Search,
  Check,
  Send,
  Sparkles,
  Info
} from 'lucide-react';

export default function App() {
  const [skillCategory, setSkillCategory] = useState<'all' | 'programming' | 'web' | 'tools'>('all');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeExpIdx, setActiveExpIdx] = useState<number>(0);
  const [cliLogs, setCliLogs] = useState<string[]>([
    "INITIALIZING_PORTFOLIO_SYSTEM... OK",
    "GATHERING CORE DATA: Rohith_P_B (Front_End_Engineer)... OK",
    "HOST ENVIRONMENT: Kerala, India... OK",
    "ACADEMIC NODE: S4 CGPA 9.05 | Jyothi Engineering College... OK",
    "TYPE 'help' OR SELECT AN ACTIVE PANEL BELOW FOR DATA READOUTS."
  ]);
  const [cliInput, setCliInput] = useState<string>('');

  const submitContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4500);

    const clientLog = `OUTBOX_TRANSMISSION: Sent message from ${contactForm.email} ("${contactForm.name.toUpperCase()}") to dev gateway... STATUS 200 OK`;
    setCliLogs(prev => [...prev, clientLog]);
  };

  const handleCliCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    const cmd = cliInput.trim().toLowerCase();
    let response = '';

    if (cmd === 'help') {
      response = 'Core commands: [clear] [about] [skills] [contact] [experience] [secret]';
    } else if (cmd === 'clear') {
      setCliLogs([]);
      setCliInput('');
      return;
    } else if (cmd === 'about') {
      response = '/sys/bio: Rohith P B is S4 CSE Scholar, Maintaining a pristine CGPA of 9.05/10.0';
    } else if (cmd === 'skills') {
      response = '/sys/skills: Python | SQL | C++ | React | ES6 HTML CSS Gradle Git Android';
    } else if (cmd === 'contact') {
      response = '/sys/channel: pbrohith2@gmail.com | +91 8590489146 | linktr.ee/rohith';
    } else if (cmd === 'experience') {
      response = '/sys/intern: Full Stack Dev (KGISL) | Android Dev (ICT Academy) | Python (System Tron)';
    } else if (cmd === 'secret') {
      response = 'SUCCESS: Hidden matrix unlocked! "Let\'s build something legendary." - Rohith';
    } else {
      response = `Command "${cmd}" not recognized. System command error. Type 'help' for options.`;
    }

    setCliLogs(prev => [...prev, `> ${cliInput}`, response]);
    setCliInput('');
  };

  // Skill Items
  const skillsList = [
    { name: 'React.js', rating: 90, category: 'web', desc: 'Hooks, Suspense, Context, State synchronizations' },
    { name: 'JavaScript (ES6+)', rating: 92, category: 'web', desc: 'Prototypes, Closures, Async/Await, Array methods' },
    { name: 'CSS3 & Tailwind', rating: 95, category: 'web', desc: 'Responsive layouts, variables, flexbox, grid grids' },
    { name: 'HTML5 Semantic', rating: 95, category: 'web', desc: 'Strict SEO markup, accessibility protocols, Web API integrations' },
    { name: 'Python Programming', rating: 85, category: 'programming', desc: 'Data Analytics, scripting, OOP paradigms, Pandas & NumPy' },
    { name: 'Structured Query SQL', rating: 80, category: 'programming', desc: 'Relational DB schemas, complex queries, join operations' },
    { name: 'C++ Programming', rating: 75, category: 'programming', desc: 'Basic algorithms, pointer logic, college labs & logic' },
    { name: 'GitHub Workspace', rating: 88, category: 'tools', desc: 'Branches, workflow releases, PR gates, merge resolving' },
    { name: 'Android Studio / Dev', rating: 70, category: 'tools', desc: 'App lifecycles, XML design sheets, basic Gradle builds' },
  ];

  const filteredSkills = skillCategory === 'all' 
    ? skillsList 
    : skillsList.filter(s => s.category === skillCategory);

  // Experiences List
  const experienceList = [
    {
      company: 'KGISL Group',
      role: 'Full Stack Dev Intern',
      period: 'Winter 2025 // Cohort',
      details: [
        'Explored architectural blueprints of enterprise full-stack ecosystems, focusing on client-to-API integrations.',
        'Developed robust React client components with responsive fluid scaling for real-time diagnostic systems.',
        'Collaborated with engineering peers using distributed Git branches to assure clean commits and code review parity.'
      ],
      colors: 'border-l-2 border-electric-cyan',
      tech: ['React.js', 'Express', 'CSS Grid', 'REST APIs', 'Git']
    },
    {
      company: 'ICT Academy of Kerala',
      role: 'Android App Dev Intern',
      period: 'Summer 2024 // Certification',
      details: [
        'Gained hands-on proficiency in Kotlin and custom Android Studio XML layout blueprints.',
        'Programmed standard lifecycle hooks, background activities, and responsive interfaces with rigid layout bounds.',
        'Debugged application performance in local emulator pipelines to prevent process locks and garbage collection loops.'
      ],
      colors: 'border-l-2 border-electric-blue',
      tech: ['Android SDK', 'Kotlin', 'XML Interfaces', 'Gradle', 'Emulator Suite']
    },
    {
      company: 'System Tron',
      role: 'Python Programming Intern',
      period: 'Spring 2024 // Core Team',
      details: [
        'Engineered procedural automation scripts and web scrapers to parse and collect hierarchical text data.',
        'Wrote robust algorithms in Python to manage bulk dataset updates, utilizing functional paradigms and error catch gates.',
        'Drafted clear unit tests and logical assertions to maintain high script runtime correctness.'
      ],
      colors: 'border-l-2 border-electric-green',
      tech: ['Python 3', 'Procedural Scripting', 'Regular Expressions', 'Data Cleansing']
    },
    {
      company: 'IEEE PELS/IAS SBC JECC',
      role: 'I HACK 24H Hackathon Programmer',
      period: 'Annual Hackathon Series',
      details: [
        'Engineered an interactive software prototype in a high-pressure 24-hour development marathon.',
        'Built full mockup architectures and presented slides under active time trial rules for review panels.',
        'Exceeded hackathon benchmarks for UI responsiveness and technical data presentation.'
      ],
      colors: 'border-l-2 border-[#ff3b3b]',
      tech: ['Rapid Prototyping', 'UI Design Sheets', 'Team Leadership', 'Presentations']
    }
  ];

  return (
    <FlowContainer>
      
      {/* 1. HERO SECTION */}
      <FlowSection id="hero" index={0}>
        <div id="hero-intro-wrapper" className="space-y-6">
          
          <div className="gsap-fade-in inline-flex items-center gap-2 px-3 py-1 bg-[#10132c]/60 border border-electric-cyan/20 rounded font-mono text-[10px] tracking-widest text-electric-cyan uppercase select-none">
            <Terminal className="h-3 w-3 animate-pulse" />
            SYSTEM_BOOT ACTIVE // WEB_PORTFOLIO
          </div>

          <div className="space-y-2">
            <p className="gsap-fade-in font-mono text-xs tracking-widest text-[#474a68] uppercase">
              // JUNIOR FRONT-END DEVELOPER
            </p>
            <h1 className="gsap-fade-in font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-none">
              ROHITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-electric-blue font-black drop-shadow-[0_0_15px_rgba(0,255,255,0.15)]">P B</span>
            </h1>
          </div>

          <p className="gsap-fade-in text-lg md:text-xl text-[#9ea3c0] max-w-2xl leading-relaxed font-light">
            "Building clean, interactive web experiences with <span className="text-white font-medium">React</span> & <span className="text-white font-medium">modern JS</span>."
          </p>

          {/* Quick HUD Metrics */}
          <div className="gsap-fade-in grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 max-w-lg">
            <div className="border border-[#1a1c30]/50 p-3 bg-[#050611]/60 rounded backdrop-blur">
              <div className="font-mono text-[9px] text-gray-500 tracking-wider">LOCATION</div>
              <div className="font-mono text-xs text-white flex items-center gap-1.5 mt-1 font-medium">
                <MapPin className="h-3.5 w-3.5 text-electric-cyan" />
                Kerala, India
              </div>
            </div>
            <div className="border border-[#1a1c30]/50 p-3 bg-[#050611]/60 rounded backdrop-blur">
              <div className="font-mono text-[9px] text-gray-500 tracking-wider">ACADEMIC LEVEL</div>
              <div className="font-mono text-xs text-white flex items-center gap-1.5 mt-1 font-medium">
                <Cpu className="h-3.5 w-3.5 text-electric-blue" />
                B.Tech CSE (S4)
              </div>
            </div>
            <div className="border border-[#1a1c30]/50 p-3 bg-[#050611]/60 rounded backdrop-blur col-span-2 sm:col-span-1">
              <div className="font-mono text-[9px] text-gray-500 tracking-wider">INDEX CGPA</div>
              <div className="font-mono text-xs text-electric-green flex items-center gap-1.5 mt-1 font-bold">
                <Award className="h-4 w-4" />
                9.05 / 10.0
              </div>
            </div>
          </div>

          {/* Action triggers */}
          <div className="gsap-fade-in flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-electric-cyan bg-electric-cyan/5 hover:bg-electric-cyan/20 text-electric-cyan font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded cursor-pointer shadow-[0_0_15px_rgba(0,255,255,0.1)] active:scale-95"
            >
              INITIALIZE_CONTACT()
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-[#1a1c30] hover:border-slate-500 text-gray-400 hover:text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded cursor-pointer"
            >
              READ_PROFILE_DB
            </button>
          </div>

          {/* Interactive Core micro-widget: Active System Terminal Log */}
          <div className="gsap-fade-in max-w-2xl border border-[#17192d] bg-[#030514]/90 rounded overflow-hidden shadow-2xl relative">
            <div className="bg-[#080a1c] px-4 py-2 flex items-center justify-between border-b border-[#17192d]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-1 font-mono text-[10px] text-[#474a68]">ROHITH_PORT_CONSOLE_v1.2</span>
              </div>
              <span className="font-mono text-[9px] text-electric-cyan animate-pulse">TERMINAL // LIVE</span>
            </div>
            
            <div className="p-4 font-mono text-xs text-gray-300 space-y-1.5 h-36 overflow-y-auto block [direction:ltr]">
              {cliLogs.map((log, i) => (
                <div key={i} className="leading-tight">
                  <span className="text-[#474a68] select-none text-[10px]">[{new Date().toLocaleTimeString()}]</span>{' '}
                  <span className={log.startsWith('>') ? 'text-electric-cyan' : log.includes('OK') || log.includes('SUCCESS') ? 'text-electric-green' : 'text-gray-300'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleCliCommandSubmit} className="border-t border-[#17192d] p-2 bg-[#050616] flex items-center">
              <span className="text-electric-cyan font-mono text-xs px-2 select-none">&gt;</span>
              <input 
                type="text" 
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="Type 'help' for terminal commands..."
                className="bg-transparent border-none outline-none flex-1 text-xs text-white font-mono placeholder:text-gray-600"
              />
              <button type="submit" className="text-[10px] bg-[#10132c]/80 text-[#9ea3c0] hover:text-white px-3 py-1 rounded border border-[#17192d] font-mono tracking-wider transition-all cursor-pointer">
                SEND
              </button>
            </form>
          </div>

        </div>
      </FlowSection>

      {/* 2. ABOUT ME SECTION */}
      <FlowSection id="about" index={1}>
        <div id="about-container" className="space-y-8">
          
          <div className="space-y-2">
            <div className="gsap-fade-in font-mono text-[11px] text-electric-green tracking-widest uppercase">
              // UNIT_02 // SYSTEM_PROFILE
            </div>
            <h2 className="gsap-fade-in font-display text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              ABOUT <span className="text-electric-green">MYSELF</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Core Bio Column (2 cols wide) */}
            <div className="gsap-fade-in md:col-span-2 space-y-5 text-[#9ea3c0] text-sm md:text-base leading-relaxed font-light">
              <p>
                Hello there! I'm <strong className="text-white font-semibold">Rohith P B</strong>, an aspiring Computer Science & Engineering student currently navigating my S4 semester at <span className="text-white">Jyothi Engineering College</span>, nestled in Kerala, India.
              </p>
              <p>
                My development journey is defined by a deep fascination with the <span className="text-white font-semibold">Front-End Frontier</span>. I love translating tricky layouts and creative wireframes into structured, responsive, and performance-optimized React architectures. Maintenance of pixel-precise aesthetics, fluid web feedback, and legible code outlines constitutes my core technical pursuit.
              </p>
              <p>
                With a strong foundational academic index of <span className="text-electric-green font-bold bg-[#39ff14]/5 px-2 py-0.5 rounded border border-[#39ff14]/15">CGPA 9.05</span>, I combine analytical computer science theory with proactive practical experimentation—interning across diverse sectors, hacking on rapid prototyping trials, and writing accessible components.
              </p>

              {/* Monospace Code Callout */}
              <div className="p-4 border border-[#1a1c30]/80 bg-[#060714] rounded font-mono text-xs text-electric-cyan block leading-normal space-y-1">
                <div><span className="text-purple-400">const</span> <span className="text-blue-400">spec</span> = &#123;</div>
                <div className="pl-4">academic_origin: <span className="text-green-300">"Jyothi Engineering College, Kerala"</span>,</div>
                <div className="pl-4">current_milestone: <span className="text-green-300">"S4 B.Tech Computer Science"</span>,</div>
                <div className="pl-4">cumulative_cgpa: <span className="text-yellow-400">9.05</span>,</div>
                <div className="pl-4">core_directive: <span className="text-green-300">"Build blazing-fast interactive user systems"</span></div>
                <div>&#125;;</div>
              </div>
            </div>

            {/* Quick Stats sidebar widget */}
            <div className="gsap-fade-in space-y-4">
              <div className="border border-[#1a1c30] bg-[#060713]/80 p-5 rounded relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 h-16 w-16 bg-electric-green/5 rounded-full filter blur-xl" />
                <h3 className="font-mono text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <User className="h-4 w-4 text-electric-green" />
                  BIO_DIMS
                </h3>
                
                <ul className="space-y-3 font-mono text-xs text-[#9ea3c0]">
                  <li className="flex justify-between items-center py-1.5 border-b border-[#141525]">
                    <span>COLLEGE:</span>
                    <span className="text-white text-right font-medium">JEC (Kerala)</span>
                  </li>
                  <li className="flex justify-between items-center py-1.5 border-b border-[#141525]">
                    <span>DEGREE:</span>
                    <span className="text-white font-medium">B.Tech CSE</span>
                  </li>
                  <li className="flex justify-between items-center py-1.5 border-b border-[#141525]">
                    <span>SEMESTER:</span>
                    <span className="text-white font-medium">Semester 4 (S4)</span>
                  </li>
                  <li className="flex justify-between items-center py-1.5 border-b border-[#141525]">
                    <span>INTERNSHIPS:</span>
                    <span className="text-white font-medium">3 Completed</span>
                  </li>
                  <li className="flex justify-between items-center py-1.5">
                    <span>HACKATHONS:</span>
                    <span className="text-white font-medium">I HACK (24hr)</span>
                  </li>
                </ul>
              </div>

              {/* Active Quotes panel */}
              <div className="border border-[#1a1c30]/10 bg-[#05060e] p-4 rounded text-xs text-[#474a68] italic font-light font-mono leading-relaxed relative">
                <span className="absolute top-1 left-2 text-2xl opacity-15 select-none">"</span>
                Software craftsmanship is the precise balance of clean logical rules underneath, with delightful, fluid response shapes above.
              </div>
            </div>

          </div>

        </div>
      </FlowSection>

      {/* 3. SKILLS MATRIX */}
      <FlowSection id="skills" index={2}>
        <div id="skills-container" className="space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="gsap-fade-in font-mono text-[11px] text-electric-cyan tracking-widest uppercase mb-1">
                // UNIT_03 // SKILLS_MATRIX
              </div>
              <h2 className="gsap-fade-in font-display text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
                TECHNICAL <span className="text-electric-cyan">SKILLS</span>
              </h2>
            </div>

            {/* Live Filter Controls */}
            <div className="gsap-fade-in flex flex-wrap gap-1.5 bg-[#080b19] border border-[#161a35] p-1 rounded font-mono text-[10px]">
              {(['all', 'programming', 'web', 'tools'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSkillCategory(cat)}
                  className={`px-3 py-1.5 rounded transition-all cursor-pointer uppercase tracking-wider ${
                    skillCategory === cat 
                      ? 'bg-electric-cyan text-[#020205] font-bold shadow-[0_0_8px_rgba(0,255,255,0.2)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid display of cards */}
          <div className="gsap-fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="border border-[#141730]/60 hover:border-electric-cyan/40 bg-[#050716]/65 hover:bg-[#070b22] px-4 py-4 rounded transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-[9px] tracking-widest text-[#474a68] uppercase bg-[#10132c]/50 px-2 py-0.5 rounded border border-[#141735]">
                      {skill.category}
                    </span>
                    <span className="font-mono text-xs text-electric-cyan font-bold tracking-tight">
                      {skill.rating}%
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-white text-base tracking-wide flex items-center gap-1.5 group-hover:text-electric-cyan transition-colors mt-2">
                    {skill.category === 'web' && <Code2 className="h-4.5 w-4.5 text-electric-cyan" />}
                    {skill.category === 'programming' && <Terminal className="h-4.5 w-4.5 text-electric-blue" />}
                    {skill.category === 'tools' && <Wrench className="h-4.5 w-4.5 text-electric-green" />}
                    {skill.name}
                  </h3>

                  <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Rating slide bars */}
                <div className="mt-4 pt-3 border-t border-[#13152c]/40">
                  <div className="h-1 w-full bg-[#111326] rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        skill.category === 'web' ? 'bg-electric-cyan' : skill.category === 'programming' ? 'bg-electric-blue' : 'bg-electric-green'
                      }`}
                      style={{ width: `${skill.rating}%` }}
                    />
                  </div>
                  {/* Discrete terminal representation indicator */}
                  <div className="flex justify-between items-center mt-1.5 font-mono text-[8px] text-[#474a68]/70 select-none">
                    <span>MIN_STABLE</span>
                    <span>NOMINAL_SEC_ACTIVE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick HUD footer analysis */}
          <div className="gsap-fade-in p-4 bg-[#050714] border border-[#121633]/60 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-electric-cyan animate-pulse" />
              <span>SYSTEM PROFILE STATUS: <strong className="text-white">OPTIMIZED_FRONT_END</strong></span>
            </div>
            <div className="text-[10px] text-[#474a68]">
              STACK_VER_REVISION // [REACT_19 / TAILWIND_V4]
            </div>
          </div>

        </div>
      </FlowSection>

      {/* 4. EXPERIENCE & INTERNSHIPS TIMELINE */}
      <FlowSection id="experience" index={3}>
        <div id="experience-container" className="space-y-8">
          
          <div className="space-y-2">
            <div className="gsap-fade-in font-mono text-[11px] text-electric-blue tracking-widest uppercase">
              // UNIT_04 // TIMELINE_REGISTERS
            </div>
            <h2 className="gsap-fade-in font-display text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              EXPERIENCE & <span className="text-electric-blue">INTERNSHIPS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Nav Tabs for Experiences (HUD structure) */}
            <div className="gsap-fade-in lg:col-span-4 flex flex-col gap-2">
              {experienceList.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveExpIdx(idx)}
                  className={`p-4 border text-left rounded transition-all cursor-pointer flex flex-col gap-1 ${
                    activeExpIdx === idx 
                      ? 'bg-[#0b0e25] border-electric-blue shadow-[0_0_12px_rgba(26,61,232,0.15)]' 
                      : 'bg-[#04050d]/80 border-[#121528] hover:border-[#1e2346] hover:bg-[#070914]'
                  }`}
                >
                  <p className="font-mono text-[9px] text-[#474a68] uppercase">{exp.period}</p>
                  <h3 className={`font-display font-bold text-sm tracking-wide ${activeExpIdx === idx ? 'text-electric-cyan' : 'text-white'}`}>
                    {exp.company}
                  </h3>
                  <p className="text-xs text-[#9ea3c0]">{exp.role}</p>
                </button>
              ))}
            </div>

            {/* Right Detailed Window */}
            <div className="gsap-fade-in lg:col-span-8">
              <div className="border border-[#101431] bg-[#050616]/75 p-6 rounded relative overflow-hidden backdrop-blur-md h-full flex flex-col justify-between">
                
                {/* Tech Glow Ring Backdrop */}
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-electric-blue/5 rounded-full filter blur-2xl pointer-events-none" />

                <div className="space-y-4">
                  
                  {/* Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#121735]/60 pb-4 gap-2">
                    <div>
                      <span className="font-mono text-[9px] text-electric-cyan font-semibold tracking-widest uppercase px-2 py-0.5 bg-[#0d2238]/60 border border-electric-cyan/25 rounded">
                        {experienceList[activeExpIdx].role}
                      </span>
                      <h3 className="font-display font-extrabold text-white text-xl tracking-wide mt-2">
                        {experienceList[activeExpIdx].company}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-gray-400">
                      {experienceList[activeExpIdx].period}
                    </span>
                  </div>

                  {/* Bullet description outputs */}
                  <div className="space-y-3 pt-2 text-[#9ea3c0] text-sm leading-relaxed font-light">
                    {experienceList[activeExpIdx].details.map((bullet, k) => (
                      <div key={k} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric-blue mt-2 flex-shrink-0" />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Tech stack flags pill list */}
                <div className="mt-8 pt-4 border-t border-[#121735]/40 flex flex-wrap gap-1.5 items-center">
                  <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider mr-2">TECH_USED:</span>
                  {experienceList[activeExpIdx].tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-white bg-[#0e1124] px-2.5 py-1 rounded border border-[#1a1e3d]">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* Hackathon spotlight frame */}
          <div className="gsap-fade-in border border-yellow-500/20 bg-[#121008]/40 p-5 rounded flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded border border-yellow-500/20 flex-shrink-0 animate-pulse">
              <Flame className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[9px] text-yellow-500 font-bold uppercase tracking-widest">SPOTLIGHT // SPECIAL COMPETITION</span>
              <h3 className="font-display font-bold text-white text-base">I HACK (24-Hour National Hackathon Series)</h3>
              <p className="text-xs text-[#9ea3c0] font-light leading-relaxed max-w-3xl">
                Collaborated inside the intense 24hr hacker sprint hosted by IEEE Power Electronics / Industry Applications Joint Societies SBC JECC. Designed layouts, engineered responsive dynamic flow vectors, and presented to standard scientific review committees.
              </p>
            </div>
          </div>

        </div>
      </FlowSection>

      {/* 5. PROJECTS PLACEHOLDERS */}
      <FlowSection id="projects" index={4}>
        <div id="projects-container" className="space-y-8">
          
          <div className="space-y-2">
            <div className="gsap-fade-in font-mono text-[11px] text-gray-500 tracking-widest uppercase">
              // UNIT_05 // SECURE_BUILDS
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="gsap-fade-in font-display text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
                PROJECTS <span className="text-white/40">ARCHIVE</span>
              </h2>
              <span className="gsap-fade-in font-mono text-xs text-electric-cyan font-medium tracking-widest uppercase bg-electric-cyan/5 border border-electric-cyan/20 px-2.5 py-1 rounded">
                COMING SOON // FILL_MODE_ACTIVE
              </span>
            </div>
          </div>

          {/* Three styled project cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="gsap-fade-in border border-[#161726] bg-[#050611]/80 hover:bg-[#080a1d] p-6 rounded duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-10 w-24 bg-[#111] text-gray-600 font-mono text-[8px] text-center border-l border-b border-[#222] uppercase tracking-widest py-1 flex items-center justify-center select-none">
                LOCK_SECURE
              </div>
              
              <div className="space-y-4">
                <div className="h-9 w-9 rounded bg-[#10142c] border border-gray-800 flex items-center justify-center text-[#474a68]">
                  <FolderLock className="h-4.5 w-4.5 text-gray-500" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-white text-base tracking-wide group-hover:text-electric-cyan transition-colors">
                    PROJ__ALPHA
                  </h3>
                  <p className="font-mono text-[9px] text-electric-cyan uppercase tracking-wider">
                    RESERVED_SLOT // ROHITH P B
                  </p>
                </div>

                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Project Title Coming Soon. Core technology stack involves advanced dynamic components in React, custom state caching, and responsive tailwind layout interfaces.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#13162b]">
                  <span className="font-mono text-[9px] text-[#474a68] select-none uppercase">STACK:</span>
                  <span className="font-mono text-[9px] text-white bg-[#0f111f] border border-[#1a1e35] px-2 py-0.5 rounded">React.js</span>
                  <span className="font-mono text-[9px] text-white bg-[#0f111f] border border-[#1a1e35] px-2 py-0.5 rounded">Vite</span>
                  <span className="font-mono text-[9px] text-white bg-[#0f111f] border border-[#1a1e35] px-2 py-0.5 rounded">Tailwind</span>
                </div>

                <button className="w-full text-center py-2.5 rounded bg-[#0a0c1a] border border-[#1a1e35] font-mono text-[10px] tracking-widest text-[#474a68] font-semibold cursor-not-allowed uppercase flex items-center justify-center gap-1.5 transition-colors">
                  <FolderLock className="h-3 w-3" />
                  STAGING_PENDING
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gsap-fade-in border border-[#161726] bg-[#050611]/80 hover:bg-[#080a1d] p-6 rounded duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-10 w-24 bg-[#111] text-gray-600 font-mono text-[8px] text-center border-l border-b border-[#222] uppercase tracking-widest py-1 flex items-center justify-center select-none">
                LOCK_SECURE
              </div>
              
              <div className="space-y-4">
                <div className="h-9 w-9 rounded bg-[#10142c] border border-gray-800 flex items-center justify-center text-[#474a68]">
                  <FolderLock className="h-4.5 w-4.5 text-gray-500" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-white text-base tracking-wide group-hover:text-electric-blue transition-colors">
                    PROJ__BETA
                  </h3>
                  <p className="font-mono text-[9px] text-electric-blue uppercase tracking-wider">
                    RESERVED_SLOT // ROHITH P B
                  </p>
                </div>

                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Project Title Coming Soon. Core mechanics integrate interactive canvas drawings, visual performance checks, and customizable grid controls.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#13162b]">
                  <span className="font-mono text-[9px] text-[#474a68] select-none uppercase">STACK:</span>
                  <span className="font-mono text-[9px] text-white bg-[#0f111f] border border-[#1a1e35] px-2 py-0.5 rounded">Python Script</span>
                  <span className="font-mono text-[9px] text-white bg-[#0f111f] border border-[#1a1e35] px-2 py-0.5 rounded">SQL Dev</span>
                </div>

                <button className="w-full text-center py-2.5 rounded bg-[#0a0c1a] border border-[#1a1e35] font-mono text-[10px] tracking-widest text-[#474a68] font-semibold cursor-not-allowed uppercase flex items-center justify-center gap-1.5 transition-colors">
                  <FolderLock className="h-3 w-3" />
                  STAGING_PENDING
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gsap-fade-in border border-[#161726] bg-[#050611]/80 hover:bg-[#080a1d] p-6 rounded duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-10 w-24 bg-[#111] text-gray-600 font-mono text-[8px] text-center border-l border-b border-[#222] uppercase tracking-widest py-1 flex items-center justify-center select-none">
                LOCK_SECURE
              </div>
              
              <div className="space-y-4">
                <div className="h-9 w-9 rounded bg-[#10142c] border border-gray-800 flex items-center justify-center text-[#474a68]">
                  <FolderLock className="h-4.5 w-4.5 text-gray-500" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-white text-base tracking-wide group-hover:text-electric-green transition-colors">
                    PROJ__GAMMA
                  </h3>
                  <p className="font-mono text-[9px] text-electric-green uppercase tracking-wider">
                    RESERVED_SLOT // ROHITH P B
                  </p>
                </div>

                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Project Title Coming Soon. Intended for custom responsive dashboard frameworks, integrating distributed system panels and API health probes.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#13162b]">
                  <span className="font-mono text-[9px] text-[#474a68] select-none uppercase">STACK:</span>
                  <span className="font-mono text-[9px] text-white bg-[#0f111f] border border-[#1a1e35] px-2 py-0.5 rounded">Android SDK</span>
                  <span className="font-mono text-[9px] text-white bg-[#0f111f] border border-[#1a1e35] px-2 py-0.5 rounded">Kotlin v2</span>
                </div>

                <button className="w-full text-center py-2.5 rounded bg-[#0a0c1a] border border-[#1a1e35] font-mono text-[10px] tracking-widest text-[#474a68] font-semibold cursor-not-allowed uppercase flex items-center justify-center gap-1.5 transition-colors">
                  <FolderLock className="h-3 w-3" />
                  STAGING_PENDING
                </button>
              </div>
            </div>

          </div>

          {/* Quick interactive utility widget: Code snippet copy sandbox */}
          <div className="gsap-fade-in p-6 bg-[#040614] border border-[#111326] rounded space-y-4">
            <div className="flex items-center justify-between border-b border-[#141731] pb-3">
              <h3 className="font-mono text-xs text-white uppercase tracking-wider flex items-center gap-1.5">
                <GitBranch className="h-4.5 w-4.5 text-electric-cyan" />
                DOCKER_LAUNCH_RUN_CONFIG
              </h3>
              <span className="font-mono text-[9px] text-gray-500">v1.0.0-PROT</span>
            </div>
            <p className="text-xs text-[#9ea3c0] leading-relaxed font-light">
              Rohith P B ensures clean delivery bounds. Copy the standard run snippet of this custom React portfolio framework:
            </p>
            <div className="bg-[#020205] p-3.5 rounded border border-[#111326]/80 flex items-center justify-between">
              <code className="font-mono text-xs text-electric-green overflow-x-auto select-all whitespace-pre block [direction:ltr]">
                git clone https://github.com/rohith-p-b/portfolio.git && npm run dev
              </code>
              <span className="text-[9px] font-mono text-[#474a68] uppercase bg-[#111328] px-2 py-1 rounded border border-[#161b3b] select-none">
                COPYABLE_MOCK
              </span>
            </div>
          </div>

        </div>
      </FlowSection>

      {/* 6. CERTIFICATIONS LIST */}
      <FlowSection id="certifications" index={5}>
        <div id="certifications-container" className="space-y-8">
          
          <div className="space-y-2">
            <div className="gsap-fade-in font-mono text-[11px] text-electric-green tracking-widest uppercase">
              // UNIT_06 // SECURE_CREDENTIALS
            </div>
            <h2 className="gsap-fade-in font-display text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              PROFESSIONAL <span className="text-electric-green">CERTIFICATIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Cert 1 */}
            <div className="gsap-fade-in border border-[#131427] bg-[#050612]/75 p-5 rounded hover:border-[#39ff14]/30 duration-300 flex items-start gap-4">
              <div className="p-2.5 bg-[#39ff14]/5 text-electric-green border border-[#39ff14]/20 rounded mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider">01 // COMPETITION_EVENT</span>
                <h3 className="font-display font-medium text-white text-sm tracking-wide">NASA Space Apps Challenge Hackathon</h3>
                <p className="text-xs text-[#9ea3c0] font-light">Participant programmer engineering open science solution models.</p>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="gsap-fade-in border border-[#131427] bg-[#050612]/75 p-5 rounded hover:border-[#39ff14]/30 duration-300 flex items-start gap-4">
              <div className="p-2.5 bg-[#39ff14]/5 text-electric-green border border-[#39ff14]/20 rounded mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider">02 // STUDY_WORKSHOP</span>
                <h3 className="font-display font-medium text-white text-sm tracking-wide">ILLUMINATE Technical Workshop</h3>
                <p className="text-xs text-[#9ea3c0] font-light">Focus on design-thinking models and structured prototyping.</p>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="gsap-fade-in border border-[#131427] bg-[#050612]/75 p-5 rounded hover:border-[#39ff14]/30 duration-300 flex items-start gap-4">
              <div className="p-2.5 bg-electric-blue/10 text-electric-blue border border-electric-blue/20 rounded mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider">03 // INFOSYS_SPRINGBOARD</span>
                <h3 className="font-display font-medium text-white text-sm tracking-wide">Artificial Intelligence Foundation</h3>
                <p className="text-xs text-[#9ea3c0] font-light">Covering primary neural arrays, tensor workflows, and ethical frameworks.</p>
              </div>
            </div>

            {/* Cert 4 */}
            <div className="gsap-fade-in border border-[#131427] bg-[#050612]/75 p-5 rounded hover:border-[#39ff14]/30 duration-300 flex items-start gap-4">
              <div className="p-2.5 bg-electric-blue/10 text-electric-blue border border-electric-blue/20 rounded mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider">04 // INFOSYS_SPRINGBOARD</span>
                <h3 className="font-display font-medium text-white text-sm tracking-wide">Computer Networks & Internet Security</h3>
                <p className="text-xs text-[#9ea3c0] font-light">Relating protocol hierarchies, transport metrics, and encryption keys.</p>
              </div>
            </div>

            {/* Cert 5 */}
            <div className="gsap-fade-in border border-[#131427] bg-[#050612]/75 p-5 rounded hover:border-[#39ff14]/30 duration-300 flex items-start gap-4">
              <div className="p-2.5 bg-[#39ff14]/5 text-electric-green border border-[#39ff14]/20 rounded mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider">05 // IEDC_INNOVATION</span>
                <h3 className="font-display font-medium text-white text-sm tracking-wide">IEDC Innovation & Idea Pitch Workshop</h3>
                <p className="text-xs text-[#9ea3c0] font-light">Focus on translating academic lab efforts into scalable tech models.</p>
              </div>
            </div>

            {/* Cert 6 */}
            <div className="gsap-fade-in border border-[#131427] bg-[#050612]/75 p-5 rounded hover:border-[#39ff14]/30 duration-300 flex items-start gap-4">
              <div className="p-2.5 bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20 rounded mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider">06 // INDUSTRIAL_ACAD_ICT</span>
                <h3 className="font-display font-medium text-white text-sm tracking-wide">ICT Academy: Android Development</h3>
                <p className="text-xs text-[#9ea3c0] font-light">Proved competence across standard mobile systems and compiler tests.</p>
              </div>
            </div>

            {/* Cert 7 */}
            <div className="gsap-fade-in border border-[#131427] bg-[#050612]/75 p-5 rounded hover:border-[#39ff14]/30 duration-300 flex items-start gap-4">
              <div className="p-2.5 bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20 rounded mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider">07 // ENTERPRISE_WEB_KGISL</span>
                <h3 className="font-display font-medium text-white text-sm tracking-wide">KGISL: Full-Stack Web Suite</h3>
                <p className="text-xs text-[#9ea3c0] font-light">Demonstrated complete frontend views coupled with micro API configurations.</p>
              </div>
            </div>

            {/* Cert 8 */}
            <div className="gsap-fade-in border border-[#131427] bg-[#050612]/75 p-5 rounded hover:border-[#39ff14]/30 duration-300 flex items-start gap-4">
              <div className="p-2.5 bg-electric-blue/10 text-electric-blue border border-electric-blue/20 rounded mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-[#474a68] uppercase tracking-wider">08 // NATIONAL_NPTEL_SWAYAM</span>
                <h3 className="font-display font-medium text-white text-sm tracking-wide">Data Analytics with Python (NPTEL)</h3>
                <p className="text-xs text-[#9ea3c0] font-light font-sans font-medium">Rigid IIT coursework detailing data evaluation and predictive metrics.</p>
              </div>
            </div>

          </div>

        </div>
      </FlowSection>

      {/* 7. CONTACT PORTAL */}
      <FlowSection id="contact" index={6}>
        <div id="contact-container" className="space-y-8">
          
          <div className="space-y-2">
            <div className="gsap-fade-in font-mono text-[11px] text-electric-cyan tracking-widest uppercase">
              // UNIT_07 // INQUIRY_SYSTEMS
            </div>
            <h2 className="gsap-fade-in font-display text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              CONNECT <span className="text-electric-cyan">TERMINAL</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Direct Info list panel (cols 5) */}
            <div className="gsap-fade-in md:col-span-5 space-y-6">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                Secure link vectors are open. If you want to configure technical project blueprints, consult intern systems, or build innovative software products—ping the node:
              </p>

              <div className="space-y-4">
                
                {/* Email link dot */}
                <a 
                  href="mailto:pbrohith2@gmail.com" 
                  className="flex items-center gap-4 p-4 border border-[#181a33] bg-[#04050e] hover:border-electric-cyan/40 hover:bg-[#070b1f] duration-300 rounded group cursor-pointer"
                >
                  <div className="p-2.5 bg-electric-cyan/5 text-electric-cyan border border-electric-cyan/20 group-hover:bg-electric-cyan group-hover:text-black rounded transition-all">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">EMAIL DIRECT</div>
                    <div className="text-sm font-mono text-white text-wrap pr-2">pbrohith2@gmail.com</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-600 ml-auto group-hover:text-electric-cyan transition-colors" />
                </a>

                {/* Phone Link dot */}
                <a 
                  href="tel:+918590489146" 
                  className="flex items-center gap-4 p-4 border border-[#181a33] bg-[#04050e] hover:border-electric-cyan/40 hover:bg-[#070b1f] duration-300 rounded group cursor-pointer"
                >
                  <div className="p-2.5 bg-electric-cyan/5 text-electric-cyan border border-electric-cyan/20 group-hover:bg-electric-cyan group-hover:text-black rounded transition-all">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">CELL CORE</div>
                    <div className="text-sm font-mono text-white">+91 8590489146</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-600 ml-auto group-hover:text-electric-cyan transition-colors" />
                </a>

                {/* LinkedIn Link dot */}
                <a 
                  href="https://linkedin.com/in/rohith-p-b-2b573a36b" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 border border-[#181a33] bg-[#04050e] hover:border-electric-cyan/40 hover:bg-[#070b1f] duration-300 rounded group cursor-pointer"
                >
                  <div className="p-2.5 bg-electric-cyan/5 text-electric-cyan border border-electric-cyan/20 group-hover:bg-electric-cyan group-hover:text-black rounded transition-all">
                    <Linkedin className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">LINKEDIN MATRIX</div>
                    <div className="text-sm font-mono text-white text-wrap pr-1 md:text-xs xl:text-sm">linkedin.com/in/rohith-p-b-...</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-600 ml-auto group-hover:text-electric-cyan transition-colors" />
                </a>

              </div>

              <div className="font-mono text-[10px] text-[#474a68] p-4 bg-[#050611] rounded border border-[#161a35] flex items-center gap-2">
                <Info className="h-4 w-4 text-electric-cyan" />
                <span>ROUTED_TRANSIT: SECURE GATEWAY [KERALA // IND]</span>
              </div>
            </div>

            {/* Form client panel (cols 7) */}
            <div className="gsap-fade-in md:col-span-7">
              <div className="border border-[#141836] bg-[#050716]/90 p-6 rounded relative overflow-hidden">
                <h3 className="font-mono text-xs text-white uppercase tracking-wider border-b border-[#141836] pb-3 mb-4 flex items-center gap-1.5">
                  <Terminal className="h-4 w-4 text-electric-cyan" />
                  TRANSMIT_SECURE_INQUIRY
                </h3>

                {formSubmitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 animate-fade-in">
                    <div className="p-3 bg-[#39ff14]/10 text-electric-green border border-electric-green/30 rounded-full">
                      <CheckCircle2 className="h-8 w-8 text-electric-green" />
                    </div>
                    <h4 className="font-display font-bold text-white text-lg">TRANSMISSION_COMPLETE // 200 OK</h4>
                    <p className="text-xs text-gray-400 font-mono tracking-wide max-w-sm">
                      Connection secure. Your signals have successfully bridged onto Rohith's developer mailbox portal. Initiating cleanup...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submitContactForm} className="space-y-4">
                    
                    <div className="space-y-1">
                      <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">01 // CLIENT NAME</label>
                      <input 
                        type="text" 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="IDENTIFIER: Enterprise / Person-Name"
                        className="w-full bg-[#03030a] border border-[#161b36] hover:border-electric-cyan/40 focus:border-electric-cyan/80 p-3 rounded font-mono text-xs text-white outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">02 // CLIENT MAILBOX</label>
                      <input 
                        type="email" 
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="GATEWAY: client@agency.domain"
                        className="w-full bg-[#03030a] border border-[#161b36] hover:border-electric-cyan/40 focus:border-electric-cyan/80 p-3 rounded font-mono text-xs text-white outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">03 // DIRECTIVE STATEMENT</label>
                      <textarea 
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="INPUT DIRECTIVE: Pitch project blueprints, coordinates, deadlines..."
                        className="w-full bg-[#03030a] border border-[#161b36] hover:border-electric-cyan/40 focus:border-electric-cyan/80 p-3 rounded font-mono text-xs text-white outline-none transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3 bg-gradient-to-r from-electric-blue to-[#0b1bd7] hover:from-electric-cyan hover:to-electric-blue hover:text-[#020205] text-white font-mono text-xs tracking-widest font-bold uppercase transition-all duration-300 rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(26,61,232,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.25)] cursor-pointer active:scale-[0.98]"
                    >
                      <Send className="h-3.5 w-3.5" />
                      LET'S BUILD SOMETHING
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

          {/* Footer copyright core metrics */}
          <div className="pt-20 border-t border-[#121633]/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-500">
            <div>
              © {new Date().getFullYear()} ROHITH_P_B // DATA SYSTEM SECURED
            </div>
            <div className="flex items-center gap-4">
              <span>LATITUDE: 10.45° N // LONGITUDE: 76.27° E</span>
              <span className="text-electric-cyan">CRAFTED_BY_AI_STUDIO</span>
            </div>
          </div>

        </div>
      </FlowSection>

    </FlowContainer>
  );
}
