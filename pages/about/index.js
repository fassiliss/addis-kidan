import { ContactCta, Layout, Ministries, PageHero } from '../../components/Site';
import styles from '../../styles/Site.module.css';

export default function AboutPage() {
  return (
    <Layout>
      <PageHero title="About Us" eyebrow="Our Church">
        Addis Kidan Evangelical Church is a worshiping community centered on Jesus
        Christ, Scripture, prayer, and fellowship.
      </PageHero>
      <section className={styles.contentWrap}>
        <h2>A home for worship and growth</h2>
        <p>
          Addis Kidan Evangelical Church serves Ethiopian and Eritrean families in the
          Virginia Beach, Norfolk, and Hampton Roads area.
        </p>
        <p>
          Our desire is to proclaim the gospel clearly, disciple believers faithfully,
          and welcome every guest with warmth.
        </p>
      </section>
      <Ministries />
      <ContactCta />
    </Layout>
  );
}
