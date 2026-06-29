import { BeliefsList, Layout, PageHero } from '../../components/Site';
import styles from '../../styles/Site.module.css';

export default function StatementOfFaithPage() {
  return (
    <Layout>
      <PageHero title="Statement of Faith" eyebrow="What We Believe">
        Our faith is centered on the triune God, the authority of Scripture, and
        salvation through Jesus Christ.
      </PageHero>
      <section className={styles.contentWrap}>
        <h2>Core beliefs</h2>
        <BeliefsList />
      </section>
    </Layout>
  );
}
