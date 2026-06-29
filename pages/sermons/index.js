import { Layout, PageHero, SermonCard } from '../../components/Site';
import { sermons } from '../../data/site';
import styles from '../../styles/Site.module.css';

export default function SermonsPage() {
  return (
    <Layout>
      <PageHero title="Sermons" eyebrow="Listen and Grow">
        Recent Amharic messages from Addis Kidan Evangelical Church.
      </PageHero>
      <section className={styles.contentWrap}>
        <div className={styles.sermonGrid}>
          {sermons.map((sermon) => (
            <SermonCard sermon={sermon} key={sermon.title} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
