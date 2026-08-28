import { BotcEntity } from "../botc-entity"

export abstract class Role implements BotcEntity {

    constructor(
        readonly name: string = name.toLocaleLowerCase(),
        readonly type: RoleType,
        readonly filename: string,
        readonly originalName: string,
        readonly clazz: keyof typeof Clazz | string,
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

export enum RoleType { Villageois, Marginaux, Sbires, Demons, Voyageurs }

export interface CreateRole {
    name: string
    filename?: string
    originalName: string
    clazz?: keyof typeof Clazz | string
    wakeUpSchedule?: keyof typeof WakeUpSchedule | string
}

export class Villageois extends Role implements Good {
    static readonly type = RoleType.Villageois
    static new = (role: CreateRole): Villageois => super.new({ type: this.type, ...role })
}

export class Marginaux extends Role implements Good {
    static readonly type = RoleType.Marginaux
    static new = (role: CreateRole): Marginaux => super.new({ type: this.type, ...role })
}

export class Sbires extends Role implements Evil {
    static readonly type = RoleType.Sbires
    static new = (role: CreateRole): Sbires => super.new({ type: this.type, ...role })
}

export class Demons extends Role implements Evil {
    static readonly type = RoleType.Demons
    static new = (role: CreateRole): Demons => super.new({ type: this.type, ...role })
}

export class Voyageurs extends Role {
    static readonly type = RoleType.Voyageurs
    static new = (role: CreateRole): Voyageurs => super.new({ type: this.type, ...role })
}

/** Alignment type */
export type Good = {}
export type Evil = {}

export const Clazz: { [key: string]: string } = {
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
