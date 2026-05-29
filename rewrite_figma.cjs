const fs = require('fs');
const path = require('path');

const newNavbarTsx = `import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Custom SVG logo based on the image (4 blue/orange dots) */}
          <div className="w-8 h-8 relative">
            <div className="absolute top-0 left-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-4 left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute top-2 left-4 w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <span className="font-poppins font-bold text-xl tracking-tight text-slate-800">Ambigo</span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-10 font-inter text-sm font-semibold">
          <Link to="/" className="text-slate-800 hover:text-orange-500 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-800">Home</Link>
          <Link to="#" className="text-slate-500 hover:text-slate-800">How It Works</Link>
          <Link to="#" className="text-slate-500 hover:text-slate-800">Features</Link>
          <Link to="#" className="text-slate-500 hover:text-slate-800">Contact</Link>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="border-2 border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-full font-inter font-semibold transition-all shadow-sm">
            Call Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
`;

const newHomeTsx = `import React from "react";

const Home = () => {
  return (
    <div className="font-inter bg-white text-slate-800 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 w-full min-h-screen flex items-center">
        {/* Background Shapes */}
        <div className="absolute top-20 -left-48 w-[500px] h-[500px] bg-orange-100/60 rounded-full -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-blue-50/80 -z-10" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-[400px] bg-blue-100/40 -z-10" style={{ borderTopLeftRadius: '100%', borderBottomLeftRadius: '0%' }}></div>

        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left: Text & Ambulance Image */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins text-slate-900 leading-[1.1] tracking-tight">
              Fast, Reliable<br />Ambulance Booking.
            </h1>
            <p className="text-lg text-slate-500 mt-6 font-medium">
              Emergency? Book medical transport instantly, 24/7.
            </p>
            
            {/* Cartoon Ambulance Image */}
            <div className="mt-12 w-full max-w-lg relative">
              {/* Fake shadow ellipse under ambulance */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-slate-200 rounded-full blur-md -z-10"></div>
              {/* Generic cartoon ambulance placeholder - matches style */}
              <img src="https://cdn-icons-png.freepik.com/512/2830/2830305.png" alt="Cartoon Ambulance" className="w-[80%] h-auto object-contain transform -scale-x-100" />
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] w-full max-w-md border border-slate-50">
              <h2 className="text-2xl font-bold font-poppins text-center mb-8">Need An Ambulance?</h2>
              
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                {/* Input: Current Location */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <input type="text" placeholder="Current Location" className="w-full bg-slate-50 text-slate-800 rounded-full py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-200 text-sm font-medium" />
                </div>
                
                {/* Input: Destination */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  </div>
                  <input type="text" placeholder="Destination" className="w-full bg-slate-50 text-slate-800 rounded-full py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-200 text-sm font-medium" />
                </div>

                {/* Input: Medical Condition */}
                <div className="relative">
                  <input type="text" placeholder="Medical Condition" className="w-full bg-slate-50 text-slate-800 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-orange-200 text-sm font-medium" />
                </div>

                {/* Select: Booking Time */}
                <div className="relative">
                  <select className="w-full bg-slate-50 text-slate-800 rounded-full py-4 px-6 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-200 text-sm font-medium">
                    <option>Booking Time (ASAP)</option>
                    <option>Schedule Later</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full py-4 mt-2 transition-colors shadow-lg shadow-orange-500/30">
                  Book Now (ASAP)
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- CARDS SECTION (3 Columns) --- */}
      <section className="py-20 px-6 lg:px-12 w-full relative z-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-50 hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
              <img src="https://cdn-icons-png.freepik.com/512/2830/2830305.png" alt="Emergency" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-900 mb-3">Emergency Transport</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Emergency transport can ambient noincarriers and modern cars werviors.</p>
            <a href="#" className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Learn More <span className="text-lg">›</span></a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-50 hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <img src="https://cdn-icons-png.freepik.com/512/1046/1046755.png" alt="Non-Emergency" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-900 mb-3">Non-Emergency Transport</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Emospeney transport can transport safely in a practical non-emergency transport.</p>
            <a href="#" className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Learn More <span className="text-lg">›</span></a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-50 hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
              <img src="https://cdn-icons-png.freepik.com/512/3004/3004077.png" alt="Critical Care" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-slate-900 mb-3">Critical Care</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Care specialist critical medical conditions a-noaancev wasioes and key critical care.</p>
            <a href="#" className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Learn More <span className="text-lg">›</span></a>
          </div>

        </div>
      </section>

      {/* --- WHY CHOOSE AMBIGO --- */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16 text-slate-900">Why Choose Ambigo?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-orange-100">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 Response</h3>
              <p className="text-xs text-slate-500">24/7 in response. Clock and reanden simes.</p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Verified Staff</h3>
              <p className="text-xs text-slate-500">We helps rsomotly verified verified Staff.</p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Real-Time Tracking</h3>
              <p className="text-xs text-slate-500">Real-Time modern tracking Map.</p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Affordable Pricing</h3>
              <p className="text-xs text-slate-500">Affordable pricing is raquirament.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- REAL-TIME TRACKING --- */}
      <section className="py-20 px-6 lg:px-12 bg-white relative">
        <div className="absolute left-0 bottom-20 w-32 h-64 bg-orange-100 rounded-r-full -z-10 opacity-60"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-slate-900 mb-6 leading-tight">Real-Time<br/>Tracking</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">Map view, ambulance with destination and marked onar destination.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-orange-500/20">
              Learn More
            </button>
          </div>
          
          <div className="w-full md:w-2/3">
             <div className="bg-slate-100/50 rounded-3xl p-6 lg:p-10 border border-slate-100 relative overflow-hidden flex items-center justify-center">
               {/* Map Illustration Placeholder matching Figma */}
               <div className="w-full h-64 bg-[#e5eadd] rounded-2xl relative overflow-hidden border border-slate-200">
                  {/* Fake map roads */}
                  <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, white 48%, white 52%, transparent 52%), linear-gradient(-45deg, transparent 48%, white 48%, white 52%, transparent 52%)', backgroundSize: '100px 100px' }}></div>
                  <div className="absolute top-1/4 left-0 w-full h-4 bg-white opacity-60"></div>
                  <div className="absolute left-1/3 top-0 h-full w-4 bg-white opacity-60"></div>
                  
                  {/* Fake route line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <path d="M100,150 L200,150 L300,50" fill="none" stroke="#2563EB" strokeWidth="4" strokeDasharray="8 8" />
                  </svg>
                  
                  {/* Ambulance icon on map */}
                  <div className="absolute bottom-[30px] left-[80px] bg-white p-2 rounded-lg shadow-md border border-slate-100">
                    <img src="https://cdn-icons-png.freepik.com/512/2830/2830305.png" className="w-8 h-8 object-contain transform -scale-x-100" alt="Ambulance marker" />
                  </div>
                  
                  {/* Destination Pin */}
                  <div className="absolute top-[30px] right-[90px]">
                    <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      <section className="py-20 bg-[#FDF8F3] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-[400px] bg-orange-300 rounded-tl-full opacity-80 z-0"></div>
        <div className="absolute left-0 top-1/2 w-32 h-32 bg-orange-200 rounded-r-full z-0"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-3xl font-bold font-poppins text-slate-900 mb-16">Testimonial</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 max-w-sm mx-auto text-center relative">
               <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto -mt-16 mb-4 border-4 border-white overflow-hidden shadow-sm">
                 <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
               </div>
               <p className="text-sm text-slate-500 italic leading-relaxed mb-6">
                 "Henpreai eelostri herondy. Rmond ace and trtito boooearves one acntardance and whot lroomastorm."
               </p>
               <h4 className="font-bold text-slate-900">Morns</h4>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 max-w-sm mx-auto text-center relative mt-12 md:mt-0">
               <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto -mt-16 mb-4 border-4 border-white overflow-hidden shadow-sm">
                 <img src="https://i.pravatar.cc/150?img=5" alt="User" className="w-full h-full object-cover" />
               </div>
               <p className="text-sm text-slate-500 italic leading-relaxed mb-6">
                 "Thenks with tesar carefuls and hes sea nocds ef eomo shore mcdomor."
               </p>
               <h4 className="font-bold text-slate-900">Eram</h4>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-4 h-2 bg-slate-800 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 relative">
                <div className="absolute top-0 left-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute top-1 left-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute top-2 left-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute top-1 left-2 w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span className="font-poppins font-bold text-lg text-slate-800">Ambigo</span>
            </div>
            <p className="text-xs text-slate-400">segonnat ambigo.com</p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">About</h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><a href="#" className="hover:text-orange-500">Acnuat Links</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy Links</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms Accessing</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact hits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Download App</h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-100 text-slate-600 hover:text-orange-500 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-100 text-slate-600 hover:text-orange-500 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-orange-100 text-slate-600 hover:text-orange-500 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'components', 'Navbar.tsx'), newNavbarTsx);
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Home.tsx'), newHomeTsx);
console.log('Navbar and Home fully rewritten to exactly match the Figma design layout.');
