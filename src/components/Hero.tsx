'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background layer */}
      <div className={styles.background}></div>

      {/* Top Right Graphic (Absolute to Screen) */}
      <motion.div
        style={{ position: 'absolute', top: 0, right: 0, zIndex: 0, height: '300px' }}
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
      >
        <img src="/images/hero-person.webp" alt="Ornament" style={{ height: '100%', objectFit: 'contain' }} />
      </motion.div>

      {/* Main Content Grid */}
      <div className={styles.heroContainer}>

        {/* Left Column: Text & CTA */}
        <div className={styles.content}>
          <motion.div
            className={styles.logo}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/logo-white.webp" alt="Go Global Indonesia" style={{ width: '100px' }} />
          </motion.div>

          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            #ProgramKerjadiJepang
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Wujudkan Mimpimu Kerja di Jepang dengan Visa Tokutei Ginou!
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Bersama Go Global Indonesia, kamu dibimbing dari 0 secara intensif oleh sensei expert hingga siap kerja di Jepang dengan Visa Tokutei Ginou!
          </motion.p>

          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Daftar Sekarang <FiArrowRight size={18} />
            </motion.button>
            <motion.button
              className="btn btn-whatsapp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FaWhatsapp size={20} />
              Konsultasi WA
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Card + Takuya Image */}
        <div style={{ position: 'relative', width: '100%', height: '600px' }}>

          {/* Info Card - absolute, vertically centered, left side */}
          <motion.div
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              background: 'white',
              borderRadius: '16px',
              padding: '20px 28px',
              width: '280px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Program Basic Batch 5</h3>
            <div style={{ width: '85%', height: '1.5px', background: '#111', margin: '0 auto 16px' }}></div>
            <p style={{ color: '#a30d11', fontWeight: 700, fontSize: '13px', marginBottom: '16px' }}>Bidang Keperawatan Lansia</p>
            <p style={{ color: '#3b4c68', fontWeight: 600, fontSize: '10px', marginBottom: '5px' }}>Program Online (Minggu Pertama)</p>
            <p style={{ color: '#111', fontSize: '20px', fontWeight: 800, marginBottom: '22px' }}>13 Juli 2026 -</p>
            <p style={{ color: '#3b4c68', fontWeight: 600, fontSize: '10px', marginBottom: '5px' }}>Program Offline (Mulai Minggu ke-2)</p>
            <p style={{ color: '#111', fontSize: '20px', fontWeight: 800 }}>20 Juli 2026 -</p>
          </motion.div>

          {/* Takuya Image - absolute, right side, fades on right & bottom edges */}
          <motion.img
            src="/images/takuya.webp"
            alt="Takuya"
            style={{
              position: 'absolute',
              right: '-10px',
              bottom: '-30px',
              height: '620px',
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'bottom',
              zIndex: 10,
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%)',
              WebkitMaskComposite: 'destination-in',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 4%)',
              maskComposite: 'intersect',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}
