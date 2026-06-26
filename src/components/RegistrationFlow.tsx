'use client';

import { motion } from 'framer-motion';
import styles from './RegistrationFlow.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

const steps = [
  {
    number: "1",
    title: "Mengikuti Tes Penempatan",
    description: (
      <a href="#" className={styles.stepLink}>Link Tes Penempatan</a>
    )
  },
  {
    number: "2",
    title: "Mengisi Formulir Pendaftaran",
    description: "(Formulir akan dikirim melalui email jika lolos tes penempatan)"
  },
  {
    number: "3",
    title: "Wawancara Akhir untuk Pendaftaran",
    description: "(Setelah mengisi formulir, jadwal wawancara akan diatur melalui WhatsApp)"
  },
  {
    number: "4",
    title: "Penandatanganan Kontrak + Pembayaran",
    description: ""
  }
];

export default function RegistrationFlow() {
  return (
    <section className={styles.flowSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
        >
          Alur <span>Pendaftaran</span>
        </motion.h2>

        <div className={styles.stepsList}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...springTransition, delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0,0,0,0.06)" }}
            >
              <div className={styles.numberWrapper}>
                {step.number}
              </div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                {step.description && (
                  <div className={styles.stepDesc}>{step.description}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
