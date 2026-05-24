/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, Phone, MapPin, Award, Terminal, Code2, GraduationCap, ChevronRight, GitBranch, TerminalSquare, ExternalLink } from 'lucide-react';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface FlowContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  scrollProgress: number;
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const useFlow = () => {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error('useFlow must be used within a FlowContainer');
  }
  return context;
};

// Section Metadata
export const SECTIONS = [
  { id: 'hero', label: '01 // LAUNCH' },
  { id: 'about', label: '02 // PROFILE' },
  { id: 'skills', label: '03 // MATRIX' },
  { id: 'experience', label: '04 // SYSTEM' },
  { id: 'projects', label: '05 // SOURCE' },
  { id: 'certifications', label: '06 // CREDENTIALS' },
  { id: 'contact', label: '07 // CLIENT' }
];

interface FlowContainerProps {
  children: ReactNode;
}

export function FlowContainer({ children }: FlowContainerProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll progress listener for timeline
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      }
    });

    // Setup snap or markers if needed, but smooth scroll is preferred
  }, { scope: containerRef });

  const handleNavClick = (index: number) => {
    const targetElement = document.getElementById(SECTIONS[index].id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FlowContext.Provider value={{ activeIndex, setActiveIndex, scrollProgress }}>
      <div id="flow-container-root" ref={containerRef} className="relative min-h-screen bg-[#020205] text-[#f3f4f6]" style={{ scrollBehavior: 'smooth' }}>
        
        {/* Futuristic Cyber Grid Background */}
        <div id="cyber-grid" className="pointer-events-none fixed inset-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />

        {/* Ambient Top Glow */}
        <div id="ambient-top-glow" className="pointer-events-none fixed top-0 left-1/4 w-1/2 h-[35vh] rounded-full filter blur-[140px] opacity-20 bg-gradient-to-r from-electric-blue via-electric-cyan to-transparent" />

        {/* Dynamic Interactive FlowArt Component */}
        <FlowArt />

        {/* Static Side Navigation HUD */}
        <nav id="hud-nav" className="fixed top-0 left-0 bottom-0 z-30 hidden w-28 flex-col items-center justify-between py-10 border-r border-[#1a1c30]/40 bg-[#020205]/40 backdrop-blur-md md:flex">
          {/* Logo / Monogram */}
          <div id="hud-logo" className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded border border-electric-cyan bg-[#0a0f1d] font-mono text-sm font-bold text-electric-cyan shadow-[0_0_12px_rgba(0,255,255,0.2)]">
              RP
            </div>
            <span className="mt-2 font-mono text-[9px] tracking-wider text-gray-500">v1.2.4</span>
          </div>

          {/* Node connections */}
          <div id="hud-progress-nodes" className="relative flex flex-col items-center gap-7 my-auto">
            {/* Scroll line background */}
            <div className="absolute top-1 bottom-1 w-[2px] bg-[#1a1c30]" />
            {/* Active filled line */}
            <div 
              style={{ height: `${scrollProgress * 100}%` }} 
              className="absolute top-1 w-[2px] bg-gradient-to-b from-electric-cyan via-electric-blue to-electric-green transition-all" 
            />

            {SECTIONS.map((section, idx) => (
              <button 
                id={`hud-node-btn-${idx}`}
                key={section.id} 
                onClick={() => handleNavClick(idx)}
                className="group relative z-10 flex h-4 w-4 items-center justify-center"
                title={section.label}
              >
                {/* Node center dot */}
                <div 
                  className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                    idx === activeIndex 
                      ? 'bg-electric-cyan border-electric-cyan scale-125 shadow-[0_0_8px_#00ffff]' 
                      : 'bg-[#020205] border-[#474a68] hover:border-electric-cyan group-hover:scale-110'
                  }`} 
                />

                {/* Floating labels with offset */}
                <span className={`absolute left-8 whitespace-nowrap font-mono text-[10px] tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 ${
                  idx === activeIndex ? 'text-electric-cyan font-bold scale-105' : 'text-gray-400'
                }`}>
                  {section.label}
                </span>
                
                {/* Visual cursor highlight info */}
                {idx === activeIndex && (
                  <span className="absolute left-8 whitespace-nowrap font-mono text-[10px] tracking-widest text-electric-cyan font-bold scale-105 opacity-100">
                    {section.label}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Core Telemetry Display */}
          <div id="hud-lat" className="font-mono text-[9px] tracking-widest text-[#474a68] uppercase text-center rotate-180 writing-mode-vertical select-none">
            SYS__ONLINE // 10.45° N
          </div>
        </nav>

        {/* Content Wrapper */}
        <main className="md:pl-28 relative z-10">
          {children}
        </main>
      </div>
    </FlowContext.Provider>
  );
}

export function FlowSection({ children, id, index }: { children: ReactNode; id: string; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setActiveIndex } = useFlow();

  useGSAP(() => {
    // Entrance animations for children of this specific section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
        toggleActions: 'play none none reverse'
      }
    });

    // Capture everything inside the section that we want to stagger animate
    const animElements = sectionRef.current?.querySelectorAll('.gsap-fade-in');
    
    if (animElements && animElements.length > 0) {
      tl.fromTo(animElements, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', clearProps: 'transform,opacity' }
      );
    }
  }, { scope: sectionRef });

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className="relative min-h-[100vh] flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 border-b border-[#111222]/80"
    >
      <div className="max-w-4xl mx-auto w-full z-10">
        {children}
      </div>
    </section>
  );
}

// FlowArt: Background Visuals that Morph & React to Scroll States and Positions
function FlowArt() {
  const { activeIndex, scrollProgress } = useFlow();
  const artRef = useRef<HTMLDivElement>(null);
  const spinningCircleRef = useRef<SVGSVGElement>(null);
  const wireframeGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Continuously rotate our background spinning geometric elements based on pure time
    gsap.to('.ambient-rotator-clockwise', {
      rotation: 360,
      duration: 50,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%'
    });

    gsap.to('.ambient-rotator-counter', {
      rotation: -360,
      duration: 35,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%'
    });
  }, { scope: artRef });

  // Rotate elements depending directly on scroll progress as well
  const scrollRotation = scrollProgress * 720;
  // Parallax shifts dynamically based on active index
  const gridYShift = -scrollProgress * 150;

  return (
    <div 
      id="flow-art-layer"
      ref={artRef} 
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden flex items-center justify-end"
    >
      {/* Sticky Right Visual Area */}
      <div id="sticky-visual-portal" className="relative mr-5 w-[85%] sm:w-[50%] md:w-[45%] h-[80%] flex items-center justify-center opacity-30 md:opacity-75 transition-opacity duration-700">
        
        {/* Parallax Wireframe Plane Grid (Perspective Look) */}
        <div 
          ref={wireframeGridRef}
          style={{ transform: `translateY(${gridYShift}px) rotateX(60deg) rotateZ(12deg)` }}
          className="absolute top-1/4 h-[800px] w-[800px] opacity-15 border border-dashed border-[#1a3de8]/30 transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#020205] to-[#020205]" />
          {/* Internal diagnostic lines */}
          <div className="h-[2px] w-full bg-[#00ffff]/10 absolute top-1/3 animate-pulse" />
          <div className="h-[2px] w-full bg-[#00ffff]/10 absolute top-2/3" />
          <div className="w-[2px] h-full bg-[#1a3de8]/15 absolute left-1/3" />
          <div className="w-[2px] h-full bg-[#1a3de8]/15 absolute left-2/3" />
        </div>

        {/* Global Floating Technical Elements */}
        <div className="absolute right-10 top-1/4 hidden lg:flex flex-col text-right font-mono text-[9px] text-[#474a68]/60 space-y-1 select-none">
          <div>FLOW_GRAPH // MATRIX_STABLE_v1</div>
          <div>ACCEL_X // {(scrollProgress * 2.5).toFixed(3)}G</div>
          <div>SCROLL_DEPTH // {(scrollProgress * 100).toFixed(1)}%</div>
          <div>ACTIVE_MODULE // NODE_0{activeIndex + 1}</div>
          <div className="text-electric-cyan animate-pulse">● SIGNAL_ONLINE // ACTIVE</div>
        </div>

        {/* SVG Hologram Circle Canvas - Rotates on Scroll */}
        <svg 
          ref={spinningCircleRef}
          id="spinning-vector-hologram"
          viewBox="0 0 400 400" 
          className="w-[85%] max-w-[450px] aspect-square text-electric-cyan"
          style={{ transform: `rotate(${scrollRotation}deg)` }}
        >
          {/* Core Outer Ring */}
          <circle 
            cx="200" 
            cy="200" 
            r="180" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            strokeDasharray="4 8"
            className="opacity-25"
          />

          {/* Rotating Ring with gaps */}
          <circle 
            cx="200" 
            cy="200" 
            r="165" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeDasharray="100 40 10 20 50 30"
            className="opacity-40 ambient-rotator-clockwise"
          />
          <circle 
            cx="200" 
            cy="200" 
            r="150" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="2 4"
            className="opacity-30"
          />

          {/* Counter Rotating Core Hexagon/SubRing */}
          <circle 
            cx="200" 
            cy="200" 
            r="120" 
            fill="none" 
            stroke="#1A3DE8" 
            strokeWidth="1.5" 
            strokeDasharray="60 30 140 10"
            className="opacity-50 ambient-rotator-counter"
          />

          {/* Crosshairs */}
          <path d="M 200 10 L 200 40" stroke="currentColor" strokeWidth="1" className="opacity-45" />
          <path d="M 200 360 L 200 390" stroke="currentColor" strokeWidth="1" className="opacity-45" />
          <path d="M 10 200 L 40 200" stroke="currentColor" strokeWidth="1" className="opacity-45" />
          <path d="M 360 200 L 390 200" stroke="currentColor" strokeWidth="1" className="opacity-45" />

          {/* Interactive Core Morph Elements */}
          {/* Hero Mode (ActiveIndex 0) */}
          <g className={`transition-opacity duration-1000 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <polygon points="200,140 252,170 252,230 200,260 148,230 148,170" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30 animate-pulse" />
            <circle cx="200" cy="200" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3 animate-spin" />
            <path d="M 200 160 L 200 240 M 160 200 L 240 200" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
          </g>

          {/* About Mode (ActiveIndex 1) */}
          <g className={`transition-opacity duration-1000 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <rect x="150" y="150" width="100" height="100" fill="none" stroke="#39ff14" strokeWidth="1" className="opacity-40" />
            <line x1="150" y1="200" x2="250" y2="200" stroke="#39ff14" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
            {/* Displaying CGPA text inside background artwork */}
            <text x="200" y="205" fill="#39ff14" textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="bold" className="shadow-lg select-none [direction:ltr]">
              CGPA // 9.05
            </text>
          </g>

          {/* Skills Mode (ActiveIndex 2) */}
          <g className={`transition-opacity duration-1000 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 50" className="opacity-60" />
            <polygon points="200,120 269,160 269,240 200,280 131,240 131,160" fill="none" stroke="currentColor" strokeWidth="1" />
            <polygon points="200,100 286,150 286,250 200,300 114,250 114,150" fill="none" stroke="#1A3DE8" strokeWidth="0.8" className="opacity-30" />
          </g>

          {/* Experience Mode (ActiveIndex 3) */}
          <g className={`transition-opacity duration-1000 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>
            <path d="M 120 200 Q 160 100 200 200 T 280 200" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-40" />
            <path d="M 120 200 Q 160 300 200 200 T 280 200" fill="none" stroke="#1A3DE8" strokeWidth="1" className="opacity-40" />
            <circle cx="120" cy="200" r="4" fill="currentColor" />
            <circle cx="200" cy="200" r="4" fill="#1A3DE8" />
            <circle cx="280" cy="200" r="4" fill="currentColor" />
          </g>

          {/* Projects Mode (ActiveIndex 4) */}
          <g className={`transition-opacity duration-1000 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0'}`}>
            <rect x="140" y="140" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="30 5" />
            <rect x="160" y="160" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="140" y1="140" x2="260" y2="260" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
            <line x1="260" y1="140" x2="140" y2="260" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
          </g>

          {/* Certifications Mode (ActiveIndex 5) */}
          <g className={`transition-opacity duration-1000 ${activeIndex === 5 ? 'opacity-100' : 'opacity-0'}`}>
            <circle cx="200" cy="200" r="60" fill="none" stroke="#39ff14" strokeWidth="1" strokeDasharray="2 12" className="opacity-70 animate-spin" style={{ animationDuration: '20s' }} />
            <circle cx="200" cy="200" r="95" fill="none" stroke="#00ffff" strokeWidth="0.5" />
            <path d="M 200 80 A 120 120 0 0 1 320 200" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-40" />
            <path d="M 200 320 A 120 120 0 0 1 80 200" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-40" />
          </g>

          {/* Contact Mode (ActiveIndex 6) */}
          <g className={`transition-opacity duration-1000 ${activeIndex === 6 ? 'opacity-100' : 'opacity-0'}`}>
            <circle cx="200" cy="200" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="45" fill="none" stroke="currentColor" strokeWidth="0.7" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="200" cy="200" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-ping" style={{ animationDuration: '5s' }} />
          </g>

        </svg>

        {/* Outer Tech Coordinates Overlay Ring */}
        <div className="absolute inset-0 border border-[#1a1c30]/15 rounded-full pointer-events-none scale-105 animate-pulse hidden lg:block" />
        
      </div>
    </div>
  );
}
