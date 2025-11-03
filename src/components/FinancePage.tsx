import { ArrowLeft, ArrowRight } from "lucide-react";

interface FinanceAppCaseStudyProps {
  onBack?: () => void;
}

export default function FinanceAppCaseStudy({ onBack }: FinanceAppCaseStudyProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="bg-gradient-to-br from-[#41000B] via-[#7F1D1D] to-[#41000B] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <button
            onClick={onBack || (() => window.history.back())}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="inline-block px-4 py-2 bg-[#FFD700] text-[#41000B] rounded-full text-xs font-bold mb-6">
            PRE-LAUNCH LANDING PAGE • FINTECH
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            OPES Finance App
            <span className="block text-[#FFD700] mt-2">Launch Website</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mb-12 leading-relaxed">
            Designing a conversion-focused launch website for a personal finance app that
            builds trust and excitement before launch.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "ROLE", value: "UX/UI Designer" },
              { label: "DELIVERABLE", value: "Landing Page Design" },
              { label: "TOOLS", value: "Figma, Adobe Suite" },
              { label: "PLATFORM", value: "Responsive Web" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="text-gray-400 text-sm font-semibold mb-2">
                  {item.label}
                </div>
                <div className="text-white font-bold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN DESIGN IMAGE */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <img
          src="/src/assets/opes/opes.png"
          alt="OPES Finance Landing Page"
          className="rounded-2xl shadow-2xl border border-gray-200 w-full"
        />
      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-gradient-to-r from-[#41000B] via-[#7F1D1D] to-black py-20 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in similar work?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how strategic design can drive your product's success.
          </p>
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#41000B] rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300"
          >
            <span>Back to Portfolio</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}