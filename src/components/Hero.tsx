
import { ArrowRight, ShieldPlus, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10"></div>
        <img 
          src="/images/banner.png" 
          alt="Ambulance Service Background" 
          className="w-full h-full object-cover object-right opacity-30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-primary font-semibold text-sm mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              24/7 Emergency Services
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Rapid Medical <span className="text-primary">Transport</span> & Care
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Ambigo provides instant, reliable, and professional medical transport, 
              online consultations, and pharmacy deliveries right to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-red-500/30 flex items-center justify-center gap-2 group">
                Book Ambulance
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                Download App
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldPlus className="text-secondary" size={24} />
                <span>Certified Medics</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-secondary" size={24} />
                <span>Lightning Fast</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full filter blur-3xl transform scale-110 -z-10"></div>
            <img 
              src="/images/ambulance2.png" 
              alt="Ambigo Ambulance" 
              className="w-full h-auto drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              style={{
                animation: 'float 6s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
