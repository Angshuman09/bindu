'use client'

import { Sparkles, Wand2, Image, Zap, Check, ArrowRight } from 'lucide-react';
import Header from '@/components/home-page/header'
export default function HomePage() {


  const features = [
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "AI Background Removal",
      description: "Remove backgrounds instantly with one click using advanced AI technology"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Smart Enhancement",
      description: "Automatically enhance colors, lighting, and details with AI-powered adjustments"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Style Transfer",
      description: "Transform your photos with artistic styles powered by neural networks"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Process images in seconds with our optimized AI infrastructure"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: [
        "50 AI edits per month",
        "HD export quality",
        "Background removal",
        "Basic enhancements"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited AI edits",
        "4K export quality",
        "All AI features",
        "Priority processing",
        "Advanced style transfer",
        "Commercial license"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Custom AI models",
        "API access",
        "Dedicated support",
        "SLA guarantee",
        "Team collaboration",
        "Volume discounts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#F9FAFB]">
      {/* Floating Navigation */}
      <Header/>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-[#06B6D4] rounded-full animate-pulse"></div>
            <span className="text-sm text-[#06B6D4] font-medium">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Transform Your Photos
            <span className="block bg-clip-text text-transparent bg-linear-to-l from-violet-700 via-purple-300 to-violet-700 mt-2">
              with AI Magic
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional photo editing made simple. Remove backgrounds, enhance quality, 
            and apply stunning effects in seconds with our AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-[#A855F7] to-[#7C3AED] text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all
              shadow-[0_8px_28px_-10px_rgba(139,92,246,0.55),0_0_0_1px_rgba(139,92,246,0.28)]
              hover:bg-gradient-to-b hover:from-[#8B5CF6] hover:to-[#6D28D9]
              hover:shadow-[0_10px_32px_-10px_rgba(139,92,246,0.6),0_0_0_1px_rgba(139,92,246,0.32)]
              hover:-translate-y-1
              active:translate-y-0
              active:shadow-[0_6px_20px_-8px_rgba(139,92,246,0.5),0_0_0_1px_rgba(139,92,246,0.26)]">
              Start Editing Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-600 text-white rounded-xl transition-all font-semibold text-lg">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#06B6D4] mb-2">10M+</div>
              <div className="text-sm text-gray-500">Photos Edited</div>
            </div>
            <div className="p-4 border-x border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-[#06B6D4] mb-2">500K+</div>
              <div className="text-sm text-gray-500">Happy Users</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#06B6D4] mb-2">99.9%</div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to create stunning photos, powered by cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-gray-800 hover:border-gray-700 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#8B5CF6] rounded-xl flex items-center justify-center mb-5 
                  shadow-[0_8px_30px_-5px_rgba(139,92,246,0.3)]
                  group-hover:shadow-[0_12px_40px_-5px_rgba(139,92,246,0.4)]
                  transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-[#8B5CF6] bg-[#8B5CF6]/5 shadow-[0_20px_50px_-12px_rgba(139,92,246,0.25)] scale-105' 
                    : 'border-gray-800 bg-white/5 hover:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#06B6D4] text-[#1E1E1E] text-xs font-bold rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#06B6D4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#06B6D4]" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3.5 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? `bg-gradient-to-b from-[#A855F7] to-[#7C3AED] text-white
                       shadow-[0_8px_28px_-10px_rgba(139,92,246,0.55),0_0_0_1px_rgba(139,92,246,0.28)]
                       hover:bg-gradient-to-b hover:from-[#8B5CF6] hover:to-[#6D28D9]
                       hover:shadow-[0_10px_32px_-10px_rgba(139,92,246,0.6),0_0_0_1px_rgba(139,92,246,0.32)]
                       hover:-translate-y-0.5
                       active:translate-y-0
                       active:shadow-[0_6px_20px_-8px_rgba(139,92,246,0.5),0_0_0_1px_rgba(139,92,246,0.26)]`
                    : 'bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-600 text-[#F9FAFB]'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 md:p-16 rounded-3xl bg-[#8B5CF6] relative overflow-hidden
            shadow-[0_20px_70px_-15px_rgba(139,92,246,0.5)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Photos?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of creators using AI to edit photos faster than ever before
              </p>
              <button className="px-10 py-4 bg-gradient-to-b from-[#111827] to-[#020617] text-white rounded-xl font-semibold text-lg transition-all
                shadow-[0_8px_28px_-10px_rgba(0,0,0,0.75),0_0_0_1px_rgba(0,0,0,0.45)]
                hover:bg-gradient-to-b hover:from-[#0F172A] hover:to-[#020617]
                hover:shadow-[0_10px_32px_-10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(0,0,0,0.5)]
                hover:-translate-y-1
                active:translate-y-0
                active:shadow-[0_6px_22px_-8px_rgba(0,0,0,0.75),0_0_0_1px_rgba(0,0,0,0.45)]">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#8B5CF6] rounded-lg flex items-center justify-center shadow-[0_4px_14px_rgba(139,92,246,0.4)]">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PhotoAI</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                AI-powered photo editing for everyone
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#F9FAFB]">Product</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#F9FAFB]">Company</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#F9FAFB]">Legal</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#F9FAFB] transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 PhotoAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}