import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
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
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with Our Scripts 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Premium FiveM scripts and development resources for your roleplay server">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.showcaseSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <Heading as="h2">Why Choose Our Scripts?</Heading>
                <ul className={styles.featureList}>
                  <li>✨ Regular updates and new features</li>
                  <li>🔧 Full source code access</li>
                  <li>📚 Comprehensive documentation</li>
                  <li>🛠️ Easy installation process</li>
                  <li>💬 Active community support</li>
                </ul>
              </div>
              <div className="col col--6">
                <Heading as="h2">Latest Updates</Heading>
                <div className={styles.updateList}>
                  <div className={styles.update}>
                    <span className={styles.updateDate}>February 2025</span>
                    <p>New documentation site launch with improved navigation and search</p>
                  </div>
                  <div className={styles.update}>
                    <span className={styles.updateDate}>Coming Soon</span>
                    <p>Exciting new scripts and features in development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
