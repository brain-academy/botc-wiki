import React from 'react'
import {Demon, Etranger, Role, Sbire, Villageois} from './role'

const RoleComponent = ({role}: {role: Role}) => (<a href={role.path} style={{color: roleTypeToColor(role)}}>{role.name}</a>)

const roleTypeToColor = (role: Role) => {
    if (role instanceof (Villageois))
        return 'rgb(8,193,255)'
    else if (role instanceof (Etranger))
        return 'rgb(23,104,255)'
    else if (role instanceof (Sbire))
        return 'rgb(248,2,5)'
    else if (role instanceof (Demon))
        return 'rgb(197,0,0)'
}

export const ARCHIVISTE = () => <RoleComponent role={Villageois.ARCHIVISTE} />
export const ARTISTE = () => <RoleComponent role={Villageois.ARTISTE} />
export const AUBERGISTE = () => <RoleComponent role={Villageois.AUBERGISTE} />
export const CHASSEURDEPRIMES = () => <RoleComponent role={Villageois.CHASSEUR_DE_PRIMES} />
export const CHARMEURDESERPENT = () => <RoleComponent role={Villageois.CHARMEUR_DE_SERPENT} />
export const CHEFDESECTE = () => <RoleComponent role={Villageois.CHEF_DE_SECTE} />
export const COMMERE = () => <RoleComponent role={Villageois.COMMERE} />
export const COURTISANE = () => <RoleComponent role={Villageois.COURTISANE} />
export const COUTURIERE = () => <RoleComponent role={Villageois.COUTURIERE} />
export const CRIEUR = () => <RoleComponent role={Villageois.CRIEUR} />
export const CROQUEMORT = () => <RoleComponent role={Villageois.CROQUE_MORT} />
export const CUISTOT = () => <RoleComponent role={Villageois.CUISTOT} />
export const EMPATHIQUE = () => <RoleComponent role={Villageois.EMPATHIQUE} />
export const ENQUETEUR = () => <RoleComponent role={Villageois.ENQUETEUR} />
export const EXORCISTE = () => <RoleComponent role={Villageois.EXORCISTE} />
export const FAUSSAIRE = () => <RoleComponent role={Villageois.FAUSSAIRE} />
export const FEMMEDECHAMBRE = () => <RoleComponent role={Villageois.FEMME_DE_CHAMBRE} />
export const FLEURISTE = () => <RoleComponent role={Villageois.FLEURISTE} />
export const FOU = () => <RoleComponent role={Villageois.FOU} />
export const GARDIEN = () => <RoleComponent role={Villageois.GARDIEN} />
export const HORLOGER = () => <RoleComponent role={Villageois.HORLOGER} />
export const HERBORISTE = () => <RoleComponent role={Villageois.HERBORISTE} />
export const JONGLEUR = () => <RoleComponent role={Villageois.JONGLEUR} />
export const LAVANDIERE = () => <RoleComponent role={Villageois.LAVANDIERE} />
export const MAIRE = () => <RoleComponent role={Villageois.MAIRE} />
export const MAMIE = () => <RoleComponent role={Villageois.MAMIE} />
export const MARIN = () => <RoleComponent role={Villageois.MARIN} />
export const MATHEMATICIEN = () => <RoleComponent role={Villageois.MATHEMATICIEN} />
export const MENESTREL = () => <RoleComponent role={Villageois.MENESTREL} />
export const MERCENAIRE = () => <RoleComponent role={Villageois.MERCENAIRE} />
export const MOINE = () => <RoleComponent role={Villageois.MOINE} />
export const ORACLE = () => <RoleComponent role={Villageois.ORACLE} />
export const PACIFISTE = () => <RoleComponent role={Villageois.PACIFISTE} />
export const PARIEUR = () => <RoleComponent role={Villageois.PARIEUR} />
export const PREDICATEUR = () => <RoleComponent role={Villageois.PREDICATEUR} />
export const PROFESSEUR = () => <RoleComponent role={Villageois.PROFESSEUR} />
export const PUCELLE = () => <RoleComponent role={Villageois.PUCELLE} />
export const REVEUR = () => <RoleComponent role={Villageois.REVEUR} />
export const SAGE = () => <RoleComponent role={Villageois.SAGE} />
export const SAVANT = () => <RoleComponent role={Villageois.SAVANT} />
export const SOLDAT = () => <RoleComponent role={Villageois.SOLDAT} />
export const VOYANTE = () => <RoleComponent role={Villageois.VOYANTE} />

export const BARBIER = () => <RoleComponent role={Etranger.BARBIER} />
export const BETEDEFOIRE = () => <RoleComponent role={Etranger.BETE_DE_FOIRE} />
export const BRUTE = () => <RoleComponent role={Etranger.BRUTE} />
export const DULCINEE = () => <RoleComponent role={Etranger.DULCINEE} />
export const GITANE = () => <RoleComponent role={Etranger.GITANE} />
export const INVENTEUR = () => <RoleComponent role={Etranger.INVENTEUR} />
export const LUNATIQUE = () => <RoleComponent role={Etranger.LUNATIQUE} />
export const MAJORDOME = () => <RoleComponent role={Etranger.MAJORDOME} />
export const MALADROIT = () => <RoleComponent role={Etranger.MALADROIT} />
export const POLITICIEN = () => <RoleComponent role={Etranger.POLITICIEN} />
export const RECLUS = () => <RoleComponent role={Etranger.RECLUS} />
export const SOULARD = () => <RoleComponent role={Etranger.SOULARD} />
export const VERTUEUX = () => <RoleComponent role={Etranger.VERTUEUX} />

export const ASSASSIN = () => <RoleComponent role={Sbire.ASSASSIN} />
export const AVOCATDUDIABLE = () => <RoleComponent role={Sbire.AVOCAT_DU_DIABLE} />
export const BARON = () => <RoleComponent role={Sbire.BARON} />
export const CONSPIRATEUR = () => <RoleComponent role={Sbire.CONSPIRATEUR} />
export const CROQUEUSEDHOMMES = () => <RoleComponent role={Sbire.CROQUEUSE_D_HOMMES} />
export const EMPOISONNEUR = () => <RoleComponent role={Sbire.EMPOISONNEUR} />
export const ESPION = () => <RoleComponent role={Sbire.ESPION} />
export const JUMEAUMALEFIQUE = () => <RoleComponent role={Sbire.JUMEAU_MALEFIQUE} />
export const MANIPULATEUR = () => <RoleComponent role={Sbire.MANIPULATEUR} />
export const PARRAIN = () => <RoleComponent role={Sbire.PARRAIN} />
export const SORCIERE = () => <RoleComponent role={Sbire.SORCIERE} />
export const VIEILLECHOUETTE = () => <RoleComponent role={Sbire.VIEILLE_CHOUETTE} />

export const IMP = () => <RoleComponent role={Demon.IMP} />
export const FANGGU = () => <RoleComponent role={Demon.FANG_GU} />
export const NODASHII = () => <RoleComponent role={Demon.NO_DASHII} />
export const PO = () => <RoleComponent role={Demon.PO} />
export const PUKKA = () => <RoleComponent role={Demon.PUKKA} />
export const PTITMONSTRE = () => <RoleComponent role={Demon.PTIT_MONSTRE} />
export const SHABALOTH = () => <RoleComponent role={Demon.SHABALOTH} />
export const VIGORMORTIS = () => <RoleComponent role={Demon.VIGORMORTIS} />
export const VORTOX = () => <RoleComponent role={Demon.VORTOX} />
export const ZOMBUUL = () => <RoleComponent role={Demon.ZOMBUUL} />
