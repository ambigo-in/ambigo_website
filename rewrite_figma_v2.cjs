const fs = require('fs');
const path = require('path');

const newNavbarTsx = `import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Custom SVG logo based on the image (4 blue/orange dots) */}
          <div className="w-8 h-8 relative">
            <div className="absolute top-0 left-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-4 left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute top-2 left-4 w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <span className="font-poppins font-extrabold text-xl tracking-tight text-slate-900">Ambigo</span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-10 font-inter text-sm font-semibold">
          <Link to="/" className="text-slate-900 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-900">Home</Link>
          <Link to="#" className="text-slate-600 hover:text-slate-900 transition-colors">How It Works</Link>
          <Link to="#" className="text-slate-600 hover:text-slate-900 transition-colors">Features</Link>
          <Link to="#" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="border-2 border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2.5 rounded-full font-inter font-bold transition-all shadow-sm">
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
    <div className="font-poppins bg-white text-slate-800 overflow-x-hidden relative">
      
      {/* Decorative Wavy Background for Hero */}
      <div className="absolute top-0 left-0 w-full h-[850px] -z-10 overflow-hidden pointer-events-none">
        {/* Top left orange shape */}
        <div className="absolute -top-20 -left-40 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter opacity-60"></div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#eef2ff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-[50%] flex flex-col">
          <h1 className="text-5xl lg:text-[64px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Fast, Reliable <br /> Ambulance Booking.
          </h1>
          <p className="text-lg text-slate-500 mt-6 font-medium">
            Emergency? Book medical transport instantly, 24/7.
          </p>
          
          {/* Cartoon Ambulance Visual */}
          <div className="mt-12 w-full max-w-lg relative">
            {/* Using a highly reliable SVG URL for the cartoon ambulance */}
            <img 
              src="https://www.svgrepo.com/show/305141/ambulance.svg" 
              alt="Cartoon Ambulance" 
              className="w-[85%] h-auto object-contain drop-shadow-2xl" 
            />
          </div>
        </div>

        {/* Right Form Card */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full max-w-md border border-slate-50/50">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Need An Ambulance?</h2>
            
            <form className="flex flex-col gap-5">
              
              {/* Location Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <input type="text" placeholder="Current Location" className="w-full bg-slate-50/80 text-slate-800 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all text-sm font-medium border border-slate-100" />
              </div>
              
              {/* Destination Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </div>
                <input type="text" placeholder="Destination" className="w-full bg-slate-50/80 text-slate-800 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all text-sm font-medium border border-slate-100" />
              </div>

              {/* Medical Condition */}
              <div className="relative">
                <input type="text" placeholder="Medical Condition" className="w-full bg-slate-50/80 text-slate-800 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all text-sm font-medium border border-slate-100" />
              </div>

              {/* Booking Time Select */}
              <div className="relative">
                <select className="w-full bg-slate-50/80 text-slate-800 rounded-full py-4 pl-6 pr-12 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all text-sm font-medium border border-slate-100 cursor-pointer">
                  <option>Booking Time (ASAP)</option>
                  <option>Schedule Later</option>
                </select>
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              {/* Submit Button */}
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full py-4 mt-4 transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:-translate-y-1">
                Book Now (ASAP)
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- CARDS SECTION (3 Columns) --- */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[40px] p-10 shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-slate-50 hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Emergency Transport</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">Emergency transport can ambient noincarriers and modern cars werviors.</p>
            <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More <span className="text-xl">›</span></a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[40px] p-10 shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-slate-50 hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Non-Emergency Transport</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">Emospeney transport can transport safely in a practical non-emergency transport.</p>
            <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More <span className="text-xl">›</span></a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[40px] p-10 shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-slate-50 hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Critical Care</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">Care specialist critical medical conditions a-noaancev wasioes and key critical care.</p>
            <a href="#" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More <span className="text-xl">›</span></a>
          </div>

        </div>
      </section>

      {/* --- WHY CHOOSE AMBIGO --- */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-20 text-slate-900">Why Choose Ambigo?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50 transform rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">24/7 Response</h3>
              <p className="text-sm text-slate-500 font-medium px-4">24/7 in response. Clock and reanden simes.</p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50 transform -rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Verified Staff</h3>
              <p className="text-sm text-slate-500 font-medium px-4">We helps rsomotly verified verified Staff.</p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50 transform rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Real-Time Tracking</h3>
              <p className="text-sm text-slate-500 font-medium px-4">Real-Time modern tracking Map.</p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50 transform -rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Affordable Pricing</h3>
              <p className="text-sm text-slate-500 font-medium px-4">Affordable pricing is raquirament.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- REAL-TIME TRACKING --- */}
      <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
        {/* Decorative background cutouts matching design */}
        <div className="absolute right-0 top-0 w-[40%] h-full bg-orange-50/50 rounded-tl-[100px] -z-10"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
          
          <div className="w-full md:w-[40%] flex flex-col items-start">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Real-Time<br/>Tracking</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">Map view, ambulance with destination and marked onar destination.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-10 py-4 transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:-translate-y-1">
              Learn More
            </button>
          </div>
          
          <div className="w-full md:w-[60%] relative">
             <div className="w-full bg-[#f8fafc] rounded-[40px] p-4 lg:p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
               {/* Map Illustration Placeholder */}
               <div className="w-full h-[350px] bg-[#eef2ff] rounded-[30px] relative overflow-hidden">
                  {/* Fake map roads */}
                  <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, #94a3b8 48%, #94a3b8 52%, transparent 52%), linear-gradient(-45deg, transparent 48%, #94a3b8 48%, #94a3b8 52%, transparent 52%)', backgroundSize: '80px 80px' }}></div>
                  
                  {/* Fake route line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <path d="M50,150 L150,150 L350,50" fill="none" stroke="#2563EB" strokeWidth="6" strokeDasharray="10 10" />
                  </svg>
                  
                  {/* Ambulance icon on map */}
                  <div className="absolute bottom-[20%] left-[10%] bg-white p-3 rounded-2xl shadow-xl">
                    <img src="https://www.svgrepo.com/show/305141/ambulance.svg" className="w-10 h-10 object-contain transform -scale-x-100" alt="Ambulance marker" />
                  </div>
                  
                  {/* Destination Pin */}
                  <div className="absolute top-[20%] right-[10%]">
                    <svg className="w-14 h-14 text-orange-500 drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      <section className="py-24 bg-[#fffaf5] relative overflow-hidden">
        {/* Background decorative shapes */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-100/80 rounded-tl-full -z-10"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-orange-200/50 rounded-r-full -z-10 blur-xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-20">Testimonial</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-md rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white max-w-sm relative mt-10 md:mt-0">
               <div className="w-20 h-20 rounded-full bg-slate-200 absolute -top-10 left-1/2 -translate-x-1/2 border-[6px] border-white overflow-hidden shadow-md">
                 <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
               </div>
               <p className="text-[15px] text-slate-500 font-medium leading-relaxed mt-6 mb-8">
                 "Henpreai eelostri herondy. Rmond ace and trtito boooearves one acntardance and whot lroomastorm."
               </p>
               <h4 className="font-extrabold text-slate-900 text-lg">Morns</h4>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-md rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white max-w-sm relative mt-16 md:mt-0 transform md:translate-y-8">
               <div className="w-20 h-20 rounded-full bg-slate-200 absolute -top-10 left-1/2 -translate-x-1/2 border-[6px] border-white overflow-hidden shadow-md">
                 <img src="https://i.pravatar.cc/150?img=5" alt="User" className="w-full h-full object-cover" />
               </div>
               <p className="text-[15px] text-slate-500 font-medium leading-relaxed mt-6 mb-8">
                 "Thenks with tesar carefuls and hes sea nocds ef eomo shore mcdomor."
               </p>
               <h4 className="font-extrabold text-slate-900 text-lg">Eram</h4>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-3 mt-20">
            <div className="w-6 h-2 bg-slate-800 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full hover:bg-slate-400 cursor-pointer transition-colors"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full hover:bg-slate-400 cursor-pointer transition-colors"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full hover:bg-slate-400 cursor-pointer transition-colors"></div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 relative">
                <div className="absolute top-0 left-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="absolute top-4 left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="absolute top-2 left-4 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <span className="font-poppins font-extrabold text-xl text-slate-900">Ambigo</span>
            </div>
            <p className="text-sm font-medium text-slate-400 mt-8">segonnat ambigo.com</p>
          </div>
          
          <div>
            <h4 className="font-extrabold text-slate-900 mb-6">About</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-extrabold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Acnuat Links</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Links</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms Accessing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact hits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-slate-900 mb-6">Download App</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-orange-500 cursor-pointer transition-colors shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-orange-500 cursor-pointer transition-colors shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-slate-400">
          <p>6 Ambigo</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'components', 'Navbar.tsx'), newNavbarTsx);
fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Home.tsx'), newHomeTsx);
console.log('Navbar and Home fully rewritten with extreme precision to match the Figma design.');
