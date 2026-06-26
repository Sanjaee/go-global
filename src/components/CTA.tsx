'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './CTA.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
        >
          <h2 className={styles.title}>
            Saatnya gapai mimpimu <br className={styles.break} />
            untuk kerja di Jepang!
          </h2>

          <div className={styles.btnGroup}>
            <motion.a 
              href="#" 
              className={styles.btnPrimary}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ikuti Tes Penempatan
            </motion.a>

            <motion.a 
              href="https://wa.me/6281111859266" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className={styles.waIcon} />
              Konsultasi
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
