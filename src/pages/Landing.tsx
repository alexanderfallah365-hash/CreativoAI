import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Video, 
  PenTool, 
  Cpu, 
  ArrowRight, 
  Users, 
  Star, 
  Zap, 
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Handle scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[var(--color-brand-dark)] text-slate-50 font-sans selection:bg-[var(--color-brand-purple)] selection:text-white">
      
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[var(--color-brand-magenta)]/15 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 50, 0], 
            y: [0, 100, -50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[var(--color-brand-purple)]/15 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, -100, 0], 
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-[var(--color-brand-cyan)]/15 blur-[100px]"
        />
      </div>

      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[var(--color-brand-dark)]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)]">
              CreativoAI
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollTo('stats')} className="hover:text-white transition-colors cursor-pointer">Impact</button>
            <Link to="/dashboard" className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
              Partner Hub
            </Link>
            <button 
              onClick={() => scrollTo('waitlist')}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm text-white cursor-pointer"
            >
              Join Waitlist
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-[var(--color-brand-surface)] border-b border-white/10"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                <button onClick={() => scrollTo('services')} className="text-left text-slate-300 py-2 cursor-pointer">Services</button>
                <button onClick={() => scrollTo('stats')} className="text-left text-slate-300 py-2 cursor-pointer">Impact</button>
                <Link to="/dashboard" className="text-left text-slate-300 py-2 cursor-pointer">Partner Hub</Link>
                <button onClick={() => scrollTo('waitlist')} className="text-left text-[var(--color-brand-cyan)] font-medium py-2 cursor-pointer">Join Waitlist</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-cyan)] animate-pulse" />
              <span className="text-sm font-semibold text-slate-300 uppercase tracking-widest">Premium Creative Agency</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tight mb-8"
          >
            Create. Write. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] via-[var(--color-brand-purple)] to-[var(--color-brand-magenta)]">
              Automate.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12"
          >
            We merge human creativity with artificial intelligence to deliver exceptional video content, compelling copy, and intelligent workflows at unprecedented speeds.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => scrollTo('waitlist')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--color-brand-dark)] font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Get Early Access
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollTo('services')}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium text-white cursor-pointer"
            >
              Explore Services
            </button>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-24 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center text-center pt-8 md:pt-0"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-cyan)]/20 flex items-center justify-center text-[var(--color-brand-cyan)] mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-medium mb-2">500<span className="text-[var(--color-brand-cyan)]">+</span></h3>
                <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest font-semibold">Projects Delivered</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center pt-8 md:pt-0"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-purple)]/20 flex items-center justify-center text-[var(--color-brand-purple)] mb-4">
                  <Star size={24} />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-medium mb-2">98<span className="text-[var(--color-brand-purple)]">%</span></h3>
                <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest font-semibold">Client Satisfaction</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center pt-8 md:pt-0"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-magenta)]/20 flex items-center justify-center text-[var(--color-brand-magenta)] mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-medium mb-2">3<span className="text-[var(--color-brand-magenta)]">x</span></h3>
                <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest font-semibold">Faster Turnaround</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">Our Capabilities</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">We leverage cutting-edge tech and elite human talent to scale your brand's operations and content.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative p-px rounded-[32px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-cyan)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-full bg-[var(--color-brand-surface)] rounded-[31px] p-8 md:p-10 relative z-10 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-cyan)]/10 flex items-center justify-center text-[var(--color-brand-cyan)] mb-8">
                  <Video size={28} />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 text-white">Video Editing</h3>
                <p className="text-slate-400 leading-relaxed mb-8">Cinematic edits, short-form viral hooks, and polished corporate videos, edited to perfection and optimized for every platform.</p>
                <ul className="space-y-3">
                  {['YouTube & Long-form', 'TikToks & Reels', 'Motion Graphics', 'Color Grading'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-[var(--color-brand-cyan)] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="group relative p-px rounded-[32px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-purple)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-full bg-[var(--color-brand-surface)] rounded-[31px] p-8 md:p-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-purple)]/10 flex items-center justify-center text-[var(--color-brand-purple)] mb-8">
                  <PenTool size={28} />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 text-white">Copywriting</h3>
                <p className="text-slate-400 leading-relaxed mb-8">Persuasive, conversion-driven copy that captures your brand's voice and turns casual readers into loyal customers.</p>
                <ul className="space-y-3">
                  {['Landing Pages', 'Email Newsletters', 'Ad Creatives', 'Blog Articles'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-[var(--color-brand-purple)] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="group relative p-px rounded-[32px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-magenta)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-full bg-[var(--color-brand-surface)] rounded-[31px] p-8 md:p-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-magenta)]/10 flex items-center justify-center text-[var(--color-brand-magenta)] mb-8">
                  <Cpu size={28} />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 text-white">AI Automation</h3>
                <p className="text-slate-400 leading-relaxed mb-8">Custom workflows and AI agent integrations that eliminate busywork, freeing you to focus on strategy and growth.</p>
                <ul className="space-y-3">
                  {['Workflow Design', 'Custom Chatbots', 'CRM Integrations', 'Data Processing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-[var(--color-brand-magenta)] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 md:py-32 px-6">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-purple)]/20 to-[var(--color-brand-cyan)]/20 blur-[80px] opacity-60 -z-10 rounded-full" />
            
            <div className="bg-[var(--color-brand-surface)]/70 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">Join the Waitlist</h2>
              <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl mx-auto">
                We are currently accepting a limited number of clients. Join the waitlist to get early access to our premium suite of creative services.
              </p>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 md:p-8 max-w-md mx-auto flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-xl font-medium text-white mb-2">You're on the list!</h4>
                  <p className="text-green-200/80 text-sm">We'll reach out when a spot opens up.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto relative group">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="you@company.com" 
                        className={`w-full bg-black/20 border ${status === 'error' ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[var(--color-brand-purple)]'} rounded-xl px-5 py-4 outline-none text-white transition-colors placeholder:text-slate-500`}
                        disabled={status === 'loading'}
                      />
                      {status === 'error' && (
                        <p className="absolute -bottom-6 left-2 text-xs text-red-400">Please enter a valid email address.</p>
                      )}
                    </div>
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-white text-[var(--color-brand-dark)] px-8 py-4 rounded-xl font-semibold hover:bg-slate-200 transition-colors disabled:opacity-70 flex items-center justify-center min-w-[140px] cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-[var(--color-brand-dark)]/30 border-t-[var(--color-brand-dark)] rounded-full animate-spin" />
                      ) : (
                        'Join Now'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)]">
              CreativoAI
            </span>
          </div>
          
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} CreativoAI. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
