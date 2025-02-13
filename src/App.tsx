import React, { useEffect, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import { Countdown } from './components/Countdown';
import { DoorOpen, Coins, Users, Rocket, Lock, TrendingUp, Shield, Star } from 'lucide-react';

function App() {
  const launchDate = new Date('2025-02-15T19:00:00Z');
  const parallaxRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          const offset = window.pageYOffset;
          const speed = 0.15;
          const direction = index % 2 === 0 ? 1 : -1;
          const maxOffset = 50;
          const parallaxOffset = Math.min(Math.abs(offset * speed), maxOffset) * direction;
          ref.style.transform = `translateY(${parallaxOffset}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 text-white relative">
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>






      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 group">
              <Brain className="w-8 h-8 text-purple-400 transform transition-transform group-hover:scale-110" />
              <span className="font-bold text-xl">Follow Us</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="https://x.com/GateCoinX" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-1 px-4 py-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all group">
                <Twitter className="w-5 h-5 text-purple-400 transform transition-transform group-hover:scale-110" />
                <span>Follow us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>







      



      

      
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section - The Gateway */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 text-center z-10 py-32">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full transform -translate-y-1/2"></div>
              <DoorOpen className="w-32 h-32 mx-auto mb-8 text-yellow-400 animate-pulse relative" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 animate-gradient">
              Gate Coin
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Open the Gateway to Financial Freedom
            </p>
            <div className="max-w-2xl mx-auto mb-12">
              <Countdown targetDate={launchDate} />
            </div>
            
            {/* CA Loading Text - Added below countdown */}
            <div className="mb-12">
              <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                CA: Loading
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="https://www.pump.fun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-400 text-purple-900 px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-400/50 group"
              >
                <span className="flex items-center">
                   Presale
                  <Rocket className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-32 relative overflow-hidden" ref={el => parallaxRefs.current[0] = el}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-400">
                The Problem
              </h2>
              <p className="text-xl text-purple-200 leading-relaxed">
                In a world of countless cryptocurrencies, finding genuine opportunities becomes increasingly difficult.
                Most projects lack real utility, transparency, and long-term vision.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock className="w-12 h-12 text-red-400" />,
                  title: "Limited Access",
                  description: "Traditional finance keeps wealth creation opportunities behind closed doors."
                },
                {
                  icon: <Shield className="w-12 h-12 text-red-400" />,
                  title: "High Risk",
                  description: "Many crypto projects lack security measures and proper auditing."
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-red-400" />,
                  title: "Missed Opportunities",
                  description: "Early investors often monopolize the best investment opportunities."
                }
              ].map((item, index) => (
                <div key={index} className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/50 hover:border-purple-600/50 transition-all transform hover:-translate-y-2">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-purple-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-32 relative overflow-hidden bg-gradient-to-b from-purple-900/50 to-purple-950/50" ref={el => parallaxRefs.current[1] = el}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-400">
                The Solution: Gate Coin
              </h2>
              <p className="text-xl text-purple-200 leading-relaxed">
                Gate Coin opens the door to a new era of cryptocurrency, combining innovative technology with community-driven growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Lock className="w-12 h-12 text-yellow-400" />,
                  title: "Secure Platform",
                  description: "Military-grade encryption and multi-layered security protocols."
                },
                {
                  icon: <Users className="w-12 h-12 text-yellow-400" />,
                  title: "Community Governed",
                  description: "Democratic decision-making process for major updates."
                },
                {
                  icon: <Coins className="w-12 h-12 text-yellow-400" />,
                  title: "Fair Distribution",
                  description: "Transparent tokenomics with anti-whale measures."
                },
                {
                  icon: <Star className="w-12 h-12 text-yellow-400" />,
                  title: "Real Utility",
                  description: "Practical applications beyond mere speculation."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all transform hover:-translate-y-2">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-purple-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-32 relative overflow-hidden" ref={el => parallaxRefs.current[2] = el}>
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
              Roadmap
            </h2>
            <div className="max-w-4xl mx-auto">
              {[
                {
                  phase: "Phase 1: Foundation",
                  title: "Opening the First Gate",
                  items: [
                    "Website and Social Media Launch",
                    "Community Building",
                    "Smart Contract Development",
                    "Security Audit"
                  ]
                },
                {
                  phase: "Phase 2: Launch",
                  title: "Crossing the Threshold",
                  items: [
                    "Presale Launch",
                    "Exchange Listings",
                    "Marketing Campaign",
                    "Partnership Announcements"
                  ]
                },
                {
                  phase: "Phase 3: Growth",
                  title: "Expanding the Gateway",
                  items: [
                    "DEX Integration",
                    "Staking Platform",
                    "Cross-chain Bridge",
                    "Major CEX Listings"
                  ]
                },
                {
                  phase: "Phase 4: Evolution",
                  title: "Transcending Boundaries",
                  items: [
                    "Cross-chain Integration",
                    "DAO Implementation",
                    "Global Marketing Expansion",
                    "Strategic Partnerships"
                  ]
                }
              ].map((phase, index) => (
                <div key={index} className="relative pl-8 pb-16 last:pb-0">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400 to-purple-400"></div>
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-yellow-400 -translate-x-[3px]"></div>
                  <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/50 ml-8">
                    <span className="text-yellow-400 font-semibold">{phase.phase}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-purple-200">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  Section */}
        <section id="" className="py-32 relative overflow-hidden bg-gradient-to-b from-purple-900/50 to-purple-950/50" ref={el => parallaxRefs.current[3] = el}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-400">
              Join the Revolution
            </h2>
            <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
              Don't miss your chance to be part of the next big thing in crypto. The gate to financial freedom is opening soon.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="https://www.pump.fun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-400 text-purple-900 px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-400/50 group"
              >
                <span className="flex items-center">
                  Join Presale
                  <Rocket className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
