import { Evil, Good, Role } from "./role"

export class Villageois extends Role implements Good {
    readonly type = "Villageois"
    readonly theme = { color: 'rgb(8,193,255)' }
}

export class Etranger extends Role implements Good {
    readonly type = "Etranger"
    readonly theme = { color: 'rgb(23,104,255)' }
}

export class Sbire extends Role implements Evil {
    readonly type = "Sbire"
    readonly theme = { color: 'rgb(248,2,5)' }
}

export class Demon extends Role implements Evil {
    readonly type = "Demon"
    readonly theme = { color: 'rgb(197,0,0)' }
}

export class Voyageur extends Role {
    readonly type = "Voyageur"
    readonly theme = { color: 'rgb(154,77,159)' }
}

export class Legendaire extends Role {
    readonly type = "Legendaire"
    readonly theme = { color: 'rgb(168,153,50)' }
}

export const groups = [Villageois, Etranger, Sbire, Demon, Voyageur, Legendaire]

export const VILLAGEOIS: { [key: string]: Villageois } = {
    AERONAUTE: new Villageois({ name: 'Aéronaute', filename: 'aeronaute', originalName: 'Balloonist', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT' }),
    ALCHIMISTE: new Villageois({ name: 'Alchimiste', originalName: 'Alchemist', wakeUpSchedule: 'La première nuit puis identique au rôle attribué' }),
    AMNESIQUE: new Villageois({ name: 'Amnésique', filename: 'amnesique', originalName: 'Amnesic' }),
    ATHEE: new Villageois({ name: 'Athée', filename: 'athee', originalName: 'Atheist' }),
    ARCHIVISTE: new Villageois({ name: 'Archiviste', originalName: 'Librarian', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT' }),
    ARTISTE: new Villageois({ name: 'Artiste', originalName: 'Artist' }),
    AUBERGISTE: new Villageois({ name: 'Aubergiste', originalName: 'Innkeeper', class: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    CANNIBALE: new Villageois({ name: 'Cannibale', originalName: 'Cannibal', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    CHARMEUR_DE_SERPENT: new Villageois({ name: 'Charmeur de serpent', filename: 'charmeur-de-serpent', originalName: 'Snake Charmer', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    CHASSEUR: new Villageois({ name: 'Chasseur', originalName: 'Huntsman', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED' }),
    CHASSEUR_DE_PRIMES: new Villageois({ name: 'Chasseur de primes', filename: 'chasseur-de-primes', originalName: 'Bounty Hunter', class: 'DETECTION', wakeUpSchedule: `Lorsque la cible actuelle est décédée` }),
    CHEF_DE_SECTE: new Villageois({ name: 'Chef de Secte', filename: 'chef-de-secte', originalName: 'Cult Leader', wakeUpSchedule: `Lors d'un changement d'alignement` }),
    COMMERE: new Villageois({ name: 'Commère', filename: 'commere', originalName: 'Gossip', class: 'DETECTION' }),
    COURTISANE: new Villageois({ name: 'Courtisane', originalName: 'Courtier', class: 'DETECTION', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED' }),
    COUTURIERE: new Villageois({ name: 'Couturiere', originalName: 'Seamstress', class: 'DETECTION', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED' }),
    CRIEUR: new Villageois({ name: 'Crieur', originalName: 'Town Crier', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    CROQUE_MORT: new Villageois({ name: 'Croque-Mort', filename: 'croque-mort', originalName: 'Undertaker', class: 'DETECTION', wakeUpSchedule: 'Si exécution la veille' }),
    CUISTOT: new Villageois({ name: 'Cuistot', originalName: 'Chef', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT' }),
    CULTIVATEUR_DE_PAVOT: new Villageois({ name: 'Cultivateur de pavot', filename: 'cultivateur-de-pavot', originalName: 'Poppy Grower' }),
    EMPATHIQUE: new Villageois({ name: 'Empathique', originalName: 'Empath', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT' }),
    ENFANT_DE_CHOEUR: new Villageois({ name: 'Enfant de choeur', filename: 'enfant-de-choeur', originalName: 'Choirboy', wakeUpSchedule: 'Si le roi est tué par le démon' }),
    ENQUETEUR: new Villageois({ name: 'Enquêteur', filename: 'enqueteur', originalName: 'Investigator', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT' }),
    EXORCISTE: new Villageois({ name: 'Exorciste', originalName: 'Exorcist', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    FAUSSAIRE: new Villageois({ name: 'Faussaire', originalName: 'Philosopher', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED' }),
    FEMME_DE_CHAMBRE: new Villageois({ name: 'Femme de Chambre', filename: 'femme-de-chambre', originalName: 'Chambermaid', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    FERMIER: new Villageois({ name: 'Fermier', originalName: 'Farmer' }),
    FLEURISTE: new Villageois({ name: 'Fleuriste', originalName: 'Flowergirl', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    FOU: new Villageois({ name: 'Fou', originalName: 'Fool', class: 'TANK' }),
    GARDIEN: new Villageois({ name: 'Gardien', originalName: 'Ravenkeeper', class: 'DETECTION', wakeUpSchedule: 'Si tué pendant la nuit' }),
    GENERAL: new Villageois({ name: 'Général', filename: 'general', originalName: 'General' }),
    HORLOGER: new Villageois({ name: 'Horloger', originalName: 'Clockmaker', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT' }),
    INGENIEUR: new Villageois({ name: 'Ingénieur', filename: 'ingenieur', originalName: 'Engineer', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED' }),
    JONGLEUR: new Villageois({ name: 'Jongleur', originalName: 'Juggler', class: 'DETECTION', wakeUpSchedule: 'Uniquement la seconde nuit' }),
    LAVANDIERE: new Villageois({ name: 'Lavandière', filename: 'lavandiere', originalName: 'Washerwoman - Laundry Hand', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT' }),
    LYCANTHROPE: new Villageois({ name: 'Lycanthrope', originalName: 'Lycanthrope', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    HERBORISTE: new Villageois({ name: 'Herboriste', originalName: 'Tea Lady', class: 'PROTECTION' }),
    MAGICIEN: new Villageois({ name: 'Magicien', originalName: 'Magician' }),
    MAIRE: new Villageois({ name: 'Maire', originalName: 'Mayor' }),
    MAMIE: new Villageois({ name: 'Mamie', originalName: 'Grandmother', class: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT' }),
    MARIN: new Villageois({ name: 'Marin', originalName: 'Sailor', class: 'TANK', wakeUpSchedule: 'EVERY_NIGHT' }),
    MATHEMATICIEN: new Villageois({ name: 'Mathematicien', originalName: 'Mathematician', wakeUpSchedule: 'EVERY_NIGHT' }),
    MENESTREL: new Villageois({ name: 'Ménestrel', filename: 'menestrel', originalName: 'Minstrel', class: 'DETECTION' }),
    MERCENAIRE: new Villageois({ name: 'Mercenaire', originalName: 'Slayer' }),
    MOINE: new Villageois({ name: 'Moine', originalName: 'Monk', class: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    NOBLE: new Villageois({ name: 'Noble', originalName: 'Noble', wakeUpSchedule: 'FIRST_NIGHT' }),
    ORACLE: new Villageois({ name: 'Oracle', originalName: 'Oracle', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    PACIFISTE: new Villageois({ name: 'Pacifiste', originalName: 'Pacifist', class: 'PROTECTION' }),
    PARIEUR: new Villageois({ name: 'Parieur', originalName: 'Gambler', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    PECHEUR: new Villageois({ name: 'Pêcheur', filename: 'pecheur', originalName: 'Fisherman' }),
    PIXIE: new Villageois({ name: 'Pixie', originalName: 'Pixie', wakeUpSchedule: 'FIRST_NIGHT' }),
    PREDICATEUR: new Villageois({ name: 'Predicateur', originalName: 'Predicator', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    PROFESSEUR: new Villageois({ name: 'Professeur', originalName: 'Professor', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    PUCELLE: new Villageois({ name: 'Pucelle', originalName: 'Virgin' }),
    REVEUR: new Villageois({ name: 'Reveur', originalName: 'Dreamer', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT' }),
    ROI: new Villageois({ name: 'Roi', originalName: 'King', wakeUpSchedule: 'Si le nombre de mort est strictement supérieur au nombre de vivants' }),
    SAGE: new Villageois({ name: 'Sage', originalName: 'Sage', class: 'DETECTION', wakeUpSchedule: `Lorsqu'il est assassiné par le Démon` }),
    SAVANT: new Villageois({ name: 'Savant', originalName: 'Savant' }),
    SOLDAT: new Villageois({ name: 'Soldat', originalName: 'Soldier', class: 'TANK' }),
    VEILLEUR_DE_NUIT: new Villageois({ name: 'Veilleur de nuit', filename: 'veilleur-de-nuit', originalName: 'Nightwatchman', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED' }),
    VOYANTE: new Villageois({ name: 'Voyante', originalName: 'Fortune Teller', class: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT' }),
}

export const ETRANGER: { [key: string]: Etranger } = {
    ACROBATE: new Etranger({ name: 'Acrobate', originalName: 'Acrobat' }),
    BALANCE: new Etranger({ name: 'Balance', originalName: 'Snitch' }),
    BARBIER: new Etranger({ name: 'Barbier', originalName: 'Barber' }),
    BETE_DE_FOIRE: new Etranger({ name: 'Bete de foire', filename: 'bete-de-foire', originalName: 'Mutant' }),
    BRUTE: new Etranger({ name: 'Brute', originalName: 'Goon', wakeUpSchedule: `Lorsque ciblé la première fois de nuit par l'alignement opposé à l'alignement actuel` }),
    DEMOISELLE: new Etranger({ name: 'Demoiselle', originalName: 'Damsel' }),
    DULCINEE: new Etranger({ name: 'Dulcinée', filename: 'dulcinee', originalName: 'Sweetheart' }),
    GITANE: new Etranger({ name: 'Gitane', originalName: 'Moonchild' }),
    GOLEM: new Etranger({ name: 'Golem', originalName: 'Golem' }),
    HERETIQUE: new Etranger({ name: 'Hérétique', filename: 'heretique', originalName: 'Heretic' }),
    INVENTEUR: new Etranger({ name: 'Inventeur', originalName: 'Tinker' }),
    LUNATIQUE: new Etranger({ name: 'Lunatique', originalName: 'Lunatic', wakeUpSchedule: 'EVERY_NIGHT' }),
    MAJORDOME: new Etranger({ name: 'Majordome', originalName: 'Butler', wakeUpSchedule: 'EVERY_NIGHT' }),
    MAITRE_DES_PUZZLES: new Etranger({ name: 'Maître des puzzles', filename: 'maitre-des-puzzles', originalName: 'Puzzlemaster' }),
    MALADROIT: new Etranger({ name: 'Maladroit', originalName: 'Klutz' }),
    POLITICIEN: new Etranger({ name: 'Politicien', originalName: 'Politician' }),
    RECLUS: new Etranger({ name: 'Reclus', originalName: 'Recluse' }),
    SOULARD: new Etranger({ name: 'Soûlard', filename: 'soulard', originalName: 'Drunk', wakeUpSchedule: 'Identique au faux rôle attribué' }),
    VERTUEUX: new Etranger({ name: 'Vertueux', originalName: 'Saint' }),
}

export const SBIRE: { [key: string]: Sbire } = {
    ASSASSIN: new Sbire({ name: 'Assassin', originalName: 'Assassin', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED' }),
    AVOCAT_DU_DIABLE: new Sbire({ name: 'Avocat du Diable', filename: 'avocat-du-diable', originalName: `Devil's Advocate`, class: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT' }),
    BARON: new Sbire({ name: 'Baron', originalName: 'Baron' }),
    BOOMDANDY: new Sbire({ name: 'Boomdandy', originalName: 'Boomdandy' }),
    CONSPIRATEUR: new Sbire({ name: 'Conspirateur', originalName: 'Mastermind' }),
    CROQUEUSE_D_HOMMES: new Sbire({ name: 'Croqueuse d\'hommes', filename: 'croqueuse-d-hommes', originalName: 'Scarlet Woman' }),
    EMPOISONNEUR: new Sbire({ name: 'Empoisonneur', originalName: 'Poisoner', wakeUpSchedule: 'EVERY_NIGHT' }),
    ESPION: new Sbire({ name: 'Espion', originalName: 'Spy', wakeUpSchedule: 'EVERY_NIGHT' }),
    GOBELIN: new Sbire({ name: 'Gobelin', originalName: 'Gobelin' }),
    JUMEAU_MALEFIQUE: new Sbire({ name: 'Jumeau Maléfique', filename: 'jumeau-malefique', originalName: 'Evil Twin' }),
    JUMEAUX_MALEFIQUES: new Sbire({ name: 'Jumeaux Maléfiques', filename: 'jumeau-malefique', originalName: 'Evil Twin' }),
    JUMEAU: new Sbire({ name: 'Jumeau', filename: 'jumeau-malefique', originalName: 'Evil Twin' }),
    MANIPULATEUR: new Sbire({ name: 'Manipulateur', originalName: 'Cerenovus', wakeUpSchedule: 'EVERY_NIGHT' }),
    MARIONETTE: new Sbire({ name: 'Marionette', originalName: 'Marionette', wakeUpSchedule: 'Identique au faux rôle attribué' }),
    MEZEPHELES: new Sbire({ name: 'Mezepheles', originalName: 'Mezepheles', wakeUpSchedule: 'FIRST_NIGHT' }),
    PARRAIN: new Sbire({ name: 'Parrain', originalName: 'Godfather' }),
    PROPHETE_DE_L_EFFROI: new Sbire({ name: `Prophète de l'effroi`, filename: 'prophete-de-l-effroi', originalName: 'Fearmonger', wakeUpSchedule: 'EVERY_NIGHT' }),
    PSYCHOPATHE: new Sbire({ name: 'Psychopathe', originalName: 'Psychopath' }),
    SORCIERE: new Sbire({ name: 'Sorcière', filename: 'sorciere', originalName: 'Witch', wakeUpSchedule: 'EVERY_NIGHT' }),
    VEUVE_NOIRE: new Sbire({ name: 'Veuve Noire', filename: 'veuve-noire', originalName: 'Widow', wakeUpSchedule: 'FIRST_NIGHT' }),
    VIEILLE_CHOUETTE: new Sbire({ name: 'Vieille Chouette', filename: 'vieille-chouette', originalName: 'Pit Hag', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
}

export const DEMON: { [key: string]: Demon } = {
    AL_HADIKHIA: new Demon({ name: 'Al-Hadikhia', filename: 'al-hadikhia', originalName: 'Al-Hadikhia', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    EMEUTE: new Demon({ name: 'Emeute', originalName: 'Riot' }),
    FANG_GU: new Demon({ name: 'Fang Gu', filename: 'fang-gu', originalName: 'Fang Gu', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    IMP: new Demon({ name: 'Imp', originalName: 'Imp', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    LEGION: new Demon({ name: 'Légion', filename: 'legion', originalName: 'Legion' }),
    LEVIATHAN: new Demon({ name: 'Léviathan', filename: 'leviathan', originalName: 'Leviathan' }),
    PO: new Demon({ name: 'Po', filename: 'po', originalName: 'Po', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    PUKKA: new Demon({ name: 'Pukka', originalName: 'Pukka', wakeUpSchedule: 'EVERY_NIGHT' }),
    NO_DASHII: new Demon({ name: 'No Dashii', filename: 'no-dashii', originalName: 'No Dashii', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    SANGSUE: new Demon({ name: 'Sangsue', originalName: 'Lleech', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    SHABALOTH: new Demon({ name: 'Shabaloth', originalName: 'Shabaloth', wakeUpSchedule: 'EVERY_NIGHT' }),
    PTIT_MONSTRE: new Demon({ name: 'P\'tit Monstre', filename: 'ptit-monstre', originalName: 'Lil Monsta', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    VIGORMORTIS: new Demon({ name: 'Vigormortis', originalName: 'Vigormortis', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    VORTOX: new Demon({ name: 'Vortox', originalName: 'Vortox', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    ZOMBUUL: new Demon({ name: 'Zombuul', originalName: 'Zombuul', wakeUpSchedule: `Si aucune exécution la veille` }),
}

export const VOYAGEUR: { [key: string]: Voyageur } = {
    BOUC_EMISSAIRE: new Voyageur({ name: 'Bouc Emissaire', filename: 'bouc-emissaire', originalName: 'Scapegoat' }),
    BUREAUCRATE: new Voyageur({ name: 'Bureaucrate', originalName: 'Bureaucrat', wakeUpSchedule: 'EVERY_NIGHT' }),
    MENDIANT: new Voyageur({ name: 'Mendiant', originalName: 'Beggar' }),
    VENGEUR: new Voyageur({ name: 'Vengeur', originalName: 'Gunslinger' }),
    VOLEUR: new Voyageur({ name: 'Voleur', originalName: 'Thief', wakeUpSchedule: 'EVERY_NIGHT' }),
    APPRENTI: new Voyageur({ name: 'Apprenti', originalName: 'Apprentice', wakeUpSchedule: 'Lors de sa première nuit puis identique au rôle attribué' }),
    ARCHEVEQUE: new Voyageur({ name: 'Archevêque', filename: 'archeveque', originalName: 'Bishop' }),
    MAGISTRAT: new Voyageur({ name: 'Magistrat', originalName: 'Judge' }),
    MATRONE: new Voyageur({ name: 'Matrone', originalName: 'Matron', wakeUpSchedule: 'EVERY_NIGHT' }),
    NECROMANT: new Voyageur({ name: 'Necromant', originalName: 'Voudon' }),
    BARISTA: new Voyageur({ name: 'Barista', originalName: 'Barista' }),
    BOUCHER: new Voyageur({ name: 'Boucher', originalName: 'Butcher' }),
    COLLECTEUR_D_OS: new Voyageur({ name: 'Collecteur d\'os', filename: 'collecteur-d-os', originalName: 'Bone collector', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED' }),
    DEVIANT: new Voyageur({ name: 'Déviant', filename: 'deviant', originalName: 'Deviant' }),
    FILLE_DE_JOIE: new Voyageur({ name: 'Fille de joie', filename: 'fille-de-joie', originalName: 'Harlot', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST' }),
    GANGSTER: new Voyageur({ name: 'Gangster', originalName: 'Gangster' }),
}

export const LEGENDAIRE: { [key: string]: Legendaire } = {
    ANGE: new Legendaire({ name: `Ange`, originalName: 'Angel' }),
    ARTISAN: new Legendaire({ name: `Artisan`, originalName: 'Toymaker' }),
    BIBLIOTHECAIRE: new Legendaire({ name: `Bibliothécaire`, filename: 'bibliothecaire', originalName: 'Hells Librarian' }),
    BOUDDHISTE: new Legendaire({ name: `Bouddhiste`, originalName: 'Buddhist' }),
    PRECHEUR_DE_L_APOCALYPSE: new Legendaire({ name: `Precheur de l'apocalypse`, filename: 'precheur-de-l-apocalypse', originalName: 'Doomsayer' }),
    REVOLUTIONNAIRE: new Legendaire({ name: `Révolutionnaire`, filename: 'revolutionnaire', originalName: 'Revolutionnary' }),
    TROUBLE_FETE: new Legendaire({ name: `Trouble-fête`, filename: 'trouble-fete', originalName: 'Fiddler' }),
    BARATINEUR: new Legendaire({ name: `Baratineur`, originalName: 'Fibbin' }),
    DUCHESSE: new Legendaire({ name: `Duchesse`, originalName: 'Duchess' }),
    MAUVAIS_GENIE: new Legendaire({ name: `Mauvais génie`, filename: 'mauvais-genie', originalName: 'Djinn' }),
    PROTECTRICE: new Legendaire({ name: `Protectrice`, originalName: 'Spirit of Ivory' }),
    SENTINELLE: new Legendaire({ name: `Sentinelle`, originalName: 'Sentinel' }),
    CHASSEUR_D_ORAGE: new Legendaire({ name: `Chasseur d'orage`, filename: 'chasseur-d-orage', originalName: 'Storm Catcher' }),
}

export const roles: { [key: string]: Role } = { ...VILLAGEOIS, ...ETRANGER, ...SBIRE, ...DEMON, ...VOYAGEUR, ...LEGENDAIRE }
