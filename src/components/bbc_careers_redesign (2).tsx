import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, ArrowRight, Star, Users, Heart, Award, ChevronRight, Shield, Lightbulb, TrendingUp, Target, Play, Sparkles, Menu, X, ChevronDown } from 'lucide-react';

function BBCCareersRedesign() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const slides = [
    { title: 'ENTERTAINMENT', desc: 'We continually produce landmark distinctive hits for UK audiences – from Wild Isles to Happy Valley, The Traitors to Ghosts.', stat: '7.4M', label: 'viewers' },
    { title: 'NEWS', desc: 'Delivering trusted, impartial journalism to audiences across the globe.', stat: '468M', label: 'weekly audience' },
    { title: 'DIGITAL', desc: 'Creating world-class digital experiences from BBC iPlayer to BBC Sounds.', stat: '150M', label: 'monthly users' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Nav */}
      <nav style={{ backgroundColor: 'black', color: 'white', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          {/* Top Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '64px', borderBottom: '1px solid #333' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                <div style={{ width: '28px', height: '28px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'black', fontWeight: 900, fontSize: '14px' }}>B</span>
                </div>
                <div style={{ width: '28px', height: '28px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'black', fontWeight: 900, fontSize: '14px' }}>B</span>
                </div>
                <div style={{ width: '28px', height: '28px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'black', fontWeight: 900, fontSize: '14px' }}>C</span>
                </div>
              </div>
              <span style={{ fontWeight: 700, fontSize: '16px', marginLeft: '4px' }}>CAREERS</span>
            </div>

            {/* Desktop Menu */}
            <div style={{ display: 'none', '@media (min-width: 1024px)': { display: 'flex' }, gap: '24px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }} className="desktop-menu">
              <div style={{ position: 'relative' }}>
                <button onClick={() => toggleDropdown('who')} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  WHO WE ARE
                  <ChevronDown size={14} />
                </button>
              </div>
              <a href="#what" style={{ color: 'white', textDecoration: 'none', padding: '8px 0' }}>WHAT WE DO</a>
              <a href="#working" style={{ color: 'white', textDecoration: 'none', padding: '8px 0' }}>WORKING AT THE BBC</a>
              <a href="#hire" style={{ color: 'white', textDecoration: 'none', padding: '8px 0' }}>HOW WE HIRE</a>
              <div style={{ position: 'relative' }}>
                <button onClick={() => toggleDropdown('early')} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  EARLY CAREERS
                  <ChevronDown size={14} />
                </button>
              </div>
              <a href="#extend" style={{ color: 'white', textDecoration: 'none', padding: '8px 0' }}>EXTEND</a>
              <a href="#search" style={{ color: 'white', textDecoration: 'none', padding: '8px 0' }}>SEARCH JOBS</a>
            </div>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px', display: 'block' }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Bottom Row - Desktop Only */}
          <div style={{ display: 'none', padding: '12px 0', gap: '24px', fontSize: '13px' }} className="desktop-submenu">
            <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Language</a>
            <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Log in to Profile</a>
            <a href="#" style={{ color: '#999', textDecoration: 'none' }}>BBC Employee Login</a>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div style={{ padding: '24px 0', borderTop: '1px solid #333' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="#who" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>WHO WE ARE</a>
                <a href="#what" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>WHAT WE DO</a>
                <a href="#working" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>WORKING AT THE BBC</a>
                <a href="#hire" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>HOW WE HIRE</a>
                <a href="#early" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>EARLY CAREERS</a>
                <a href="#extend" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>EXTEND</a>
                <a href="#search" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>SEARCH JOBS</a>
                <div style={{ borderTop: '1px solid #333', marginTop: '16px', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Language</a>
                  <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Log in to Profile</a>
                  <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>BBC Employee Login</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-menu {
            display: flex !important;
          }
          .desktop-submenu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-menu {
            display: none !important;
          }
          .desktop-submenu {
            display: none !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section style={{ backgroundColor: 'black', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '96px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', alignSelf: 'flex-start' }}>
                <Sparkles size={16} style={{ color: '#22d3ee' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#22d3ee' }}>NOW HIRING CREATIVE TALENT</span>
              </div>
              <h1 style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 900, lineHeight: 0.9, margin: 0 }}>
                THIS IS<br/>
                <span style={{ background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>YOUR</span><br/>
                BBC
              </h1>
              <p style={{ fontSize: '20px', color: '#d1d5db', lineHeight: 1.6, maxWidth: '500px' }}>
                Shape culture. Create stories that matter. Design experiences for millions. Join the world's most trusted broadcaster.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '16px' }}>
                <button style={{ backgroundColor: 'white', color: 'black', padding: '16px 32px', fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  EXPLORE OPPORTUNITIES
                  <ArrowRight size={16} />
                </button>
                <button style={{ border: '2px solid white', backgroundColor: 'transparent', color: 'white', padding: '16px 32px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Play size={16} />
                  WATCH STORY
                </button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ aspectRatio: '1', background: 'linear-gradient(to bottom right, #ec4899, #8b5cf6)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>👩🏾‍🎤</div>
                <div style={{ aspectRatio: '1', background: 'linear-gradient(to bottom right, #f97316, #dc2626)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>👨🏻‍💼</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
                <div style={{ aspectRatio: '1', background: 'linear-gradient(to bottom right, #06b6d4, #3b82f6)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>👩🏼‍💻</div>
                <div style={{ aspectRatio: '1', background: 'linear-gradient(to bottom right, #10b981, #059669)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>👨🏽‍🎨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: '115px', zIndex: 40, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input
                type="text"
                placeholder="SEARCH BY KEYWORD"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '16px 16px 16px 48px', border: '2px solid #e5e7eb', fontSize: '14px', outline: 'none', borderRadius: '8px' }}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <MapPin size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input
                type="text"
                placeholder="SEARCH BY LOCATION"
                value={location}
                onChange={e => setLocation(e.target.value)}
                style={{ width: '100%', padding: '16px 16px 16px 48px', border: '2px solid #e5e7eb', fontSize: '14px', outline: 'none', borderRadius: '8px' }}
              />
            </div>
            <button style={{ backgroundColor: 'black', color: 'white', padding: '16px', fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer', borderRadius: '8px' }}>
              SEARCH JOBS
            </button>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section style={{ backgroundColor: '#f9fafb', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: '64px', lineHeight: 1.2 }}>
            CREATIVE, INCLUSIVE,<br/>AND FULL OF OPPORTUNITY
          </h2>
          <div style={{ background: 'linear-gradient(to bottom right, #ec4899, #f97316)', borderRadius: '24px', padding: 'clamp(32px, 5vw, 64px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center', color: 'white' }}>
              <div>
                <h3 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: '24px' }}>{slides[activeSlide].title}</h3>
                <p style={{ fontSize: '18px', lineHeight: 1.6, marginBottom: '32px', opacity: 0.9 }}>{slides[activeSlide].desc}</p>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '24px', borderRadius: '16px', display: 'inline-block' }}>
                  <div style={{ fontSize: '56px', fontWeight: 900 }}>{slides[activeSlide].stat}</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>{slides[activeSlide].label}</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '256px', height: '256px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.3)', fontSize: '96px' }}>📺</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  style={{ height: '8px', width: i === activeSlide ? '48px' : '8px', backgroundColor: 'white', border: 'none', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.3s', opacity: i === activeSlide ? 1 : 0.4 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section style={{ backgroundColor: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <div style={{ backgroundColor: 'black', color: 'white', padding: '32px 40px', borderRadius: '16px', display: 'inline-block', marginBottom: '32px' }}>
                <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, margin: 0 }}>
                  <span style={{ background: 'linear-gradient(to right, #22d3ee, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>PURPOSE</span>
                  <span> + </span>
                  STRUCTURE
                </h2>
              </div>
              <div style={{ background: 'linear-gradient(to bottom right, #e9d5ff, #fbcfe8)', borderRadius: '24px', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '120px' }}>🎬</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: '#374151' }}>
              <p style={{ fontSize: '20px', lineHeight: 1.6 }}>
                Our unique mission and purpose serves our audiences – in the UK and globally – with high-quality, impartial output and services which <strong style={{ color: 'black' }}>inform, educate and entertain</strong>.
              </p>
              <p style={{ fontSize: '20px', lineHeight: 1.6 }}>
                We push boundaries, challenge thinking and produce content that people love.
              </p>
              <div style={{ background: 'linear-gradient(to right, #ecfeff, #faf5ff)', padding: '24px', borderRadius: '16px', borderLeft: '4px solid black' }}>
                <p style={{ fontSize: '18px', fontWeight: 600, color: 'black', margin: 0 }}>
                  In the UK, BBC Public Service is mainly funded by the licence fee, but we also have commercial and global activities. BBC Studios is our largest commercial operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section style={{ backgroundColor: '#f9fafb', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', border: '2px solid #e5e7eb' }}>
            <div style={{ fontSize: '72px', marginBottom: '24px' }}>📺</div>
            <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '16px' }}>BBC PUBLIC SERVICE</h3>
            <p style={{ color: '#374151', lineHeight: 1.6, marginBottom: '24px' }}>
              Our BBC Public Service is funded by the licence fee to deliver value for all audiences. The BBC delivers a huge portfolio of national, regional and local TV, radio and digital services.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', color: 'black' }}>
              FIND OUT MORE
              <ArrowRight size={16} />
            </a>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', border: '2px solid #e5e7eb' }}>
            <div style={{ fontSize: '72px', marginBottom: '24px' }}>🎭</div>
            <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '16px' }}>BBC STUDIOS</h3>
            <p style={{ color: '#374151', lineHeight: 1.6, marginBottom: '24px' }}>
              BBC Studios is the largest of our commercial operations. Fuelled by creativity, it is the most awarded UK production company and a world-class distributor.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', color: 'black' }}>
              FIND OUT MORE
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: 'linear-gradient(to bottom right, #faf5ff, #ecfeff)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: 'clamp(32px, 5vw, 48px)', borderLeft: '8px solid black' }}>
            <blockquote style={{ fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.6, color: '#111827', marginBottom: '24px', fontStyle: 'normal' }}>
              "The BBC is a <strong>positive force</strong> for the UK and the world. We are impartial, innovative and creative, and we constantly look to the future. We are for everyone which means we need the <strong>best people from all backgrounds</strong> to work for us."
            </blockquote>
            <p style={{ fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <span style={{ width: '4px', height: '48px', backgroundColor: 'black' }}></span>
              Tim Davie, Director General, BBC
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: 'black', color: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 900, marginBottom: '16px' }}>
              <span style={{ background: 'linear-gradient(to right, #22d3ee, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OUR</span> VALUES
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px' }}>The principles that guide everything we do</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { Icon: Users, title: 'AUDIENCES', desc: 'Audiences are at the heart of everything we do.', color: 'linear-gradient(to bottom right, #06b6d4, #3b82f6)' },
              { Icon: Lightbulb, title: 'CREATIVITY', desc: 'Creativity is the lifeblood of our organisation.', color: 'linear-gradient(to bottom right, #ec4899, #8b5cf6)' },
              { Icon: Shield, title: 'TRUST', desc: 'Trust is the foundation of the BBC.', color: 'linear-gradient(to bottom right, #f59e0b, #f97316)' },
              { Icon: Heart, title: 'RESPECT', desc: 'We respect each other – we\'re kind.', color: 'linear-gradient(to bottom right, #ef4444, #dc2626)' },
              { Icon: Target, title: 'ACCOUNTABLE', desc: 'We deliver work of the highest quality.', color: 'linear-gradient(to bottom right, #10b981, #059669)' },
              { Icon: TrendingUp, title: 'ONE BBC', desc: 'We collaborate, learn, and grow together.', color: 'linear-gradient(to bottom right, #6366f1, #8b5cf6)' }
            ].map((value, i) => (
              <div key={i} style={{ background: 'linear-gradient(to bottom right, #1f2937, #111827)', borderRadius: '16px', padding: '32px', textAlign: 'center', border: '1px solid #374151', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  <div style={{ width: '80px', height: '80px', background: value.color, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <value.Icon size={36} strokeWidth={2} />
                  </div>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '12px' }}>{value.title}</h3>
                <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: 1.5, textAlign: 'center' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards - WITH ACTUAL AWARD IMAGES */}
      <section style={{ backgroundColor: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ position: 'relative', height: '250px', backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=400&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
              <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'black', padding: '40px 60px' }}>
                <h2 style={{ fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 900, margin: 0, color: '#d4af37', fontFamily: 'serif' }}>AWARDS</h2>
                <h2 style={{ fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 900, margin: 0, color: 'white', fontFamily: 'serif' }}>SPOTLIGHT</h2>
              </div>
            </div>
            <p style={{ fontSize: '20px', color: '#6b7280' }}>Celebrating excellence across our programmes</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              { name: 'Happy Valley', cat: 'RTS PROGRAMME AWARD', sub: 'DRAMA SERIES', img: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=200&h=300&fit=crop&q=80' },
              { name: 'Black Ops', cat: 'BROADCAST AWARDS', sub: 'BEST COMEDY PERFORMANCE', img: 'https://images.unsplash.com/photo-1586803336201-c5d95ab986fb?w=200&h=300&fit=crop&q=80' },
              { name: 'BBC One', cat: 'BROADCAST AWARDS', sub: 'CHANNEL OF THE YEAR', img: 'https://images.unsplash.com/photo-1586803336201-c5d95ab986fb?w=200&h=300&fit=crop&q=80' },
              { name: 'Strictly Come Dancing', cat: 'BAFTA AWARDS', sub: 'ENTERTAINMENT', img: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=200&h=300&fit=crop&q=80' },
              { name: 'Black Ops', cat: 'BAFTA', sub: 'FEMALE PERFORMANCE IN A COMEDY', img: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=200&h=300&fit=crop&q=80' }
            ].map((award, i) => (
              <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '140px', height: '200px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0,0,0,0.4)', overflow: 'hidden' }}>
                  <img 
                    src={award.img} 
                    alt={`${award.name} - ${award.cat}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;background:#222;display:flex;align-items:center;justify-content:center;color:#FFD700;font-size:48px;font-weight:900;">🏆</div>';
                    }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.2, color: '#000' }}>{award.name}</div>
                <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600, lineHeight: 1.3 }}>{award.cat}</div>
                <div style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase', lineHeight: 1.2 }}>{award.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#f9fafb', padding: '80px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 900, marginBottom: '16px' }}>HEAR FROM OUR TEAM</h2>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>Real stories from BBC colleagues</p>
          </div>
          <div style={{ background: 'linear-gradient(to bottom right, #ec4899, #8b5cf6)', borderRadius: '24px', padding: 'clamp(32px, 5vw, 48px)', color: 'white' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '32px', alignItems: 'center' }}>
              <div style={{ width: '112px', height: '112px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 900, border: '4px solid rgba(255,255,255,0.3)' }}>
                EB
              </div>
              <div>
                <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
                  "Since starting, I have worked across multiple portfolios. What's really surprised me is the opportunities to bring your whole self and most authentic self to the job."
                </p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '20px' }}>Ebony</div>
                  <div style={{ fontSize: '14px', opacity: 0.8 }}>— Production Manager Apprentice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section style={{ backgroundColor: 'white', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 900, marginBottom: '16px' }}>FEATURED OPPORTUNITIES</h2>
            <p style={{ fontSize: '20px', color: '#6b7280' }}>Join our award-winning teams</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            {[
              { title: 'Senior UX Designer', dept: 'BBC iPlayer', loc: 'London', salary: '£45,000 - £55,000' },
              { title: 'Product Designer', dept: 'BBC News', loc: 'Hybrid', salary: '£40,000 - £50,000' },
              { title: 'UI Designer', dept: 'BBC Sport', loc: 'Salford', salary: '£38,000 - £48,000' },
              { title: 'Design Systems Lead', dept: 'BBC Design', loc: 'London', salary: '£60,000 - £75,000' }
            ].map((job, i) => (
              <div key={i} style={{ border: '2px solid #e5e7eb', borderRadius: '24px', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>{job.title}</h3>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#6b7280' }}>{job.dept}</p>
                  </div>
                  <Star size={20} fill="#d1d5db" color="#d1d5db" />
                </div>
                <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#6b7280' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} />
                    <span>{job.loc}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={16} />
                    <span>Permanent</span>
                  </div>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>{job.salary}</div>
                <button style={{ width: '100%', backgroundColor: 'black', color: 'white', padding: '16px', fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  VIEW DETAILS
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button style={{ backgroundColor: 'black', color: 'white', padding: '20px 48px', fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              VIEW ALL OPEN JOBS
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section style={{ backgroundColor: '#f9fafb', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 900, marginBottom: '24px' }}>LOCATIONS</h2>
            <p style={{ fontSize: '20px', color: '#374151', maxWidth: '900px', margin: '0 auto', lineHeight: 1.6 }}>
              The BBC is a global British organisation. With offices, production bases and studios all over the UK, there are lots of opportunities to work for the BBC in your local community. Worldwide, across News and BBC Studios, we operate in cities in more than <strong>60 countries</strong>.
            </p>
          </div>
          <div style={{ background: 'linear-gradient(to bottom right, #dbeafe, #fae8ff)', borderRadius: '24px', padding: 'clamp(40px, 8vw, 80px) 24px', textAlign: 'center', border: '2px solid #e5e7eb' }}>
            <div style={{ fontSize: 'clamp(64px, 10vw, 96px)', marginBottom: '24px' }}>🗺️</div>
            <p style={{ fontSize: '18px', color: '#6b7280', fontWeight: 600, marginBottom: '24px' }}>Interactive map showing global BBC locations</p>
            <button style={{ backgroundColor: 'black', color: 'white', padding: '12px 32px', fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              EXPLORE LOCATIONS
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'black', color: 'white', padding: 'clamp(64px, 15vw, 128px) 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '25%', left: '25%', width: '384px', height: '384px', background: '#22d3ee', borderRadius: '50%', filter: 'blur(128px)', opacity: 0.3 }}></div>
        <div style={{ position: 'absolute', bottom: '25%', right: '25%', width: '384px', height: '384px', background: '#a855f7', borderRadius: '50%', filter: 'blur(128px)', opacity: 0.3 }}></div>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 900, marginBottom: '32px', lineHeight: 1.1 }}>
            COULD THIS BE<br/>
            <span style={{ background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>YOUR BBC?</span>
          </h2>
          <p style={{ fontSize: '20px', color: '#d1d5db', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
            Join 20,000+ creators, innovators, and storytellers shaping the future of media
          </p>
          <button style={{ backgroundColor: 'white', color: 'black', padding: '24px 56px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: 'pointer', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            VIEW OPEN JOBS
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'black', color: 'white', borderTop: '1px solid #1f2937', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '48px' }}>
            {['B', 'B', 'C'].map((letter, i) => (
              <div key={i} style={{ width: '40px', height: '40px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'black', fontWeight: 900, fontSize: '18px' }}>{letter}</span>
              </div>
            ))}
            <span style={{ marginLeft: '12px', fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center' }}>CAREERS</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '14px' }}>ABOUT</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>BBC Public Services</a></li>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>BBC Studios</a></li>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>What We Do</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '14px' }}>CAREERS</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>Working at BBC</a></li>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>How we hire</a></li>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>Early Careers</a></li>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>Search Jobs</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '14px' }}>SUPPORT</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>Accessibility Help</a></li>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>Cookie Policy</a></li>
                <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>Privacy Statement</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '14px' }}>CONNECT</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, textDecoration: 'none', borderRadius: '8px' }}>Li</a>
                <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, textDecoration: 'none', borderRadius: '8px' }}>Tw</a>
                <a href="#" style={{ width: '40px', height: '40px', backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, textDecoration: 'none', borderRadius: '8px' }}>Ig</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1f2937', paddingTop: '32px', fontSize: '12px', color: '#6b7280', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ margin: 0 }}>BBC Group and Public Services, Broadcasting House, Portland Place, London, United Kingdom, W1A 1AA.</p>
            <p style={{ margin: 0 }}>BBC Studios Distribution Limited, company no: 01420028, registered address: 1 Television Centre, 101 Wood Lane, London, United Kingdom W12 7FA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BBCCareersRedesign;