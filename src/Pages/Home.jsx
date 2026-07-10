import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClubAutomationProject from './Appscript';
import { 
  Mail, 
  Code, 
  Terminal, 
  Database, 
  Settings, 
  PenTool, 
  Video, 
  ExternalLink,
  ChevronDown,
  Users,
  Briefcase
} from 'lucide-react';

// Custom SVG Icons to replace the removed Lucide Brand Icons
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

// Navbar

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
    
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-xl font-bold text-white tracking-tighter hover:text-cyan-400 transition-colors text-left cursor-pointer"
          >
            <span className="text-cyan-400">/ </span>MANOJ
          </button>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors cursor-pointer">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-colors cursor-pointer">Experience</button>
          </div>
        </div>
      </nav>



      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-block mb-4 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 rounded-full text-cyan-300 text-sm font-semibold tracking-wide">
            B.Tech • 2nd Year CSE @ NMAMIT
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Turning ideas into <br></br> <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">digital experiences </span> <br className="hidden md:block" />
            and automating <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500"> workflows</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Tech enthusiast with hands-on experience building end-to-end full-stack web applications using the MERN stack. Actively exploring the software and AI fields, and automating workflows.
          </p>
         

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-lg transition-all flex items-center gap-2"
            >
              View My Work <ChevronDown size={18} />
            </button>
            <a href="https://github.com/ManojHegde-2025" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2 border border-slate-700">
              <GithubIcon size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/manoj-m-hegde-3a21a0373/" target="_blank" rel="noreferrer" className="bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2 border border-[#0077B5]/30">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/manoj_hegde__?igsh=Mmxpb2JybTJra3ln" target="_blank" rel="noreferrer" className="bg-[#E1306C]/10 hover:bg-[#E1306C]/20 text-[#E1306C] font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2 border border-[#E1306C]/30">
              <InstagramIcon size={18} /> Instagram
            </a>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Terminal className="text-cyan-400" /> About Me
              </h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  I am a Computer Science and Engineering student at NMAMIT 
                </p>
                <p>
                  I enjoy building end-to-end full-stack web applications using the MERN stack and setting up automations using Docker, n8n, and make.com. <br></br>I do Vibe coding quite a bit-going with the creative flow-but always maintaining a crystal-clear vision of what I want the final application to achieve.</p>
                <p>
                  Beyond coding, I have Knowlwdge about video editing and graphic designing.<br></br> I am fluent in English, Kannada, and Hindi.
                </p>
              </div>
            </div>
            <div>
            <a href="https://github.com/ManojHegde-2025" target="_blank" rel="noreferrer" className="w-full md:w-1/ aspect-auto bg-slate-800 rounded-2xl border border-slate-700 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-cyan-500/50 transition-all cursor-pointer">

              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Code size={64} className="text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Full-Stack Developer</h3>
              <p className="text-sm text-slate-400">+91 6363548272 <br/> manojhegde198@gmail.com</p>
            </a>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Database className="text-cyan-400" /> Technical & Core Arsenal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory 
              title="Languages & Scripts" 
              icon={<Code size={20} />}
              skills={['Python', 'C', 'JavaScript (ES6+)', 'Google Apps Script', 'HTML5', 'CSS3']}
            />
            <SkillCategory 
              title="Frontend & Backend" 
              icon={<Database size={20} />}
              skills={['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB']}
            />
            <SkillCategory 
              title="DevOps & Automations" 
              icon={<Settings size={20} />}
              skills={['Docker', 'Git/GitHub', 'n8n', 'make.com']}
            />
            <SkillCategory 
              title="Creative Media" 
              icon={<PenTool size={20} />}
              skills={['Video Editing', 'Poster Designing', 'Graphic Design', 'Photography']}
            />
            <SkillCategory 
              title="Soft Skills" 
              icon={<Users size={20} />}
              skills={['Problem Solving', 'Teamwork', 'Time Management', 'Leadership', 'Communication', 'Critical Thinking']}
            />
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <ExternalLink className="text-cyan-400" /> Featured Projects
          </h2>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Pilot Portal"
              subtitle="Full Stack Flight Logbook Web App"
              description="A comprehensive web application built completely on the MERN stack to log and track flight metrics. Utilizes a responsive React frontend and a secure Node/Express API."
              tags={['React.js', 'Node.js', 'Express.js', 'MongoDB']}
              link="https://aeroclub-nitte-pilot-portal.vercel.app/login" 
            />
            <ProjectCard 
              title="Club Membership Workflow"
              subtitle="Administrative Automation Pipeline"
              description="Custom administrative pipeline to streamline member onboarding. Deployed automated scripts to handle organizational management seamlessly."
              tags={['Google Apps Script', 'Automation']}
              // link= ""
            />
          

            <ProjectCard 
              title="Restaurant Web Interface"
              subtitle="Responsive UI Layout"
              description="A visually appealing and highly responsive frontend architecture for a restaurant platform, focusing on mobile-first design."
              tags={['HTML5', 'CSS3']}
              link="https://amrit-veda.netlify.app" 
            />
            <ProjectCard 
              title="Responsive Restaurant Chatbot"
              subtitle="AI & Automation Integration"
              description="An automated, conversational chatbot designed to handle dynamic restaurant inquiries using advanced workflow integration platforms."
              tags={['n8n', 'make.com', 'Automation Tools']}
              // link="/path/to/your/workflow-image-2.png" 
            />
          </div>
          
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase className="text-cyan-400" /> Experience
          </h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            
            {/* Web Developer  */}
            <ExperienceItem 
              role="Web Developer"
              company="Aeroclub"
              date="Present"
              description="Spearheading the digital web presence of the club. Bridging the gap between software systems and technical workflows."
              link="https://github.com/ManojHegde-2025"
              icon={<GithubIcon size={16} className="fill-current" />}
            />

            {/* Social Media Core Member  */}
            <ExperienceItem 
              role="Social Media Core Member"
              company="Aeroclub"
              date="Present"
              description="Serving as the primary Video Editor and Poster Designer. Managing the digital media pipeline for the club, producing high-quality video content, and designing impactful posters to drive engagement and technical communications."
              link="https://www.instagram.com/manoj_hegde__?igsh=Mmxpb2JybTJra3ln"
              icon={<Video size={16} className="fill-current" />}
            />

          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* <div className="text-xl font-bold text-white tracking-tighter">
            <span className="text-cyan-400">/</span> MANOJ
          </div> */}
         
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-xl font-bold text-white tracking-tighter hover:text-cyan-400 transition-colors text-left cursor-pointer"
        >
          <span className="text-cyan-400">/ </span>MANOJ
        </button>


          <div className="flex gap-6">
            <a href="https://github.com/ManojHegde-2025" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manoj-m-hegde-3a21a0373/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0077B5] transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://www.instagram.com/manoj_hegde__?igsh=Mmxpb2JybTJra3ln" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#E1306C] transition-colors">
              <InstagramIcon size={24} />
            </a>
            {/* <a href="mailto:manojhegde128@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
             </a> */}
          
          </div>

        </div>
        <div className="max-w-5xl mx-auto mt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} built by Manoj
        </div>
      </footer>
    </div>
  );
}

