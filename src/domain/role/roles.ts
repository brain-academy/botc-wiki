import JsonRoles from '../../../static/api/roles.json'
import Role, { Demon, Etranger, Sbire, Villageois, Voyageur } from './role'

export const Roles = Object.fromEntries(
	Object.entries(JsonRoles)
		.map(([key, role]) => ([key, rolesInstances(role)])
	)
) as {[roleType in keyof typeof JsonRoles]: {[role in keyof typeof JsonRoles[roleType]]: Role}}

type JsonRole = typeof JsonRoles[keyof typeof JsonRoles]

function ctor(jsonRole: JsonRole) {
	switch (typeof jsonRole) {
		case typeof JsonRoles.VILLAGEOIS: return Villageois
		case typeof JsonRoles.ETRANGER: return Etranger
		case typeof JsonRoles.SBIRE: return Sbire
		case typeof JsonRoles.DEMON: return Demon
		default: return Voyageur
	}
}

function rolesInstances(jsonRole: JsonRole) {
	return Object.fromEntries(
		Object.entries(jsonRole)
			.map(([key, role]) => ([key, ctor(jsonRole).new(role)])
		)
	)
}
