import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Your Future in the Final Frontier Starts Here.
        </p>
        <p className={styles.heroDescription}>
          This comprehensive resource was built by a second-year medical student at the University of Arizona College of Medicine - Phoenix, dedicated to guiding aspiring aerospace medical professionals.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/introduction-to-aerospace-medicine">
            What is Aerospace Medicine?
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageQuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--3', styles.quickLinkCard)}>
            <Link to="/docs/career-paths/overview-military-vs-civilian">
              <Heading as="h3">Career Paths</Heading>
              <p>Explore diverse roles in military, civilian, and commercial aerospace.</p>
            </Link>
          </div>
          <div className={clsx('col col--3', styles.quickLinkCard)}>
            <Link to="/docs/training-education/residency-fellowship-overview">
              <Heading as="h3">Training & Education</Heading>
              <p>Navigate residency programs, fellowships, and essential certifications.</p>
            </Link>
          </div>
          <div className={clsx('col col--3', styles.quickLinkCard)}>
            <Link to="/docs/research/finding-research-opportunities">
              <Heading as="h3">Research Opportunities</Heading>
              <p>Discover key institutions, hot topics, and grant writing tips.</p>
            </Link>
          </div>
          <div className={clsx('col col--3', styles.quickLinkCard)}>
            <Link to="/docs/resources/organizations-societies">
              <Heading as="h3">Resource Directory</Heading>
              <p>Find organizations, funding, companies, and recommended reading.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Your comprehensive resource for medical students interested in aerospace medicine.">
      <HomepageHeader />
      <main>
        <HomepageQuickLinks />
      </main>
    </Layout>
  );
}