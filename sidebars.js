let fs = require('fs')

module.exports = {
    someSidebar: {
        Accueil: [ 'index' ],
        Modules: fs.readdirSync('docs/modules/').map(module_file => `modules/${module_file.split('.')[ 0 ]}`),
        Roles: fs.readdirSync('docs/roles/').map(role_file => `roles/${role_file.split('.')[ 0 ]}`)
    },
};
