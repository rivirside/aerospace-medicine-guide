import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const HomepageCards = [
  {
    title: 'Career Paths',
    description: 'Explore the diverse job opportunities in Aerospace Medicine.',
    link: '/docs/career-paths/overview-military-vs-civilian',
  },
  {
    title: 'Training & Education',
    description: 'Learn about residencies, fellowships, and essential skills.',
    link: '/docs/training-education/residency-fellowship-overview',
  },
  {
    title: 'Research Opportunities',
    description: 'Discover hot topics and how to get involved in research.',
    link: '/docs/research/finding-research-opportunities',
  },
  {
    title: 'Resource Directory',
    description: 'Find organizations, scholarships, and recommended reading.',
    link: '/docs/resources/organizations-societies',
  },
];

function HomepageCard({title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--primary button--block"
            to={link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Your Future in the Final Frontier Starts Here.
        </Heading>
        <p className="hero__subtitle">What is Aerospace Medicine?: A concise, exciting introduction to the field.</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A comprehensive guide for medical students interested in Aerospace Medicine.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {HomepageCards.map((props, idx) => (
                <HomepageCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}