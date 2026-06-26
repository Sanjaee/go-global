'use client';

import { motion } from 'framer-motion';
import styles from './QuotaSchedule.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

export default function QuotaSchedule() {
  return (
    <section className={styles.quotaSection}>
      <div className={styles.container}>

        {/* Kuota Program */}
        <div className={styles.block}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springTransition}
          >
            Kuota Program
          </motion.h2>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springTransition}
          >
            <h3 className={styles.cardTitle}>Bidang Keperawatan Lansia</h3>
            <p className={styles.cardSubtitle}>Khusus Perempuan</p>
            <div className={styles.quotaNumber}>40 Orang</div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className={styles.dividerLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        />

        {/* Jadwal Kelas */}
        <div className={styles.block}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springTransition}
          >
            Jadwal Kelas
          </motion.h2>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springTransition, delay: 0.1 }}
          >
            <h3 className={styles.cardTitle}>Senin - Jum'at</h3>
            <div className={styles.timeRange}>08.00 - 12.00 WIB / 13.00 - 16.00 WIB</div>
            <p className={styles.cardDescription}>Belajar 7 jam per hari selama 5,5 bulan</p>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <motion.div
          className={styles.dividerLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        />

      </div>
    </section>
  );
}
