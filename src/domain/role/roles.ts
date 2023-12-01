import {Demon, Etranger, Sbire, Villageois, Voyageur} from "./role"

export const Roles = {
	VILLAGEOIS: {
		AERONAUTE: Villageois.new({name: 'Aéronaute', filename: 'aeronaute', originalName: 'Balloonist', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT'}),
		ALCHIMISTE: Villageois.new({name: 'Alchimiste', originalName: 'Alchemist', wakeUpSchedule: 'La première nuit, puis identique au rôle attribué'}),
		AMNESIQUE: Villageois.new({name: 'Amnésique', filename: 'amnesique', originalName: 'Amnesiac'}),
		ARCHIVISTE: Villageois.new({name: 'Archiviste', originalName: 'Librarian', clazz: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'}),
		ARTISTE: Villageois.new({name: 'Artiste', originalName: 'Artist'}),
		ATHEE: Villageois.new({name: 'Athée', filename: 'athee', originalName: 'Atheist'}),
		AUBERGISTE: Villageois.new({name: 'Aubergiste', originalName: 'Innkeeper', clazz: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		CANNIBALE: Villageois.new({name: 'Cannibale', originalName: 'Cannibal', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		CHARMEUR_DE_SERPENT: Villageois.new({name: 'Charmeur de serpent', filename: 'charmeur-de-serpent', originalName: 'Snake Charmer', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		CHASSEUR: Villageois.new({name: 'Chasseur', originalName: 'Huntsman', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'}),
		CHASSEUR_DE_PRIMES: Villageois.new({name: 'Chasseur de primes', filename: 'chasseur-de-primes', originalName: 'Bounty Hunter', clazz: 'DETECTION', wakeUpSchedule: `Lorsque la cible actuelle est décédée`}),
		CHEF_DE_SECTE: Villageois.new({name: 'Chef de Secte', filename: 'chef-de-secte', originalName: 'Cult Leader', wakeUpSchedule: `Lors d'un changement d'alignement`}),
		CHEVALIER: Villageois.new({name: 'Chevalier', originalName: 'Knight', wakeUpSchedule: 'FIRST_NIGHT'}),
		COMMERE: Villageois.new({name: 'Commère', filename: 'commere', originalName: 'Gossip', clazz: 'DETECTION'}),
		COURTISANE: Villageois.new({name: 'Courtisane', originalName: 'Courtier', clazz: 'DETECTION', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'}),
		COUTURIERE: Villageois.new({name: 'Couturiere', originalName: 'Seamstress', clazz: 'DETECTION', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'}),
		CRIEUR: Villageois.new({name: 'Crieur', originalName: 'Town Crier', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		CROQUE_MORT: Villageois.new({name: 'Croque-Mort', filename: 'croque-mort', originalName: 'Undertaker', clazz: 'DETECTION', wakeUpSchedule: 'Si exécution la veille'}),
		CUISTOT: Villageois.new({name: 'Cuistot', originalName: 'Chef', clazz: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'}),
		CULTIVATEUR_DE_PAVOT: Villageois.new({name: 'Cultivateur de pavot', filename: 'cultivateur-de-pavot', originalName: 'Poppy Grower'}),
		EMPATHIQUE: Villageois.new({name: 'Empathique', originalName: 'Empath', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT'}),
		ENFANT_DE_CHOEUR: Villageois.new({name: 'Enfant de choeur', filename: 'enfant-de-choeur', originalName: 'Choirboy', wakeUpSchedule: 'Si le roi est tué par le démon'}),
		ENQUETEUR: Villageois.new({name: 'Enquêteur', filename: 'enqueteur', originalName: 'Investigator', clazz: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'}),
		EXORCISTE: Villageois.new({name: 'Exorciste', originalName: 'Exorcist', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		FAUSSAIRE: Villageois.new({name: 'Faussaire', originalName: 'Philosopher', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'}),
		FEMME_DE_CHAMBRE: Villageois.new({name: 'Femme de Chambre', filename: 'femme-de-chambre', originalName: 'Chambermaid', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		FERMIER: Villageois.new({name: 'Fermier', originalName: 'Farmer'}),
		FLEURISTE: Villageois.new({name: 'Fleuriste', originalName: 'Flowergirl', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		FOU: Villageois.new({name: 'Fou', originalName: 'Fool', clazz: 'TANK'}),
		GARDIEN: Villageois.new({name: 'Gardien', originalName: 'Ravenkeeper', clazz: 'DETECTION', wakeUpSchedule: 'S\'il est tué pendant la nuit'}),
		GENERAL: Villageois.new({name: 'Général', filename: 'general', originalName: 'General'}),
		GRANDE_PRETRESSE: Villageois.new({name: 'Grande prêtresse', filename: 'grande-pretresse', originalName: 'High Pristress', wakeUpSchedule: 'EVERY_NIGHT'}),
		HERBORISTE: Villageois.new({name: 'Herboriste', originalName: 'Tea Lady', clazz: 'PROTECTION'}),
		HORLOGER: Villageois.new({name: 'Horloger', originalName: 'Clockmaker', clazz: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'}),
		INGENIEUR: Villageois.new({name: 'Ingénieur', filename: 'ingenieur', originalName: 'Engineer', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'}),
		INTENDANT: Villageois.new({name: 'Intendant', originalName: 'Steward', wakeUpSchedule: 'FIRST_NIGHT'}),
		JONGLEUR: Villageois.new({name: 'Jongleur', originalName: 'Juggler', clazz: 'DETECTION', wakeUpSchedule: 'Uniquement la seconde nuit'}),
		LAVANDIERE: Villageois.new({name: 'Lavandière', filename: 'lavandiere', originalName: 'Washerwoman - Laundry Hand', clazz: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'}),
		LYCANTHROPE: Villageois.new({name: 'Lycanthrope', originalName: 'Lycanthrope', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		MAGICIEN: Villageois.new({name: 'Magicien', originalName: 'Magician'}),
		MAIRE: Villageois.new({name: 'Maire', originalName: 'Mayor'}),
		MAMIE: Villageois.new({name: 'Mamie', originalName: 'Grandmother', clazz: 'FIRST_NIGHT', wakeUpSchedule: 'FIRST_NIGHT'}),
		MARIN: Villageois.new({name: 'Marin', originalName: 'Sailor', clazz: 'TANK', wakeUpSchedule: 'EVERY_NIGHT'}),
		MATHEMATICIEN: Villageois.new({name: 'Mathematicien', originalName: 'Mathematician', wakeUpSchedule: 'EVERY_NIGHT'}),
		MENESTREL: Villageois.new({name: 'Ménestrel', filename: 'menestrel', originalName: 'Minstrel', clazz: 'DETECTION'}),
		MERCENAIRE: Villageois.new({name: 'Mercenaire', originalName: 'Slayer'}),
		MOINE: Villageois.new({name: 'Moine', originalName: 'Monk', clazz: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		NOBLE: Villageois.new({name: 'Noble', originalName: 'Noble', wakeUpSchedule: 'FIRST_NIGHT'}),
		ORACLE: Villageois.new({name: 'Oracle', originalName: 'Oracle', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		PACIFISTE: Villageois.new({name: 'Pacifiste', originalName: 'Pacifist', clazz: 'PROTECTION'}),
		PARIEUR: Villageois.new({name: 'Parieur', originalName: 'Gambler', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		PECHEUR: Villageois.new({name: 'Pêcheur', filename: 'pecheur', originalName: 'Fisherman'}),
		PIXIE: Villageois.new({name: 'Pixie', originalName: 'Pixie', wakeUpSchedule: 'FIRST_NIGHT'}),
		PREDICATEUR: Villageois.new({name: 'Predicateur', originalName: 'Predicator', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		PROFESSEUR: Villageois.new({name: 'Professeur', originalName: 'Professor', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		PUCELLE: Villageois.new({name: 'Pucelle', originalName: 'Virgin'}),
		REVEUR: Villageois.new({name: 'Reveur', originalName: 'Dreamer', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT'}),
		ROI: Villageois.new({name: 'Roi', originalName: 'King', wakeUpSchedule: 'Si le nombre de mort est strictement supérieur au nombre de vivants'}),
		SAGE: Villageois.new({name: 'Sage', originalName: 'Sage', clazz: 'DETECTION', wakeUpSchedule: `Lorsqu'il est assassiné par le Démon`}),
		SAVANT: Villageois.new({name: 'Savant', originalName: 'Savant'}),
		SHUGENJA: Villageois.new({name: 'Shugenja', originalName: 'Shugenja', wakeUpSchedule: 'FIRST_NIGHT'}),
		SOLDAT: Villageois.new({name: 'Soldat', originalName: 'Soldier', clazz: 'TANK'}),
		VEILLEUR_DE_NUIT: Villageois.new({name: 'Veilleur de nuit', filename: 'veilleur-de-nuit', originalName: 'Nightwatchman', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'}),
		VOYANTE: Villageois.new({name: 'Voyante', originalName: 'Fortune Teller', clazz: 'DETECTION', wakeUpSchedule: 'EVERY_NIGHT'}),
	},
	ETRANGER: {
		ACROBATE: Etranger.new({name: 'Acrobate', originalName: 'Acrobat'}),
		BALANCE: Etranger.new({name: 'Balance', originalName: 'Snitch'}),
		BARBIER: Etranger.new({name: 'Barbier', originalName: 'Barber'}),
		BETE_DE_FOIRE: Etranger.new({name: 'Bete de foire', filename: 'bete-de-foire', originalName: 'Mutant'}),
		BRUTE: Etranger.new({name: 'Brute', originalName: 'Goon', wakeUpSchedule: `Lorsque ciblé la première fois de nuit par l'alignement opposé à l'alignement actuel`}),
		CHAPELIER: Etranger.new({name: 'Chapelier', originalName: 'Chapelier'}),
		DEMOISELLE: Etranger.new({name: 'Demoiselle', originalName: 'Damsel'}),
		DULCINEE: Etranger.new({name: 'Dulcinée', filename: 'dulcinee', originalName: 'Sweetheart'}),
		GITANE: Etranger.new({name: 'Gitane', originalName: 'Moonchild'}),
		GOLEM: Etranger.new({name: 'Golem', originalName: 'Golem'}),
		HERETIQUE: Etranger.new({name: 'Hérétique', filename: 'heretique', originalName: 'Heretic'}),
		INVENTEUR: Etranger.new({name: 'Inventeur', originalName: 'Tinker'}),
		LUNATIQUE: Etranger.new({name: 'Lunatique', originalName: 'Lunatic', wakeUpSchedule: 'EVERY_NIGHT'}),
		MAJORDOME: Etranger.new({name: 'Majordome', originalName: 'Butler', wakeUpSchedule: 'EVERY_NIGHT'}),
		MAITRE_DES_PUZZLES: Etranger.new({name: 'Maître des puzzles', filename: 'maitre-des-puzzles', originalName: 'Puzzlemaster'}),
		MEDECIN_DE_PESTE: Etranger.new({name: 'Médecin de peste', filename: 'medecin-de-peste', originalName: 'Plague doctor'}),
		MALADROIT: Etranger.new({name: 'Maladroit', originalName: 'Klutz'}),
		POLITICIEN: Etranger.new({name: 'Politicien', originalName: 'Politician'}),
		RECLUS: Etranger.new({name: 'Reclus', originalName: 'Recluse'}),
		SOULARD: Etranger.new({name: 'Soûlard', filename: 'soulard', originalName: 'Drunk', wakeUpSchedule: 'Identique au faux rôle attribué'}),
		VERTUEUX: Etranger.new({name: 'Vertueux', originalName: 'Saint'}),
	},
	SBIRE: {
		ASSASSIN: Sbire.new({name: 'Assassin', originalName: 'Assassin', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'}),
		AVOCAT_DU_DIABLE: Sbire.new({name: 'Avocat du Diable', filename: 'avocat-du-diable', originalName: `Devil's Advocate`, clazz: 'PROTECTION', wakeUpSchedule: 'EVERY_NIGHT'}),
		BARON: Sbire.new({name: 'Baron', originalName: 'Baron'}),
		BOOMDANDY: Sbire.new({name: 'Boomdandy', originalName: 'Boomdandy'}),
		CONSPIRATEUR: Sbire.new({name: 'Conspirateur', originalName: 'Mastermind'}),
		CROQUEUSE_D_HOMMES: Sbire.new({name: 'Croqueuse d\'hommes', filename: 'croqueuse-d-hommes', originalName: 'Scarlet Woman'}),
		EMPOISONNEUR: Sbire.new({name: 'Empoisonneur', originalName: 'Poisoner', wakeUpSchedule: 'EVERY_NIGHT'}),
		ESPION: Sbire.new({name: 'Espion', originalName: 'Spy', wakeUpSchedule: 'EVERY_NIGHT'}),
		GOBELIN: Sbire.new({name: 'Gobelin', originalName: 'Gobelin'}),
		HARPIE: Sbire.new({name: 'Harpie', originalName: 'Harpy', wakeUpSchedule: 'EVERY_NIGHT'}),
		JUMEAU_MALEFIQUE: Sbire.new({name: 'Jumeau Maléfique', filename: 'jumeau-malefique', originalName: 'Evil Twin'}),
		MANIPULATEUR: Sbire.new({name: 'Manipulateur', originalName: 'Cerenovus', wakeUpSchedule: 'EVERY_NIGHT'}),
		MARIONNETTE: Sbire.new({name: 'Marionnette', originalName: 'Marionette', wakeUpSchedule: 'Identique au faux rôle attribué'}),
		MEZEPHELES: Sbire.new({name: 'Mezepheles', originalName: 'Mezepheles', wakeUpSchedule: 'FIRST_NIGHT'}),
		ORGUE_DE_BARBARIE: Sbire.new({name: `Orgue de barbarie`, filename: 'orgue-de-barbarie', originalName: 'Organ Grinder'}),
		PARRAIN: Sbire.new({name: 'Parrain', originalName: 'Godfather', wakeUpSchedule: 'La première nuit, puis quand un étranger meurt de jour'}),
		PROPHETE_DE_L_EFFROI: Sbire.new({name: `Prophète de l'effroi`, filename: 'prophete-de-l-effroi', originalName: 'Fearmonger', wakeUpSchedule: 'EVERY_NIGHT'}),
		PSYCHOPATHE: Sbire.new({name: 'Psychopathe', originalName: 'Psychopath'}),
		SORCIERE: Sbire.new({name: 'Sorcière', filename: 'sorciere', originalName: 'Witch', wakeUpSchedule: 'EVERY_NIGHT'}),
		VEUVE_NOIRE: Sbire.new({name: 'Veuve Noire', filename: 'veuve-noire', originalName: 'Widow', wakeUpSchedule: 'FIRST_NIGHT'}),
		VIEILLE_CHOUETTE: Sbire.new({name: 'Vieille Chouette', filename: 'vieille-chouette', originalName: 'Pit Hag', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		VIZIR: Sbire.new({name: 'Vizir',originalName: 'Vizier'}),
	},
	DEMON: {
		AL_HADIKHIA: Demon.new({name: 'Al-Hadikhia', filename: 'al-hadikhia', originalName: 'Al-Hadikhia', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		EMEUTIER: Demon.new({name: 'Emeutier', originalName: 'Riot'}),
		FANG_GU: Demon.new({name: 'Fang Gu', filename: 'fang-gu', originalName: 'Fang Gu', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		IMP: Demon.new({name: 'Imp', originalName: 'Imp', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		LEGION: Demon.new({name: 'Légion', filename: 'legion', originalName: 'Legion'}),
		LEVIATHAN: Demon.new({name: 'Léviathan', filename: 'leviathan', originalName: 'Leviathan'}),
		PO: Demon.new({name: 'Po', filename: 'po', originalName: 'Po', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		PUKKA: Demon.new({name: 'Pukka', originalName: 'Pukka', wakeUpSchedule: 'EVERY_NIGHT'}),
		NO_DASHII: Demon.new({name: 'No Dashii', filename: 'no-dashii', originalName: 'No Dashii', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		OJO: Demon.new({name: 'Ojo', filename: 'ojo', originalName: 'Ojo', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		SANGSUE: Demon.new({name: 'Sangsue', originalName: 'Lleech', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		SHABALOTH: Demon.new({name: 'Shabaloth', originalName: 'Shabaloth', wakeUpSchedule: 'EVERY_NIGHT'}),
		PTIT_MONSTRE: Demon.new({name: 'P\'tit Monstre', filename: 'ptit-monstre', originalName: 'Lil Monsta', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		VIGORMORTIS: Demon.new({name: 'Vigormortis', originalName: 'Vigormortis', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		VORTOX: Demon.new({name: 'Vortox', originalName: 'Vortox', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		ZOMBUUL: Demon.new({name: 'Zombuul', originalName: 'Zombuul', wakeUpSchedule: `Si aucune exécution la veille`}),
	},
	VOYAGEUR: {
		BOUC_EMISSAIRE: Voyageur.new({name: 'Bouc Emissaire', filename: 'bouc-emissaire', originalName: 'Scapegoat'}),
		BUREAUCRATE: Voyageur.new({name: 'Bureaucrate', originalName: 'Bureaucrat', wakeUpSchedule: 'EVERY_NIGHT'}),
		MENDIANT: Voyageur.new({name: 'Mendiant', originalName: 'Beggar'}),
		VENGEUR: Voyageur.new({name: 'Vengeur', originalName: 'Gunslinger'}),
		VOLEUR: Voyageur.new({name: 'Voleur', originalName: 'Thief', wakeUpSchedule: 'EVERY_NIGHT'}),
		APPRENTI: Voyageur.new({name: 'Apprenti', originalName: 'Apprentice', wakeUpSchedule: 'Lors de sa première nuit puis identique au rôle attribué'}),
		ARCHEVEQUE: Voyageur.new({name: 'Archevêque', filename: 'archeveque', originalName: 'Bishop'}),
		MAGISTRAT: Voyageur.new({name: 'Magistrat', originalName: 'Judge'}),
		MATRONE: Voyageur.new({name: 'Matrone', originalName: 'Matron', wakeUpSchedule: 'EVERY_NIGHT'}),
		NECROMANT: Voyageur.new({name: 'Necromant', originalName: 'Voudon'}),
		BARISTA: Voyageur.new({name: 'Barista', originalName: 'Barista'}),
		BOUCHER: Voyageur.new({name: 'Boucher', originalName: 'Butcher'}),
		COLLECTEUR_D_OS: Voyageur.new({name: 'Collecteur d\'os', filename: 'collecteur-d-os', originalName: 'Bone collector', wakeUpSchedule: 'UNTIL_ABILITY_CONSUMED'}),
		DEVIANT: Voyageur.new({name: 'Déviant', filename: 'deviant', originalName: 'Deviant'}),
		FILLE_DE_JOIE: Voyageur.new({name: 'Fille de joie', filename: 'fille-de-joie', originalName: 'Harlot', wakeUpSchedule: 'EVERY_NIGHT_BUT_FIRST'}),
		GANGSTER: Voyageur.new({name: 'Gangster', originalName: 'Gangster'}),
	}
}
