import { useEffect, useRef } from 'react';

type JourneyTerrainProps = {
  active?: boolean;
};

const JourneyTerrain = ({ active = true }: JourneyTerrainProps) => {
  const ambulanceRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    let targetProgress = 0;
    let currentProgress = 0;

    const updateTarget = () => {
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetProgress = Math.min(1, Math.max(0, window.scrollY / scrollable));
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const render = () => {
      currentProgress += (targetProgress - currentProgress) * 0.12;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const compact = vw < 768;
      const startX = compact ? vw * 0.1 : vw * 0.12;
      const endX = compact ? vw * 0.64 : vw * 0.72;
      const travelX = startX + (endX - startX) * currentProgress;
      const curve = Math.sin(currentProgress * Math.PI * 3.2);
      const slope = Math.sin(currentProgress * Math.PI * 1.35);
      const travelY = (compact ? vh * 0.56 : vh * 0.48) + curve * (compact ? 8 : 13) + slope * (compact ? 6 : 16);
      const scale = compact ? 0.82 : 1;

      if (ambulanceRef.current) {
        ambulanceRef.current.style.transform = `translate3d(${travelX}px, ${travelY}px, 0) scale(${scale})`;
      }

      if (layersRef.current) {
        layersRef.current.style.setProperty('--journey-shift', `${currentProgress * -8}vh`);
        layersRef.current.style.setProperty('--journey-drift', `${Math.sin(currentProgress * Math.PI * 2) * 2.2}vw`);
      }

      if (welcomeRef.current) {
        const introProgress = Math.min(1, window.scrollY / Math.max(1, vh * 0.42));
        const opacity = 1 - introProgress;
        welcomeRef.current.style.opacity = `${opacity}`;
        welcomeRef.current.style.transform = `translate3d(-50%, ${introProgress * -34}px, 0)`;
        welcomeRef.current.style.visibility = opacity <= 0.02 ? 'hidden' : 'visible';
      }

      if (Math.abs(targetProgress - currentProgress) > 0.001) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    updateTarget();
    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateTarget);

    return () => {
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', updateTarget);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="journey-terrain" aria-hidden="true">
      <div ref={welcomeRef} className="journey-welcome">
        Welcome to Ambigo
      </div>

      <div ref={layersRef} className="journey-terrain__layers">
        <svg className="journey-terrain__layer journey-terrain__layer--peach" viewBox="0 0 1440 1800" preserveAspectRatio="none">
          <path d="M0 430C170 350 345 326 535 362C720 397 835 476 1038 450C1205 428 1312 362 1440 384V690C1286 664 1164 720 1010 742C812 770 680 692 502 658C326 625 158 650 0 730V430Z" />
          <path d="M0 1182C180 1092 364 1078 570 1115C760 1149 902 1225 1104 1198C1262 1178 1362 1124 1440 1142V1420C1282 1392 1166 1452 990 1472C790 1494 652 1420 468 1388C298 1358 148 1380 0 1454V1182Z" />
        </svg>

        <svg className="journey-terrain__layer journey-terrain__layer--blue" viewBox="0 0 1440 1800" preserveAspectRatio="none">
          <path d="M0 520C160 416 350 382 550 426C738 468 858 560 1062 532C1220 510 1330 450 1440 468V775C1270 748 1160 810 996 832C792 858 662 768 484 728C306 688 152 720 0 812V520Z" />
          <path d="M0 1292C165 1192 362 1160 582 1204C770 1242 908 1328 1112 1300C1275 1278 1370 1225 1440 1242V1502C1280 1475 1170 1528 990 1548C786 1570 650 1494 456 1462C286 1434 145 1468 0 1542V1292Z" />
        </svg>

        <svg className="journey-terrain__layer journey-terrain__layer--orange" viewBox="0 0 1440 1800" preserveAspectRatio="none">
          <path d="M0 650C170 570 354 546 560 580C742 610 870 690 1066 668C1235 650 1338 602 1440 612V830C1260 812 1140 862 984 878C780 900 650 826 472 798C306 772 150 790 0 868V650Z" />
          <path d="M0 1450C164 1370 358 1348 570 1382C760 1412 904 1488 1106 1465C1280 1445 1375 1404 1440 1415V1638C1280 1612 1168 1660 986 1676C790 1694 646 1632 460 1602C286 1575 142 1602 0 1672V1450Z" />
        </svg>

        <svg className="journey-terrain__road" viewBox="0 0 1440 1800" preserveAspectRatio="none">
          <path d="M-40 695C150 610 346 588 560 622C745 652 872 730 1066 710C1238 692 1348 642 1480 656" />
          <path d="M-40 1494C148 1414 360 1395 580 1428C770 1456 912 1528 1114 1506C1282 1488 1384 1442 1480 1452" />
        </svg>

        <svg className="journey-terrain__layer journey-terrain__layer--front" viewBox="0 0 1440 1800" preserveAspectRatio="none">
          <path d="M0 760C170 700 368 690 590 722C778 750 922 812 1126 792C1290 776 1382 745 1440 752V950C1262 938 1150 972 982 986C780 1002 630 948 438 924C270 902 130 928 0 990V760Z" />
          <path d="M0 1610C180 1542 386 1530 612 1560C802 1584 962 1640 1170 1622C1312 1610 1392 1582 1440 1590V1800H0V1610Z" />
        </svg>
      </div>

      <div ref={ambulanceRef} className="journey-ambulance">
        <img src="/images/ambulance6.png" alt="" />
        <span className="journey-ambulance__shadow" />
      </div>
    </div>
  );
};

export default JourneyTerrain;
