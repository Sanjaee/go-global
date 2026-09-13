'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styles from './Testimonials.module.css';

interface TestimonialItem {
  id: number
  name: string
  location: string
  image: string
  text: string
}

interface TestimonialsProps {
  testimonialsList?: TestimonialItem[]
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Anisa",
    location: "Jakarta, Indonesia",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text: "Belajar selama 5.5 bulan di Go Global Indonesia sangat seru, sensei nya profesional punya sertifikat N2 dan sabar mengajari kami sampai lulus JFT dan SSW. Disini juga ga hanya belajar bahasa jepang namun juga budaya jepang. Mulai dari pemilahan sampah sampai cara memakai yukata bahkan penulisan kaligrafi Jepang juga. Pembelajaran pun super intensif dan interaktif yang bikin belajar jadi ga bosenin."
  },
  {
    id: 2,
    name: "Lifah",
    location: "Bandung, Indonesia",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    text: "Sebagai alumni Batch 1, belajar bahasa Jepang di GO Global Bandung terasa menyenangkan. Programnya terstruktur dengan baik dan suportif, dengan suasana belajar yang nyaman. Program ini sangat membantu dalam meningkatkan kemampuan yang dibutuhkan, dan setelah itu saya mendapatkan pekerjaan melalui job matching di TG Japan. Saya sangat merekomendasikannya!!"
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

export default function Testimonials({ testimonialsList = [] }: TestimonialsProps) {
  const activeList = testimonialsList.length > 0 ? testimonialsList : defaultTestimonials;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % activeList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + activeList.length) % activeList.length);
  };

  const current = activeList[index] || activeList[0];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>

        {/* Title */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring" as const, stiffness: 120, damping: 18 }}
        >
          Testimoni
        </motion.h2>

        {/* Carousel Area */}
        <div className={styles.carouselWrapper}>
          <div className={styles.cardContainer}>
            {/* Invisible dummy card containing the text to set container height dynamically */}
            <div className={styles.dummyCard} aria-hidden="true">
              <div className={styles.quoteMark}>“</div>
              <div className={styles.cardHeader}>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatar} />
                </div>
              </div>
              <p className={styles.text}>{activeList[0]?.text || ""}</p>
              <div className={styles.meta}>
                <h4 className={styles.name}>{activeList[0]?.name || ""}</h4>
                <span className={styles.location}>{activeList[0]?.location || ""}</span>
              </div>
            </div>

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, info) => {
                  const threshold = 60;
                  if (info.offset.x < -threshold) {
                    handleNext();
                  } else if (info.offset.x > threshold) {
                    handlePrev();
                  }
                }}
                whileTap={{ cursor: "grabbing" }}
                style={{ cursor: "grab" }}
                className={styles.testimonialCard}
              >
                {/* Quotation Mark Backing */}
                <div className={styles.quoteMark}>“</div>

                <div className={styles.cardHeader}>
                  <div className={styles.avatarWrapper}>
                    <img src={current.image} alt={current.name} className={styles.avatar} />
                  </div>
                </div>

                <p className={styles.text}>{current.text}</p>

                <div className={styles.meta}>
                  <h4 className={styles.name}>{current.name}</h4>
                  <span className={styles.location}>{current.location}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className={styles.controls}>
            <button 
              onClick={handlePrev} 
              className={styles.navBtn} 
              aria-label="Previous Testimonial"
            >
              <FiArrowLeft size={24} />
            </button>
            <button 
              onClick={handleNext} 
              className={styles.navBtn} 
              aria-label="Next Testimonial"
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
