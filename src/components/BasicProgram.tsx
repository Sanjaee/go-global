'use client';

import { motion } from 'framer-motion';
import styles from './BasicProgram.module.css';

const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.5
} as const;

interface ProgramItem {
  id: number
  name: string
  field: string
  onlineDate: string
  offlineDate: string
}

interface BasicProgramProps {
  programsList?: ProgramItem[]
}

const defaultPrograms: ProgramItem[] = [
  {
    id: 1,
    name: "Program Basic Batch 6",
    field: "Keperawatan Lansia",
    onlineDate: "7 September 2026 -",
    offlineDate: "14 September 2026 -",
  }
]

export default function BasicProgram({ programsList = [] }: BasicProgramProps) {
  const displayPrograms = programsList.length > 0 ? programsList : defaultPrograms

  return (
    <section className={styles.programSection}>
      <div className={styles.container}>
        
        {/* Top Info */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
          className={styles.headerInfo}
        >
          <h2 className={styles.mainTitle}>Program Basic</h2>
          <p className={styles.mainDescription}>
            Program Basic adalah program belajar untuk yang belum pernah belajar bahasa Jepang atau
            sudah memiliki pengalaman belajar bahasa Jepang tetapi belum memiliki sertifikat JLPT N4
            / JFT-Basic dan SSW.
          </p>
        </motion.div>

        {/* Divider Line */}
        <motion.div 
          className={styles.dividerLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Dynamic Batches List */}
        <div className="w-full space-y-12">
          {displayPrograms.map((prog, index) => (
            <div key={prog.id || index} className={styles.batchContainer}>
              {/* Header Title with Cloud Ornament */}
              <motion.div 
                className={styles.batchTitleWrapper}
                initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={springTransition}
              >
                <h3 className={styles.batchTitle}>{prog.name}</h3>
                <img 
                  src="/images/awan-1.webp" 
                  alt="Japanese Cloud Ornament" 
                  className={styles.cloudOrnament}
                />
              </motion.div>

              {/* Schedule Card Group */}
              <div className={styles.scheduleGroup}>
                {/* Field Badge */}
                <motion.div 
                  className={styles.fieldBadge}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  Bidang {prog.field.startsWith("Bidang") ? prog.field.replace("Bidang", "").trim() : prog.field}
                </motion.div>

                {/* Date Details Card */}
                <motion.div 
                  className={styles.scheduleCard}
                  initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...springTransition, delay: 0.1 }}
                >
                  <div className={styles.scheduleBlock}>
                    <span className={styles.scheduleLabel}>Program Online (Minggu Pertama)</span>
                    <span className={styles.scheduleDate}>{prog.onlineDate}</span>
                  </div>
                  
                  <div className={styles.cardDivider}></div>

                  <div className={styles.scheduleBlock}>
                    <span className={styles.scheduleLabel}>Program Offline (Mulai Minggu ke-2)</span>
                    <span className={styles.scheduleDate}>{prog.offlineDate}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
