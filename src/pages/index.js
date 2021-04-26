import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Bad Moon Rising',
        imageUrl: 'img/blood-on-the-clocktower/BOTC-BMR.png',
        module: 'bad-moon-rising',
        description: (
            <>
            </>
        ),
    },
    {
        title: 'Trouble Brewing',
        imageUrl: 'img/blood-on-the-clocktower/BOTC-TB.png',
        module: 'trouble-brewing',
        description: (
            <>
            </>
        ),
    },
    {
        title: 'Sects & Violets',
        imageUrl: 'img/blood-on-the-clocktower/BOTC-SV.png',
        module: 'sects-and-violets',
        description: (
            <>
            </>
        ),
    },
];

function Feature({ imageUrl, title, module, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            <a href={useBaseUrl(`/docs/modules/${module}`)}>
                {imgUrl && (
                    <div className="text--center">
                        <img className={styles.featureImage} src={imgUrl} alt={title} />
                    </div>
                )}
            </a>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`Welcome`}
            description="Brain Academy website homepage">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
            </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
