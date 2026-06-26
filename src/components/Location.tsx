'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Location.module.css';

declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lpkLocation = { lat: -6.887688, lng: 107.581283 };

    const initMap = () => {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 16,
        center: lpkLocation,
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: false
      });

      new window.google.maps.Marker({
        position: lpkLocation,
        map: map,
      });
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      window.initMap = initMap;
      
      const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCeyP_0nYynBU5ImC0AWBzGxkiXep-Z0K4&callback=initMap";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        
        {/* Title */}
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
        >
          Lokasi LPK
        </motion.h2>

        {/* Map Wrapper */}
        <motion.div 
          className={styles.mapContainer}
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={springTransition}
        >
          <div ref={mapRef} className={styles.mapBox} id="map" />
        </motion.div>

        {/* Address Info */}
        <motion.div 
          className={styles.addressInfo}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
        >
          <div className={styles.cityName}>
            <FaMapMarkerAlt className={styles.pinIcon} />
            <span>SUKAJADI, BANDUNG</span>
          </div>
          <p className={styles.fullAddress}>
            Jl. Prof. Dr. Surya Sumantri 92, Sukajadi,
            <br />
            Sukagalih, Kota Bandung
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className={styles.sectionDivider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        />

        {/* Available Fields */}
        <div className={styles.fieldsContainer}>
          <motion.h3 
            className={styles.fieldsTitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springTransition}
          >
            Bidang Yang Tersedia
          </motion.h3>

          <motion.div 
            className={styles.jobCard}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springTransition}
            whileHover={{ y: -5 }}
          >
            <div className={styles.jobImageWrapper}>
              <img src="/images/job-nursing.webp" alt="Keperawatan Lansia" className={styles.jobImage} />
            </div>
            <div className={styles.jobLabel}>
              Keperawatan Lansia
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
