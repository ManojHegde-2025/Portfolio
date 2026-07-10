import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ClubAutomationProject() {
  const [activeFlow, setActiveFlow] = useState('intake');

  const techStack = [
    "Google Apps Script", 
    "JavaScript ES6+", 
    "Gmail API", 
    "Drive API", 
    "Google Sheets"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500/30">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        
        {/* ─── NAVIGATION BACK HEADER ─── */}
        <nav className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors duration-200 group"
          >
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200">←</span> 
            Back to Portfolio
          </Link>
        </nav>

        {/* ─── HEADER TITLE SECTION ─── */}
        <header className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            <span>🚀 Serverless Engineering Case Study</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            ✈️ Automated Club Intake & Membership Pipeline
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
            A dual-stage serverless backend architecture that completely eliminated manual data entry, processing real-time onboarding and dynamic asset compilation for AeroClub Nitte.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900 text-indigo-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* ─── LINK CALLOUTS ─── */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a 
            href="https://github.com/yourusername/your-repo" // Replace with your link
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20"
          >
            <span>Inspect Source Code on GitHub</span>
          </a>
        </div>

        {/* ─── SYSTEM ARCHITECTURE VISUALIZATION ─── */}
        <section className="mb-16 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide">🗺️ Pipeline Logic Diagram</h2>
              <p className="text-sm text-slate-400 mt-1">Select an event-driven trigger to track runtime mutations.</p>
            </div>
            
            {/* Pipeline State Controller */}
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 inline-flex self-start sm:self-center shadow-inner">
              <button 
                onClick={() => setActiveFlow('intake')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${activeFlow === 'intake' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                1. Intake Workflow
              </button>
              <button 
                onClick={() => setActiveFlow('approval')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${activeFlow === 'approval' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
              >
                2. Approval Workflow
              </button>
            </div>
          </div>

          {/* Workflow Viewport */}
          <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-6 md:p-8 ,min-h-[160px] flex items-center justify-center shadow-inner">
            {activeFlow === 'intake' ? (
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center w-full max-w-3xl text-sm">
                <div className="bg-indigo-950/40 border border-indigo-900/60 p-4 rounded-xl w-full md:w-1/4">
                  <span className="block font-bold text-indigo-400 uppercase tracking-widest text-[10px] mb-1">Trigger Event</span>
                  <span className="text-white font-medium">Form Submission</span>
                </div>
                <div className="text-slate-700 font-bold rotate-90 md:rotate-0 text-lg">➔</div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl w-full md:w-1/3">
                  <span className="block font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-1">In-Memory Sync</span>
                  <span className="text-slate-200">Map Row Vectors & Structural Ref ID</span>
                </div>
                <div className="text-slate-700 font-bold rotate-90 md:rotate-0 text-lg">➔</div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl w-full md:w-1/3">
                  <span className="block font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-1">Network Out</span>
                  <span className="text-slate-200">Fetch Graphics Blobs & Fire Inline HTML Mail</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center w-full max-w-3xl text-sm">
                <div className="bg-emerald-950/40 border border-emerald-900/60 p-4 rounded-xl w-full md:w-1/4">
                  <span className="block font-bold text-emerald-400 uppercase tracking-widest text-[10px] mb-1">Admin Action</span>
                  <span className="text-white font-medium">Status Updated to "PAID"</span>
                </div>
                <div className="text-slate-700 font-bold rotate-90 md:rotate-0 text-lg">➔</div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl w-full md:w-1/3">
                  <span className="block font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-1">Sandbox Isolation</span>
                  <span className="text-slate-200">Clone Base Template & Inject Multi-Year Timeline</span>
                </div>
                <div className="text-slate-700 font-bold rotate-90 md:rotate-0 text-lg">➔</div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl w-full md:w-1/3">
                  <span className="block font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-1">Data Compilation</span>
                  <span className="text-slate-200">Render PDF Asset, Append DB Row, Reset Master</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─── DETAILED TEXT CASE STUDY ─── */}
        <section className="space-y-10 text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl">
          
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-indigo-400 mr-3">🎯</span> The Core Problem
            </h3>
            <p>
              Coordinating onboarding logistics and verifiable asset delivery manually for high volumes of applications introduced extreme administrative bottlenecks. Processing payments, checking academic track variations, compiling customized enrollment boarding passes, and maintaining layout fidelity across external firewalled mail apps was highly vulnerable to record overlaps.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-indigo-400 mr-3">🛠️</span> Engineering & System Optimization
            </h3>
            <p className="mb-4">
              To handle scaling demands within cloud limits, the application leverages lightweight event listeners orchestrating detached APIs:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-slate-400 text-sm md:text-base">
              <li>
                <strong className="text-slate-200">Vectorized Matrix Extractions:</strong> Bypassed repeated performance-draining read calculations by storing active spreadsheets directly in memory as single-fetch tracking arrays (`getValues()[0]`). This reduced processing execution delay and completely avoided daily script quota limits.
              </li>
              <li>
                <strong className="text-slate-200">Sandbox Isolation Pattern:</strong> Prevented template file lockups or corruptions from simultaneous multi-user data streams by implementing an ephemeral sandbox mechanism via the Drive API. The pipeline temporarily duplicates baseline tracking files, maps tokens dynamically, processes the PDF blob, and cleans up after dispatch.
              </li>
              <li>
                <strong className="text-slate-200">Inline Binary Graphics:</strong> Eliminated broken design assets caused by restrictive company email filters by wrapping global templates around raw runtime binary graphics fetched using `UrlFetchApp`.
              </li>
            </ul>
          </div>

          <div className="p-6 bg-slate-900/60 border-l-4 border-indigo-500 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <span className="text-indigo-400 mr-2">📈</span> Business & Technical Outcomes
            </h3>
            <p className="text-sm md:text-base text-slate-400">
              Shifted management completely into an automated, zero-touch lifecycle. Tracking hours dropped down to zero, asset transmission latency became real-time, and data consistency vulnerabilities across structural spreadsheet databases were solved completely.
            </p>
          </div>

        </section>

      </div>
    </div>
  );
}