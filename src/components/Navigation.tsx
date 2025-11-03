"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "../assets/NicheUXLogo.jpg";

export default function Navigation({
  activeSection,
  onNavigate,
  onProjectClick,
}: {
  activeSection: string;
  onNavigate?: (view: string) => void;
  onProjectClick?: (id: number) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    onNavigate?.(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about-page" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-[#121212]/70 backdrop-blur-md border-b border-gray-800"
          : "bg-[#121212]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* --- Mobile Left: Hamburger --- */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-[#E9C672] p-2 order-1"
          >
            <Menu size={28} />
          </button>

          {/* --- Logo --- */}
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center hover:opacity-80 transition z-50 order-2 lg:order-1"
          >
            <img
              src={logoImage}
              alt="NicheUX Logo"
              className="h-14 w-auto relative z-[10000]"
            />
          </button>

          {/* --- Desktop Nav --- */}
          <div className="hidden lg:flex items-center gap-8 ml-auto text-white font-[Darker Grotesque] text-lg order-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "text-[#B097BE]"
                    : "hover:text-[#B097BE]"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* --- Services Dropdown --- */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#B097BE] transition">
                Services <ChevronDown size={16} />
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 bg-[#111111] border border-gray-800 rounded-2xl shadow-xl py-2 text-center transition-all duration-200 ${
                  openDropdown === "services"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                {[
                  ["UI/UX Consultation", "consultation"],
                  ["UI/UX Design", "uiux-design"],
                  ["No Code Website", "nocode-website"],
                  ["E-Commerce Website", "ecommerce"],
                  ["Print & Marketing Design", "marketing-design"],
                ].map(([name, id]) => (
                  <button
                    key={id}
                    onClick={() => handleNavigate(id)}
                    className="block w-full px-5 py-2 text-sm text-white hover:bg-[#B097BE]/20 rounded-lg"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* --- Featured Work Dropdown --- */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown("work")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#B097BE] transition">
                Featured Work <ChevronDown size={16} />
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 bg-[#111111] border border-gray-800 rounded-2xl shadow-xl py-2 text-center transition-all duration-200 ${
                  openDropdown === "work"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                {[
                  ["Bloom & Brew Coffee Company", 3],
                  ["BBC Careers Website Redesign", 1],
                  ["OPES Finance App", 2],
                ].map(([name, id]) => (
                  <button
                    key={name}
                    onClick={() => onProjectClick?.(id as number)}
                    className="block w-full px-5 py-2 text-sm text-white hover:bg-[#B097BE]/20 rounded-lg"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* --- Other Links --- */}
            {["Pricing", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  handleNavigate(item.toLowerCase().replace(" ", "-"))
                }
                className={`transition-colors ${
                  activeSection === item.toLowerCase().replace(" ", "-")
                    ? "text-[#B097BE]"
                    : "hover:text-[#B097BE]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- Mobile Sidebar --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[99999] flex">
          <div
            className="fixed inset-0 bg-black/80"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative bg-[#121212] w-64 h-full shadow-xl p-6 flex flex-col gap-2 text-white overflow-y-auto">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-[#E9C672]"
            >
              <X size={28} />
            </button>

            {["Home", "About"].map((item) => (
              <div key={item}>
                <button
                  onClick={() =>
                    handleNavigate(item.toLowerCase().replace(" ", "-"))
                  }
                  className="px-4 py-2 hover:text-[#B097BE] text-left transition"
                >
                  {item}
                </button>
                <div className="h-[1px] w-8 bg-[#2E3CFF]/40 ml-4 my-1" />
              </div>
            ))}

            {/* --- Services (Collapsible) --- */}
            <div>
              <button
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "services" ? null : "services"
                  )
                }
                className="flex items-center justify-between px-4 py-2 hover:text-[#B097BE]"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "services" && (
                <div className="ml-4 flex flex-col items-center gap-1 mt-1 text-center">
                  {[
                    "UI/UX Consultation",
                    "UI/UX Design",
                    "No Code Website",
                    "E-Commerce Website",
                    "Print & Marketing Design",
                  ].map((name) => (
                    <button
                      key={name}
                      className="px-4 py-2 text-sm hover:text-[#B097BE] transition"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
              <div className="h-[1px] w-8 bg-[#2E3CFF]/40 ml-4 my-1" />
            </div>

            {/* --- Featured Work (Collapsible) --- */}
            <div>
              <button
                onClick={() =>
                  setMobileDropdown(mobileDropdown === "work" ? null : "work")
                }
                className="flex items-center justify-between px-4 py-2 hover:text-[#B097BE]"
              >
                <span>Featured Work</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileDropdown === "work" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "work" && (
                <div className="ml-4 flex flex-col items-center gap-1 mt-1 text-center">
                  {[
                    "Bloom & Brew Coffee Company",
                    "BBC Careers Website Redesign",
                    "OPES Finance App",
                  ].map((name) => (
                    <button
                      key={name}
                      className="px-4 py-2 text-sm hover:text-[#B097BE] transition"
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
              <div className="h-[1px] w-8 bg-[#2E3CFF]/40 ml-4 my-1" />
            </div>

            {/* --- Other Links --- */}
            {["Pricing", "Contact"].map((item) => (
              <div key={item}>
                <button
                  onClick={() =>
                    handleNavigate(item.toLowerCase().replace(" ", "-"))
                  }
                  className="px-4 py-2 hover:text-[#B097BE] text-left"
                >
                  {item}
                </button>
                <div className="h-[1px] w-8 bg-[#2E3CFF]/40 ml-4 my-1" />
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}