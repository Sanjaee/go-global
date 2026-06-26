'use client';

import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import styles from './Programs.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

export default function Programs() {
  return (
    <section className={styles.programsSection}>
      <div className={styles.sectionContainer}>
        
        {/* Card 1: Tentang Go Global Indonesia */}
        <motion.div 
          className={styles.aboutCard}
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={springTransition}
        >
          {/* Overlapping Flags */}
          <div className={styles.flagsContainer}>
            <div className={styles.flagWrapper}>
              <img src="/images/jp.webp" alt="Japan Flag" className={styles.flag} />
            </div>
            <div className={styles.flagWrapper}>
              <img src="/images/id.webp" alt="Indonesia Flag" className={styles.flag} />
            </div>
          </div>

          <h3 className={styles.aboutTitle}>
            Tentang <br />
            <span>Go Global Indonesia</span>
          </h3>

          <div className={styles.aboutContent}>
            <p>
              Go Global Indonesia adalah Lembaga Pelatihan Kerja (LPK) yang berfokus pada
              mempersiapkan tenaga kerja untuk bekerja di Jepang dengan VISA Tokutei Ginou.
            </p>
            <p>
              Kami menawarkan program pelatihan dasar yang dirancang untuk pemula agar
              dapat lulus sertifikasi bahasa dan ketrampilan yang dibutuhkan untuk kerja
              di Jepang dengan Visa Tokutei Ginou.
            </p>
            <p>
              Dengan komitmen terhadap kualitas dan keberhasilan peserta, Go Global
              Indonesia siap mendukung perjalanan Anda menuju karier global.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Program Kami */}
        <motion.div 
          className={styles.programCardWrapper}
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...springTransition, delay: 0.1 }}
        >
          <h3 className={styles.programSectionTitle}>
            Program <span>Kami</span>
          </h3>

          <div className={styles.programCard}>
            {/* Top Red Part: Program Basic */}
            <div className={styles.programBasicPart}>
              <h4>Program Basic</h4>
              <p>
                <strong>Target:</strong> Untuk kamu yang belum pernah belajar bahasa Jepang atau
                yang pernah belajar bahasa Jepang tapi belum memiliki sertifikat JLPT
                N4 / JFT- Basic dan SSW
              </p>
              <p>
                <strong>Bidang pekerjaan:</strong> Keperawatan Lansia, Jasa Makanan, Pengolahan
                Makanan, Pertanian, Perhotelan, dan Building Cleaning.
              </p>
            </div>

            {/* Bottom Pink Part: Job Matching */}
            <div className={styles.jobMatchingPart}>
              <h4>Job Matching</h4>
              <p>
                TG Japan adalah platform penyedia lowongan pekerjaan untuk kerja di
                Jepang, dan masih satu perusahaan dengan Go Global Indonesia
              </p>
              <p>
                Bagi yang sudah memiliki sertifikat persyaratan (JFT-Basic / JLPT N4
                dan SSW), silahkan gabung grup Whatsapp TG Japan,{' '}
                <a href="#" className={styles.link}>klik di sini</a>.
              </p>

              {/* Bottom White Bar */}
              <div className={styles.socialBar}>
                <img src="/images/tg-japan.webp" alt="TG Japan Logo" className={styles.tgLogo} />
                <a 
                  href="https://instagram.com/tg_japan.info" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.instagramLink}
                >
                  <FaInstagram size={18} />
                  <span>@tg_japan.info</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
