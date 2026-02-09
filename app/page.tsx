'use client'
import { Features } from '@/components/home-page/features';
import Footer from '@/components/home-page/footer';
import Header from '@/components/home-page/header'
import { PricingSection } from '@/components/home-page/pricing';
import { Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F9FAFB]">
      {/* Minimal Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3A86FF]/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Floating Navigation */}
      <Header/>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <div className="w-1.5 h-1.5 bg-[#3A86FF] rounded-full"></div>
            <span className="text-sm text-gray-400">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Transform Your Photos
            <span className="block text-[#3A86FF] mt-2">
              with AI Magic
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional photo editing made simple. Remove backgrounds, enhance quality, 
            and apply stunning effects in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#3A86FF] text-white rounded-xl font-medium transition-all
              hover:bg-[#2968D9]">
              Start Editing Free
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-medium transition-all
              hover:bg-white/10">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">10M+</div>
              <div className="text-sm text-gray-500">Photos Edited</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-4xl font-bold text-white mb-1">500K+</div>
              <div className="text-sm text-gray-500">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features/>
      {/* Pricing Section */}
      <PricingSection/>
     

      {/* CTA Section */}
      <section className="relative py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-16 rounded-3xl bg-[#3A86FF]/10 border border-[#3A86FF]/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Photos?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators using AI to edit photos faster than ever before
            </p>
            <button className="px-10 py-4 bg-[#3A86FF] text-white rounded-xl font-medium transition-all
              hover:bg-[#2968D9]">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}