import MarkdownDocument from '../markdown-document'
import {Demon, Etranger, Role, Sbire, Villageois} from '../role/role'

export default class Module extends MarkdownDocument {

    protected _base_url = '/docs/modules'

    private constructor(name: string, _filename: string = name.toLowerCase(), readonly roles: Role[]) {
        super(name, _filename)
    }

    static readonly TROUBLE_BREWING = new Module(
        'Trouble Brewing',
        'trouble-brewing',
        [
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
        ])
    static readonly BAD_MOON_RISING = new Module(
        'Bad Moon Rising',
        'bad-moon-rising',
        [
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
        ])
    static readonly SECTS_AND_VIOLETS = new Module(
        'Sects & Violets',
        'sects-and-violets',
        [
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
        ]
    )
    static readonly DEADLY_PENANCE_DAY = new Module(
        'Deadly Penance Day',
        'deadly-penance-day',
        [
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
        ])

}
