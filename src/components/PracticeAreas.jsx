import React, { useState, useEffect, useRef } from 'react';
import { Scale, Home, Users, Briefcase, ShieldCheck, FileText, Building2, Landmark, Award } from 'lucide-react';

const PracticeAreas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [showCTA, setShowCTA] = useState(false);
  const sectionRef = useRef(null);

  const practiceAreas = [
    {
      icon: Scale,
      title: 'Criminal Defense',
      description: 'Expert defense representation in all types of criminal cases including white-collar crimes, fraud, and serious offenses. Supreme Court appearances.',
      features: ['Murder & Assault (IPC 302, 307)', 'Fraud & White Collar (IPC 420)', 'Drug Offenses (NDPS Act)', 'Bail Applications'],
      ipcCodes: ['IPC 302 - Murder', 'IPC 307 - Attempt to Murder', 'IPC 420 - Cheating', 'IPC 120B - Criminal Conspiracy']
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Compassionate legal support for divorce, child custody, alimony, and domestic disputes with 25+ years of experience in family matters.',
      features: ['Divorce Proceedings', 'Child Custody', 'Alimony & Maintenance', 'Domestic Violence (IPC 498A)'],
      ipcCodes: ['IPC 498A - Cruelty by Husband', 'Hindu Marriage Act 1955', 'Domestic Violence Act 2005', 'Guardians & Wards Act 1890']
    },
    {
      icon: Home,
      title: 'Property Law',
      description: 'Comprehensive property dispute resolution including land disputes, title verification, property transactions, and real estate matters.',
      features: ['Land Disputes', 'Title Verification', 'Property Transactions', 'Lease Agreements'],
      ipcCodes: ['IPC 441 - Criminal Trespass', 'IPC 447 - Punishment for Trespass', 'Transfer of Property Act 1882', 'Registration Act 1908']
    },
    {
      icon: Briefcase,
      title: 'Corporate Law',
      description: 'Strategic corporate legal services for businesses including contract drafting, compliance, mergers & acquisitions, and commercial disputes.',
      features: ['Contract Drafting', 'Business Formation', 'Mergers & Acquisitions', 'Commercial Disputes'],
      ipcCodes: ['Companies Act 2013', 'Contract Act 1872', 'IPC 405 - Criminal Breach of Trust', 'Negotiable Instruments Act 1881']
    },
    {
      icon: ShieldCheck,
      title: 'Consumer Rights',
      description: 'Protecting consumer rights against unfair trade practices, defective products, deficiency in services, and consumer fraud cases.',
      features: ['Product Liability', 'Service Deficiency', 'Unfair Practices', 'Compensation Claims'],
      ipcCodes: ['Consumer Protection Act 2019', 'IPC 420 - Cheating', 'Sale of Goods Act 1930', 'Standards of Weights Act 1976']
    },
    {
      icon: FileText,
      title: 'Civil Litigation',
      description: 'Experienced civil litigation services covering contracts, torts, injunctions, and various civil disputes in District and High Courts.',
      features: ['Contract Disputes', 'Tort Claims', 'Injunctions', 'Recovery Suits'],
      ipcCodes: ['CPC Order 39 - Injunctions', 'Specific Relief Act 1963', 'Limitation Act 1963', 'Indian Contract Act 1872']
    },
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'End-to-end real estate legal services including property documentation, RERA compliance, builder disputes, and possession issues.',
      features: ['RERA Matters', 'Builder Disputes', 'Documentation', 'Possession Delays'],
      ipcCodes: ['RERA Act 2016', 'IPC 406 - Criminal Breach of Trust', 'Registration Act 1908', 'Stamp Act 1899']
    },
    {
      icon: Landmark,
      title: 'Constitutional Law',
      description: 'Handling constitutional matters, public interest litigation, fundamental rights cases, and writ petitions in High Court and Supreme Court.',
      features: ['Writ Petitions', 'PIL Cases', 'Fundamental Rights', 'Judicial Review'],
      ipcCodes: ['Article 32 - Supreme Court Writ', 'Article 226 - High Court Writ', 'Article 21 - Right to Life', 'Article 14 - Equality Before Law']
    },
    {
      icon: Award,
      title: 'Arbitration & Mediation',
      description: 'Alternative dispute resolution through arbitration and mediation for faster, cost-effective resolution of commercial and civil disputes.',
      features: ['Commercial Arbitration', 'Mediation Services', 'Settlement Negotiations', 'Dispute Resolution'],
      ipcCodes: ['Arbitration & Conciliation Act 1996', 'Section 9 - Interim Measures', 'Section 34 - Setting Aside Award', 'Legal Services Authority Act 1987']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          setIsVisible(true);
          setTimeout(() => setShowHeading(true), 200);
          
          practiceAreas.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, 400 + (index * 150));
          });
          
          setTimeout(() => {
            setShowCTA(true);
          }, 400 + (practiceAreas.length * 150) + 300);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
            <Scale className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-semibold">Areas of Practice</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
            Comprehensive legal services across multiple practice areas with 25+ years of expertise
          </h2>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            const isCardVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 ${
                  isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-4 inline-flex p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {area.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* IPC Codes Section */}
                <div className="border-t border-slate-700/50 pt-4 mt-4">
                  <p className="text-xs font-semibold text-amber-400 mb-2">Relevant Legal Provisions:</p>
                  <div className="space-y-1">
                    {area.ipcCodes.map((code, idx) => (
                      <p key={idx} className="text-xs text-slate-400 font-mono bg-slate-800/50 px-2 py-1 rounded">
                        {code}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Hover Button */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full py-2 px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/20">
                    Consult Now
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center bg-gradient-to-r from-slate-800/50 via-slate-800/80 to-slate-800/50 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-8 transition-all duration-1000 ${
          showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-white mb-3">Need Legal Assistance?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get expert legal consultation from Advocate Deep Singh. Available 24/7 for emergency cases across Chandigarh, Mohali, and Panchkula.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919876543210" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1">
              Call Now: +91 98765 43210
            </a>
            <button className="px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-lg border border-slate-600 hover:bg-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;