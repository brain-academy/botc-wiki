import MarkdownDocument from '../markdown-document'
import {Evil, Good, Class, WakeUpSchedule} from './type'

export abstract class Role extends MarkdownDocument {

    readonly originalName: string
    readonly class: Class = 'SPECIALIST'
    readonly wakeUpSchedule: WakeUpSchedule | string = 'NEVER'

    constructor({name, filename = name.toLowerCase(), originalName, class: clazz, wakeUpSchedule}
        : {
            readonly name: string,
            readonly filename?: string,
            readonly originalName: string,
            readonly class?: Class,
            readonly wakeUpSchedule?: WakeUpSchedule | string
        }
    ) {
        super(name, filename)
        this.originalName = originalName
        this.class = clazz || this.class
        this.wakeUpSchedule = !!wakeUpSchedule ? wakeUpSchedule : this.wakeUpSchedule
    }
    protected _base_url = '/docs/roles'

    static fromName: (name: string) => Role = (name: string) => {
        if (isRole(name))
            return Villageois[name] || Etranger[name] || Sbire[name] || Demon[name]
        else
            throw new Error(`BoTC Role not found: ${name}`)
    }

}

export const isRole = (key: string) => [Villageois, Etranger, Sbire, Demon]
    .flatMap(type => Object.keys(type))
    .includes(key)