// Sub-components
function SkillCategory({ title, icon, skills }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        {icon} {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}


function ProjectCard({ title, subtitle, description, tags, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="block bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] transition-all group  flex-col h-full cursor-pointer">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-cyan-500/80 text-sm font-medium mt-1">{subtitle}</p>
      </div>
      <p className="text-slate-400 grow mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs font-mono px-2 py-1 bg-cyan-950/50 text-cyan-300 border border-cyan-900/50 rounded">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}


function ExperienceItem({ role, company, date, description, link, icon }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      {/* The center icon dot */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-cyan-500 text-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10 hover:bg-cyan-400 transition-colors">
        <a href={link} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-full text-slate-950">
          {icon || <Video size={16} className="fill-current" />}
        </a>
      </div>
      
      
      <a 
        href={link} 
        target="_blank" 
        rel="noreferrer" 
        className="block w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] transition-all cursor-pointer group/card"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">

          <h3 className="font-bold text-xl text-white group-hover/card:text-cyan-400 transition-colors">
            {role}
          </h3>
          <span className="text-sm font-medium text-cyan-400 md:ml-2 whitespace-nowrap">{date}</span>
        </div>
        <div className="text-slate-400 font-medium mb-4">{company}</div>
        <p className="text-slate-300 leading-relaxed">
          {description}
        </p>
      </a>
    </div>
  );
}
