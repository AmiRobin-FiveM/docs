import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './support.module.css';

export default function Support(): JSX.Element {
  return (
    <Layout
      title="Support"
      description="Get support for AmiRobin Development scripts">
      <div className={styles.supportHeader}>
        <div className="container">
          <Heading as="h1">Need Help?</Heading>
          <p className={styles.headerSubtitle}>
            Join our Discord community for instant support
          </p>
        </div>
      </div>

      <main className="container">
        <div className={styles.supportContainer}>
          <div className={styles.discordSection}>
            <div className={styles.discordCard}>
              <img 
                src="/img/discord-logo.png" 
                alt="Discord Logo" 
                className={styles.discordLogo}
              />
              <Heading as="h2">Join Our Discord Community</Heading>
              <p className={styles.discordDescription}>
                Get instant support, updates, and connect with other developers
              </p>
              <Link
                className={styles.discordButton}
                to="https://discord.gg/amirobin"
                target="_blank">
                Join Discord Server
              </Link>
            </div>
          </div>

          <div className={styles.supportProcess}>
            <div className={styles.processCard}>
              <div className={styles.processStep}>
                <div className={styles.stepIcon}>1</div>
                <div className={styles.stepContent}>
                  <h3>Join Discord</h3>
                  <p>Click the button above to join our Discord server</p>
                </div>
              </div>

              <div className={styles.processArrow}>↓</div>

              <div className={styles.processStep}>
                <div className={styles.stepIcon}>2</div>
                <div className={styles.stepContent}>
                  <h3>Create a Ticket</h3>
                  <p>Go to #create-ticket channel and open a new support ticket</p>
                </div>
              </div>

              <div className={styles.processArrow}>↓</div>

              <div className={styles.processStep}>
                <div className={styles.stepIcon}>3</div>
                <div className={styles.stepContent}>
                  <h3>Get Support</h3>
                  <p>Our support team will assist you with your questions</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.supportInfo}>
            <div className={styles.infoCard}>
              <Heading as="h2">Support Hours</Heading>
              <p>Our team is available 24/7 to help you with:</p>
              <ul>
                <li>Script installation</li>
                <li>Configuration issues</li>
                <li>Technical problems</li>
                <li>General questions</li>
              </ul>
              <div className={styles.supportNote}>
                <strong>Note:</strong> Make sure to have your purchase information ready when creating a ticket
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
