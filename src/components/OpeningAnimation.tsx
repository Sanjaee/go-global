'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import styles from './OpeningAnimation.module.css';

export default function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const word3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        setTimeout(onComplete, 800); // Wait for framer-motion exit animation
      }
    });

    // Animate "Selamat Datang" in & out
    tl.fromTo(word1Ref.current, 
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
    )
    .to(word1Ref.current, 
      { opacity: 0, y: -20, scale: 0.98, duration: 0.3, ease: 'power3.in', delay: 0.4 }
    )
    // Animate "Yokoso" in & out
    .fromTo(word2Ref.current, 
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' },
      '-=0.1'
    )
    .to(word2Ref.current, 
      { opacity: 0, y: -20, scale: 0.98, duration: 0.3, ease: 'power3.in', delay: 0.4 }
    )
    // Animate "ようこそ" (Original Japanese) in & zoom out
    .fromTo(word3Ref.current, 
      { opacity: 0, y: 25, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1.05, duration: 0.5, ease: 'back.out(1.5)' },
      '-=0.1'
    )
    .to(word3Ref.current, 
      { opacity: 0, scale: 1.3, duration: 0.4, ease: 'power3.in', delay: 0.5 }
    );

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
          <div className={styles.animationContainer}>
            <div ref={word1Ref} className={styles.word}>Selamat Datang</div>
            <div ref={word2Ref} className={styles.wordItalic}>Konnichiwa</div>
            <div ref={word3Ref} className={styles.wordJapanese}>こんにちは</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
