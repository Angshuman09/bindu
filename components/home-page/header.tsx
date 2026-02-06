'use client'
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
const header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const {user} = useUser();
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
    <div className="bg-[#2A2A2A] border border-gray-700/50 rounded-2xl px-6 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#8B5CF6] rounded-xl flex items-center justify-center shadow-[0_4px_14px_rgba(139,92,246,0.4)]">
            <div className="w-5 h-5 text-white rounded-full" />
          </div>
          <span className="text-xl font-bold">Bindu</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-400 hover:text-[#F9FAFB] transition-colors text-sm font-medium">Features</a>
          <a href="#pricing" className="text-gray-400 hover:text-[#F9FAFB] transition-colors text-sm font-medium">Pricing</a>
          <a href="#about" className="text-gray-400 hover:text-[#F9FAFB] transition-colors text-sm font-medium">About</a>
          {user ? <UserButton/> : 
          <div>
          <button className="px-5 py-2 text-gray-400 hover:text-[#F9FAFB] transition-colors text-sm font-medium">
            Sign In
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-b from-[#A855F7] to-[#7C3AED] hover:from-[#7a58ff] hover:to-[#7C3AED] text-white rounded-lg font-medium transition-all text-sm
            shadow-[0_4px_14px_rgba(139,92,246,0.32)]
            hover:shadow-[0_5px_18px_rgba(139,92,246,0.4)]
            hover:-translate-y-0.5
            active:translate-y-0
            active:shadow-[0_3px_12px_rgba(139,92,246,0.32)] border border-purple-500/60"
            onClick={()=> router.push('/sign-in')}
            >
            Get Started
          </button>
          </div>
          }
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Navigation Dropdown */}
    {mobileMenuOpen && (
      <div className="mt-2 bg-[#2A2A2A] border border-gray-700/50 rounded-2xl p-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="space-y-2">
          <a href="#features" className="block text-gray-400 hover:text-[#F9FAFB] transition-colors py-2 px-3 rounded-lg hover:bg-white/5">Features</a>
          <a href="#pricing" className="block text-gray-400 hover:text-[#F9FAFB] transition-colors py-2 px-3 rounded-lg hover:bg-white/5">Pricing</a>
          <a href="#about" className="block text-gray-400 hover:text-[#F9FAFB] transition-colors py-2 px-3 rounded-lg hover:bg-white/5">About</a>
          <button className="w-full px-3 py-2 text-left text-gray-400 hover:text-[#F9FAFB] transition-colors rounded-lg hover:bg-white/5">
            Sign In
          </button>
          <button className="w-full px-6 py-2.5 bg-gradient-to-b from-[#A855F7] to-[#7C3AED] text-white rounded-lg font-medium transition-all mt-2
            shadow-[0_4px_14px_rgba(139,92,246,0.32)] border border-purple-500/60">
            Get Started
          </button>
        </div>
      </div>
    )}
  </nav>
  )
}

export default header