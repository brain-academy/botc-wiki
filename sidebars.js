let fs = require('fs')

module.exports = {
    someSidebar: {
        Accueil: [ 'index' ],
        Modules: fs.readdirSync('docs/modules/').map(module_file => `modules/${module_file.split('.')[ 0 ]}`),
        Fiches: fs.readdirSync('docs/fiches/').map(cheatsheet_file => `fiches/${cheatsheet_file.split('.')[ 0 ]}`),
        Roles: fs.readdirSync('docs/roles/').map(role_file => `roles/${role_file.split('.')[ 0 ]}`)
    },
};
