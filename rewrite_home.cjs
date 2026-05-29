const fs = require('fs');
const path = require('path');

const newHomeTsx = `import React from "react";

const Home = () => {
  return (
    <div className="font-inter bg-white text-slate-800 overflow-x-hidden">
      {/* Decorative Wave Backgrounds */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-screen bg-blue-50 rounded-bl-[150px] opacity-70 hidden lg:block"></div>
      <div className="absolute top-20 -left-20 -z-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 bg-transparent"></div>

      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-slate-900 leading-tight tracking-tight">
            Welcome to <span className="text-brand-orange">Ambigo</span>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-4 text-brand-blue leading-tight">
            24/7 Ambulance Services
            <br />
            <span className="text-slate-800">Anytime, Anywhere</span>
          </h2>
          <p className="text-lg text-slate-500 mt-6 max-w-xl mx-auto lg:mx-0">
            In emergency situations, help or rescue just a click away. We will be at your door!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="https://play.google.com/store/apps/details?id=in.ambigo.user" className="px-8 py-4 bg-brand-orange text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 transition-all w-full sm:w-auto text-center">
              DOWNLOAD Ambigo
            </a>
            <a href="tel:+918985138102" className="px-8 py-4 bg-white border-2 border-brand-orange text-brand-orange font-semibold rounded-full hover:bg-orange-50 transition-all w-full sm:w-auto text-center">
              Call: +91 8985138102
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center z-10 relative">
           {/* Mockup of Ambulance/Hero Visual */}
           <div className="relative w-full max-w-lg">
             <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             <img src="advance1.png" alt="Ambulance" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
           </div>
        </div>
        
        {/* Soft Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none transform translate-y-1/2">
          <svg className="relative block w-full h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,120.22,192.39,109.53Z" fill="#F4F7FA"></path>
          </svg>
        </div>
      </section>

      {/* TYPES OF AMBULANCE */}
      <section className="bg-section-grey py-24 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-poppins">Type of Ambulance</h2>
            <p className="text-slate-500 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              Ambigo provides a comprehensive range of ambulance services designed to meet diverse needs. From standard to advanced life support, we cater to every requirement with utmost care.
            </p>
          </div>
          
          {/* Card Grid matching the design (white card, small icon box, title, text, link) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Advance life support", img: "advance1.png", desc: "Equipped with advanced medical tools for critical care situations." },
              { title: "Basic life Support", img: "patientTran.png", desc: "Standard medical support for non-critical patient transport." },
              { title: "Patient Transport", img: "patientTransportAmbi.png", desc: "Comfortable and safe transport for planned hospital visits." },
              { title: "Car Cab", img: "ambicab.png", desc: "Quick and efficient car cabs for minor emergencies and transport." },
              { title: "Auto Rikshaw", img: "ambigoAuto.png", desc: "Affordable and fast local transport for immediate access." }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col group border border-slate-50">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:bg-blue-100 transition-colors">
                  <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-500 mb-8 flex-grow">{card.desc}</p>
                <button className="text-brand-orange font-semibold text-lg flex items-center gap-2 group-hover:gap-3 transition-all w-fit">
                  Learn More <span className="text-xl">›</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AMBIGO */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 font-poppins mb-16">Why Choose Ambigo?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "24/7 Support", img: "https://x5siwvse0svtj0yw5pfe.ultatel.com/wp-content/uploads/2022/05/illustration-of-247-customer-service-support-1-scaled.jpg", desc: "Always available to help you whenever you need us." },
              { title: "Emergency Support", img: "https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Customer-Care-Company3--1--1.jpg", desc: "Rapid emergency response to ensure your safety." },
              { title: "Priority for Patients", img: "https://media.istockphoto.com/id/1299025648/vector/doctor-in-mask-consulting-female-patient-physycian-sitting-at-the-desk-with-monitor-family.jpg?s=612x612&w=0&k=20&c=9ZjUoTOYGNyGRjw9DSLdYiIN4_VnWRw5oiYYJyU5e6s=", desc: "Your health and safety are our absolute first priority." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 overflow-hidden shadow-sm shadow-blue-100 p-2 transform rotate-3 hover:rotate-0 transition-transform">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS / STATS (Designed as a modern floating banner) */}
      <section className="px-6 lg:px-12 py-12 relative z-20 -mt-10">
        <div className="max-w-6xl mx-auto bg-brand-navy rounded-[40px] shadow-2xl p-10 lg:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          
          <div className="w-full md:w-1/3 text-center md:text-left z-10">
            <h2 className="text-3xl font-bold font-poppins mb-2">Our Impact</h2>
            <p className="text-slate-300">Response Time: <span className="text-brand-orange font-bold">Less than 10 mins</span></p>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 z-10">
            {[
              { val: "150+", label: "Patients Served" },
              { val: "50+", label: "Ambulances" },
              { val: "5+", label: "Cities" },
              { val: "100+", label: "Hospitals" },
              { val: "120+", label: "Corporates" },
              { val: "123+", label: "Doctors" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.val}</h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP FEATURES */}
      <section className="py-24 px-6 lg:px-12 bg-section-grey">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-poppins">App Features</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
              Book ambulances in emergency or in advance. Experience our seamless platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Instant Medical Assistance", img: "instant_medical.png", desc: "Get immediate access to trusted ambulance services for any medical emergency." },
              { title: "Schedule a Ride", img: "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/cd/6e/34/cd6e3476-01ae-e193-637e-262546a7d2fb/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/434x0w.png", desc: "Book ambulances in advance to ensure timely transportation for hospital visits." },
              { title: "Affordable Pricing", img: "affordable_pricing.png", desc: "Enjoy transparent and competitive rates with flexible payment options." },
              { title: "Emergency Helpline", img: "https://cdn-icons-png.freepik.com/512/9037/9037447.png", desc: "Reach out to our 24/7 helpline for quick responses in critical situations." },
              { title: "Health & Safety Guidance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65pVZgtvQjZDIi1oa08U0UIHdhmyIsjgkJfMWuJpW6Vt1yyGRVPTo7w8fuQxY5XhkQ4o&usqp=CAU", desc: "Learn vital tips and safety measures to handle emergencies effectively." },
              { title: "Real-Time Updates", img: "https://img.freepik.com/premium-vector/vector-design-telephony-icon-style_822882-287189.jpg", desc: "Stay informed with live tracking and direct communication with ambulance staff." }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 p-3">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH TIPS */}
      <section className="py-24 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold text-slate-900 font-poppins">Health Tips</h2>
            <button className="text-brand-blue font-semibold hover:underline hidden sm:block">View All</button>
          </div>
          
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar">
            {[
              { tag: "Nutrition", title: "Healthy Eating Habits for a Stronger Heart", desc: "Discover how the right food choices can significantly improve your cardiovascular health.", img: "/fruits.jpg" },
              { tag: "Fitness", title: "The Importance of Regular Exercise", desc: "Discover how just 30 minutes of daily exercise can transform your health and energy levels.", img: "/exercise.jpg" },
              { tag: "Mental Health", title: "Mindfulness Techniques for Stress Relief", desc: "Learn simple daily practices to reduce anxiety and improve your mental wellbeing.", img: "meditating.jpg" },
              { tag: "Sleep", title: "Better Sleep Habits for Optimal Health", desc: "Discover the science-backed strategies to improve your sleep quality for better health.", img: "/sleeping.jpg" }
            ].map((tip, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[350px] bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow snap-start">
                <div className="h-48 overflow-hidden relative">
                  <img src={tip.img} alt={tip.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-orange">
                    {tip.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{tip.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-3">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP PROMO SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-brand-blue text-white relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange opacity-20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-16">Get more in the app</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {/* User App Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center flex-1 hover:bg-white/20 transition-all">
              <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-lg mb-6 flex items-center justify-center">
                <img src="userapplogo.webp" alt="Ambigo App" className="w-full h-full object-contain rounded-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">User App</h3>
              <p className="text-blue-100 mb-8 text-center">Download to book rides instantly.</p>
              <div className="bg-white p-2 rounded-xl mb-6">
                <img src="user_app_link.png" alt="QR" className="w-32 h-32" />
              </div>
              <a href="#" className="flex items-center justify-center w-full py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors">
                Download Now
              </a>
            </div>

            {/* Driver App Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center flex-1 hover:bg-white/20 transition-all">
              <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-lg mb-6 flex items-center justify-center">
                <img src="partnerlogo.webp" alt="Ambigo Partner" className="w-full h-full object-contain rounded-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Partner App</h3>
              <p className="text-blue-100 mb-8 text-center">Drive and earn with Ambigo.</p>
              <div className="bg-white p-2 rounded-xl mb-6">
                <img src="partner_link.png" alt="QR" className="w-32 h-32" />
              </div>
              <a href="#" className="flex items-center justify-center w-full py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-colors">
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* GLOBAL STYLES FOR SCROLLBAR */}
      <style dangerouslySetInnerHTML={{__html: \`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      \`}} />
    </div>
  );
};

export default Home;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Home.tsx'), newHomeTsx);
console.log('Home.tsx successfully rewritten.');
