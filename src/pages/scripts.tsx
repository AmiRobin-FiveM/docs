import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './scripts.module.css';

type Script = {
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  tebexLink: string;
};

const scripts: Script[] = [
  {
    title: 'Example Script 1',
    description: 'A premium FiveM script that enhances your roleplay experience.',
    price: '$19.99',
    features: [
      'Feature 1: Advanced configuration',
      'Feature 2: Performance optimized',
      'Feature 3: Regular updates',
      'Feature 4: Full documentation',
    ],
    image: '/img/script1.jpg',
    tebexLink: 'https://store.amirobin.dev/script1',
  },
  {
    title: 'Example Script 2',
    description: 'Another high-quality script for your FiveM server.',
    price: '$24.99',
    features: [
      'Feature 1: Easy installation',
      'Feature 2: Custom animations',
      'Feature 3: Multi-language support',
      'Feature 4: 24/7 support',
    ],
    image: '/img/script2.jpg',
    tebexLink: 'https://store.amirobin.dev/script2',
  },
];

function ScriptCard({ script }: { script: Script }) {
  return (
    <div className={styles.scriptCard}>
      <div className={styles.scriptImage}>
        <img src={script.image} alt={script.title} />
      </div>
      <div className={styles.scriptContent}>
        <Heading as="h2" className={styles.scriptTitle}>
          {script.title}
        </Heading>
        <p className={styles.scriptDescription}>{script.description}</p>
        <div className={styles.scriptFeatures}>
          <Heading as="h3">Features:</Heading>
          <ul>
            {script.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={styles.scriptFooter}>
          <span className={styles.scriptPrice}>{script.price}</span>
          <Link
            className="button button--primary"
            to={script.tebexLink}
            target="_blank">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Scripts(): JSX.Element {
  return (
    <Layout
      title="Scripts"
      description="Browse our premium FiveM scripts collection">
      <div className={styles.scriptsHeader}>
        <div className="container">
          <Heading as="h1">Our Premium Scripts</Heading>
          <p>
            Discover our collection of high-quality FiveM scripts designed to
            enhance your roleplay server.
          </p>
        </div>
      </div>
      <main className="container margin-vert--lg">
        <div className={styles.scriptsGrid}>
          {scripts.map((script, idx) => (
            <ScriptCard key={idx} script={script} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
