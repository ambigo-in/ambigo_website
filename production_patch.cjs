const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Strip out any previous override blocks
const overrideMarkers = [
    '/* =========================================================================\n   Modern Aesthetics Override (Mixed: Glassmorphism + Fluidity)',
    '/* =========================================================================\n   Modern Aesthetics Override (AGGRESSIVE)',
    '/* =========================================================================\n   Production Design'
];

for (const marker of overrideMarkers) {
    const idx = css.indexOf(marker);
    if (idx !== -1) {
        css = css.substring(0, idx);
    }
}

const newCss = `
/* =========================================================================
   Production Design Override
   ========================================================================= */

/* 1. Global Typography & Backgrounds */
body {
  font-family: 'Inter', sans-serif !important;
  color: #64748b !important; /* Soft Slate Body */
  background: #F4F7FA !important; /* Very soft blue-grey background for alternating sections */
}

h1, h2, h3, h4, h5, h6, .animatedText, .section-title-premium, .main-heading {
  font-family: 'Poppins', sans-serif !important;
  color: #1E293B !important; /* Deep Navy Headings */
}

/* 2. Overriding the old noisy backgrounds */
.ambulance-containers::before, .ambulance-containers::after,
.about-container::before, .about-container::after,
.Whycontainer::before, .Whycontainer::after,
.app-promo-container::before, .app-promo-container::after {
  display: none !important;
  opacity: 0 !important;
  background: none !important;
}

/* 3. Hero Section & Wavy Separator */
.ambulance-containers {
  background: #FFFFFF !important;
  position: relative !important;
  z-index: 1 !important;
  padding-bottom: 200px !important; /* Make room for the wave */
  overflow: visible !important;
}

.ambulance-containers::after {
  content: '' !important;
  display: block !important;
  position: absolute !important;
  bottom: -2px !important; /* Prevent 1px gap */
  left: 0 !important;
  width: 100% !important;
  height: 200px !important;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath fill='%23FF8C42' opacity='0.2' d='M0,100 C300,200 600,0 1440,100 L1440,200 L0,200 Z' /%3E%3Cpath fill='%232B6CB0' opacity='0.15' d='M0,50 C400,150 800,0 1440,150 L1440,200 L0,200 Z' /%3E%3Cpath fill='%23F4F7FA' d='M0,150 C500,250 900,-50 1440,150 L1440,200 L0,200 Z' /%3E%3C/svg%3E") !important;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  z-index: -1 !important;
  opacity: 1 !important;
}

/* Hero text styling overrides */
.main-heading {
  font-size: 3.5rem !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
}

.sub-heading, .sub-heading span {
  font-size: 1.8rem !important;
  color: #334155 !important;
  font-weight: 500 !important;
}

.animatedText {
  color: #FF8C42 !important; /* Use solid brand orange, disable shine animation */
  animation: none !important;
  -webkit-text-fill-color: #FF8C42 !important;
  text-shadow: none !important;
}

/* 4. Navbar - Solid White & Clean */
nav, header, .navbar, [class*="nav"] {
  background: #FFFFFF !important;
  backdrop-filter: none !important;
  border-bottom: 1px solid #E2E8F0 !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05) !important;
}

/* Navbar text to Dark */
.navbar .nav-link, .nav-link, .navbar a {
  color: #334155 !important;
  font-weight: 500 !important;
  font-family: 'Inter', sans-serif !important;
}
.navbar .nav-link:hover {
  color: #FF8C42 !important;
}

/* Navbar Action Button (SignIn -> styled as Call Now) */
.btn-login {
  border-radius: 50px !important;
  background: transparent !important;
  color: #FF8C42 !important;
  border: 2px solid #FF8C42 !important;
  padding: 8px 24px !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}
.btn-login:hover {
  background: #FF8C42 !important;
  color: #FFFFFF !important;
}

/* 5. Clean White Cards */
.ambulance-card, 
.award-card, 
.promo-card-content, 
.contact-card,
.Ambufeature,
.AmbulanceItem {
  background: #FFFFFF !important;
  border: none !important;
  border-radius: 20px !important;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.3s ease !important;
  padding: 24px !important;
}

.ambulance-card:hover, .award-card:hover, .Ambufeature:hover, .AmbulanceItem:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08) !important;
}

/* Image rounding inside cards */
.ambulance-image, .award-image img, .promo-card img, .AmbulanceItem img {
  border-radius: 12px !important;
}

/* 6. Primary Buttons (e.g. Download, Book) */
.download-btn, .bookIn, .contact-form-submit {
  border-radius: 50px !important;
  background: #FF8C42 !important; /* Solid Orange */
  color: #FFFFFF !important;
  border: none !important;
  padding: 14px 32px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  box-shadow: 0 4px 12px rgba(255, 140, 66, 0.3) !important;
  transition: all 0.3s ease !important;
}
.download-btn:hover, .bookIn:hover, .contact-form-submit:hover {
  background: #E67A35 !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 16px rgba(255, 140, 66, 0.4) !important;
}

/* 7. Secondary Buttons (e.g. Call button) */
.call-btn {
  border-radius: 50px !important;
  background: #FFFFFF !important;
  color: #FF8C42 !important;
  border: 2px solid #FF8C42 !important;
  padding: 12px 30px !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}
.call-btn:hover {
  background: #FF8C42 !important;
  color: #FFFFFF !important;
}

/* 8. Specific Overrides */
/* "Why Choose Us?" feature icons */
.Ambuicon-box {
  background: #F0F4F8 !important;
  color: #2B6CB0 !important;
  border-radius: 50% !important;
  box-shadow: none !important;
}
.Ambufeature-text {
  color: #1E293B !important;
  font-weight: 600 !important;
}
`;

fs.writeFileSync('src/index.css', css + newCss);
console.log('Production CSS injected successfully!');
