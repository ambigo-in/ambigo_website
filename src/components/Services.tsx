
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Ambulance Services',
    description: 'Rapid and reliable 24/7 ambulance services equipped with basic and advanced life support.',
    image: '/images/ambulance1.jpg',
    color: 'bg-red-50'
  },
  {
    title: 'Ambigo Auto & Cab',
    description: 'Affordable auto and cab services for quick rides and planned trips.',
    image: '/images/ambicab.png',
    color: 'bg-blue-50'
  },
  {
    title: 'Patient Transport',
    description: 'Safe and comfortable non-emergency medical transportation for patients.',
    image: '/images/patientTransportAmbi.png',
    color: 'bg-green-50'
  },
  {
    title: 'Doctor Consultation',
    description: 'Connect with expert doctors online or book offline appointments easily.',
    image: '/images/doctorconsult.png',
    color: 'bg-purple-50'
  },
  {
    title: 'Lab Tests at Home',
    description: 'Book comprehensive lab tests and health checkups from the comfort of your home.',
    image: '/images/lab_test.png',
    color: 'bg-orange-50'
  },
  {
    title: 'Pharmacy Delivery',
    description: 'Get your prescribed medicines delivered directly to your doorstep.',
    image: '/images/pharma_delivery.png',
    color: 'bg-teal-50'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Comprehensive Healthcare Solutions</h3>
          <p className="text-lg text-gray-600">
            From emergency transport to daily healthcare needs, Ambigo is your trusted partner for reliable medical services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className={`h-48 w-full ${service.color} flex items-center justify-center p-6 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
                <a href="#" className="inline-flex items-center text-secondary font-semibold group-hover:text-primary transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
