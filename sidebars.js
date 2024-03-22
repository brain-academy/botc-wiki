let fs = require('fs')

const MODULES = [ 'trouble-brewing', 'bad-moon-rising', 'sects-and-violets', 'deadly-penance-day', 'largely-un-faire', 'experimental' ]
const FICHES = [ 'trouble-brewing', 'bad-moon-rising', 'sects-and-violets', 'deadly-penance-day', 'a-day-to-remember', 'laissez-un-faire', 'largely-un-faire' ]

module.exports = {
	sidebar: [
		{ type: 'doc', id: 'index', label: 'Accueil' },
		{ type: 'category', label: 'Modules', items: [ MODULES.map(module => `modules/${module}`) ] },
		{ type: 'doc', id: 'roles', label: 'Roles' },
		// { type: 'category', label: 'Roles', items: [ fs.readdirSync('docs/roles/').map(role_file => `roles/${role_file.split('.')[ 0 ]}`) ] },
		{ type: 'doc', id: 'legendaires', label: 'Légendaires' },
		{
			type: 'category', label: 'Documents', items: [
				[
					'glossaire', 'deroulement', 'regles', 'strategies', 'conteurs', 'guide_athee', 'guide_folie', 'guide_laissez_un_faire', 'guide_legion', 'guide_marionnette', 'guide_yaggablabla'
					// { type: 'category', label: 'Feuilles de rôle', items: [FICHES.map(fiche => `fiches/${fiche}`)] },
				] ]
		},
	],
}
