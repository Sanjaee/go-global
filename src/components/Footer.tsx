'use client';

import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Main Grid */}
        <div className={styles.footerGrid}>
          
          {/* Column 1: Brand & Desc */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <img src="/images/logo-white.webp" alt="Go Global Indonesia Logo" className={styles.logo} />
            </div>
            <p className={styles.brandDesc}>
              Lembaga Pelatihan Kerja (LPK) yang berfokus mempersiapkan tenaga kerja berkualitas untuk berkarier di Jepang melalui program Visa Tokutei Ginou.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.navCol}>
            <h3 className={styles.colTitle}>NAVIGASI</h3>
            <ul className={styles.navList}>
              <li><a href="#" className={styles.navLink}>Beranda</a></li>
              <li><a href="#" className={styles.navLink}>Tentang LPK</a></li>
              <li><a href="#" className={styles.navLink}>Program Kami</a></li>
              <li><a href="#" className={styles.navLink}>Biaya Pendidikan</a></li>
              <li><a href="#" className={styles.navLink}>Syarat Pendaftaran</a></li>
              <li><a href="#" className={styles.navLink}>Testimoni</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>KONTAK</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <span className={styles.contactText}>
                  Jl. Prof. Dr. Surya Sumantri 92, Sukajadi, Sukagalih, Kota Bandung
                </span>
              </div>
              <a href="tel:+6281111859266" className={styles.contactItemLink}>
                <FaPhone className={styles.icon} />
                <span className={styles.contactText}>+62 811 1185 9266</span>
              </a>
              <a href="https://wa.me/6281111859266" target="_blank" rel="noopener noreferrer" className={styles.contactItemLink}>
                <FaWhatsapp className={styles.icon} />
                <span className={styles.contactText}>WhatsApp</span>
              </a>
              <a href="mailto:info@goglobal.id" className={styles.contactItemLink}>
                <FaEnvelope className={styles.icon} />
                <span className={styles.contactText}>info@goglobal.id</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <hr className={styles.divider} />

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Go Global Indonesia. All rights reserved.
          </p>
          <p className={styles.operationalInfo}>
            LPK Go Global Indonesia &middot; Senin - Sabtu &middot; 08.00 - 17.00 WIB
          </p>
        </div>

      </div>
    </footer>
  );
}
