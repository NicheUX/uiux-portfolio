import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Briefcase, GraduationCap, Code, Zap, Users, Heart, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const certificates = [
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google via Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/ME6U4B5XBK9X",
      color: "purple"
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      issuer: "Google via Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/YSCVEU3RN7XU",
      color: "cyan"
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google via Credly",
      link: "https://www.credly.com/badges/36d36aeb-312b-4b74-9abb-12c11421b841/linked_in_profile",
      color: "pink"
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      issuer: "Google via Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/8955DV7FEJXK",
      color: "purple"
    },
    {
      title: "Conduct UX Research and Test Early Concepts",
      issuer: "Google via Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/ZK6LNLGJSGA3",
      color: "cyan"
    },
    {
      title: "Create High-Fidelity Designs and Prototypes in Figma",
      issuer: "Google via Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/BUAHU7H2K8A3",
      color: "pink"
    },
    {
      title: "Responsive Web Design in Adobe XD",
      issuer: "Google via Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/988DGTHRKYP6",
      color: "purple"
    },
    {
      title: "Design a User Experience for Social Good & Prepare for Jobs",
      issuer: "Google via Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/4DM3MRD7DT69",
      color: "cyan"
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta via Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/R3NAHVXNCRW6",
      color: "pink"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-black text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
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
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-sm text-white font-medium">
              About
            </Link>
            <a
              href="mailto:thevakimail@gmail.com"
              className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-32 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* About Me Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            <div>
              <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                <span className="block text-white">About</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
                  Me
                </span>
              </h1>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Hi there! I'm Thevaki Balakrishnan, a UI/UX Designer based in the United Kingdom. I'm passionate about translating complex ideas into user-centered, accessible digital experiences through research, wireframing, and prototyping.
                </p>
                <p>
                  With a background in Digital Journalism and a Google UX Design Professional Certificate, I blend visual creativity, storytelling, and user empathy to craft interfaces that drive engagement and usability.
                </p>
                <p>
                  I believe great design isn't just about aesthetics—it's about solving real problems for real people. Whether I'm conducting user research, building design systems, or collaborating with developers, my goal is always to create experiences that users love and businesses need.
                </p>
              </div>

              <div className="mt-12 space-y-4">
                <h3 className="text-xl font-bold text-white mb-6">What Drives My Design:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Heart className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">User empathy and accessibility-first thinking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Transforming complex problems into elegant, simple solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Collaboration, continuous learning, and UX for social impact</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Skills Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="text-purple-400" size={28} />
                  <h3 className="text-2xl font-bold">Technical Skills</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">UX Research & Strategy</h4>
                    <p className="text-sm text-gray-400">User Interviews, Personas, User Flows, Usability Testing, Heuristic Evaluation, Information Architecture</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">UI & Interaction Design</h4>
                    <p className="text-sm text-gray-400">Wireframing, High-Fidelity Prototyping, Design Systems, Responsive Web & Mobile Design, Interaction Design</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Tools & Technologies</h4>
                    <p className="text-sm text-gray-400">Figma, Framer, Adobe XD, Illustrator, Photoshop, Basic HTML & CSS, Canva, Adobe Express</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Accessibility & Standards</h4>
                    <p className="text-sm text-gray-400">Inclusive Design, WCAG Compliance, Cross-Platform Consistency</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Collaboration & Delivery</h4>
                    <p className="text-sm text-gray-400">Agile/Scrum, Designer to Developer Handoff, Stakeholder Workshops, UX Writing, Client Communication</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-2xl p-6">
                <h4 className="font-bold mb-4">Contact Information</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>📍 United Kingdom</p>
                  <p>📧 thevakimail@gmail.com</p>
                  <p>📱 +44 7342 736804</p>
                  <div className="flex gap-3 mt-4">
                    <a 
                      href="https://www.linkedin.com/in/thevaki-balakrishnan-664996201/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="text-cyan-400" size={40} />
              <h2 className="text-5xl font-black">Experience</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Freelance UI/UX Designer</h3>
                    <p className="text-purple-400 font-medium mb-3">Self-Employed (Remote)</p>
                    <p className="text-sm text-gray-500">March 2025 - Present</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Designed user-centred interfaces for start-ups and creative businesses across web and mobile platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Conducted UX research, usability testing, and design iterations to align business objectives with user needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Developed Figma component libraries and design systems, improving design consistency and developer efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Introduced accessibility best practices, ensuring compliance with WCAG standards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">UI/UX Design Consultant</h3>
                    <p className="text-cyan-400 font-medium mb-3">Tamilsonline</p>
                    <p className="text-sm text-gray-500">January 2024 - March 2025</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Led UX audits and usability reviews, restructuring navigation and information hierarchy for improved engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Delivered responsive, mobile-first page layouts and prototypes validated through stakeholder feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Produced developer-ready style guides and component documentation for smooth handoff</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">UI/UX Designer</h3>
                    <p className="text-pink-400 font-medium mb-3">Toran (Contract Project)</p>
                    <p className="text-sm text-gray-500">October 2023 - November 2023</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Built an e-commerce prototype with optimized task flows, enhancing checkout and product discovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Designed personas, user journey maps, and interactive prototypes aligned with client goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Collaborated with a cross-functional team to ensure brand alignment and consistency across devices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Content Writer & Creator</h3>
                    <p className="text-purple-400 font-medium mb-3">Galatta Media (Internship)</p>
                    <p className="text-sm text-gray-500">March 2023 - April 2023</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Created audience-focused digital content, applying storytelling and communication principles to user experience design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Improved engagement metrics through optimized content flow and visual hierarchy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="text-purple-400" size={40} />
              <h2 className="text-5xl font-black">Education</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">B.Voc in Digital Journalism</h3>
                    <p className="text-purple-400 font-medium">Loyola College, Chennai, India</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">2020 - 2023</p>
                    <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-300 mt-2">
                      First Class with Distinction
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Graduated with First Class with Distinction. Awarded Best Volunteer for campus outreach initiatives. Built foundation in storytelling, communication, and digital media—skills that translate directly into creating compelling user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <Award className="text-pink-400" size={40} />
              <h2 className="text-5xl font-black">Certifications</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-br from-${cert.color}-500/10 to-white/5 border border-${cert.color}-500/30 rounded-2xl p-6 hover:border-${cert.color}-500/50 transition-all block`}
                >
                  <div className={`w-12 h-12 bg-${cert.color}-500/20 rounded-xl flex items-center justify-center mb-4`}>
                    <Award className={`text-${cert.color}-400`} size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {cert.issuer}
                  </p>
                  <span
                    className={`inline-flex items-center gap-2 text-${cert.color}-400 hover:text-${cert.color}-300 text-sm font-medium transition-colors`}
                  >
                    View Certificate <ExternalLink size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mb-32">
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Additional Information</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                UK citizen by descent, newly settled in the United Kingdom. Able to provide full overseas address history and supporting documentation for employment or background checks. Fully eligible to work and contribute in UK-based roles.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300">
                  Accessibility Advocacy
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-300">
                  Storytelling
                </span>
                <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-sm font-medium text-pink-300">
                  UX for Social Impact
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Let's Work
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Together
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:thevakimail@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                Get in Touch
              </a>
              <Link
                to="/"
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/5 hover:border-white/40 transition-all"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}