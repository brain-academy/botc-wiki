import MarkdownDocument, { Theme } from '../markdown-document'

export abstract class Role extends MarkdownDocument {

    readonly abstract type: string
    readonly originalName: string
    readonly class: keyof typeof Class = 'SPECIALIST'
    readonly wakeUpSchedule: keyof typeof WakeUpSchedule | string = 'NEVER'

    readonly abstract theme: Theme

    constructor({ name, filename = name.toLowerCase(), originalName, class: clazz, wakeUpSchedule }
        : {
            readonly name: string,
            readonly filename?: string,
            readonly originalName: string,
            readonly class?: keyof typeof Class,
            readonly wakeUpSchedule?: keyof typeof WakeUpSchedule | string
        }
    ) {
        super(name, filename)
        this.originalName = originalName
        this.class = clazz || this.class
        this.wakeUpSchedule = wakeUpSchedule || this.wakeUpSchedule
    }
    protected _base_url = '/docs/roles'

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
