import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { MAIN_MODULES } from '../domain/module/modules'

function Feature({ iconPath, name, filename, summary }) {
    return (
        <div className={clsx('col col--4', styles.feature)}>
            <a href={useBaseUrl(`/docs/modules/${filename}`)}>
                {iconPath && (
                    <div className="text--center">
                        <img className={styles.featureImage} src={iconPath} alt={name} />
                    </div>
                )}
            </a>
            <h3 style={{ textAlign: 'center' }}>{name}</h3>
            <p>{summary}</p>
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
                {MAIN_MODULES && MAIN_MODULES.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {MAIN_MODULES
                                    .map(module => ({ ...module, iconPath: `img/blood-on-the-clocktower/modules/${module.filename}.png` }))
                                    .map((props, idx) => (
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
