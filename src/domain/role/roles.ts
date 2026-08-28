import JsonRoles from '../../../static/api/roles.json'
import Role, { Demons, Marginaux, Sbires, Villageois, Voyageurs } from './role'

export const Roles = Object.fromEntries(
	Object.entries(JsonRoles)
		.map(([key, role]) => ([key, rolesInstances(role)])
	)
) as {[roleType in keyof typeof JsonRoles]: {[role in keyof typeof JsonRoles[roleType]]: Role}}

type JsonRole = typeof JsonRoles[keyof typeof JsonRoles]

function ctor(jsonRole: JsonRole) {
	switch (jsonRole) {
		case JsonRoles.VILLAGEOIS: return Villageois
		case JsonRoles.MARGINAUX: return Marginaux
		case JsonRoles.SBIRES: return Sbires
		case JsonRoles.DEMONS: return Demons
		default: return Voyageurs
	}
}

function rolesInstances(jsonRole: JsonRole) {
	return Object.fromEntries(
		Object.entries(jsonRole)
			.map(([key, role]) => ([key, ctor(jsonRole).new(role)])
		)
	)
}
