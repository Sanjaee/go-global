'use client';

import { motion } from 'framer-motion';
import styles from './Requirements.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

export default function Requirements() {
  return (
    <section className={styles.requirementsSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
        >
          <h2 className={styles.title}>Syarat Pendaftaran</h2>
          
          <ul className={styles.list}>
            <li>Perempuan</li>
            <li>Usia 18 s/d 30 tahun</li>
            <li>Sehat Jasmani & Rohani</li>
            <li>Memiliki Sikap & Mental yang Baik</li>
            <li>Tidak Bertato atau Memiliki Bekas Tato</li>
            <li>Tidak Memiliki Riwayat Kriminal / Perilaku Tidak Baik dan Tidak Merokok</li>
            <li>Tidak ada Ikatan dengan LPK atau Lembaga Penyalur Tenaga Kerja lainnya.</li>
            <li>Dapat Izin dari Orang Tua / Keluarga</li>
          </ul>

          <p className={styles.footerText}>
            Terdapat syarat kesehatan yang harus diperhatikan sebelum mendaftar, silahkan{' '}
            <a 
              href="https://www.canva.com/design/DAGcEx64f-4/KPyLLIiZO-ITxZp2s2CKDQ/view" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              klik di sini
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
