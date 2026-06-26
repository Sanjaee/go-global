'use client';

import { motion } from 'framer-motion';
import styles from './BasicProgram.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

export default function BasicProgram() {
  return (
    <section className={styles.programSection}>
      <div className={styles.container}>
        
        {/* Top Info */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
          className={styles.headerInfo}
        >
          <h2 className={styles.mainTitle}>Program Basic</h2>
          <p className={styles.mainDescription}>
            Program Basic adalah program belajar untuk yang belum pernah belajar bahasa Jepang atau
            sudah memiliki pengalaman belajar bahasa Jepang tetapi belum memiliki sertifikat JLPT N4
            / JFT-Basic dan SSW.
          </p>
        </motion.div>

        {/* Divider Line */}
        <motion.div 
          className={styles.dividerLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Batch Section */}
        <div className={styles.batchContainer}>
          {/* Header Title with Cloud Ornament */}
          <motion.div 
            className={styles.batchTitleWrapper}
            initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springTransition}
          >
            <h3 className={styles.batchTitle}>Batch Selanjutnya</h3>
            <img 
              src="/images/awan-1.webp" 
              alt="Japanese Cloud Ornament" 
              className={styles.cloudOrnament}
            />
          </motion.div>

          {/* Schedule Card Group */}
          <div className={styles.scheduleGroup}>
            {/* Field Badge */}
            <motion.div 
              className={styles.fieldBadge}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={springTransition}
            >
              Bidang Keperawatan Lansia
            </motion.div>

            {/* Date Details Card */}
            <motion.div 
              className={styles.scheduleCard}
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springTransition, delay: 0.1 }}
            >
              <div className={styles.scheduleBlock}>
                <span className={styles.scheduleLabel}>Program Online (Minggu Pertama)</span>
                <span className={styles.scheduleDate}>13 Juli 2026 -</span>
              </div>
              
              <div className={styles.cardDivider}></div>

              <div className={styles.scheduleBlock}>
                <span className={styles.scheduleLabel}>Program Offline (Mulai Minggu ke-2)</span>
                <span className={styles.scheduleDate}>20 Juli 2026 -</span>
              </div>
            </motion.div>

            {/* Registration Deadline */}
            <motion.div 
              className={styles.deadlineText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Batas Pendaftaran: 10 Juli 2026
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
