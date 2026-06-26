'use client';

import { motion } from 'framer-motion';
import styles from './FAQ.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

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

export default function FAQ() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...springTransition, delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.15)" }}
            >
              <h3 className={styles.question}>
                <span className={styles.number}>{faq.number}.</span> {faq.question}
              </h3>
              <p className={styles.answer}>
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
