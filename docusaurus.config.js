let fs = require('fs')

module.exports = {
    title: 'Brain Academy',
    tagline: 'Welcome to the Brain Academy',
    url: 'https://brain-academy.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/brain-academy-logo.jpg',
    organizationName: 'brain-academy', // Usually your GitHub org/user name.
    projectName: 'wiki', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: true
        },
        hideableSidebar: true,
        navbar: {
            title: 'Brain Academy',
            logo: {
                alt: 'Brain Academy logo',
                src: 'img/brain-academy-logo.jpg',
            },
            hideOnScroll: true,
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://www.helloasso.com/associations/the-brain-academy/formulaires/1/widget',
                    label: 'Faire un don',
                    position: 'right'
                },
                {
                    href: 'https://github.com/brain-academy/wiki',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/ccfd3BFqGM',
                        },
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/brain-academy/wiki',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Crédits & Remerciements',
                            to: 'docs/credits',
                        },
                        {
                            label: 'Nous contacter',
                            href: 'mailto:staff@brain-academy.fr',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Brain-Academy.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
