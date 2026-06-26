'use client';

import { motion } from 'framer-motion';
import styles from './Advantages.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

const advantagesData = [
  {
    number: "1",
    title: "Banyak Lowongan",
    description: (
      <>
        Go Global Indonesia mengelola TG JAPAN{' '}
        <a 
          href="https://instagram.com/tg_japan.info" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.instaLink}
        >
          (@tg_japan.info)
        </a>{' '}
        dan memiliki banyak lowongan pekerjaan.
      </>
    )
  },
  {
    number: "2",
    title: "Program Berkualitas",
    description: "Pengajar bahasa Jepang dengan kualifikasi minimal N2 dan menggunakan materi yang disusun oleh orang Jepang."
  },
  {
    number: "3",
    title: "Biaya Terjangkau",
    description: "Total biaya sampai keberangkatan ke Jepang hanya 33 - 38 juta. Selain itu, untuk biaya keberangkatan terdapat opsi pembayaran cicilan (dana talang)."
  }
];

export default function Advantages() {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
        >
          Keunggulan Kami
        </motion.h2>

        <div className={styles.list}>
          {advantagesData.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...springTransition, delay: index * 0.1 }}
            >
              <div className={styles.numberWrapper}>
                <span className={styles.number}>{item.number}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
