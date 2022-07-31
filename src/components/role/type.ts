/** Alignment type */
export type Good = {}
export type Evil = {}

export type Class = 'DETECTION' | 'PROTECTION' | 'TANK' | 'FIRST_NIGHT' | 'SPECIALIST'

export type WakeUpSchedule = 'NEVER' | 'FIRST_NIGHT' | 'EVERY_NIGHT_BUT_FIRST' | 'EVERY_NIGHT' | 'UNTIL_ABILITY_CONSUMED'

export const RenderClass = {
    DETECTION: 'Détection',
    PROTECTION: 'Protection',
    TANK: 'Tank',
    FIRST_NIGHT: 'Première Nuit',
    SPECIALIST: 'Spécial',
}

export const RenderWakeUpSchedule = {
    NEVER: 'Jamais',
    FIRST_NIGHT: 'Uniquement la première nuit',
    EVERY_NIGHT: 'Toutes les nuits',
    EVERY_NIGHT_BUT_FIRST: 'Toutes les nuits, sauf la première',
    UNTIL_ABILITY_CONSUMED: `Rôle à usage unique - Se réveille toutes les nuits jusqu'à l'utilisation de sa capacité`,
}
