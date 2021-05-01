import MarkdownDocument from '../markdown-document'
import {Demon, Etranger, Role, Sbire, Villageois} from '../role/role'

export default class Module extends MarkdownDocument {

    protected _base_url = '/docs/modules'

    readonly roles: Role[]
    readonly imageUrl?: string
    readonly summary?: string
    readonly description?: string

    private constructor(
        {name, _filename = name.toLowerCase(), roles, imageUrl, summary, description}:
            {name: string, _filename: string, readonly roles: Role[], readonly imageUrl?: string, readonly summary?: string, readonly description?: string}
    ) {
        super(name, _filename)
        this.roles = roles
        this.imageUrl = imageUrl
        this.summary = summary
        this.description = description
    }

    static readonly TROUBLE_BREWING = new Module(
        {
            name: 'Trouble Brewing',
            _filename: 'trouble-brewing',
            imageUrl: 'img/blood-on-the-clocktower/BOTC-TB.png',
            roles: [
                Villageois.ARCHIVISTE,
                Villageois.ENQUETEUR,
                Villageois.CUISTOT,
                Villageois.EMPATHIQUE,
                Villageois.VOYANTE,
                Villageois.CROQUE_MORT,
                Villageois.MOINE,
                Villageois.GARDIEN,
                Villageois.PUCELLE,
                Villageois.MERCENAIRE,
                Villageois.SOLDAT,
                Villageois.LAVANDIERE,
                Villageois.MAIRE,
                Etranger.MAJORDOME,
                Etranger.SOULARD,
                Etranger.RECLUS,
                Etranger.VERTUEUX,
                Sbire.EMPOISONNEUR,
                Sbire.ESPION,
                Sbire.CROQUEUSE_D_HOMMES,
                Sbire.BARON,
                Demon.IMP
            ],
            summary: `De l'art de l'ivresse à celui d'empoisonnement...
            Trouble Brewing sera votre première expérience dans le monde fantastique de Blood On The Clock Tower ! C'est par ce module qu'on commence.`,
            description: `De l'art de l'ivresse à celui d'empoisonnement...
            Un Démon, quatre Sbires, ce sont ces derniers que les Villageois devront déterminer pour prétendre à la Victoire.
            Trouble Brewing sera votre première expérience dans le monde fantastique de Blood On The Clock Tower ! C'est par ce module qu'on commence.`
        })
    static readonly BAD_MOON_RISING = new Module({
        name: 'Bad Moon Rising',
        _filename: 'bad-moon-rising',
        imageUrl: 'img/blood-on-the-clocktower/BOTC-BMR.png',
        roles: [
            Villageois.MAMIE,
            Villageois.MARIN,
            Villageois.FEMME_DE_CHAMBRE,
            Villageois.EXORCISTE,
            Villageois.AUBERGISTE,
            Villageois.PARIEUR,
            Villageois.COMMERE,
            Villageois.COURTISANE,
            Villageois.PROFESSEUR,
            Villageois.MENESTREL,
            Villageois.HERBORISTE,
            Villageois.PACIFISTE,
            Villageois.FOU,
            Etranger.INVENTEUR,
            Etranger.GITANE,
            Etranger.BRUTE,
            Etranger.LUNATIQUE,
            Sbire.PARRAIN,
            Sbire.AVOCAT_DU_DIABLE,
            Sbire.ASSASSIN,
            Sbire.CONSPIRATEUR,
            Demon.PUKKA,
            Demon.PO,
            Demon.SHABALOTH,
            Demon.ZOMBUUL
        ],
        summary: `Une razzia de morts, un concert de décès !
        Une place prépondérante pour l'ivresse et la protection, Bad Moon Rising sera votre 2ème expérience de jeu sur BotC, pour les joueurs intermédiaires.`,
        description: `Une razzia de morts, un concert de décès ! 
        Quatre Sbires, Quatre Démons et des Villageois qui devront s'entre-tuer pour connaître la Vérité !
        Une place prépondérante pour l'ivresse et la protection, Bad Moon Rising sera votre 2ème expérience de jeu sur BotC, pour les joueurs intermédiaires.`
    })
    static readonly SECTS_AND_VIOLETS = new Module({
        name: 'Sects & Violets',
        _filename: 'sects-and-violets',
        imageUrl: 'img/blood-on-the-clocktower/BOTC-SV.png',
        roles: [
            Villageois.HORLOGER,
            Villageois.REVEUR,
            Villageois.CHARMEUR_DE_SERPENT,
            Villageois.MATHEMATICIEN,
            Villageois.FLEURISTE,
            Villageois.CRIEUR,
            Villageois.ORACLE,
            Villageois.SAVANT,
            Villageois.COUTURIERE,
            Villageois.FAUSSAIRE,
            Villageois.ARTISTE,
            Villageois.JONGLEUR,
            Etranger.BETE_DE_FOIRE,
            Etranger.BARBIER,
            Etranger.DULCINEE,
            Etranger.MALADROIT,
            Sbire.JUMEAU_MALEFIQUE,
            Sbire.MANIPULATEUR,
            Sbire.SORCIERE,
            Sbire.VIEILLE_CHOUETTE,
            Demon.FANG_GU,
            Demon.NO_DASHII,
            Demon.VIGORMORTIS,
            Demon.VORTOX,
        ],
        summary: `La Folie arrive et l'Empoisonnement est plus présent que jamais !
        Sects & Violets sera votre 3ème expérience sur BotC, à réserver aux joueurs confirmés.`,
        description: `La Folie arrive et l'Empoisonnement est plus présent que jamais !
        De la manipulation mentale, des Démons toujours plus forts, Sects & Violets, c'est la promesse d'une enquête difficile mais passionnante avec des Villageois encore plus forts... mais toujours aussi vulnérables.
        Sects & Violets sera votre 3ème expérience sur BotC, à réserver aux joueurs confirmés.`
    })
    static readonly DEADLY_PENANCE_DAY = new Module({
        name: 'Deadly Penance Day',
        _filename: 'deadly-penance-day',
        roles: [
            Villageois.CUISTOT,
            Villageois.ENQUETEUR,
            Villageois.CHASSEUR_DE_PRIMES,
            Villageois.MARIN,
            Villageois.PREDICATEUR,
            Villageois.CHEF_DE_SECTE,
            Villageois.CRIEUR,
            Villageois.PARIEUR,
            Villageois.EXORCISTE,
            Villageois.FAUSSAIRE,
            Villageois.SOLDAT,
            Villageois.FOU,
            Villageois.MAIRE,
            Etranger.BARBIER,
            Etranger.POLITICIEN,
            Etranger.SOULARD,
            Etranger.VERTUEUX,
            Sbire.ASSASSIN,
            Sbire.BARON,
            Sbire.SORCIERE,
            Sbire.ESPION,
            Demon.PTIT_MONSTRE
        ]
    })

}
