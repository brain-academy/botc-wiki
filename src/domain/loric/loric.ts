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
    GROS_BONNET: Loric.new({name: `Gros Bonnet`, filename: 'gros-bonnet', originalName: 'Big Wig'}),
    TOR: Loric.new({name: `Tor`, originalName: 'Tor'}),
}
