import MarkdownDocument from '../markdown-document'

export class Role extends MarkdownDocument {
    constructor(readonly name: string, public readonly filename: string = name.toLowerCase()) {
        super(name, filename)
    }
    protected _base_url = '/docs/roles'
}

export class Villageois extends Role {
    static readonly ARCHIVISTE = new Villageois('Archiviste')
    static readonly ARTISTE = new Villageois('Artiste')
    static readonly AUBERGISTE = new Villageois('Aubergiste')
    static readonly CHARMEUR_DE_SERPENT = new Villageois('Chasseur de serpent', 'charmeur-de-serpent')
    static readonly CHASSEUR_DE_PRIMES = new Villageois('Chasseur de primes', 'chasseur-de-primes')
    static readonly CHEF_DE_SECTE = new Villageois('Chef de Secte', 'chef-de-secte')
    static readonly COMMERE = new Villageois('Commère', 'commere')
    static readonly COURTISANE = new Villageois('Courtisane')
    static readonly COUTURIERE = new Villageois('Couturiere')
    static readonly CRIEUR = new Villageois('Crieur')
    static readonly CROQUE_MORT = new Villageois('Croque-Mort', 'croque-mort')
    static readonly CUISTOT = new Villageois('Cuistot')
    static readonly EMPATHIQUE = new Villageois('Empathique')
    static readonly ENQUETEUR = new Villageois('Enquêteur', 'enqueteur')
    static readonly EXORCISTE = new Villageois('Exorciste')
    static readonly FAUSSAIRE = new Villageois('Faussaire')
    static readonly FEMME_DE_CHAMBRE = new Villageois('Femme de Chambre', 'femme-de-chambre')
    static readonly FLEURISTE = new Villageois('Fleuriste')
    static readonly FOU = new Villageois('Fou')
    static readonly GARDIEN = new Villageois('Gardien')
    static readonly HORLOGER = new Villageois('Horloger')
    static readonly JONGLEUR = new Villageois('Jongleur')
    static readonly LAVANDIERE = new Villageois('Lavandière', 'lavandiere')
    static readonly HERBORISTE = new Villageois('Herboriste')
    static readonly MAIRE = new Villageois('Maire')
    static readonly MAMIE = new Villageois('Mamie')
    static readonly MARIN = new Villageois('Marin')
    static readonly MATHEMATICIEN = new Villageois('Mathematicien')
    static readonly MENESTREL = new Villageois('Ménestrel', 'menestrel')
    static readonly MERCENAIRE = new Villageois('Mercenaire')
    static readonly MOINE = new Villageois('Moine')
    static readonly ORACLE = new Villageois('Oracle')
    static readonly PACIFISTE = new Villageois('Pacifiste')
    static readonly PARIEUR = new Villageois('Parieur')
    static readonly PREDICATEUR = new Villageois('Predicateur')
    static readonly PROFESSEUR = new Villageois('Professeur')
    static readonly PUCELLE = new Villageois('Pucelle')
    static readonly REVEUR = new Villageois('Reveur')
    static readonly SAGE = new Villageois('Sage')
    static readonly SAVANT = new Villageois('Savant')
    static readonly SOLDAT = new Villageois('Soldat')
    static readonly VOYANTE = new Villageois('Voyante')
}

export class Etranger extends Role {
    static readonly BARBIER = new Etranger('Barbier')
    static readonly BETE_DE_FOIRE = new Etranger('Bete de foire', 'bete-de-foire')
    static readonly BRUTE = new Etranger('Brute')
    static readonly DULCINEE = new Etranger('Dulcinée', 'dulcinee')
    static readonly GITANE = new Etranger('Gitane')
    static readonly INVENTEUR = new Etranger('Inventeur')
    static readonly LUNATIQUE = new Etranger('Lunatique')
    static readonly MAJORDOME = new Etranger('Majordome')
    static readonly MALADROIT = new Etranger('Maladroit')
    static readonly POLITICIEN = new Etranger('Politicien')
    static readonly RECLUS = new Etranger('Reclus')
    static readonly SOULARD = new Etranger('Soûlard', 'soulard')
    static readonly VERTUEUX = new Etranger('Vertueux')

}

export class Sbire extends Role {
    static readonly ASSASSIN = new Sbire('Assassin')
    static readonly AVOCAT_DU_DIABLE = new Sbire('Avocat du Diable', 'avocat-du-diable')
    static readonly BARON = new Sbire('Baron')
    static readonly CONSPIRATEUR = new Sbire('Conspirateur')
    static readonly CROQUEUSE_D_HOMMES = new Sbire('Croqueuse d\'hommes', 'croqueuse-d-hommes')
    static readonly EMPOISONNEUR = new Sbire('Empoisonneur')
    static readonly ESPION = new Sbire('Espion', 'espion')
    static readonly JUMEAU_MALEFIQUE = new Sbire('Jumeau Maléfique', 'jumeau-malefique')
    static readonly MANIPULATEUR = new Sbire('Manipulateur')
    static readonly PARRAIN = new Sbire('Parrain')
    static readonly SORCIERE = new Sbire('Sorcière', 'sorciere')
    static readonly VIEILLE_CHOUETTE = new Sbire('Vieille Chouette', 'vieille-chouette')
}

export class Demon extends Role {
    static readonly FANG_GU = new Demon('Fang Gu', 'fang-gu')
    static readonly IMP = new Demon('Imp')
    static readonly PO = new Demon('Po', 'po')
    static readonly PUKKA = new Demon('Pukka')
    static readonly NO_DASHII = new Demon('No Dashii', 'no-dashii')
    static readonly SHABALOTH = new Demon('Shabaloth')
    static readonly PTIT_MONSTRE = new Demon('P\'tit Monstre', 'ptit-monstre')
    static readonly VIGORMORTIS = new Demon('Vigormortis')
    static readonly VORTOX = new Demon('Vortox')
    static readonly ZOMBUUL = new Demon('Zombuul')
}
