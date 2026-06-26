'use client';

import { motion } from 'framer-motion';
import styles from './ProgramCosts.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

export default function ProgramCosts() {
  return (
    <section className={styles.costsSection}>
      <div className={styles.container}>

        {/* Title */}
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
        >
          Biaya Program
        </motion.h2>

        {/* Cards Grid */}
        <div className={styles.gridContainer}>

          {/* Card 1: Biaya Pendidikan */}
          <motion.div
            className={styles.costCard}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={springTransition}
          >
            <div className={styles.cardHeader}>
              <span className={styles.label}>Biaya</span>
              <h3 className={styles.valueTitle}>Pendidikan</h3>
            </div>

            <div className={styles.mainAmount}>Rp 15.000.000</div>

            <p className={styles.termsText}>
              Dapat dibayarkan secara bertahap dalam 3 tahap, masing-masing sebesar Rp 5.000.000:
            </p>

            <ul className={styles.stagesList}>
              <li>
                <strong>Tahap Pertama — Rp 5.000.000</strong>
                <span>
                  Dibayarkan dalam rentang 5 hari setelah sesi Zoom Meeting dan pengisian data diri
                  melalui WhatsApp untuk pembuatan surat kontrak.
                </span>
              </li>
              <li>
                <strong>Tahap Kedua — Rp 5.000.000</strong>
                <span>Paling lambat 31 Agustus 2026, pukul 17.00 WIB.</span>
              </li>
              <li>
                <strong>Tahap Ketiga — Rp 5.000.000</strong>
                <span>Paling lambat 31 Oktober 2026, pukul 17.00 WIB.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Biaya Keberangkatan */}
          <motion.div
            className={styles.costCard}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...springTransition, delay: 0.1 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.label}>Biaya</span>
              <h3 className={styles.valueTitle}>Keberangkatan<br />(TG Japan)</h3>
            </div>

            <div className={styles.departureContent}>
              <div className={styles.departureOption}>
                <span className={styles.optionLabel}>Sekali Bayar</span>
                <span className={styles.optionAmount}>Rp 20.000.000</span>
              </div>

              <div className={styles.departureDivider}>atau</div>

              <div className={styles.departureOption}>
                <span className={styles.optionLabel}>Dana Talang</span>
                <span className={styles.optionAmount}>Rp 25.000.000</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
