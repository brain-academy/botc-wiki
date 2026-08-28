import {BotcEntity} from "../botc-entity"

export default class Fabled implements BotcEntity {
	constructor(
		readonly name: string,
		readonly filename: string,
		readonly originalName: string,
	) { }

	static new({name, filename = name.toLocaleLowerCase(), originalName}: {name: string, filename?: string, originalName: string}): Fabled {
		return new Fabled(name, filename, originalName)
	}
}

export const FABLED = {
	ANGE: Fabled.new({name: `Ange`, originalName: 'Angel'}),
	BIBELOTIER: Fabled.new({name: `Bibelotier`, originalName: 'Toymaker'}),
	BIBLIOTHECAIRE: Fabled.new({name: `Bibliothécaire de l'enfer`, filename: 'bibliothecaire', originalName: 'Hells Librarian'}),
	BOUDDHISTE: Fabled.new({name: `Bouddhiste`, originalName: 'Buddhist'}),
	DEUS_EX_FIASCO: Fabled.new({name: `Deus ex Fiasco`, filename: 'deus-ex-fiasco', originalName: 'Deus ex Fiasco'}),
	DJINN: Fabled.new({name: `Djinn`, filename: 'djinn', originalName: 'Djinn'}),
	DUCHESSE: Fabled.new({name: `Duchesse`, originalName: 'Duchess'}),
	PASSEUR: Fabled.new({name: `Passeur`, originalName: 'Ferryman'}),
	PRECHEUR_DE_L_APOCALYPSE: Fabled.new({name: `Prêcheur de l'apocalypse (Messager de malheur)`, filename: 'precheur-de-l-apocalypse', originalName: 'Doomsayer'}),
	REVOLUTIONNAIRE: Fabled.new({name: `Révolutionnaire`, filename: 'revolutionnaire', originalName: 'Revolutionnary'}),
	SENTINELLE: Fabled.new({name: `Sentinelle`, originalName: 'Sentinel'}),
	TAQUIN: Fabled.new({name: `Taquin`, originalName: 'Fibbin'}),
	TOUR_D_IVOIRE: Fabled.new({name: `Tour d'Ivoire (Esprit d'Ivoire)`, filename: 'tour-d-ivoire', originalName: 'Spirit of Ivory'}),
	TROUBLE_FETE: Fabled.new({name: `Trouble-fête (Violoniste)`, filename: 'trouble-fete', originalName: 'Fiddler'}),
}
