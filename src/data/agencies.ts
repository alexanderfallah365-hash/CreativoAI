export interface Agency {
  id: string;
  name: string;
  category: 'Video Editing' | 'SaaS Copywriting' | 'AI Automation';
  region: string;
  description: string;
  website: string;
  partnershipPotential: string;
}

export const agenciesData: Agency[] = [
  {
    id: "1",
    name: "Increditors",
    category: "Video Editing",
    region: "USA, UK, Brazil",
    description: "Global video editing service offering commercial post-production, YouTube content, 2D/3D animation, and social media reels editing.",
    website: "https://increditors.com/",
    partnershipPotential: "Already works with agencies globally. High potential for referral or white-label partnerships."
  },
  {
    id: "2",
    name: "Veedyou Media",
    category: "Video Editing",
    region: "Global",
    description: "Offers video editing services with standard turnaround of 7-10 days and expedite 48-hour option.",
    website: "https://www.veedyou.com/",
    partnershipPotential: "Good for overflow project outsourcing."
  },
  {
    id: "3",
    name: "Trendy Grandad",
    category: "Video Editing",
    region: "UK (London)",
    description: "Excellent for YouTube & social-first strategy.",
    website: "#",
    partnershipPotential: "Strong candidate for UK-based collaboration."
  },
  {
    id: "4",
    name: "Sway Copy",
    category: "SaaS Copywriting",
    region: "USA/Canada",
    description: "Helps companies like HubSpot, Wave, Unbounce achieve results like doubled free-trial conversion rates, 35% increase in demo requests, and 27% increase in product signups.",
    website: "https://swaycopy.com/",
    partnershipPotential: "High-value SaaS copywriting partnerships. Great for strategic alliances."
  },
  {
    id: "5",
    name: "Mighty Fine Copy",
    category: "SaaS Copywriting",
    region: "USA",
    description: "B2B SaaS specialist with 9 years experience offering messaging guides, landing page copy, and conversion-focused copywriting.",
    website: "https://www.mightyfinecopy.com/",
    partnershipPotential: "Specialized B2B collaborations."
  },
  {
    id: "6",
    name: "Conversion Factory",
    category: "SaaS Copywriting",
    region: "Global",
    description: "SaaS copywriting + design agency offering on-demand marketing with no scopes or billable hours model.",
    website: "https://www.conversionfactory.co/services/saas-copywriting-agency",
    partnershipPotential: "Potential for subscription-model white-labeling."
  },
  {
    id: "7",
    name: "DevsData LLC",
    category: "AI Automation",
    region: "USA, Canada, Europe",
    description: "Leading AI automation agency specializing in AI, machine learning, and data science with flexible, personalized services.",
    website: "https://devsdata.com/ai-automation-agency-top-firms/",
    partnershipPotential: "Strong enterprise partnership potential with global reach."
  },
  {
    id: "8",
    name: "Bitcot",
    category: "AI Automation",
    region: "USA",
    description: "AI automation agency helping optimize accounting, marketing, operations, and customer support with intelligent AI and automation solutions.",
    website: "https://www.bitcot.com/services/ai-automation-agency/",
    partnershipPotential: "Good for operational collaborations."
  },
  {
    id: "9",
    name: "RevAI (TekRevol)",
    category: "AI Automation",
    region: "USA",
    description: "Designs and develops workflows, integrations, and AI models with pricing from $30K-$60K for smaller projects to $100K-$500K+ for enterprise solutions.",
    website: "https://ai.tekrevol.com/ai-automation",
    partnershipPotential: "Enterprise tier referral partnership."
  },
  {
    id: "10",
    name: "Cate",
    category: "AI Automation",
    region: "Kenya/Liberia Support",
    description: "AI Automation agency with a strong partnership program offering revenue share.",
    website: "#",
    partnershipPotential: "BEST PARTNERSHIP OPPORTUNITY - Offering 20-50% commission model for sales partners."
  }
];
