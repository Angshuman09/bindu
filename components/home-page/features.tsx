
import { Wand2, Sparkles, Image, Zap } from 'lucide-react';
export const Features = () => {

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
  return (
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
  )
}
