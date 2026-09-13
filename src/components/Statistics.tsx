'use client';

import { motion } from 'framer-motion';
import styles from './Statistics.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

interface StatItem {
  id?: number
  category: string
  count: string
}

interface StatisticsProps {
  statsList?: StatItem[]
}

const defaultStats: StatItem[] = [
  { category: "Perawat Lansia", count: "210" },
  { category: "Pengolahan Makanan", count: "198" },
  { category: "Jasa Makanan", count: "129" },
  { category: "Pertanian", count: "84" },
  { category: "Perhotelan", count: "44" },
  { category: "Building Cleaning", count: "31" }
];

export default function Statistics({ statsList = [] }: StatisticsProps) {
  const displayStats = statsList.length > 0 ? statsList : defaultStats;

  return (
    <section className={styles.statisticsSection}>
      <motion.div 
        className={styles.containerCard}
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={springTransition}
      >
        <h2 className={styles.title}>
          Jumlah Kandidat Yang <br />
          Telah Diterima Kerja
        </h2>

        <div className={styles.grid}>
          {displayStats.map((item, index) => (
            <motion.div 
              key={item.id || index}
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ ...springTransition, delay: index * 0.05 }}
            >
              <div className={styles.statHeader}>
                {item.category}
              </div>
              <div className={styles.statBody}>
                <span className={styles.count}>{item.count}</span>
                <span className={styles.unit}>Orang</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

