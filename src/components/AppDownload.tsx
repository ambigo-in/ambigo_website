
import { Apple, Play } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-96 h-96 bg-red-700 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Get the Ambigo App for a Seamless Experience
            </h2>
            <p className="text-red-100 text-lg max-w-xl">
              Whether you're booking an ambulance in an emergency or joining us as a driver, our mobile apps provide quick, easy, and secure access to all our services.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {/* User App */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-all flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img src="/images/userapplogo.webp" alt="User App" className="w-12 h-12 rounded-xl bg-white p-1" />
                  <div>
                    <h4 className="font-bold text-xl">For Users</h4>
                    <p className="text-red-100 text-sm">Book rides & services</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-black text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                    <Apple size={20} /> <span className="text-sm font-semibold">App Store</span>
                  </button>
                  <button className="flex-1 bg-black text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                    <Play size={20} /> <span className="text-sm font-semibold">Google Play</span>
                  </button>
                </div>
              </div>

              {/* Driver App */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-all flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2">
                    <img src="/images/driverapplogo.svg" alt="Driver App" className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">For Drivers</h4>
                    <p className="text-red-100 text-sm">Partner with us</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-black text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                    <Apple size={20} /> <span className="text-sm font-semibold">App Store</span>
                  </button>
                  <button className="flex-1 bg-black text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                    <Play size={20} /> <span className="text-sm font-semibold">Google Play</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative">
            <img src="/images/driverApp.png" alt="Ambigo App Interface" className="w-3/4 object-contain filter drop-shadow-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;
