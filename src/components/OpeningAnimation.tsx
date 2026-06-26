'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import styles from './OpeningAnimation.module.css';

export default function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const kanjiRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        setTimeout(onComplete, 800); // Wait for framer-motion exit animation
      }
    });

    tl.fromTo(kanjiRef.current, 
      { opacity: 0, scale: 0.5, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .to(kanjiRef.current, { opacity: 0, scale: 1.5, duration: 0.8, ease: 'power2.in', delay: 1 })
    .to(textRef.current, { opacity: 0, duration: 0.5 }, '-=0.8');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          <div className={styles.kanjiContainer}>
            <div ref={kanjiRef} className={styles.kanji}>人</div>
            <div ref={textRef} className={styles.text}>PERSON</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
