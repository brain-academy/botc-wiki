import React from 'react';
import {Demon, Etranger, Role, Sbire, Villageois} from './role';

export const RoleComponent = ({role, tile}: {role: Role, tile?: boolean}) => (
    !!tile ?
        <a href={role.path}>
            <div style={{border: `5px double ${roleTypeToColor(role)}`, width: '160px', height: '160px', textAlign: 'center'}}>
                <img src={`/img/blood-on-the-clocktower/roles/${role.filename}.png`} height='150' />
                <span style={{position: 'relative', top: '-30%', fontWeight: 'bold', color: roleTypeToColor(role)}}>{role.name}</span>
            </div>
        </a>
        :
        <a href={role.path} style={{color: roleTypeToColor(role), fontWeight: 'bold'}}>{role.name}</a>
)

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

export const ARCHIVISTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.ARCHIVISTE} tile={tile} />
export const ARTISTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.ARTISTE} tile={tile} />
export const AUBERGISTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.AUBERGISTE} tile={tile} />
export const CHASSEURDEPRIMES = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.CHASSEUR_DE_PRIMES} tile={tile} />
export const CHARMEURDESERPENT = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.CHARMEUR_DE_SERPENT} tile={tile} />
export const CHEFDESECTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.CHEF_DE_SECTE} tile={tile} />
export const COMMERE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.COMMERE} tile={tile} />
export const COURTISANE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.COURTISANE} tile={tile} />
export const COUTURIERE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.COUTURIERE} tile={tile} />
export const CRIEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.CRIEUR} tile={tile} />
export const CROQUEMORT = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.CROQUE_MORT} tile={tile} />
export const CUISTOT = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.CUISTOT} tile={tile} />
export const EMPATHIQUE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.EMPATHIQUE} tile={tile} />
export const ENQUETEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.ENQUETEUR} tile={tile} />
export const EXORCISTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.EXORCISTE} tile={tile} />
export const FAUSSAIRE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.FAUSSAIRE} tile={tile} />
export const FEMMEDECHAMBRE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.FEMME_DE_CHAMBRE} tile={tile} />
export const FLEURISTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.FLEURISTE} tile={tile} />
export const FOU = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.FOU} tile={tile} />
export const GARDIEN = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.GARDIEN} tile={tile} />
export const HORLOGER = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.HORLOGER} tile={tile} />
export const HERBORISTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.HERBORISTE} tile={tile} />
export const JONGLEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.JONGLEUR} tile={tile} />
export const LAVANDIERE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.LAVANDIERE} tile={tile} />
export const MAIRE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.MAIRE} tile={tile} />
export const MAMIE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.MAMIE} tile={tile} />
export const MARIN = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.MARIN} tile={tile} />
export const MATHEMATICIEN = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.MATHEMATICIEN} tile={tile} />
export const MENESTREL = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.MENESTREL} tile={tile} />
export const MERCENAIRE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.MERCENAIRE} tile={tile} />
export const MOINE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.MOINE} tile={tile} />
export const ORACLE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.ORACLE} tile={tile} />
export const PACIFISTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.PACIFISTE} tile={tile} />
export const PARIEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.PARIEUR} tile={tile} />
export const PREDICATEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.PREDICATEUR} tile={tile} />
export const PROFESSEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.PROFESSEUR} tile={tile} />
export const PUCELLE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.PUCELLE} tile={tile} />
export const REVEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.REVEUR} tile={tile} />
export const SAGE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.SAGE} tile={tile} />
export const SAVANT = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.SAVANT} tile={tile} />
export const SOLDAT = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.SOLDAT} tile={tile} />
export const VOYANTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Villageois.VOYANTE} tile={tile} />

export const BARBIER = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.BARBIER} tile={tile} />
export const BETEDEFOIRE = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.BETE_DE_FOIRE} tile={tile} />
export const BRUTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.BRUTE} tile={tile} />
export const DULCINEE = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.DULCINEE} tile={tile} />
export const GITANE = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.GITANE} tile={tile} />
export const INVENTEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.INVENTEUR} tile={tile} />
export const LUNATIQUE = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.LUNATIQUE} tile={tile} />
export const MAJORDOME = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.MAJORDOME} tile={tile} />
export const MALADROIT = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.MALADROIT} tile={tile} />
export const POLITICIEN = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.POLITICIEN} tile={tile} />
export const RECLUS = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.RECLUS} tile={tile} />
export const SOULARD = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.SOULARD} tile={tile} />
export const VERTUEUX = ({tile}: {tile?: boolean}) => <RoleComponent role={Etranger.VERTUEUX} tile={tile} />

export const ASSASSIN = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.ASSASSIN} tile={tile} />
export const AVOCATDUDIABLE = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.AVOCAT_DU_DIABLE} tile={tile} />
export const BARON = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.BARON} tile={tile} />
export const CONSPIRATEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.CONSPIRATEUR} tile={tile} />
export const CROQUEUSEDHOMMES = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.CROQUEUSE_D_HOMMES} tile={tile} />
export const EMPOISONNEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.EMPOISONNEUR} tile={tile} />
export const ESPION = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.ESPION} tile={tile} />
export const JUMEAUMALEFIQUE = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.JUMEAU_MALEFIQUE} tile={tile} />
export const MANIPULATEUR = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.MANIPULATEUR} tile={tile} />
export const PARRAIN = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.PARRAIN} tile={tile} />
export const SORCIERE = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.SORCIERE} tile={tile} />
export const VIEILLECHOUETTE = ({tile}: {tile?: boolean}) => <RoleComponent role={Sbire.VIEILLE_CHOUETTE} tile={tile} />

export const IMP = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.IMP} tile={tile} />
export const FANGGU = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.FANG_GU} tile={tile} />
export const NODASHII = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.NO_DASHII} tile={tile} />
export const PO = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.PO} tile={tile} />
export const PUKKA = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.PUKKA} tile={tile} />
export const PTITMONSTRE = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.PTIT_MONSTRE} tile={tile} />
export const SHABALOTH = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.SHABALOTH} tile={tile} />
export const VIGORMORTIS = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.VIGORMORTIS} tile={tile} />
export const VORTOX = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.VORTOX} tile={tile} />
export const ZOMBUUL = ({tile}: {tile?: boolean}) => <RoleComponent role={Demon.ZOMBUUL} tile={tile} />
