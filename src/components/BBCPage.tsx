import { useState } from 'react';
import { ArrowLeft, Users, Target, TrendingUp, CheckCircle2, ArrowRight, Layers, Monitor, FileText, GitBranch, Layout } from 'lucide-react';
import BBCCareersRedesign from './bbc_careers_redesign (2)';

interface BBCCaseStudyProps {
  onBack?: () => void;
}

export default function BBCCaseStudy({ onBack }: BBCCaseStudyProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPrototype, setShowPrototype] = useState(false);

  if (showPrototype) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-black text-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => setShowPrototype(false)}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Case Study</span>
            </button>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold">
              <Monitor size={16} />
              INTERACTIVE PROTOTYPE
            </div>
          </div>
        </div>
        <BBCCareersRedesign />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <button
            onClick={onBack || (() => window.history.back())}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="inline-block px-4 py-2 bg-yellow-500 text-black rounded-full text-xs font-bold mb-6">
            MOCK REDESIGN PROJECT
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            BBC Careers Website
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Redesign
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            A complete visual and user experience overhaul transforming a traditional corporate portal into an engaging, modern digital experience that better reflects BBC's creative legacy.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-gray-400 text-sm font-semibold mb-2">ROLE</div>
              <div className="text-white font-bold">UI/UX Designer and Developer</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-gray-400 text-sm font-semibold mb-2">DURATION</div>
              <div className="text-white font-bold">2-Week Sprint</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-gray-400 text-sm font-semibold mb-2">TOOLS</div>
              <div className="text-white font-bold">Figma, Adobe</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-gray-400 text-sm font-semibold mb-2">PLATFORM</div>
              <div className="text-white font-bold">Web Responsive</div>
            </div>
          </div>

          <button
            onClick={() => setShowPrototype(true)}
            className="group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3"
          >
            <Monitor size={24} />
            View Interactive Prototype
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'research', label: 'Research' },
              { id: 'architecture', label: 'Information Architecture' },
              { id: 'design', label: 'Design Process' },
              { id: 'solution', label: 'Design Solutions' },
              { id: 'impact', label: 'Impact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 font-semibold text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  This mock redesign project reimagines the BBC Careers platform as a modern, engaging digital experience that competes with leading tech companies for top creative and technical talent while maintaining the BBC's authoritative presence.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-red-500 font-bold mb-3">BEFORE</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Dated, institutional aesthetic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Weak visual hierarchy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Poor mobile optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Limited emotional connection</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="text-green-600 font-bold mb-3">AFTER</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Modern, creative aesthetic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Clear information architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Mobile-first responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Engaging brand storytelling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Success Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { metric: '40%', label: 'Mobile conversion increase' },
                  { metric: '<35%', label: 'Bounce rate target' },
                  { metric: '3+ min', label: 'Session duration' },
                  { metric: '25%', label: 'Application conversion lift' },
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-xl p-6 border border-cyan-200">
                    <div className="text-4xl font-black bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {item.metric}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'research' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Research & Discovery</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Deep analysis of user needs, competitive landscape, and current state issues
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-purple-600" />
                User Personas
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    DC
                  </div>
                  <h4 className="text-xl font-bold mb-2">Digital Creative</h4>
                  <div className="text-sm text-gray-600 mb-4">Age 25-35</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Needs</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• High design expectations</li>
                        <li>• Values innovation & creative freedom</li>
                        <li>• Mobile-first browsing</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Pain Points</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Outdated job portals</li>
                        <li>• Slow application process</li>
                        <li>• Unclear company culture</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    MP
                  </div>
                  <h4 className="text-xl font-bold mb-2">Media Professional</h4>
                  <div className="text-sm text-gray-600 mb-4">Age 35-50</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Needs</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Career growth opportunities</li>
                        <li>• Clear role descriptions</li>
                        <li>• Benefits & culture info</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Pain Points</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Information overload</li>
                        <li>• Generic job descriptions</li>
                        <li>• Difficult navigation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Competitive Analysis</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold mb-3">Netflix Careers</h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><span className="text-green-600">✓</span> Bold visuals</p>
                    <p><span className="text-green-600">✓</span> Culture-first</p>
                    <p><span className="text-red-600">✗</span> Limited structure</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold mb-3">Google Careers</h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><span className="text-green-600">✓</span> Clean design</p>
                    <p><span className="text-green-600">✓</span> Great filters</p>
                    <p><span className="text-red-600">✗</span> Corporate feel</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold mb-3">Spotify Careers</h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><span className="text-green-600">✓</span> Personality</p>
                    <p><span className="text-green-600">✓</span> Team stories</p>
                    <p><span className="text-red-600">✗</span> Content heavy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Information Architecture</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Restructuring content for intuitive navigation and discovery
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Layout className="text-purple-600" />
                Sitemap
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg">
                      Homepage
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-12 bg-gray-300"></div>
                  </div>

                  <div className="grid grid-cols-5 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold text-sm text-center w-full">
                        Life at BBC
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Culture & Values</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold text-sm text-center w-full">
                        Opportunities
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Job Listings</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold text-sm text-center w-full">
                        Teams
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Departments</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold text-sm text-center w-full">
                        Benefits
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Perks & Growth</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold text-sm text-center w-full">
                        Apply
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Application</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GitBranch className="text-purple-600" />
                User Flow: Job Application
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="bg-white border-2 border-green-500 rounded-xl p-4">
                        <div className="font-bold mb-1">Discover BBC Careers</div>
                        <div className="text-sm text-gray-600">Land on homepage, explore culture & values</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="text-gray-400 rotate-90" size={32} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="bg-white border-2 border-blue-500 rounded-xl p-4">
                        <div className="font-bold mb-1">Browse Opportunities</div>
                        <div className="text-sm text-gray-600">Filter by role, location, team, experience level</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="text-gray-400 rotate-90" size={32} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="bg-white border-2 border-purple-500 rounded-xl p-4">
                        <div className="font-bold mb-1">View Job Details</div>
                        <div className="text-sm text-gray-600">Read full description, requirements, team info</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="text-gray-400 rotate-90" size={32} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="bg-white border-2 border-pink-500 rounded-xl p-4">
                        <div className="font-bold mb-1">Start Application</div>
                        <div className="text-sm text-gray-600">Create account or login, upload CV</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="text-gray-400 rotate-90" size={32} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <div className="bg-white border-2 border-cyan-500 rounded-xl p-4">
                        <div className="font-bold mb-1">Complete Application</div>
                        <div className="text-sm text-gray-600">Fill form, answer questions, review & submit</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="text-gray-400 rotate-90" size={32} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl p-4">
                        <div className="font-bold mb-1">Confirmation & Next Steps</div>
                        <div className="text-sm">Application received, timeline expectations, dashboard access</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="text-purple-600" />
                Content Strategy
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold mb-4 text-lg">Primary Content</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Hero message: "Be Part of Something Extraordinary"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Culture videos and employee stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Featured roles with clear CTAs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold mb-4 text-lg">Supporting Content</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Team profiles and department overviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Benefits, perks, and development programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Application tips and FAQs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'design' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Design Process</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Creating a modern, engaging experience that reflects BBC's creative legacy
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Layers className="text-purple-600" />
                Design Strategy
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-cyan-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-lg mb-2">1. Modern Visual Language</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Vibrant gradient color palette from cyan to purple to pink creates an energetic, creative feel that appeals to digital natives. Bold typography and generous white space provide clarity and focus, moving away from the dated, text-heavy corporate aesthetic.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-purple-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-lg mb-2">2. Story-Driven Content</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Lead with culture and people, not just roles. Feature employee stories, team videos, and behind-the-scenes content to create emotional connection. This humanizes the BBC brand and makes it more relatable to candidates.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-cyan-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-lg mb-2">3. Streamlined Application Flow</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Reduce friction in the application process with clear steps, progress indicators, and save-for-later functionality. Mobile-optimized forms ensure candidates can apply from any device at any time.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-purple-600 p-6 rounded-r-xl">
                  <h4 className="font-bold text-lg mb-2">4. Powerful Search & Filters</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced filtering by role type, location, team, and experience level helps candidates quickly find relevant opportunities. Smart search with autocomplete and recent searches improves discoverability.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Typography System</h3>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
                <div className="space-y-8">
                  <div>
                    <div className="text-5xl font-black mb-3" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      BBC Reith / Inter
                    </div>
                    <p className="text-sm text-gray-600">Primary Font Family</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="text-4xl font-black mb-2">H1</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Font: Reith Black</div>
                        <div>Size: 56-80px</div>
                        <div>Line Height: 1.1</div>
                        <div>Use: Hero headlines</div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="text-2xl font-bold mb-2">H2</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Font: Reith Bold</div>
                        <div>Size: 36-48px</div>
                        <div>Line Height: 1.2</div>
                        <div>Use: Section headers</div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="text-lg font-normal mb-2">Body</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Font: Reith Regular</div>
                        <div>Size: 16-18px</div>
                        <div>Line Height: 1.6</div>
                        <div>Use: Paragraphs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Design Principles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-xl p-6">
                  <div className="font-bold text-lg mb-3 text-cyan-600">Bold & Creative</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Embrace vibrant colors and dynamic visuals to reflect BBC's creative spirit and attract design-forward talent.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                  <div className="font-bold text-lg mb-3 text-purple-600">Human-Centered</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Lead with people and stories, not corporate messaging. Make the BBC feel accessible and welcoming.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl p-6">
                  <div className="font-bold text-lg mb-3 text-pink-600">Intuitive</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Clear navigation, logical information hierarchy, and minimal friction throughout the user journey.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-xl p-6">
                  <div className="font-bold text-lg mb-3 text-cyan-600">Responsive</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Mobile-first design ensures seamless experience across all devices and screen sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solution' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Design Solutions</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Visual and interaction design that brings the strategy to life
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-lg">Culture Showcase</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Immersive sections highlighting BBC's values, diversity initiatives, and employee experiences through rich media content.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Target className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-lg">Smart Job Matching</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Advanced search and filtering system that helps candidates quickly find roles that match their skills and interests.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Monitor className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-lg">Team Profiles</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dedicated pages for each department with team photos, projects, and employee testimonials to give candidates insider perspectives.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-lg">Application Dashboard</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Personalized candidate portal to track applications, save roles, and receive updates on application status.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Color System</h3>
              <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                <h4 className="font-bold text-xl mb-6">Brand Colors</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="w-full h-32 bg-cyan-500 rounded-xl border-2 border-white/20 mb-3"></div>
                    <div className="font-semibold">Cyan</div>
                    <div className="text-sm text-gray-200">#06B6D4</div>
                    <div className="text-xs text-gray-300 mt-1">Innovation</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-purple-500 rounded-xl border-2 border-white/20 mb-3"></div>
                    <div className="font-semibold">Purple</div>
                    <div className="text-sm text-gray-200">#A855F7</div>
                    <div className="text-xs text-gray-300 mt-1">Creativity</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-pink-500 rounded-xl border-2 border-white/20 mb-3"></div>
                    <div className="font-semibold">Pink</div>
                    <div className="text-sm text-gray-200">#EC4899</div>
                    <div className="text-xs text-gray-300 mt-1">Energy</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-white rounded-xl border-2 border-white/20 mb-3"></div>
                    <div className="font-semibold">White</div>
                    <div className="text-sm text-gray-200">#FFFFFF</div>
                    <div className="text-xs text-gray-300 mt-1">Clarity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Impact & Results</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Measuring success through user engagement and business goals
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8 text-center">Project Outcomes</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-black mb-2">Modern</div>
                  <p className="text-gray-100">Contemporary Design</p>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">Engaging</div>
                  <p className="text-gray-100">Compelling Experience</p>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">Intuitive</div>
                  <p className="text-gray-100">Easy Navigation</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-xl p-6">
                  <CheckCircle2 className="text-cyan-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2">Enhanced Brand Perception</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Successfully modernized BBC's careers presence to compete with tech giants while maintaining its authoritative, trustworthy reputation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-6">
                  <CheckCircle2 className="text-purple-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2">Improved User Experience</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Streamlined application process and intuitive navigation make it easier for candidates to discover and apply for roles.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-white border-2 border-pink-200 rounded-xl p-6">
                  <CheckCircle2 className="text-pink-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2">Mobile-First Success</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Fully responsive design ensures optimal experience across all devices, meeting candidates where they are.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-xl p-6">
                  <CheckCircle2 className="text-cyan-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2">Story-Driven Engagement</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Culture-first content creates emotional connection and helps candidates envision themselves at the BBC.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Lessons Learned</h3>
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                  <h4 className="font-bold mb-2">Bold Design Attracts Bold Talent</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Moving away from conservative corporate design helped BBC stand out in a competitive market and appeal to creative, digital-first candidates.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                  <h4 className="font-bold mb-2">Culture is the New Currency</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Leading with culture and people stories proved more effective than leading with job descriptions. Candidates want to understand the work environment before roles.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-cyan-600 p-6 rounded-r-xl shadow-sm">
                  <h4 className="font-bold mb-2">Simplify to Amplify</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Reducing cognitive load through clear hierarchy, generous white space, and progressive disclosure made the experience more enjoyable and effective.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
                  <h4 className="font-bold mb-2">Mobile Can't Be an Afterthought</h4>
                  <p className="text-gray-700 leading-relaxed">
                    With most job seekers browsing on mobile, a mobile-first approach wasn't optional—it was essential for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-black py-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want to see more of my work?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Check out my other case studies and projects
          </p>
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            <span>Back to Portfolio</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}