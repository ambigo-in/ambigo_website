
import { ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Dedicated to Saving Lives & Improving Health</h3>
              <p className="text-lg text-gray-600">
                At Ambigo, we merge modern technology with compassionate care. Our platform is designed to provide seamless access to critical medical services whenever and wherever you need them.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-primary">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Instant Medical Help</h4>
                  <p className="text-gray-600">Our emergency services are highly responsive, ensuring that help reaches you in record time.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-secondary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Affordable Pricing</h4>
                  <p className="text-gray-600">We believe healthcare should be accessible to everyone, offering transparent and fair pricing for all services.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Paramedical Training</h4>
                  <p className="text-gray-600">We continuously invest in training our staff to handle various emergencies with the utmost professionalism.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary rounded-full blur-3xl opacity-20 -z-10"></div>
            
            <div className="space-y-4 pt-8">
              <img src="/images/instant_medical.png" alt="Instant Medical" className="w-full rounded-2xl shadow-lg border border-gray-100 bg-white" />
              <img src="/images/affordable_pricing.png" alt="Affordable Pricing" className="w-full rounded-2xl shadow-lg border border-gray-100 bg-white" />
            </div>
            <div className="space-y-4">
              <img src="/images/paramedical_training.png" alt="Paramedical Training" className="w-full rounded-2xl shadow-lg border border-gray-100 bg-white" />
              <div className="bg-primary rounded-2xl p-6 text-white shadow-lg flex flex-col justify-center h-[calc(100%-1rem)]">
                <h4 className="text-3xl font-bold mb-2">10k+</h4>
                <p className="text-red-100 font-medium">Lives Touched & Growing</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
