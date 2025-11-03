import { useState } from 'react';
import { ArrowLeft, Users, CheckCircle2, ArrowRight, Layers, Monitor, ShoppingCart, Eye, X, ChevronLeft, ChevronRight, Package, Palette } from 'lucide-react';

// Import all images
import toran1 from '../assets/toran/toran1.png';
import toran2 from '../assets/toran/toran2.png';
import toran3 from '../assets/toran/toran3.png';
import toran4 from '../assets/toran/toran4.png';
import toran5 from '../assets/toran/toran5.png';
import toran6 from '../assets/toran/toran6.png';
import toran7 from '../assets/toran/toran7.png';
import toran8 from '../assets/toran/toran8.png';
import toran9 from '../assets/toran/toran9.png';
import toran10 from '../assets/toran/toran10.png';
import toran11 from '../assets/toran/toran11.png';
import toran12 from '../assets/toran/toran12.png';
import toran13 from '../assets/toran/toran13.png';
import toran14 from '../assets/toran/toran14.png';
import toran15 from '../assets/toran/toran15.png';
import toran16 from '../assets/toran/toran16.png';
import toran17 from '../assets/toran/toran17.png';
import toran18 from '../assets/toran/toran18.png';
import toran19 from '../assets/toran/toran19.png';
import toran20 from '../assets/toran/toran20.png';

interface ToranCaseStudyProps {
  onBack?: () => void;
}

