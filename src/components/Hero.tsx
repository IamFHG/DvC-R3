import { motion } from 'motion/react';
import heroBg from './HeroHD.png';
import { Truck, Headphones, ShieldCheck, Gift } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast and Free Delivery',
    description: 'Free delivery for all orders $140',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Friendly 24/7 customer support',
  },
  {
    icon: ShieldCheck,
    title: 'Money Back Guarantee',
    description: 'We return money within 30 days',
  },
  {
    icon: Gift,
    title: 'Member Gifts',
    description: 'Discount coupons weekends.',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full aspect-[1136/944] max-h-[944px] overflow-hidden flex flex-col justify-between pt-[15%] md:pt-[20%] pb-[5%] md:pb-0">
      {/* Background Image */}
      <img
  src={heroBg}
  alt="Hero Background"
  className="absolute inset-0 w-full h-full object-cover z-0"
/>
      
      {/* Dark Overlay for Content Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d1e12]/80 via-[#0d1e12]/20 to-transparent w-full md:w-[63%] md:bg-[#0d1e12] h-full" />
      <div className="absolute bottom-0 left-0 w-full h-[25%] md:h-[280px] z-[15] bg-gradient-to-t from-[#0d1e12]/60 to-transparent md:bg-[#142d1b]/95 backdrop-blur-sm" />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-[1136px] mx-auto px-[5%] md:px-12 lg:px-0 mb-[2%] md:mb-0">
        <div className="max-w-[100%] md:max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(24px,7.4vw,84px)] leading-[1.1] mb-[3%] md:mb-8 font-medium tracking-tighter text-white"
          >
            Office Plants. <br />
            Garden <span className="italic font-normal text-white/90">&</span> Home
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 text-[clamp(10px,1.5vw,18px)] font-light mb-[4%] md:mb-10 max-w-[80%] md:max-w-lg leading-relaxed"
          >
            Shop your favorite plants in your favorable factor, Veggies, Seeds, Citrus, Fruit Trees, Herbs and more...
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => window.open('https://jadebonsaipakistan.com/', '_blank')}
            className="bg-white text-[#142d1b] px-[4%] md:px-10 py-[1.5%] md:py-4 text-[clamp(10px,1.2vw,13px)] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-white/95 transition-all cursor-pointer rounded-sm"
          >
            Our Products
          </motion.button>
        </div>
      </div>

      {/* Features Content (Bottom Area Area) */}
      <div id="features" className="relative z-20 w-full max-w-[1136px] mx-auto px-[5%] md:px-12 lg:px-0 pb-[3%] md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-[5%] md:gap-x-24 gap-y-[2%] md:gap-y-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              onClick={() => {
                const el = document.getElementById('features');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-[4%] md:gap-6 group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all"
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-[clamp(16px,3.5vw,40px)] h-[clamp(16px,3.5vw,40px)] text-[#a3c9a8]/60 group-hover:text-[#a3c9a8] transition-colors" strokeWidth={1} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[clamp(9px,1.5vw,17px)] mb-0.5 text-white/90 tracking-wide uppercase font-sans truncate">{feature.title}</h3>
                <p className="text-white/30 text-[clamp(7px,1.2vw,14px)] font-light leading-snug truncate md:whitespace-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
