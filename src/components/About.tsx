'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={springTransition}
      >
        Apa Itu Tokutei Ginou?
      </motion.h2>

      <motion.div 
        className={styles.illustrationContainer}
        initial={{ opacity: 0, scale: 0.96, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ...springTransition, delay: 0.05 }}
      >
        <img 
          src="/images/tokutei-illustration.svg" 
          alt="Tokutei Ginou Illustration" 
          className={styles.illustration}
        />
      </motion.div>

      <motion.div 
        className={styles.description}
        initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ...springTransition, delay: 0.1 }}
      >
        <p>
          Tokutei Ginou merupakan visa yang dibuat
          <br />
          untuk memecahkan masalah kekurangan
          <br />
          tenaga kerja di Jepang.
        </p>
        <p>
          Dengan visa ini, WNA dapat bekerja di bidang
          <br />
          keperawatan, pabrik makanan, restoran &
          <br />
          lainnya di Jepang.
        </p>
        <p>
          Dengan visa ini juga WNA dapat bekerja di
          <br />
          Jepang selama 5 tahun.
        </p>
      </motion.div>

      <div className={styles.cardsContainer}>
        <motion.div 
          className={styles.jobsCard}
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={springTransition}
        >
          <h3 className={styles.cardTitle}>Bidang <span>Pekerjaan</span></h3>
          <ul className={styles.jobsList}>
            <li>Keperawatan Lansia</li>
            <li>Pengolahan Makanan & Minuman</li>
            <li>Jasa Makanan (Restoran)</li>
            <li>Pembersihan Gedung</li>
            <li>Manufaktur Mesin Industri</li>
            <li>Industri Terkait Informasi</li>
            <li>Listrik & Elektronik</li>
            <li>Pertanian</li>
            <li>Perikanan</li>
            <li>Perhotelan</li>
            <li>Konstruksi</li>
            <li>Pembuatan Kapal</li>
            <li>Perawatan mobil</li>
            <li>Aviasi</li>
          </ul>
        </motion.div>

        <div className={styles.rightCardsGroup}>
          <motion.div 
            className={styles.visaTypesCard}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={springTransition}
          >
            <h3 className={styles.cardTitle}>Jenis <span>Tokutei Ginou</span></h3>
            <div className={styles.visaType}>
              <h4>Tokutei Ginou Tipe 1 (特定技能1号)</h4>
              <p>Visa ini diberikan kepada pekerja yang memiliki keterampilan dasar di bidang tertentu.</p>
              <p>Durasi visa ini adalah maksimal 5 tahun, dan tidak dapat membawa anggota keluarga ke Jepang.</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.visaType}>
              <h4>Tokutei Ginou Tipe 2 (特定技能2号)</h4>
              <p>Visa ini ditujukan untuk pekerja dengan keterampilan tingkat lanjut di bidang tertentu.</p>
              <p>Durasi visa ini dapat diperpanjang tanpa batas waktu, dan diizinkan membawa keluarga ke Jepang.</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.salaryCard}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={springTransition}
          >
            <h3 className={styles.cardTitle}>Gaji <span>Tokutei Ginou</span></h3>
            <div className={styles.salaryContent}>
              <div className={styles.salaryJpy}>Rata-rata ¥ 174.600</div>
              <div className={styles.salaryIdr}>Rp 20.505.024</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
