let fs = require('fs')

module.exports = {
    title: 'Brain Academy',
    tagline: 'Welcome to the Brain Academy',
    url: 'https://brain-academy.github.io',
    baseUrl: '/wiki/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/brain-academy-logo.jpg',
    organizationName: 'brain-academy', // Usually your GitHub org/user name.
    projectName: 'wiki', // Usually your repo name.
    themeConfig: {
        hideableSidebar: true,
        navbar: {
            title: 'Brain Academy',
            logo: {
                alt: 'Brain Academy logo',
                src: 'img/brain-academy-logo.jpg',
            },
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
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
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
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/brain-academy/wiki/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/brain-academy/wiki/tree/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
