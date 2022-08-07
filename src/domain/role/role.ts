export abstract class Role {

    constructor(
        readonly name: string = name.toLocaleLowerCase(),
        readonly type: RoleType,
        readonly filename: string,
        readonly originalName: string,
        readonly clazz: keyof typeof Class,
        readonly wakeUpSchedule: keyof typeof WakeUpSchedule | string,
    ) { }

    static new(role: CreateRole & { type: RoleType }): Role {
        return {
            filename: role.filename || role.name.toLocaleLowerCase(),
            clazz: role.clazz || 'SPECIALIST',
            wakeUpSchedule: role.wakeUpSchedule || 'NEVER',
            ...role
        }
    }
}

export enum RoleType { Villageois, Etranger, Sbire, Demon, Voyageur, Legendaire }

export interface CreateRole {
    name: string
    filename?: string
    originalName: string
    clazz?: keyof typeof Class
    wakeUpSchedule?: keyof typeof WakeUpSchedule | string
}

export class Villageois extends Role implements Good {
    static readonly type = RoleType.Villageois
    static new = (role: CreateRole): Villageois => super.new({ type: this.type, ...role })
}

export class Etranger extends Role implements Good {
    static readonly type = RoleType.Etranger
    static new = (role: CreateRole): Etranger => super.new({ type: this.type, ...role })
}

export class Sbire extends Role implements Evil {
    static readonly type = RoleType.Sbire
    static new = (role: CreateRole): Sbire => super.new({ type: this.type, ...role })
}

export class Demon extends Role implements Evil {
    static readonly type = RoleType.Demon
    static new = (role: CreateRole): Demon => super.new({ type: this.type, ...role })
}

export class Voyageur extends Role {
    static readonly type = RoleType.Voyageur
    static new = (role: CreateRole): Voyageur => super.new({ type: this.type, ...role })
}

export class Legendaire extends Role {
    static readonly type = RoleType.Legendaire
    static new = (role: CreateRole): Legendaire => super.new({ type: this.type, ...role })
}

/** Alignment type */
export type Good = {}
export type Evil = {}

export const Class: { [key: string]: string } = {
    DETECTION: 'Détection',
    PROTECTION: 'Protection',
    TANK: 'Tank',
    FIRST_NIGHT: 'Première Nuit',
    SPECIALIST: 'Spécial',
}

export const WakeUpSchedule: { [key: string]: string } = {
    NEVER: 'Jamais',
    FIRST_NIGHT: 'Uniquement la première nuit',
    EVERY_NIGHT: 'Toutes les nuits',
    EVERY_NIGHT_BUT_FIRST: 'Toutes les nuits, sauf la première',
    UNTIL_ABILITY_CONSUMED: `Rôle à usage unique - Se réveille toutes les nuits jusqu'à l'utilisation de sa capacité`,
}

export default Role
