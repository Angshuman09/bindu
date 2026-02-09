'use client'
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
// import { Authenticated, Unauthenticated } from "convex/react";
import { useStoreUser } from "@/hooks/use-store-user";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  // const {user} = useUser();
  const { isLoading, isAuthenticated } = useStoreUser();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="bg-[#0D0D0D]/80 border border-white/10 rounded-2xl px-6 py-3 backdrop-blur-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3A86FF] rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                alt="logo"
                src="/logo.png"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold">Bindu</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
            {isAuthenticated ?
              <div onClick={()=>router.push('/dashboard')} className="flex justify-center items-center gap-2">
                <Button>Dashboard</Button>
                <UserButton />
              </div> :
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm">
                  Sign In
                </button>
                <button
                  className="px-6 py-2 bg-[#3A86FF] text-white rounded-xl text-sm font-medium transition-all
                    hover:bg-[#2968D9]"
                  onClick={() => router.push('/sign-in')}
                >
                  Get Started
                </button>
              </div>
            }
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2 bg-[#0D0D0D]/90 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
          <div className="space-y-2">
            <a href="#features" className="block text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5">Features</a>
            <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5">Pricing</a>
            <a href="#about" className="block text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5">About</a>
            <button className="w-full px-3 py-2 text-left text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Sign In
            </button>
            <button
              className="w-full px-6 py-2.5 bg-[#3A86FF] text-white rounded-xl font-medium transition-all mt-2
                hover:bg-[#2968D9]"
              onClick={() => router.push('/sign-in')}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header