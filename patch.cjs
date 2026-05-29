const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
let idx = css.indexOf('/* =========================================================================\n   Modern Aesthetics Override');
if (idx !== -1) {
    css = css.substring(0, idx);
}

const newCss = `
/* =========================================================================
   Modern Aesthetics Override (AGGRESSIVE)
   ========================================================================= */

body {
  font-family: 'Inter', sans-serif !important;
  color: #334155 !important;
  background: linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%) !important;
}

h1, h2, h3, h4, h5, h6, .animatedText, .section-title-premium, .main-heading {
  font-family: 'Poppins', sans-serif !important;
}

/* OVERRIDE THE OLD BEIGE BACKGROUNDS */
.ambulance-containers::before, .ambulance-containers::after,
.about-container::before, .about-container::after {
  display: none !important;
  opacity: 0 !important;
  background: none !important;
}

/* APPLY NEW MODERN FLUID BACKGROUND */
.ambulance-containers, .about-container, .Whycontainer, .app-promo-container {
  background: transparent !important;
  position: relative;
  z-index: 1;
}

/* LIGHT GLASSMORPHISM NAVBAR (Very Obvious Change) */
nav, header, .navbar, [class*="nav"] {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05) !important;
}

/* Change navbar text to dark since background is now light */
.navbar .nav-link, .nav-link, .navbar a, .navbar-auth {
  color: #1e293b !important;
  font-weight: 600 !important;
}

/* 3. Light Glassmorphism Cards & Containers */
.ambulance-card, 
.award-card, 
.promo-card-content, 
.contact-card,
.Ambufeature,
.AmbulanceItem {
  background: rgba(255, 255, 255, 0.6) !important;
  backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(255, 255, 255, 0.8) !important;
  border-radius: 24px !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07) !important;
  transition: all 0.4s ease !important;
}

.ambulance-card:hover, .award-card:hover, .Ambufeature:hover, .AmbulanceItem:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 14px 40px 0 rgba(31, 38, 135, 0.12) !important;
  background: rgba(255, 255, 255, 0.9) !important;
}

/* Buttons */
.download-btn, .bookIn, .contact-form-submit, .btn-login {
  border-radius: 50px !important;
  background: linear-gradient(135deg, #FF914D 0%, #FF6B00 100%) !important;
  color: #ffffff !important;
  border: none !important;
  box-shadow: 0 4px 15px rgba(255, 145, 77, 0.4) !important;
  transition: all 0.3s ease !important;
}

.call-btn {
  border-radius: 50px !important;
  background: rgba(255, 255, 255, 0.9) !important;
  color: #FF6B00 !important;
  border: 2px solid #FF6B00 !important;
  transition: all 0.3s ease !important;
}

.download-btn:hover, .call-btn:hover, .btn-login:hover {
  transform: scale(1.05) !important;
}
`;

fs.writeFileSync('src/index.css', css + newCss);
console.log('Aggressive CSS injected!');
