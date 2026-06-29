import { Layout, PageHero } from '../../components/Site';
import { church } from '../../data/site';
import styles from '../../styles/Site.module.css';

export default function ContactPage() {
  return (
    <Layout>
      <PageHero title="Contact" eyebrow="Visit Addis Kidan">
        We would be glad to hear from you or welcome you at our Sunday worship gathering.
      </PageHero>
      <section className={styles.contentWrap}>
        <div className={styles.contactGrid}>
          <article className={styles.contactBlock}>
            <h3>Service Time</h3>
            <p>{church.serviceTime}</p>
          </article>
          <article className={styles.contactBlock}>
            <h3>Location</h3>
            <p>{church.address}</p>
            <a href={church.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
          </article>
          <article className={styles.contactBlock}>
            <h3>Phone</h3>
            <p><a href={church.phoneHref}>{church.phone}</a></p>
          </article>
          <article className={styles.contactBlock}>
            <h3>Email</h3>
            <p><a href={`mailto:${church.email}`}>{church.email}</a></p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
