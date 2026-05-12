import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  MapPin, 
  Target, 
  Globe, 
  Mail, 
  Link as LinkIcon,
  Search,
  Filter,
  Copy,
  CheckCircle2,
  X,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { agenciesData, Agency } from '../data/agencies';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [selectedAgency, setSelectedAgency] = useState<Agency | null>(null);
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const filteredAgencies = agenciesData.filter(agency => {
    const matchesSearch = agency.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          agency.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agency.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || agency.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const generateEmailTemplate = (agency: Agency) => {
    return `Subject: Partnership Opportunity: Video & AI Services Collaboration

Hi ${agency.name} Team,

I've been following your impressive work in ${agency.category}, especially your success in ${agency.region}. 

I run CreativoAI, where we merge creative services with AI automation. Given your expertise in ${agency.category} and our complementary services, I see a strong potential for a strategic partnership—specifically around sharing resources or a revenue-share model.

I noticed ${agency.partnershipPotential.toLowerCase()}. I'd love to chat briefly next week to see if there's a mutual fit to scale our offerings together.

Are you open to a quick 15-minute intro call?

Best regards,

[Your Name]
Founder, CreativoAI`;
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] text-slate-50 font-sans selection:bg-[var(--color-brand-purple)] selection:text-white">
      {/* Navigation */}
      <header className="bg-[var(--color-brand-surface)] border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Back</span>
            </Link>
            <div className="h-6 w-px bg-white/10 mx-2" />
            <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-purple)]">
                Partner Hub
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="px-3 py-1 bg-white/5 rounded-full text-slate-300 border border-white/10">
              {filteredAgencies.length} Agencies
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-display font-medium text-white mb-2">Agency Database</h1>
            <p className="text-slate-400">Curated list of potential partners in your target markets.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search agencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 bg-white/5 border border-white/10 focus:border-[var(--color-brand-cyan)] rounded-xl pl-10 pr-4 py-2.5 outline-none text-sm transition-colors text-white placeholder:text-slate-500"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full sm:w-auto bg-white/5 border border-white/10 focus:border-[var(--color-brand-cyan)] rounded-xl pl-10 pr-8 py-2.5 outline-none text-sm transition-colors text-white appearance-none cursor-pointer"
              >
                <option value="All" className="bg-[var(--color-brand-surface)]">All Niches</option>
                <option value="Video Editing" className="bg-[var(--color-brand-surface)]">Video Editing</option>
                <option value="SaaS Copywriting" className="bg-[var(--color-brand-surface)]">SaaS Copywriting</option>
                <option value="AI Automation" className="bg-[var(--color-brand-surface)]">AI Automation</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgencies.map((agency) => (
            <motion.div 
              key={agency.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[var(--color-brand-surface)] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col h-full"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  agency.category === 'Video Editing' ? 'bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)]' :
                  agency.category === 'SaaS Copywriting' ? 'bg-[var(--color-brand-purple)]/10 text-[var(--color-brand-purple)]' :
                  'bg-[var(--color-brand-magenta)]/10 text-[var(--color-brand-magenta)]'
                }`}>
                  <Building size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-lg text-white truncate" title={agency.name}>
                    {agency.name}
                  </h3>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${
                    agency.category === 'Video Editing' ? 'text-[var(--color-brand-cyan)]' :
                    agency.category === 'SaaS Copywriting' ? 'text-[var(--color-brand-purple)]' :
                    'text-[var(--color-brand-magenta)]'
                  }`}>
                    {agency.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6 flex-1 text-sm">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin size={16} className="text-slate-500 flex-shrink-0 mt-0.5" />
                  <span>{agency.region}</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Target size={16} className="text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2" title={agency.partnershipPotential}>{agency.partnershipPotential}</span>
                </div>
                {agency.website !== '#' && (
                  <div className="flex items-start gap-2.5 text-slate-300">
                    <Globe size={16} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <a href={agency.website} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-cyan)] transition-colors truncate">
                      {agency.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => setSelectedAgency(agency)}
                className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Mail size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                Draft Outreach
              </button>
            </motion.div>
          ))}
          
          {filteredAgencies.length === 0 && (
            <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
              <Search size={48} className="text-white/10 mb-4" />
              <p className="text-xl text-slate-300 mb-2">No agencies found</p>
              <p className="text-slate-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>

      {/* Draft Modal */}
      <AnimatePresence>
        {selectedAgency && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAgency(null)}
              className="absolute inset-0 bg-[var(--color-brand-dark)]/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[var(--color-brand-surface)] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="px-6 py-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                <div className="flex flex-col">
                  <h3 className="font-display font-medium text-xl">Outreach Draft</h3>
                  <p className="text-sm text-slate-400">Template customized for {selectedAgency.name}</p>
                </div>
                <button 
                  onClick={() => setSelectedAgency(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <div className="bg-black/20 rounded-2xl p-5 border border-white/5 font-mono text-sm leading-relaxed text-slate-300 whitespace-pre-wrap">
                  {generateEmailTemplate(selectedAgency)}
                </div>
              </div>
              
              <div className="px-6 py-5 border-t border-white/10 bg-white/[0.02] flex justify-end gap-3">
                <button 
                  onClick={() => setSelectedAgency(null)}
                  className="px-5 py-2.5 rounded-xl hover:bg-white/5 text-sm font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => copyToClipboard(generateEmailTemplate(selectedAgency), selectedAgency.id)}
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-brand-cyan)] hover:bg-[var(--color-brand-cyan)]/90 text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {copiedStates[selectedAgency.id] ? (
                    <>
                      <CheckCircle2 size={16} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy Template
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
