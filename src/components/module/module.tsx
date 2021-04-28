import MarkdownDocument from '../markdown-document'
import Role from '../role/role'

export default class Module extends MarkdownDocument {

    protected _base_url = '/docs/modules'

    private constructor(name: string, _filename: string = name.toLowerCase(), readonly roles: Role[]) {
        super(name, _filename)
    }

    static readonly TROUBLE_BREWING = new Module(
        'Trouble Brewing',
        'trouble-brewing',
        [
            Role.ARCHIVISTE,
            Role.ENQUETEUR,
            Role.CUISTOT,
            Role.EMPATHIQUE,
            Role.VOYANTE,
            Role.CROQUE_MORT,
            Role.MOINE,
            Role.GARDIEN,
            Role.PUCELLE,
            Role.MERCENAIRE,
            Role.SOLDAT,
            Role.LAVANDIERE,
            Role.MAIRE,
            Role.MAJORDOME,
            Role.SOULARD,
            Role.ERMITE,
            Role.VERTUEUX,
            Role.EMPOISONNEUR,
            Role.TRAITRE,
            Role.CROQUEUSE_D_HOMMES,
            Role.BARON,
            Role.IMP
        ])
    static readonly BAD_MOON_RISING = new Module(
        'Bad Moon Rising',
        'bad-moon-rising',
        [
            Role.MAMIE,
            Role.MARIN,
            Role.FEMME_DE_CHAMBRE,
            Role.EXORCISTE,
            Role.AUBERGISTE,
            Role.PARIEUR,
            Role.COMMERE,
            Role.COURTISANE,
            Role.PROFESSEUR,
            Role.MENESTREL,
            Role.HERBORISTE,
            Role.PACIFISTE,
            Role.FOU,
            Role.INVENTEUR,
            Role.GITANE,
            Role.BRUTE,
            Role.LUNATIQUE,
            Role.PARRAIN,
            Role.AVOCAT_DU_DIABLE,
            Role.ASSASSIN,
            Role.CONSPIRATEUR,
            Role.PUKKA,
            Role.PO,
            Role.SHABALOTH,
            Role.ZOMBUUL
        ])
    static readonly SECTS_AND_VIOLETS = new Module(
        'Sects & Violets',
        'sects-and-violets',
        []
    )
    static readonly DEADLY_PENANCE_DAY = new Module(
        'Deadly Penance Day',
        'deadly-penance-day',
        [
            Role.CUISTOT,
            Role.ENQUETEUR,
            Role.CHASSEUR_DE_PRIMES,
            Role.MARIN,
            Role.PREDICATEUR,
            Role.CHEF_DE_SECTE,
            Role.CRIEUR,
            Role.PARIEUR,
            Role.EXORCISTE,
            Role.FAUSSAIRE,
            Role.SOLDAT,
            Role.FOU,
            Role.MAIRE,
            Role.BARBIER,
            Role.POLITICIEN,
            Role.SOULARD,
            Role.VERTUEUX,
            Role.ASSASSIN,
            Role.BARON,
            Role.SORCIERE,
            Role.TRAITRE,
            Role.PTIT_MONSTRE
        ])

}
