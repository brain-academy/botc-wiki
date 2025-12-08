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
	ARTISAN: Fabled.new({name: `Artisan`, originalName: 'Toymaker'}),
	BARATINEUR: Fabled.new({name: `Baratineur`, originalName: 'Fibbin'}),
	BIBLIOTHECAIRE: Fabled.new({name: `Bibliothécaire`, filename: 'bibliothecaire', originalName: 'Hells Librarian'}),
	BOUDDHISTE: Fabled.new({name: `Bouddhiste`, originalName: 'Buddhist'}),
	DEUS_EX_FIASCO: Fabled.new({name: `Deus ex Fiasco`, filename: 'deus-ex-fiasco', originalName: 'Deus ex Fiasco'}),
	DJINN: Fabled.new({name: `Djinn`, filename: 'djinn', originalName: 'Djinn'}),
	DUCHESSE: Fabled.new({name: `Duchesse`, originalName: 'Duchess'}),
	PASSEUR: Fabled.new({name: `Passeur`, originalName: 'Ferryman'}),
	PRECHEUR_DE_L_APOCALYPSE: Fabled.new({name: `Precheur de l'apocalypse`, filename: 'precheur-de-l-apocalypse', originalName: 'Doomsayer'}),
	PROTECTRICE: Fabled.new({name: `Protectrice`, originalName: 'Spirit of Ivory'}),
	REVOLUTIONNAIRE: Fabled.new({name: `Révolutionnaire`, filename: 'revolutionnaire', originalName: 'Revolutionnary'}),
	SENTINELLE: Fabled.new({name: `Sentinelle`, originalName: 'Sentinel'}),
	TROUBLE_FETE: Fabled.new({name: `Trouble-fête`, filename: 'trouble-fete', originalName: 'Fiddler'}),
}
