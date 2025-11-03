import { useState } from 'react';
import { ArrowLeft, Users, Target, TrendingUp, CheckCircle2, ArrowRight, Layers, ExternalLink, FileText, GitBranch, Layout, ShoppingCart, Coffee } from 'lucide-react';

interface BloomBrewCaseStudyProps {
  onBack?: () => void;
}

export default function BloomBrewCaseStudy({ onBack }: BloomBrewCaseStudyProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#EDE4DB] font-['Poppins']">
      <div className="bg-[#3D4A34] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <button
            onClick={onBack || (() => window.history.back())}
            className="flex items-center gap-2 text-[#EDE4DB] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="inline-block px-4 py-2 bg-[#B8754D] text-white rounded-full text-xs font-bold mb-6">
            E-COMMERCE WEBSITE
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight font-['Playfair_Display']">
            Bloom & Brew
            <span className="block text-[#B8754D]">
              Coffee Company
            </span>
          </h1>

          <p className="text-xl text-[#EDE4DB] max-w-3xl mb-12 leading-relaxed">
            Complete UX/UI design and custom Shopify development for an artisan coffee e-commerce website, transforming a mobile cart business into a professional online brand.
          </p>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-[#B8754D] text-sm font-semibold mb-2">CLIENT</div>
              <div className="text-white font-bold text-sm">@bloomandbrewto</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-[#B8754D] text-sm font-semibold mb-2">SERVICES</div>
              <div className="text-white font-bold text-sm">UX/UI, Development</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-[#B8754D] text-sm font-semibold mb-2">TOOLS</div>
              <div className="text-white font-bold text-sm">Figma, Shopify</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-[#B8754D] text-sm font-semibold mb-2">PLATFORM</div>
              <div className="text-white font-bold text-sm">Web Responsive</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-[#B8754D] text-sm font-semibold mb-2">STATUS</div>
              <div className="text-white font-bold text-sm">Live</div>
            </div>
          </div>

          <a
            href="https://bloomandbrewcoffeecompany.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#B8754D] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#B8754D]/50 transition-all duration-300"
          >
            <Coffee size={24} />
            View Live Website
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#EDE4DB] border-b border-[#3D4A34]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'research', label: 'Research' },
              { id: 'architecture', label: 'Information Architecture' },
              { id: 'design', label: 'Design System' },
              { id: 'features', label: 'Key Features' },
              { id: 'impact', label: 'Impact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 font-semibold text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#3D4A34] text-[#3D4A34]'
                    : 'border-transparent text-[#B8754D] hover:text-[#3D4A34]'
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
              <h2 className="text-4xl font-black mb-6 font-['Playfair_Display'] text-[#3D4A34]">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#3D4A34] leading-relaxed text-lg">
                  Bloom & Brew Coffee Company is a beloved local artisan coffee and baked goods business operating from a mobile cart. They had no online presence and were losing sales opportunities between market events. The challenge was to create an e-commerce website that would reflect their warm, artisanal brand identity while enabling 24/7 online sales.
                </p>
                <p className="text-[#3D4A34] leading-relaxed text-lg mt-4">
                  I provided end-to-end UX/UI design services and custom Shopify development, transforming Bloom & Brew from a local cart into a professional online brand. The solution prioritizes storytelling, community connection, and seamless shopping while maintaining authenticity.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-amber-200">
                  <div className="text-red-600 font-bold mb-3">PROBLEMS</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>No online presence or e-commerce capability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Lost sales between market events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Limited reach beyond physical locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>No platform to tell brand story</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="text-green-600 font-bold mb-3">SOLUTIONS</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Complete e-commerce platform (Shopify)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Community-first design approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Events section bridging physical/digital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Mobile-first responsive design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Services Provided</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Users, label: 'UX Research', desc: 'Competitive analysis, user personas, journey mapping' },
                  { icon: Layers, label: 'UI Design', desc: 'Complete design system, high-fidelity mockups' },
                  { icon: ShoppingCart, label: 'Development', desc: 'Custom Shopify build, real-time inventory' },
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border border-amber-200">
                    <item.icon className="text-amber-700 mb-3" size={32} />
                    <div className="font-bold text-lg mb-2">{item.label}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
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
                Understanding users, competitors, and artisan coffee e-commerce best practices
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-amber-700" />
                User Personas
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    DR
                  </div>
                  <h4 className="text-xl font-bold mb-2">Daily Ritualist</h4>
                  <div className="text-sm text-gray-600 mb-4">Age 35-45</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Needs</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Premium coffee for morning routine</li>
                        <li>• Consistency and quality</li>
                        <li>• Easy reordering</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Pain Point</div>
                      <p className="text-sm text-gray-600">Can't get favorite coffee between market events</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    TG
                  </div>
                  <h4 className="text-xl font-bold mb-2">Thoughtful Gifter</h4>
                  <div className="text-sm text-gray-600 mb-4">Age 28-50</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Needs</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Unique, locally-made gifts</li>
                        <li>• Beautiful presentation</li>
                        <li>• Brand story connection</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Pain Point</div>
                      <p className="text-sm text-gray-600">Needs easy gifting options with local authenticity</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-yellow-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    ME
                  </div>
                  <h4 className="text-xl font-bold mb-2">Market Enthusiast</h4>
                  <div className="text-sm text-gray-600 mb-4">Age 25-55</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Needs</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Support local businesses</li>
                        <li>• Community connection</li>
                        <li>• Order anytime</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Pain Point</div>
                      <p className="text-sm text-gray-600">Limited availability, wants to order between markets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Key Research Insights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="text-4xl font-black text-amber-700 mb-2">73%</div>
                  <p className="text-sm text-gray-700">of artisan buyers connect with story before purchase</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="text-4xl font-black text-amber-700 mb-2">70%</div>
                  <p className="text-sm text-gray-700">traffic comes from mobile (Instagram)</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="text-4xl font-black text-amber-700 mb-2">60%+</div>
                  <p className="text-sm text-gray-700">influenced by high-quality product photography</p>
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
                Organizing content to guide users from brand discovery to purchase
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Layout className="text-amber-700" />
                Site Structure
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-amber-700 to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg">
                      Homepage
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-12 bg-gray-300"></div>
                  </div>

                  <div className="grid grid-cols-5 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-400 text-amber-900 px-4 py-3 rounded-lg font-semibold text-xs text-center w-full">
                        Hero Story
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Value Prop</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-400 text-amber-900 px-4 py-3 rounded-lg font-semibold text-xs text-center w-full">
                        Events
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Market Locations</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-400 text-amber-900 px-4 py-3 rounded-lg font-semibold text-xs text-center w-full">
                        Products
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Shop Grid</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-400 text-amber-900 px-4 py-3 rounded-lg font-semibold text-xs text-center w-full">
                        Testimonials
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Social Proof</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-400 text-amber-900 px-4 py-3 rounded-lg font-semibold text-xs text-center w-full">
                        Newsletter
                      </div>
                      <div className="text-xs text-gray-600 mt-2 text-center">Email Signup</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'design' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Design System</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Creating a warm, inviting visual identity for artisan coffee
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Color Palette</h3>
              <div className="bg-[#3D4A34] rounded-2xl p-8 text-white">
                <h4 className="font-bold text-xl mb-6">Brand Colors</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="w-full h-32 bg-[#3D4A34] rounded-xl border-2 border-white/20 mb-3"></div>
                    <div className="font-semibold">Pine Green</div>
                    <div className="text-sm text-[#EDE4DB]">#3D4A34</div>
                    <div className="text-xs text-[#B8754D] mt-1">Nature, Trust</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-[#B8754D] rounded-xl border-2 border-white/20 mb-3"></div>
                    <div className="font-semibold">Warm Tan</div>
                    <div className="text-sm text-[#EDE4DB]">#B8754D</div>
                    <div className="text-xs text-[#B8754D] mt-1">Coffee, Warmth</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-white rounded-xl border-2 border-white/20 mb-3"></div>
                    <div className="font-semibold">Pure White</div>
                    <div className="text-sm text-[#EDE4DB]">#FFFFFF</div>
                    <div className="text-xs text-[#B8754D] mt-1">Clean, Fresh</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-[#EDE4DB] rounded-xl border-2 border-white/20 mb-3"></div>
                    <div className="font-semibold">Cream</div>
                    <div className="text-sm text-[#EDE4DB]">#EDE4DB</div>
                    <div className="text-xs text-[#B8754D] mt-1">Soft, Elegant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Key Features</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Technical and design features that drive the experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                    <Coffee className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Events Section</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Prominent display of upcoming market locations bridges physical and digital presence, creating authenticity and driving omnichannel engagement.
                </p>
                <div className="text-xs text-amber-800 font-semibold">UX DECISION</div>
              </div>

              <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Limited Quantity Badges</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Real-time inventory system shows stock limitations authentically, turning small-batch nature into a strength and creating purchase urgency.
                </p>
                <div className="text-xs text-amber-800 font-semibold">REAL-TIME TECH</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Impact & Results</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Real-world business outcomes and design achievements
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-900 to-orange-900 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8 text-center">Business Transformation</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-black text-amber-300 mb-2">24/7</div>
                  <p className="text-amber-100">Sales Capability</p>
                </div>
                <div>
                  <div className="text-5xl font-black text-amber-300 mb-2">✓</div>
                  <p className="text-amber-100">Professional Online Presence</p>
                </div>
                <div>
                  <div className="text-5xl font-black text-amber-300 mb-2">∞</div>
                  <p className="text-amber-100">Scalable Growth Platform</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#3D4A34] py-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Playfair_Display']">Want to see more of my work?</h2>
          <p className="text-xl text-[#EDE4DB] mb-8">
            Check out my other case studies and projects
          </p>
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#B8754D] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-[#B8754D]/50 transition-all duration-300"
          >
            <span>Back to Portfolio</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}