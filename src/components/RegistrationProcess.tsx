'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './RegistrationProcess.module.css';

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

const faqData = [
  {
    number: "1",
    question: "Apakah dijamin berangkat ke Jepang?",
    answer: "Kepastian keberangkatan ke Jepang tergantung pada usaha masing-masing siswa. Namun, pengajar di LPK akan selalu memberikan arahan kepada siswa dari awal pembelajaran sampai proses interview."
  },
  {
    number: "2",
    question: "Setelah selesai pendidikan apakah langsung mendapat kerja?",
    answer: "Tidak, setelah pendidikan selesai, tahap selanjutnya adalah job matching yang akan dilakukan melalui TG Japan. Konsultasi tentang job matching pun akan dilakukan lebih detail bersama dengan tim TG Japan. Hal yang paling penting adalah sertifikat lengkap (JFT/JLPT minimal N4 dan SSW sesuai bidang yang diminati) sudah dimiliki untuk proses job matching."
  },
  {
    number: "3",
    question: "Apakah bisa langsung job matching tanpa pendidikan?",
    answer: "Bisa, jika sudah memiliki sertifikat lengkap (JFT/JLPT minimal N4 dan SSW sesuai bidang yang diminati) bisa langsung job matching. Untuk konsultasi job matching bisa menghubungi admin TG Japan sesuai dengan bidang yang diminati."
  },
  {
    number: "4",
    question: "Apakah mata minus boleh ikut programnya?",
    answer: "Boleh, yang terpenting tidak buta warna (buta warna parsial pun tidak bisa mendaftar). Selama ketika menggunakan kacamata atau lensa kontak masih dapat melihat dengan baik, bisa mendaftar."
  }
];

export default function RegistrationProcess() {
  return (
    <section className={styles.outerSection}>
      <div className={styles.container}>
        <div className={styles.whiteCard}>
          
          {/* ================= ALUR PENDAFTARAN ================= */}
          <div className={styles.sectionBlock}>
            <motion.h2 
              className={styles.sectionTitle}
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ ...springTransition, delay: index * 0.05 }}
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

          <hr className={styles.blockDivider} />

          {/* ================= Q&A (FAQ) ================= */}
          <div className={styles.sectionBlock}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={springTransition}
            >
              Q&A
            </motion.h2>

            <div className={styles.faqList}>
              {faqData.map((faq, index) => (
                <motion.div 
                  key={index}
                  className={styles.faqCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ ...springTransition, delay: index * 0.05 }}
                >
                  <h3 className={styles.faqQuestion}>
                    <span className={styles.faqNumber}>{faq.number}.</span> {faq.question}
                  </h3>
                  <p className={styles.faqAnswer}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= CTA ================= */}
          <div className={styles.ctaBlock}>
            <motion.h2 
              className={styles.ctaTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={springTransition}
            >
              Saatnya gapai mimpimu <br />
              untuk kerja di Jepang!
            </motion.h2>

            <div className={styles.btnGroup}>
              <motion.a 
                href="#" 
                className={styles.btnPrimary}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Ikuti Tes Penempatan
              </motion.a>

              <motion.a 
                href="https://wa.me/6281111859266" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsapp}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className={styles.waIcon} />
                Konsultasi
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
