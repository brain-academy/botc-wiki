import {BotcEntity} from "../botc-entity"

export default class Loric implements BotcEntity {
    constructor(
        readonly name: string,
        readonly filename: string,
        readonly originalName: string,
    ) { }

    static new({name, filename = name.toLocaleLowerCase(), originalName}: {name: string, filename?: string, originalName: string}): Loric {
        return new Loric(name, filename, originalName)
    }
}

export const LORIC = {
    CHASSEUR_D_ORAGES: Loric.new({name: `Chasseur d'orages`, filename: 'chasseur-d-orages', originalName: 'Storm Catcher'}),
	CONTREBANDIER: Loric.new({name: `Contrebandier`, originalName: 'Bootleger'}),
    GROS_BONNET: Loric.new({name: `Gros Bonnet`, filename: 'gros-bonnet', originalName: 'Big Wig'}),
    HINDU: Loric.new({name: `Hindu`, originalName: 'Hindu'}),
    JARDINIER: Loric.new({name: `Jardinier`, originalName: 'Gardener'}),
    PAPE: Loric.new({name: `Pape`, originalName: 'Pope'}),
    TOR: Loric.new({name: `Tor`, originalName: 'Tor'}),
    ZENOMANCIEN: Loric.new({name: `Zénomancien`, filename: 'zenomancien', originalName: 'Zenomancer'})
}