export default function ToranCaseStudy({ onBack }: ToranCaseStudyProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const designs = [
    { src: toran1, title: 'Homepage Hero', description: 'Landing page with dramatic furniture imagery and brand tagline' },
    { src: toran2, title: 'Furniture Category', description: 'Sideboards product grid with filters and sort options' },
    { src: toran3, title: 'Product Detail Page', description: 'Navy Blue Chair with ratings, specs, and purchase options' },
    { src: toran4, title: 'Sign Up Page', description: 'New account creation with Google/Apple OAuth options' },
    { src: toran5, title: 'Login Page', description: 'User authentication interface with social login' },
    { src: toran6, title: 'Layout Services', description: 'Professional space planning services page' },
    { src: toran7, title: 'Bespoke Services', description: 'Custom furniture design process explained' },
    { src: toran8, title: 'Assembly Services', description: 'Step-by-step assembly service procedure' },
    { src: toran9, title: 'Wishlist', description: 'Saved items with add to cart options' },
    { src: toran10, title: 'Shopping Cart', description: 'Cart with multiple items and checkout summary' },
    { src: toran11, title: 'Payment Method Selection', description: 'Choose payment method: cards, net banking, UPI, cash' },
    { src: toran12, title: 'Payment Card Entry', description: 'Credit/debit card details modal dialog' },
    { src: toran13, title: 'Checkout - Empty Form', description: 'Initial order placement form ready to fill' },
    { src: toran14, title: 'Checkout - Filled Form', description: 'Completed order details ready to submit' },
    { src: toran15, title: 'Order Tracking', description: 'Delivery status timeline with order history' },
    { src: toran16, title: 'New Arrivals', description: 'Latest product catalog grid' },
    { src: toran17, title: 'Art & Decor Category', description: 'Wall art and decorations product grid' },
    { src: toran18, title: 'Accents Category', description: 'Decorative items and accessories' },
    { src: toran19, title: 'Gallery Grid', description: 'Photo gallery showcasing furniture setups' },
    { src: toran20, title: 'Gallery Detail', description: 'Individual gallery image full view' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % designs.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + designs.length) % designs.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <button
            onClick={onBack || (() => window.history.back())}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="inline-block px-4 py-2 bg-red-600 text-white rounded-full text-xs font-bold mb-6">
            E-COMMERCE PLATFORM
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Toran
            <span className="block bg-gradient-to-r from-amber-400 via-red-500 to-gray-400 bg-clip-text text-transparent">
              Furniture Store
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            A comprehensive furniture e-commerce platform combining elegant design with robust functionality. Complete shopping experience from browsing to checkout, with emphasis on premium services and user experience.
          </p>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">TYPE</div>
              <div className="text-white font-bold text-sm">Contract Project</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">ROLE</div>
              <div className="text-white font-bold text-sm">UI/UX Designer</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">DURATION</div>
              <div className="text-white font-bold text-sm">2 Weeks</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">TOOLS</div>
              <div className="text-white font-bold text-sm">Figma</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-amber-400 text-sm font-semibold mb-2">PLATFORM</div>
              <div className="text-white font-bold text-sm">Web Responsive</div>
            </div>
          </div>

          <button
            onClick={() => setShowGallery(true)}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-red-500 to-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300"
          >
            <Eye size={24} />
            View All Designs
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{designs.length} Screens</span>
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
              { id: 'design', label: 'Design System' },
              { id: 'features', label: 'Key Features' },
              { id: 'impact', label: 'Impact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 font-semibold text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-600 text-black'
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
                  Toran is an e-commerce website designed for a premium furniture store. The project demonstrates a complete user journey from landing page discovery through checkout, featuring custom services like layout design, bespoke furniture customization, and assembly services. The tagline "another way home" reflects the brand's commitment to transforming spaces.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  This contract project showcases end-to-end UX/UI design for a comprehensive furniture shopping experience, emphasizing visual storytelling, premium service offerings, and seamless e-commerce functionality.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-red-500 font-bold mb-3">PROBLEMS</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Need for sophisticated furniture shopping experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Balance elegance with functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Showcase premium services effectively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Create trust in online furniture purchases</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="text-green-600 font-bold mb-3">SOLUTIONS</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Dramatic hero sections with lifestyle imagery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Clear service information architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Streamlined checkout with multiple payment options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Trust-building through customer testimonials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Design Services Provided</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Users, label: 'User Research', desc: 'Persona development, competitive analysis, journey mapping' },
                  { icon: Layers, label: 'UI/UX Design', desc: 'Complete design system, 20+ high-fidelity screens' },
                  { icon: ShoppingCart, label: 'E-Commerce Flow', desc: 'Full shopping journey from browse to order tracking' },
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border border-amber-200">
                    <item.icon className="text-red-600 mb-3" size={32} />
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
                Understanding furniture shopping behavior and premium e-commerce expectations
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-red-600" />
                User Personas
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    NH
                  </div>
                  <h4 className="text-xl font-bold mb-2">New Homeowner</h4>
                  <div className="text-sm text-gray-600 mb-4">Age 28-40</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Needs</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Complete furniture sets</li>
                        <li>• Layout planning services</li>
                        <li>• Delivery and assembly</li>
                        <li>• Quality and durability assurance</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Pain Point</div>
                      <p className="text-sm text-gray-600">Overwhelmed by furnishing entire home, needs guidance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-2 border-red-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    ID
                  </div>
                  <h4 className="text-xl font-bold mb-2">Interior Designer</h4>
                  <div className="text-sm text-gray-600 mb-4">Age 30-50</div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Needs</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Custom bespoke options</li>
                        <li>• High-quality product images</li>
                        <li>• Detailed specifications</li>
                        <li>• Client project management</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-700 mb-1">Pain Point</div>
                      <p className="text-sm text-gray-600">Needs customization options and reliable service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Key Research Insights</h3>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-4">Key insights from analyzing premium furniture retailers:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <span>Strong visual storytelling through hero images increases engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <span>Clear service offerings (layout, bespoke, assembly) differentiate brands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <span>Customer testimonials build trust for high-value purchases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <span>Multiple payment options reduce cart abandonment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Information Architecture</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Organizing content to guide users from discovery to purchase
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Layers className="text-red-600" />
                Site Structure
              </h3>
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-semibold">Home → Hero + About + Featured Products + Services + Testimonials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="font-semibold">Categories → Furniture Grid with Filters + Sort Options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-semibold">Product Detail → Images + Specs + Ratings + Add to Cart/Wishlist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold">Services → Layout / Bespoke / Assembly with Procedures</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold">Checkout → Cart → Payment Options → Details → Order Tracking</span>
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
                Creating a premium visual identity for luxury furniture
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Color Palette</h3>
              <div className="bg-black rounded-2xl p-8 text-white">
                <h4 className="font-bold text-xl mb-6">Brand Colors</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="w-full h-32 bg-black border-2 border-white rounded-xl mb-3"></div>
                    <div className="font-semibold">#000000</div>
                    <div className="text-sm text-gray-400">Primary Black</div>
                    <div className="text-xs text-gray-500 mt-1">Elegance, Luxury</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-red-600 rounded-xl mb-3"></div>
                    <div className="font-semibold">#DC2626</div>
                    <div className="text-sm text-gray-400">Accent Red</div>
                    <div className="text-xs text-gray-500 mt-1">Energy, Attention</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-yellow-400 rounded-xl mb-3"></div>
                    <div className="font-semibold">#FBBF24</div>
                    <div className="text-sm text-gray-400">Gold Accent</div>
                    <div className="text-xs text-gray-500 mt-1">Premium, Warmth</div>
                  </div>
                  <div>
                    <div className="w-full h-32 bg-white border-2 border-gray-700 rounded-xl mb-3"></div>
                    <div className="font-semibold">#FFFFFF</div>
                    <div className="text-sm text-gray-400">Pure White</div>
                    <div className="text-xs text-gray-500 mt-1">Clean, Modern</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Typography & Components</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold mb-4">Typography</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-serif font-bold mb-1">Aa</div>
                      <div className="text-sm text-gray-600">Cormorant</div>
                      <div className="text-xs text-gray-500">Elegant & Premium</div>
                    </div>
                    <div>
                      <div className="text-lg font-sans mb-1">Aa</div>
                      <div className="text-sm text-gray-600">Poppins</div>
                      <div className="text-xs text-gray-500">Clean & Readable</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-6">
                  <h4 className="font-bold mb-4">Key Components</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Red CTA buttons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Gold underline accents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span>Dark navigation bar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Product cards with hover states</span>
                    </li>
                  </ul>
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
                Essential components that make Toran a complete e-commerce solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8 border border-gray-700">
                <ShoppingCart className="text-red-500 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3">Complete Shopping Flow</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    <span>Product catalog with grid/list views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    <span>Detailed product pages with multiple images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    <span>Shopping cart with quantity management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    <span>Wishlist functionality for saved items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    <span>Order tracking with delivery timeline</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border-2 border-amber-200">
                <Monitor className="text-red-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Premium Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-600 flex-shrink-0 mt-1" />
                    <span>Layout Services - Professional space planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-600 flex-shrink-0 mt-1" />
                    <span>Bespoke Services - Custom furniture design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-600 flex-shrink-0 mt-1" />
                    <span>Assembly Services - Professional installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-red-600 flex-shrink-0 mt-1" />
                    <span>Clear pricing and procedures documented</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                    <Palette className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Multiple Payment Options</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Credit/debit cards, net banking, UPI, and cash on delivery options reduce friction and cart abandonment. Modal dialogs for seamless card entry.
                </p>
                <div className="text-xs text-amber-800 font-semibold">USER CONVENIENCE</div>
              </div>

              <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Package className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Order Tracking System</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Visual timeline showing order status from placed → packed → shipped → delivered, with delivery date estimates and order history table.
                </p>
                <div className="text-xs text-amber-800 font-semibold">TRANSPARENCY</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-6">Project Outcomes</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A comprehensive e-commerce platform demonstrating full-stack design thinking
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-500 via-red-500 to-gray-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8 text-center">Design Achievements</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-black mb-2">20+</div>
                  <p className="text-gray-100">Complete Screens</p>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">100%</div>
                  <p className="text-gray-100">User Flow Coverage</p>
                </div>
                <div>
                  <div className="text-5xl font-black mb-2">Premium</div>
                  <p className="text-gray-100">Brand Experience</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Key Learnings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-xl p-6">
                  <CheckCircle2 className="text-amber-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2">Visual Storytelling</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Large hero images with dramatic lighting create emotional connection and communicate quality instantly.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-6">
                  <CheckCircle2 className="text-red-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2">Service Differentiation</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Clear documentation of layout, bespoke, and assembly services builds trust and justifies premium pricing.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-xl p-6">
                  <CheckCircle2 className="text-yellow-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2">Complete User Journey</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Designing the full flow from discovery to order tracking reveals pain points and opportunities for optimization.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6">
                  <CheckCircle2 className="text-gray-600 mb-3" size={32} />
                  <h4 className="font-bold mb-2">Payment Flexibility</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Multiple payment options (cards, net banking, UPI, cash on delivery) reduce friction and abandonment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Project Reflection</h3>
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                This contract project successfully demonstrates the complete design process for a premium e-commerce platform. From establishing brand identity through visual design to mapping every touchpoint in the user journey, Toran showcases how thoughtful UX/UI can transform a furniture shopping experience. The emphasis on services (layout, bespoke, assembly) differentiates it from commodity retailers, while the elegant aesthetic communicates quality and craftsmanship. This project reinforced the importance of comprehensive user flows, trust-building elements, and balancing beauty with usability.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Interested in More Projects?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore my portfolio to see additional case studies and design work
          </p>
          <button
            onClick={onBack || (() => window.history.back())}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-red-500 to-gray-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300"
          >
            <span>Back to Portfolio</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-sm text-gray-400">
            Toran E-Commerce Website • Contract Project • 2023
          </div>
          <div className="text-xs text-gray-500 mt-2">
            All designs are conceptual and created for portfolio demonstration purposes
          </div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 z-10 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 z-10 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <ChevronRight size={40} />
          </button>

          <div className="w-full h-full flex flex-col items-center justify-center max-w-[95vw] max-h-[95vh]">
            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">{designs[currentImageIndex].title}</h3>
              <p className="text-gray-400 text-sm">{designs[currentImageIndex].description}</p>
              <div className="text-sm text-gray-500 mt-2">
                {currentImageIndex + 1} / {designs.length}
              </div>
            </div>

            <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
              <img
                src={designs[currentImageIndex].src}
                alt={designs[currentImageIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}