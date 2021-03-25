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
                    title: 'Docs',
                    items:
                        fs.readdirSync('docs/modules/').map(module_file => {
                            const module_name = `${module_file.split('.')[ 0 ]}`
                            return {
                                label: module_name,
                                to: `docs/modules/${module_name}`
                            }
                        })
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/5mrm3fjd',
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
