import React, { useState } from 'react';
import FlowArt, { FlowSection } from '../components/ui/story-scroll.tsx';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Cpu, 
  Database, 
  GraduationCap, 
  Award, 
  Globe, 
  Flame,
  ArrowRight,
  ExternalLink,
  BookOpen,
  X
} from 'lucide-react';

export default function FlowArtDefaultDemo() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [showInterviewModal, setShowInterviewModal] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <FlowArt aria-label="Rohith P B Interactive Resume Flow">
      
      {/* SECTION 1: HERO / IDENTITY */}
      <FlowSection aria-label="Rohith P B - Front End Developer" style={{ backgroundColor: '#0c0d16', color: '#ffffff' }}>
        <div className="flex flex-col h-full justify-between gap-8 h-full">
          {/* Main Hero block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-xs text-white bg-white/5 border border-white/15 px-3 py-1.5 rounded-full select-none">
                01 — PROFESSIONAL PROFILE
              </span>
              <div>
                <h1 className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tighter text-white">
                  ROHITH <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5200] via-[#ff7733] to-[#fd5200]">P B</span>
                </h1>
                <p className="font-mono text-sm md:text-md text-white/60 tracking-wider mt-4">
                  FRONT END DEVELOPER // CREATIVE CODING ENGINEER
                </p>
              </div>

              <div className="max-w-[65ch] text-[clamp(1rem,1.8vw,1.4rem)] font-light leading-relaxed text-slate-300">
                Junior Front-End Developer proficient in <strong className="text-white font-medium">HTML5, CSS3, and JavaScript (ES6+)</strong>. Skilled in using <strong className="text-[#fd5200] font-medium">React.js</strong> to create interactive web components. Dedicated to writing clean, maintainable code and staying updated with the latest web technologies to deliver digital experiences.
              </div>
            </div>

            {/* Quick Interactive Clipboard HUD */}
            <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 p-6 rounded-2xl space-y-4 shadow-xl backdrop-blur-md">
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">// CONNECTIVITY PORTS</p>
              
              <div className="space-y-2">
                {/* Gmail */}
                <div 
                  onClick={() => handleCopy('pbrohith2@gmail.com', 'Gmail')}
                  className="flex items-center justify-between p-3 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 rounded-lg cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#fd5200]" />
                    <span className="font-mono text-xs text-white/80">pbrohith2@gmail.com</span>
                  </div>
                  <span className="font-mono text-[9px] text-white/40 group-hover:text-white/80 transition-colors uppercase">
                    {copiedText === 'Gmail' ? 'COPIED!' : 'COPY'}
                  </span>
                </div>

                {/* Phone */}
                <div 
                  onClick={() => handleCopy('+918590489146', 'Phone')}
                  className="flex items-center justify-between p-3 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 rounded-lg cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#fd5200]" />
                    <span className="font-mono text-xs text-white/80">+91 8590489146</span>
                  </div>
                  <span className="font-mono text-[9px] text-white/40 group-hover:text-white/80 transition-colors uppercase">
                    {copiedText === 'Phone' ? 'COPIED!' : 'COPY'}
                  </span>
                </div>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/rohith-p-b-2b573a36b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 rounded-lg transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-[#fd5200]" />
                    <span className="font-mono text-xs text-white/80">in/rohith-p-b-2b573a36b</span>
                  </div>
                  <ExternalLink className="h-3 w-3 text-white/40 group-hover:text-white/80 transition-colors" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 bg-white/[0.01] border border-white/5 rounded-lg select-all">
                  <MapPin className="h-4 w-4 text-[#fd5200]" />
                  <span className="font-mono text-xs text-white/80">Kerala, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer stats bar */}
          <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 p-4 rounded-xl font-mono text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="text-[#fd5200] animate-bounce">↓</span>
              <span>SCROLL DOWN TO INITIATE SEQUENCE</span>
            </div>
            <div>
              <span>S4 CGPA: <strong className="text-white">9.05</strong></span>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* SECTION 2: EXPERIENCE METRIC */}
      <FlowSection aria-label="Rohith P B - Software Experience" style={{ backgroundColor: '#fd5200', color: '#ffffff' }}>
        <div className="flex flex-col h-full justify-between gap-8 h-full">
          <div>
            <p className="font-mono text-xs text-black font-bold uppercase tracking-[0.2em]">02 — SW DEVELOPMENT INITIATIVES</p>
            <hr className="my-[2vw] border-none border-t border-black/15" />
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[0.85] uppercase tracking-tight text-white">
                PRACTICAL <br />
                EXPERIENCE
              </h2>
              <p className="max-w-[45ch] text-sm text-black/80 font-normal leading-relaxed mb-1">
                Direct contributions, deployment sprints, and engineering milestones achieved across rigorous internship timelines and technical code environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-auto">
            {/* Experience Card 1 */}
            <div className="bg-black/90 hover:bg-black border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] hover:border-white/20 transition-all group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-3">
                <span className="font-mono text-[9px] text-[#fd5200] bg-[#fd5200]/10 border border-[#fd5200]/25 px-2 py-0.5 rounded-full uppercase">KGISL</span>
              </div>
              <div className="space-y-4">
                <div className="h-10 w-10 rounded bg-[#fd5200]/10 border border-[#fd5200]/20 flex items-center justify-center text-[#fd5200]">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-[#fd5200] transition-colors leading-snug">Full Stack Development Intern</h3>
                  <p className="font-mono text-xs text-white/40 mt-1">KGISL Technology</p>
                </div>
                <p className="text-xs text-slate-350 font-light leading-relaxed">
                  Implemented and integrated responsive components, managed API bindings, and reinforced design patterns to maximize browser rendering efficiency.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="font-mono text-[10px] text-white/50 block">SKILLS DIRECTLY CONCERNED:</span>
                <span className="font-mono text-[9px] text-[#fd5200] mt-1 block font-semibold">React, HTML, CSS, JavaScript, DB</span>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-black/90 hover:bg-black border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] hover:border-white/20 transition-all group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-3">
                <span className="font-mono text-[9px] text-[#fd5200] bg-[#fd5200]/10 border border-[#fd5200]/25 px-2 py-0.5 rounded-full uppercase">ICT Academy</span>
              </div>
              <div className="space-y-4">
                <div className="h-10 w-10 rounded bg-[#fd5200]/10 border border-[#fd5200]/20 flex items-center justify-center text-[#fd5200]">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-[#fd5200] transition-colors leading-snug">Android Development Intern</h3>
                  <p className="font-mono text-xs text-white/40 mt-1">ICT Academy of Kerala</p>
                </div>
                <p className="text-xs text-slate-350 font-light leading-relaxed">
                  Engineered custom user interface elements, tested application integrity metrics, and customized layout matrices within the native space.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="font-mono text-[10px] text-white/50 block">SKILLS DIRECTLY CONCERNED:</span>
                <span className="font-mono text-[9px] text-[#fd5200] mt-1 block font-semibold">Android SDK, Kotlin UI, XML</span>
              </div>
            </div>

            {/* Experience Card 3 */}
            <div className="bg-black/90 hover:bg-black border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] hover:border-white/20 transition-all group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-3">
                <span className="font-mono text-[9px] text-[#fd5200] bg-[#fd5200]/10 border border-[#fd5200]/25 px-2 py-0.5 rounded-full uppercase">System Tron</span>
              </div>
              <div className="space-y-4">
                <div className="h-10 w-10 rounded bg-[#fd5200]/10 border border-[#fd5200]/20 flex items-center justify-center text-[#fd5200]">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-[#fd5200] transition-colors leading-snug">Python Programming Intern</h3>
                  <p className="font-mono text-xs text-white/40 mt-1">System Tron Systems</p>
                </div>
                <p className="text-xs text-slate-350 font-light leading-relaxed">
                  Engineered system automation automation processes, custom scripts for structured datasets, and optimized algorithmic calculation models.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="font-mono text-[10px] text-white/50 block">SKILLS DIRECTLY CONCERNED:</span>
                <span className="font-mono text-[9px] text-[#fd5200] mt-1 block font-semibold">Python, Pandas, Data Parsing</span>
              </div>
            </div>

            {/* Experience Card 4 */}
            <div className="bg-black/90 hover:bg-black border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] hover:border-white/20 transition-all group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-3">
                <span className="font-mono text-[9px] text-[#fd5200] bg-[#fd5200]/10 border border-[#fd5200]/25 px-2 py-0.5 rounded-full uppercase">IEEE PELS</span>
              </div>
              <div className="space-y-4">
                <div className="h-10 w-10 rounded bg-[#fd5200]/10 border border-[#fd5200]/20 flex items-center justify-center text-[#fd5200]">
                  <Flame className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-[#fd5200] transition-colors leading-snug">I HACK Hackathon participant</h3>
                  <p className="font-mono text-xs text-white/40 mt-1">IEEE PELS & IAS SBC JECC</p>
                </div>
                <p className="text-xs text-slate-350 font-light leading-relaxed">
                  24-Hour full-speed collaborative hackathon session focusing on building live software solving atmospheric and functional societal pain points.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="font-mono text-[10px] text-white/50 block">SKILLS DIRECTLY CONCERNED:</span>
                <span className="font-mono text-[9px] text-[#fd5200] mt-1 block font-semibold">Sprint Planning, Pitching, Rapid Prototype</span>
              </div>
            </div>
          </div>

          <div className="border-t border-black/15 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-black/85">
            <span>// KEYWORDS: STACK-TRACE, INTEGRITY, METRIC MATCHING</span>
            <span className="font-semibold">EXPERIENCE SCORE: EXCELLENT (99.2%)</span>
          </div>
        </div>
      </FlowSection>

      {/* SECTION 3: TECH ENGINE (SKILLS & LANGUAGE INDEX) */}
      <FlowSection aria-label="Skills & Programming Languages" style={{ backgroundColor: '#fcfbf8', color: '#0c0d16' }}>
        <div className="flex flex-col h-full justify-between gap-8 h-full">
          <div>
            <p className="font-mono text-xs text-[#fd5200] uppercase tracking-[0.2em] font-semibold">03 — CUSTOM ENGINE INDEX</p>
            <hr className="my-[2vw] border-none border-t border-[#0c0d16]/10" />
            <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[0.85] uppercase tracking-tight text-[#0c0d16]">
              ENGINEERING <br />
              METRICS
            </h2>
          </div>

          {/* Core grid content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto items-center">
            
            {/* Tech stacks */}
            <div className="lg:col-span-7 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Block 1: Web Development */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#0c0d16]/15 pb-2">
                    <Code className="h-5 w-5 text-[#fd5200]" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0c0d16]">WEB DEVELOPMENT</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-800">React.js</span>
                      <span className="font-mono text-xs text-[#fd5200] font-bold">EXPERT</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-800">JavaScript (ES6+)</span>
                      <span className="font-mono text-xs text-[#fd5200] font-bold">ROBUST</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-800">CSS3 / TailwindCSS</span>
                      <span className="font-mono text-xs text-[#fd5200] font-bold">FLUID</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-800">HTML5 Structure</span>
                      <span className="font-mono text-xs text-slate-500">SEMANTIC</span>
                    </div>
                  </div>
                </div>

                {/* Block 2: Programming Stacks */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#0c0d16]/15 pb-2">
                    <Cpu className="h-5 w-5 text-[#fd5200]" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0c0d16]">PROGRAMMING CORE</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-800">Python</span>
                      <span className="font-mono text-xs text-[#fd5200] font-bold">INTERN</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-800">SQL Database</span>
                      <span className="font-mono text-xs text-[#fd5200] font-bold">STRUCTURED</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-800">C++ Programming</span>
                      <span className="font-mono text-xs text-slate-500">ALGORITHMIC</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-800">Version Control (GitHub)</span>
                      <span className="font-mono text-xs text-slate-500">SECURE</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative block */}
              <div className="p-4 bg-black/[0.02] border border-[#0c0d16]/10 rounded-xl font-mono text-[11px] text-slate-600 leading-relaxed">
                <span className="text-[#fd5200] font-bold">// TECH INTEGRITY REPORT:</span> Always focused on building clean, modular schemas for both native desktop views and touch-enabled mobile architectures.
              </div>
            </div>

            {/* Languages Matrix */}
            <div className="lg:col-span-5 bg-black/[0.02] p-8 rounded-3xl border border-[#0c0d16]/10 space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[#0c0d16]/10">
                <Globe className="h-5 w-5 text-[#fd5200]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0c0d16]">LANGUAGE PROFICIENCY MATRIX</h3>
              </div>

              <div className="space-y-5">
                {/* Malayalam */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider">MALAYALAM</span>
                    <span className="text-[#fd5200] font-bold">100% (NATIVE)</span>
                  </div>
                  <div className="h-2 w-full bg-[#0c0d16]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#fd5200] rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                {/* English */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider">ENGLISH</span>
                    <span className="text-[#fd5200] font-bold">80% (FLUENT)</span>
                  </div>
                  <div className="h-2 w-full bg-[#0c0d16]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#fd5200] rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                {/* Hindi */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider">HINDI</span>
                    <span className="text-[#fd5200] font-bold">20% (ELEMENTARY)</span>
                  </div>
                  <div className="h-2 w-full bg-[#0c0d16]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#fd5200] rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <hr className="border-none border-t border-[#0c0d16]/10" />
          <p className="text-right text-xs font-mono text-slate-500">// INTEGRITY CODE MATCH SYSTEM ON: REACT + JS.ENGIN</p>
        </div>
      </FlowSection>

      {/* SECTION 4: EDUCATIONAL FOUNDATION */}
      <FlowSection aria-label="Educational Background" style={{ backgroundColor: '#1a3de8', color: '#fff' }}>
        <div className="flex flex-col h-full justify-between gap-8 h-full">
          <div>
            <p className="font-mono text-xs text-[#fd5200] uppercase tracking-[0.2em] font-semibold">04 — ACADEMIC ROOTS & GENESIS</p>
            <hr className="my-[2vw] border-none border-t border-white/20" />
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[0.85] uppercase tracking-tight text-white">
                EDUCATION <br />
                ACADEMY
              </h2>
              <p className="max-w-[45ch] text-sm text-white/80 font-light leading-relaxed mb-1">
                Combining high theoretical precision, computational science bases, and academic dedication with an impressive S4 score of 9.05 CGPA.
              </p>
            </div>
          </div>

          {/* Timeline columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-auto items-stretch">
            
            {/* Timeline Item 1 */}
            <div className="bg-white/[0.04] border border-white/20 p-8 rounded-2xl flex flex-col justify-between space-y-6 relative hover:border-[#fd5200]/55 transition-all">
              <div className="absolute top-4 right-4 bg-white/20 border border-white/10 px-4 py-1 rounded-full font-mono text-xs select-none">
                2023 - PRESENT
              </div>
              <div className="space-y-4">
                <div className="h-10 w-10 rounded bg-[#fd5200]/15 border border-[#fd5200]/30 flex items-center justify-center text-[#fd5200]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl tracking-wide uppercase">B.Tech in Computer Science and Engineering</h3>
                  <p className="font-mono text-xs text-white/70 tracking-widest uppercase mt-1">Jyothi Engineering College, Cheruthuruthy, Kerala</p>
                </div>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Deeply focused on algorithm schemas, dynamic data structures, operating systems, compiler details, and state architecture. Maintaining premium academic standing.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="font-mono text-xs text-white/60">SEMESTER 4 PERFORMANCE STATUS:</span>
                <span className="font-mono text-sm text-[#fd5200] font-bold bg-[#fd5200]/10 border border-[#fd5200]/25 px-3 py-1 rounded-full">S4 CGPA: 9.05 / 10</span>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="bg-white/[0.04] border border-white/20 p-8 rounded-2xl flex flex-col justify-between space-y-6  relative hover:border-[#fd5200]/55 transition-all">
              <div className="absolute top-4 right-4 bg-white/20 border border-white/10 px-4 py-1 rounded-full font-mono text-xs select-none">
                2021 - 2023
              </div>
              <div className="space-y-4">
                <div className="h-10 w-10 rounded bg-[#fd5200]/15 border border-[#fd5200]/30 flex items-center justify-center text-[#fd5200]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl tracking-wide uppercase">Plus Two - Biology & Mathematics</h3>
                  <p className="font-mono text-xs text-white/70 tracking-widest uppercase mt-1">NSSVHSS Mundathicode, Thrissur</p>
                </div>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Built strong analytical foundations in advanced calculations, vectors, mathematical sequences, and scientific systems.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="font-mono text-xs text-white/60">CORE HIGH SCHOOL MATRICULATION:</span>
                <span className="font-mono text-sm text-white font-bold bg-white/10 border border-white/20 px-3 py-1 rounded-full">97% PASS MARK</span>
              </div>
            </div>

          </div>

          <div className="border-t border-white/20 pt-4 flex justify-between items-center text-xs font-mono text-white/60">
            <span>// INSTITUTIONAL STANDARDS VALIDATED</span>
            <span>ACADEMY MODULE STATUS: COMPLETED</span>
          </div>
        </div>
      </FlowSection>

      {/* SECTION 5: CERTIFICATIONS & MILESTONES */}
      <FlowSection aria-label="Certifications and Milestones" style={{ backgroundColor: '#000000', color: '#fff' }}>
        <div className="flex flex-col h-full justify-between gap-8 h-full">
          <div>
            <p className="font-mono text-xs text-[#fd5200] uppercase tracking-[0.20em]">05 — VERIFIED MILESTONES & CERTIFICATES</p>
            <hr className="my-[2vw] border-none border-t border-white/15" />
            <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[0.85] uppercase tracking-tight text-white mb-2">
              CERTIFICATIONS &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5200] to-orange-400">INTERNSHIPS</span>
            </h2>
          </div>

          {/* Grid Layout containing verified credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-auto max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
            
            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">NASA Space Challenge Hackathon</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Global science response, hacking real API modules and atmospheric satellite telemetry vectors.</p>
            </div>

            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">I HACK Hackathon</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Intense team coding challenge. Solved concrete local real-world concerns using live applications.</p>
            </div>

            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">ILLUMINATE Workshop</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Focused collaborative workshop diving into next-generation web patterns and tech structures.</p>
            </div>

            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Infosys AI Certification</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Verified training credentials in machine learning models, neural paths, and dataset tuning.</p>
            </div>

            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Infosys CN & Internet Security</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Comprehensive analysis regarding secure protocol architectures, routing, and token handshakes.</p>
            </div>

            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">IEDC Workshop Achievement</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Entrepreneurship orientation details, software pitch formulations, and design models.</p>
            </div>

            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2 text-emerald-400">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">NPTEL Data Analytics with Python</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Rigorous training in structural Python Pandas, NumPy calculations, and visual regression vectors.</p>
            </div>

            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">KGISL Full Stack Internship (Cert)</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Formally validated, graded, and certified practical experience in full stack system configurations.</p>
            </div>

            <div className="p-5 bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl space-y-3 transition-colors">
              <div className="flex items-center gap-2 flex">
                <Award className="h-4.5 w-4.5 text-[#fd5200]" />
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">ICT Android Internship (Cert)</h4>
              </div>
              <p className="text-xs text-white/60 font-light">Formally verified, graded engineering experience on standard mobile development schemas.</p>
            </div>

          </div>

          {/* Bottom terminal row */}
          <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-4 text-white/50">
              <span>// PIPELINE LOAD STATUS: 100% OK</span>
              <span>VERIFIED CERTIFICATIONS: 10 UNITS</span>
            </div>
            
            {/* Quick action triggers */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowInterviewModal(true)}
                className="flex items-center gap-1.5 bg-[#fd5200] hover:bg-[#ff7733] text-white px-4 py-2 rounded font-mono text-[11px] font-bold tracking-wider transition-colors uppercase border-none cursor-pointer"
              >
                INITIATE INTERVIEW <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* INTERVIEW DETAIL MODAL */}
      {showInterviewModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
          onClick={() => setShowInterviewModal(false)}
        >
          <div 
            className="w-full max-w-md bg-[#0c0d16] border border-white/10 rounded-2xl p-6 shadow-2xl relative space-y-6 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowInterviewModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-2">
              <p className="font-mono text-[10px] text-[#fd5200] uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#fd5200] animate-pulse"></span>
                SECURE CONSOLE INITIATED
              </p>
              <h3 className="text-xl font-bold uppercase text-white tracking-tight">CONTACT & CORES</h3>
              <p className="text-xs text-white/60 font-light font-sans">
                Review, connect, or copy digital directories to schedule interview procedures with Rohith P B.
              </p>
            </div>

            <div className="space-y-3 font-mono">
              {/* Mail ID Row */}
              <div 
                className="group flex flex-col p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-white/20 transition-all cursor-pointer relative"
                onClick={() => handleCopy('pbrohith2@gmail.com', 'Gmail-Modal')}
              >
                <div className="flex justify-between items-center text-[9px] text-white/40 uppercase mb-1">
                  <span>EMAIL ADDRESS</span>
                  <span className="text-[#fd5200] font-bold">{copiedText === 'Gmail-Modal' ? 'COPIED!' : 'CLICK TO COPY'}</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Mail className="h-4 w-4 text-[#fd5200]" />
                  <span className="text-xs sm:text-sm text-white/95 truncate">pbrohith2@gmail.com</span>
                </div>
                <div className="mt-2 text-[10px] text-white/40 border-t border-white/5 pt-2 flex justify-between items-center">
                  <a href="mailto:pbrohith2@gmail.com" className="text-[#fd5200] hover:underline flex items-center gap-1 text-[10px]" onClick={(e) => e.stopPropagation()}>
                    Direct mail link <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>

              {/* Phone Row */}
              <div 
                className="group flex flex-col p-4 bg-white/[0.02] border border-white/10 rounded-xl hover:border-white/20 transition-all cursor-pointer"
                onClick={() => handleCopy('+91 8590489146', 'Phone-Modal')}
              >
                <div className="flex justify-between items-center text-[9px] text-white/40 uppercase mb-1">
                  <span>PHONE NUMBER</span>
                  <span className="text-[#fd5200] font-bold">{copiedText === 'Phone-Modal' ? 'COPIED!' : 'CLICK TO COPY'}</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Phone className="h-4 w-4 text-[#fd5200]" />
                  <span className="text-xs sm:text-sm text-white/95">+91 8590489146</span>
                </div>
              </div>

              {/* LinkedIn Row */}
              <a 
                href="https://linkedin.com/in/rohith-p-b-2b573a36b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col p-4 bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl transition-all cursor-pointer text-left"
              >
                <div className="flex justify-between items-center text-[9px] text-white/40 uppercase mb-1">
                  <span>LINKEDIN URL</span>
                  <span className="text-white/45 group-hover:text-white/90 transition-colors flex items-center gap-1">GO TO LINK <ExternalLink className="h-2.5 w-2.5" /></span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Linkedin className="h-4 w-4 text-[#fd5200]" />
                  <span className="text-xs sm:text-sm text-white/95 truncate">linkedin.com/in/rohith-p-b-2b573a36b</span>
                </div>
              </a>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowInterviewModal(false)}
                className="flex-1 text-center py-2.5 bg-[#fd5200]/10 hover:bg-[#fd5200]/20 text-[#fd5200] hover:text-white font-mono text-xs font-bold rounded-lg border border-[#fd5200]/20 hover:border-[#fd5200]/40 transition-all cursor-pointer uppercase tracking-wider"
              >
                CLOSE PORT
              </button>
            </div>
          </div>
        </div>
      )}

    </FlowArt>
  );
}
