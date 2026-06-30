import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { beliefs, church, ministries, navItems, sermons, visitDetails } from '../../data/site';
import styles from '../../styles/Site.module.css';

export function Layout({ children }) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasThemeLoaded, setHasThemeLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('addis-kidan-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDarkMode(savedTheme ? savedTheme === 'dark' : prefersDark);
    setHasThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasThemeLoaded) {
      return;
    }

    window.localStorage.setItem('addis-kidan-theme', isDarkMode ? 'dark' : 'light');
  }, [hasThemeLoaded, isDarkMode]);

  return (
    <div className={`${styles.site} ${isDarkMode ? styles.dark : ''}`}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>AK</span>
          <span>
            <strong>{church.shortName}</strong>
            <small>{church.amharicName}</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              className={router.pathname === item.href ? styles.activeNav : ''}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={isDarkMode}
          className={styles.themeToggle}
          onClick={() => setIsDarkMode((current) => !current)}
          type="button"
        >
          <span className={styles.toggleIcon} aria-hidden="true" />
        </button>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link className={styles.footerLogo} href="/">
              <span className={styles.brandMark}>AK</span>
              <span>
                <strong>{church.name}</strong>
                <small>{church.amharicName}</small>
              </span>
            </Link>
            <p>
              A Christ-centered Ethiopian Evangelical church serving families in
              Virginia Beach, Norfolk, and Hampton Roads.
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h2>Visit</h2>
            <p>{church.serviceTime}</p>
            <p>{church.address}</p>
            <a className={styles.footerButton} href={church.mapUrl} target="_blank" rel="noreferrer">
              Open Maps
            </a>
          </div>
          <nav className={styles.footerColumn} aria-label="Footer navigation">
            <h2>Pages</h2>
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.footerColumn}>
            <h2>Contact</h2>
            {church.phones.map((phone) => (
              <p key={phone.href}>
                <span>{phone.label}</span>
                <a href={phone.href}>{phone.number}</a>
              </p>
            ))}
            <a href={`mailto:${church.email}`}>{church.email}</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {currentYear} {church.shortName}. All rights reserved.</p>
          <p>{church.city}</p>
        </div>
      </footer>
    </div>
  );
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <p className={styles.kicker}>{church.city}</p>
        <h1>{church.name}</h1>
        <p className={styles.amharic}>{church.amharicName}</p>
        <p className={styles.heroText}>
          A Christ-centered Ethiopian Evangelical church serving Virginia Beach,
          Norfolk, and the Hampton Roads community.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} href="/contact">Plan a Visit</Link>
          <Link className={styles.secondaryButton} href="/sermons">Listen to Sermons</Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ title, eyebrow, children }) {
  return (
    <section className={styles.pageHero}>
      <p className={styles.kicker}>{eyebrow}</p>
      <h1>{title}</h1>
      {children ? <p>{children}</p> : null}
    </section>
  );
}

export function HomeContent() {
  return (
    <>
      <Hero />
      <section className={styles.band}>
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>Welcome</p>
            <h2>ወደ አዲስ ኪዳን በደህና መጡ</h2>
            <p>
              We gather to worship Jesus Christ, teach the Word of God, and
              encourage one another in faith, family, and service.
            </p>
          </div>
          <div className={styles.servicePanel}>
            <span>Weekly Gathering</span>
            <strong>{church.serviceTime}</strong>
            <p>{church.address}</p>
          </div>
        </div>
      </section>
      <VisitSnapshot />
      <Ministries />
      <SermonSection />
      <ContactCta />
    </>
  );
}

export function Ministries() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}>
        <p className={styles.kicker}>Church Life</p>
        <h2>Worship, teaching, and fellowship</h2>
      </div>
      <div className={styles.cardGrid}>
        {ministries.map((item) => (
          <article className={styles.card} key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function VisitSnapshot() {
  const primaryPhone = church.phones[0];

  return (
    <section className={styles.visitBand}>
      <div className={styles.visitIntro}>
        <p className={styles.kicker}>Plan Your Visit</p>
        <h2>Come worship with us this Sunday</h2>
        <p>
          Guests are welcome to join us for prayer, worship, Scripture, and
          fellowship in a warm Ethiopian Evangelical church family.
        </p>
        <div className={styles.visitActions}>
          <a className={styles.primaryButton} href={church.mapUrl} target="_blank" rel="noreferrer">
            Open Maps
          </a>
          <a className={styles.outlineButton} href={primaryPhone.href}>
            Call the Church
          </a>
        </div>
      </div>
      <div className={styles.visitDetails}>
        {visitDetails.map((detail) => (
          <article className={styles.visitDetail} key={detail.label}>
            <span>{detail.label}</span>
            <strong>{detail.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SermonSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeadingRow}>
        <div>
          <p className={styles.kicker}>Sermons</p>
          <h2>Recent messages</h2>
        </div>
        <Link className={styles.textLink} href="/sermons">View all</Link>
      </div>
      <div className={styles.sermonGrid}>
        {sermons.slice(0, 3).map((sermon) => (
          <SermonCard sermon={sermon} key={sermon.title} />
        ))}
      </div>
    </section>
  );
}

export function SermonCard({ sermon }) {
  return (
    <article className={styles.sermonCard}>
      <span>{sermon.date}</span>
      <h3>{sermon.title}</h3>
      <p>{sermon.summary}</p>
      <small>{church.name}</small>
    </article>
  );
}

export function BeliefsList() {
  return (
    <div className={styles.beliefList}>
      {beliefs.map((belief, index) => (
        <article className={styles.beliefItem} key={belief}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{belief}</p>
        </article>
      ))}
    </div>
  );
}

export function ContactCta() {
  return (
    <section className={styles.cta}>
      <div>
        <p className={styles.kicker}>Visit Us</p>
        <h2>Join us this Sunday</h2>
        <p>{church.serviceTime} at {church.address}.</p>
      </div>
      <a className={styles.primaryButton} href={church.mapUrl} target="_blank" rel="noreferrer">
        Get Directions
      </a>
    </section>
  );
}
