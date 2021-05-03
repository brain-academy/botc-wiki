import MarkdownDocument from '../markdown-document'
import {Demon, Etranger, Role, Sbire, Villageois} from '../role/role'

type Theme = {color: string}

export default class Module extends MarkdownDocument {

    protected _base_url = '/docs/modules'

    readonly roles: Role[]
    readonly imageUrl?: string
    readonly summary?: string
    readonly description?: string
    readonly fabled?: string
    readonly theme?: Theme

    private constructor(
        {name, _filename = name.toLowerCase(), roles, imageUrl, summary, description, fabled, theme}:
            {name: string, _filename: string, roles: Role[], imageUrl?: string, summary?: string, description?: string, fabled?: string, theme?: Theme}
    ) {
        super(name, _filename)
        this.roles = roles
        this.imageUrl = imageUrl
        this.summary = summary
        this.description = description
        this.fabled = fabled
        this.theme = theme
    }

    static readonly TROUBLE_BREWING = new Module(
        {
            name: 'Trouble Brewing',
            _filename: 'trouble-brewing',
            imageUrl: 'img/blood-on-the-clocktower/BOTC-TB.png',
            roles: [
                Villageois.LAVANDIERE,
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
            theme: {color: 'red'},
            summary: `De l'art de l'ivresse à celui d'empoisonnement...
            Trouble Brewing sera votre première expérience dans le monde fantastique de Blood On The Clock Tower ! C'est par ce module qu'on commence.`,
            description: `De l'art de l'ivresse à celui d'empoisonnement...
            Un Démon, quatre Sbires, ce sont ces derniers que les Villageois devront déterminer pour prétendre à la Victoire.
            Trouble Brewing sera votre première expérience dans le monde fantastique de Blood On The Clock Tower ! C'est par ce module qu'on commence.`,
            fabled: `Des nuages se forment au-dessus de Ravenswood Bluff, engloutissant ce Village tranquille et ses habitants superstitieux de leurs ombres macabres. Des vêtements fraîchement lavés dansent sinistrement sur les étendages entre les cottages. Les cheminées crachent des volutes de fumée dans l’air. Des senteurs exotiques flottent entre les fissures des fenêtres et sous les portes tandis que des chaudrons cachés bouillonnent. Une chaude brise d’automne inhabituelle enveloppe les murs recouverts de vignes et chuchote de manière inquiétante aux plus courageux osant s’aventurer dans les rues pavées. Des mères anxieuses appellent leurs enfants à rentrer tandis l’orage commence à gronder à l’horizon. Cependant, si vous tendez l’oreille, des bruits étranges peuvent être entendus provenant de la forêt voisine. Sous l’œil vigilant d’un monastère, des silhouettes sautent de porte en porte. Ceux qui peuvent lire l’écriteau savent qu’il y a....

            TROUBLE BREWING`
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
        theme: {color: 'orange'},
        summary: `Une razzia de morts, un concert de décès !
        Une place prépondérante pour l'ivresse et la protection, Bad Moon Rising sera votre 2ème expérience de jeu sur BotC, pour les joueurs intermédiaires.`,
        description: `Une razzia de morts, un concert de décès ! 
        Quatre Sbires, Quatre Démons et des Villageois qui devront s'entre-tuer pour connaître la Vérité !
        Une place prépondérante pour l'ivresse et la protection, Bad Moon Rising sera votre 2ème expérience de jeu sur BotC, pour les joueurs intermédiaires.`,
        fabled: `Le soleil est avalé par un horizon déchiqueté, alors qu’un autre jour d’hiver s’abandonne à la nuit. Des taches d’orange et de rouge se décomposent en un brun profond et la forêt se transforme dans l’attente silencieuse de la neige à venir. Des loups voraces hurlent depuis les entrailles d’une crevasse aux choses au-delà des frontières de la ville, faisant fuir les oiseaux de leur perchoir confortable. Les Villageois se précipitent dans l’auberge, cherchant un abri du froid qui s’installe. Ils se réchauffent avec du thé chaud, de la musique douce et de la bonne bière, sans se douter que des yeux étranges et malveillants les traquent depuis les ruines de ce Village autrefois majestueux. Ce soir, même le bétail sait qu’il y’a un…

        Bad Moon Rising`
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
        theme: {color: 'violet'},
        summary: `La Folie arrive et l'Empoisonnement est plus présent que jamais !
        Sects & Violets sera votre 3ème expérience sur BotC, à réserver aux joueurs confirmés.`,
        description: `La Folie arrive et l'Empoisonnement est plus présent que jamais !
        De la manipulation mentale, des Démons toujours plus forts, Sects & Violets, c'est la promesse d'une enquête difficile mais passionnante avec des Villageois encore plus forts... mais toujours aussi vulnérables.
        Sects & Violets sera votre 3ème expérience sur BotC, à réserver aux joueurs confirmés.`,
        fabled: `Un printemps vibrant laisse place à un été chaleureux et accueillant. Des multitudes de fleurs s’épanouissent à perte de vue, tendrement entretenues dans les jardins publics et dans les balconnières surplombant la somptueuse promenade. Les oiseaux chantent, les artistes peignent et les penseurs songent aux plus grands mystères de la vie à l’intérieur d’une taverne animée, tandis qu’un cirque dresse son chapiteau dépenaillé à la lisière de la ville. Tandis que les habitants s’abandonnent à la frivolité et à l’espièglerie, se régalant de spectacles raffinés et de vins plus raffinés encore, d’obscures forces clandestines se rassemblent. Sorcières et cultistes se cachent dans les ruines majestueuses en marge de la société, planifiant des réunions secrètes dans les caves souterraines et complotant de manière malveillante à la chute de Ravenswood Bluff et de ses habitants insouciants.`
    })
    static readonly DEADLY_PENANCE_DAY = new Module({
        name: 'Deadly Penance Day - TBA Custom',
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
            Sbire.PARRAIN,
            Sbire.ASSASSIN,
            Sbire.BARON,
            Sbire.SORCIERE,
            Sbire.ESPION,
            Demon.PTIT_MONSTRE
        ]
    })

}
