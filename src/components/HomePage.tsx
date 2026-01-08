import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, Instagram, Award, Briefcase, Code } from 'lucide-react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 'toran',
      title: 'Toran',
      subtitle: 'E-Commerce Platform',
      description:
        'Premium furniture marketplace with complete shopping experience from discovery to checkout',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      color: 'from-amber-500 to-red-600',
      stats: { duration: '3 Weeks', role: 'UI/UX Designer', type: 'E-Commerce' },
    },
    {
      id: 'bloombrew',
      title: 'Bloom & Brew',
      subtitle: 'Artisan Coffee Brand',
      description:
        'Complete UX/UI design and Shopify development transforming mobile cart into online business',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      color: 'from-amber-600 to-orange-700',
      stats: { duration: '3 Months', role: 'Designer & Developer', type: 'E-Commerce' },
    },
    {
      id: 'patisserie',
      title: 'Patisserie Doux',
      subtitle: 'User Research & Strategy',
      description:
        'Comprehensive user research and strategic consultation for artisan bakery digital expansion',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
      color: 'from-pink-500 via-rose-500 to-amber-500',
      stats: { duration: '2 Weeks', role: 'UX Researcher', type: 'Consultation' },
    },
    {
      id: 'finance',
      title: 'OPES Finance',
      subtitle: 'Pre-Launch Landing',
      description:
        'Conversion-focused launch website for AI-powered personal finance application',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      color: 'from-red-900 to-yellow-600',
      stats: { duration: '2 Months', role: 'UX/UI Designer', type: 'Launching App' },
    },
    {
      id: 'bbc',
      title: 'BBC Careers',
      subtitle: 'Corporate Redesign',
      description:
        'Modern redesign transforming traditional corporate portal into engaging experience',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      color: 'from-cyan-500 via-purple-500 to-pink-500',
      stats: { duration: '2 Weeks', role: 'UI/UX Design and Developer', type: 'Mock Redesign' },
    },
  ];

  const skills = [
    { icon: Award, label: 'User Research', desc: 'Personas, Interviews' },
    { icon: Briefcase, label: 'UI/UX Design', desc: 'Figma, Prototyping' },
    { icon: Code, label: 'Development', desc: 'React, Shopify' },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight hover:text-purple-400 transition-colors">
            TB
          </Link>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">
              Work
            </a>

            <Link
              to="/about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              <span className="block text-white">Thevaki</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
                Balakrishnan
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg mb-8">
              Transforming complex problems into beautiful, intuitive digital
              experiences. I design products that users love and businesses need.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={scrollToWork}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all inline-flex items-center gap-3"
              >
                <span>View My Work</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <a
                href="/src/assets/Thevaki Balakrishnan_UIUXDesigner.pdf"
                download
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Download Resume
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-white/10">
                    <skill.icon size={24} className="text-purple-400" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{skill.label}</div>
                  <div className="text-xs text-gray-500">{skill.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
              alt="Design workspace"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative z-10 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Selected Work
          </h2>
          <p className="text-xl text-gray-500 mb-16">Case studies that demonstrate impact</p>

          <div className="space-y-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/${project.id}`}
                className="group block cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col justify-between py-4">
                      <div>
                        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-6">
                          {project.stats.type}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black mb-3 tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                          {project.title}
                        </h3>
                        <div className="text-xl text-gray-400 mb-6">{project.subtitle}</div>
                        <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium mt-8">
                        <span>View Case Study</span>
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-2 transition-transform"
                        />
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-8 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Let's Create
          <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Something Amazing
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-col items-center gap-8">
          <a
            href="mailto:thevakimail@gmail.com"
            className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all inline-flex items-center gap-4"
          >
            <Mail size={24} />
            <span>thevakimail@gmail.com</span>
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/thevaki-balakrishnan-664996201/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/nicheux.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
