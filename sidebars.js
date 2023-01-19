let fs = require('fs')

const MODULES = ['trouble-brewing', 'bad-moon-rising', 'sects-and-violets', 'deadly-penance-day', 'largely-un-faire','experimental']
const FICHES = ['trouble-brewing', 'bad-moon-rising', 'sects-and-violets', 'deadly-penance-day', 'a-day-to-remember', 'laissez-un-faire', 'largely-un-faire']

module.exports = {
    someSidebar: {
        Accueil: [ 'index' ],
        Modules: MODULES.map(module => `modules/${module}`),
        Roles: fs.readdirSync('docs/roles/').map(role_file => `roles/${role_file.split('.')[ 0 ]}`),
        Documents: ['glossaire', 'deroulement', 'regles', 'strategies', 'conteurs', 'guide_athee', 'guide_folie', 'guide_legion', 'guide_marionnette'],
        Fiches: FICHES.map(fiche => `fiches/${fiche}`),
    },
};
