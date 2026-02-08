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
      <section id="features" className="relative py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to create stunning photos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 transition-all hover:border-white/20"
              >
                <div className="w-12 h-12 bg-[#3A86FF]/10 rounded-xl flex items-center justify-center mb-5 text-[#3A86FF]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all ${
                  plan.popular 
                    ? 'border-[#3A86FF] bg-[#3A86FF]/5' 
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#3A86FF] text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#3A86FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#3A86FF]" strokeWidth={2.5} />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                  plan.popular
                    ? 'bg-[#3A86FF] text-white hover:bg-[#2968D9]'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <footer className="relative border-t border-white/5 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#3A86FF] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">PhotoAI</span>
              </div>
              <p className="text-gray-500 text-sm">
                AI-powered photo editing for everyone
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-6 text-center text-gray-500 text-sm">
            <p>© 2024 PhotoAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}