export class Villageois extends Role implements Good {
    static readonly AERONAUTE = new Villageois({name: 'Aéronaute', filename: 'aeronaute', originalName: 'Baloonist', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly AMNESIQUE = new Villageois({name: 'Amnésique', filename: 'amnesique', originalName: 'Amnesic'})
    static readonly ARCHIVISTE = new Villageois({name: 'Archiviste', originalName: 'Librarian', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'})
    static readonly ARTISTE = new Villageois({name: 'Artiste', originalName: 'Artist'})
    static readonly AUBERGISTE = new Villageois({name: 'Aubergiste', originalName: 'Innkeeper', class: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly CANNIBALE = new Villageois({name: 'Cannibale', originalName: 'Cannibal', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly CHARMEUR_DE_SERPENT = new Villageois({name: 'Charmeur de serpent', filename: 'charmeur-de-serpent', originalName: 'Snake Charmer', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly CHASSEUR_DE_PRIMES = new Villageois({name: 'Chasseur de primes', filename: 'chasseur-de-primes', originalName: 'Bounty Hunter', class: 'DETECTION', wakeUpSchedule: `Lorsque la cible actuelle est décédée`})
    static readonly CHEF_DE_SECTE = new Villageois({name: 'Chef de Secte', filename: 'chef-de-secte', originalName: 'Cult Leader', wakeUpSchedule: `Lors d'un changement d'alignement`})
    static readonly COMMERE = new Villageois({name: 'Commère', filename: 'commere', originalName: 'Gossip', class: 'DETECTION'})
    static readonly COURTISANE = new Villageois({name: 'Courtisane', originalName: 'Courtier', class: 'DETECTION', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'})
    static readonly COUTURIERE = new Villageois({name: 'Couturiere', originalName: 'Seamstress', class: 'DETECTION', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'})
    static readonly CRIEUR = new Villageois({name: 'Crieur', originalName: 'Town Crier', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly CROQUE_MORT = new Villageois({name: 'Croque-Mort', filename: 'croque-mort', originalName: 'Undertaker', class: 'DETECTION', wakeUpSchedule: 'Si exécution la veille'})
    static readonly CUISTOT = new Villageois({name: 'Cuistot', originalName: 'Chef', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'})
    static readonly EMPATHIQUE = new Villageois({name: 'Empathique', originalName: 'Empath', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly ENQUETEUR = new Villageois({name: 'Enquêteur', filename: 'enqueteur', originalName: 'Investigator', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'})
    static readonly EXORCISTE = new Villageois({name: 'Exorciste', originalName: 'Exorcist', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly FAUSSAIRE = new Villageois({name: 'Faussaire', originalName: 'Philosopher', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'})
    static readonly FEMME_DE_CHAMBRE = new Villageois({name: 'Femme de Chambre', filename: 'femme-de-chambre', originalName: 'Chambermaid', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly FLEURISTE = new Villageois({name: 'Fleuriste', originalName: 'Flowergirl', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly FOU = new Villageois({name: 'Fou', originalName: 'Fool', class: 'TANK'})
    static readonly GARDIEN = new Villageois({name: 'Gardien', originalName: 'Ravenkeeper', class: 'DETECTION', wakeUpSchedule: 'Si tué pendant la nuit'})
    static readonly GENERAL = new Villageois({name: 'Général', filename: 'general', originalName: 'General'})
    static readonly HORLOGER = new Villageois({name: 'Horloger', originalName: 'Clockmaker', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'})
    static readonly JONGLEUR = new Villageois({name: 'Jongleur', originalName: 'Juggler', class: 'DETECTION', wakeUpSchedule: 'Uniquement la seconde nuit'})
    static readonly LAVANDIERE = new Villageois({name: 'Lavandière', filename: 'lavandiere', originalName: 'Washerwoman - Laundry Hand', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'})
    static readonly HERBORISTE = new Villageois({name: 'Herboriste', originalName: 'Tea Lady', class: 'PROTECTION'})
    static readonly MAIRE = new Villageois({name: 'Maire', originalName: 'Mayor'})
    static readonly MAMIE = new Villageois({name: 'Mamie', originalName: 'Grandmother', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'})
    static readonly MARIN = new Villageois({name: 'Marin', originalName: 'Sailor', class: 'TANK', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly MATHEMATICIEN = new Villageois({name: 'Mathematicien', originalName: 'Mathematician', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly MENESTREL = new Villageois({name: 'Ménestrel', filename: 'menestrel', originalName: 'Minstrel', class: 'DETECTION'})
    static readonly MERCENAIRE = new Villageois({name: 'Mercenaire', originalName: 'Slayer'})
    static readonly MOINE = new Villageois({name: 'Moine', originalName: 'Monk', class: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly ORACLE = new Villageois({name: 'Oracle', originalName: 'Oracle', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly PACIFISTE = new Villageois({name: 'Pacifiste', originalName: 'Pacifist', class: 'PROTECTION'})
    static readonly PARIEUR = new Villageois({name: 'Parieur', originalName: 'Gambler', class: 'DETECTION'})
    static readonly PECHEUR = new Villageois({name: 'Pêcheur', filename: 'pecheur', originalName: 'Fisherman'})
    static readonly PREDICATEUR = new Villageois({name: 'Predicateur', originalName: 'Predicator', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly PROFESSEUR = new Villageois({name: 'Professeur', originalName: 'Professor', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly PUCELLE = new Villageois({name: 'Pucelle', originalName: 'Virgin'})
    static readonly REVEUR = new Villageois({name: 'Reveur', originalName: 'Dreamer', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly SAGE = new Villageois({name: 'Sage', originalName: 'Sage', class: 'DETECTION'})
    static readonly SAVANT = new Villageois({name: 'Savant', originalName: 'Savant'})
    static readonly SOLDAT = new Villageois({name: 'Soldat', originalName: 'Soldier', class: 'TANK'})
    static readonly VOYANTE = new Villageois({name: 'Voyante', originalName: 'Fortune Teller', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT'})
}

export class Etranger extends Role implements Good {
    static readonly BARBIER = new Etranger({name: 'Barbier', originalName: 'Barber'})
    static readonly BETE_DE_FOIRE = new Etranger({name: 'Bete de foire', filename: 'bete-de-foire', originalName: 'Mutant'})
    static readonly BRUTE = new Etranger({name: 'Brute', originalName: 'Goon', wakeUpSchedule: `Lorsque ciblé la première fois de nuit par l'alignement opposé à l'alignement actuel`})
    static readonly DULCINEE = new Etranger({name: 'Dulcinée', filename: 'dulcinee', originalName: 'Sweetheart'})
    static readonly GITANE = new Etranger({name: 'Gitane', originalName: 'Moonchild'})
    static readonly INVENTEUR = new Etranger({name: 'Inventeur', originalName: 'Tinker'})
    static readonly LUNATIQUE = new Etranger({name: 'Lunatique', originalName: 'Lunatic', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly MAJORDOME = new Etranger({name: 'Majordome', originalName: 'Butler', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly MALADROIT = new Etranger({name: 'Maladroit', originalName: 'Klutz'})
    static readonly POLITICIEN = new Etranger({name: 'Politicien', originalName: 'Politician'})
    static readonly RECLUS = new Etranger({name: 'Reclus', originalName: 'Recluse'})
    static readonly SOULARD = new Etranger({name: 'Soûlard', filename: 'soulard', originalName: 'Drunk', wakeUpSchedule: 'Identique au faux rôle attribué'})
    static readonly VERTUEUX = new Etranger({name: 'Vertueux', originalName: 'Saint'})

}

export class Sbire extends Role implements Evil {
    static readonly ASSASSIN = new Sbire({name: 'Assassin', originalName: 'Assassin', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'})
    static readonly AVOCAT_DU_DIABLE = new Sbire({name: 'Avocat du Diable', filename: 'avocat-du-diable', originalName: `Devil's Advocate`, class: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly BARON = new Sbire({name: 'Baron', originalName: 'Baron'})
    static readonly CONSPIRATEUR = new Sbire({name: 'Conspirateur', originalName: 'Mastermind'})
    static readonly CROQUEUSE_D_HOMMES = new Sbire({name: 'Croqueuse d\'hommes', filename: 'croqueuse-d-hommes', originalName: 'Scarlet Woman'})
    static readonly EMPOISONNEUR = new Sbire({name: 'Empoisonneur', originalName: 'Poisoner', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly ESPION = new Sbire({name: 'Espion', originalName: 'Spy', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly GOBELIN = new Sbire({name: 'Gobelin', originalName: 'Gobelin'})
    static readonly JUMEAU_MALEFIQUE = new Sbire({name: 'Jumeau Maléfique', filename: 'jumeau-malefique', originalName: 'Evil Twin'})
    static readonly JUMEAUX_MALEFIQUES = new Sbire({name: 'Jumeaux Maléfiques', filename: 'jumeau-malefique', originalName: 'Evil Twin'})
    static readonly JUMEAU = new Sbire({name: 'Jumeau', filename: 'jumeau-malefique', originalName: 'Evil Twin'})
    static readonly MANIPULATEUR = new Sbire({name: 'Manipulateur', originalName: 'Cerenovus', })
    static readonly PARRAIN = new Sbire({name: 'Parrain', originalName: 'Godfather'})
    static readonly SORCIERE = new Sbire({name: 'Sorcière', filename: 'sorciere', originalName: 'Witch'})
    static readonly VEUVE_NOIRE = new Sbire({name: 'Veuve Noire', originalName: 'Widow'})
    static readonly VIEILLE_CHOUETTE = new Sbire({name: 'Vieille Chouette', filename: 'vieille-chouette', originalName: 'Pit Hag'})
}

export class Demon extends Role implements Evil {
    static readonly FANG_GU = new Demon({name: 'Fang Gu', filename: 'fang-gu', originalName: 'Fang Gu', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly IMP = new Demon({name: 'Imp', originalName: 'Imp', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly LEVIATHAN = new Demon({name: 'Léviathan', filename: 'leviathan', originalName: 'Leviathan'})
    static readonly PO = new Demon({name: 'Po', filename: 'po', originalName: 'Po', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly PUKKA = new Demon({name: 'Pukka', originalName: 'Pukka', wakeUpSchedule: 'EVERY_NIGHT'})
    static readonly NO_DASHII = new Demon({name: 'No Dashii', filename: 'no-dashii', originalName: 'No Dashii', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly SHABALOTH = new Demon({name: 'Shabaloth', originalName: 'Shabaloth', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly PTIT_MONSTRE = new Demon({name: 'P\'tit Monstre', filename: 'ptit-monstre', originalName: 'Lil Monsta', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly VIGORMORTIS = new Demon({name: 'Vigormortis', originalName: 'Vigormortis', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly VORTOX = new Demon({name: 'Vortox', originalName: 'Vortox', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'})
    static readonly ZOMBUUL = new Demon({name: 'Zombuul', originalName: 'Zombuul', wakeUpSchedule: `Si aucune exécution la veille`})
}
