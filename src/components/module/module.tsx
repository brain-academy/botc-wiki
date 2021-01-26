const base_url = '/docs/modules'

export default class Module {

    private constructor(readonly name: string, private readonly _filename: string = name.toLowerCase()) { }

    get path(): string {
        return `${base_url}/${this._filename}`
    }

    static readonly TROUBLE_BREWING = new Module('Trouble Brewing', 'trouble-brewing')
    static readonly BAD_MOON_RISING = new Module('Bad Moon Rising', 'bad-moon-rising')
    static readonly SECTS_AND_VIOLETS = new Module('Sects & Violets', 'sects-and-violets')
    static readonly DEADLY_PENANCE_DAY = new Module('Deadly Penance Day', 'deadly-penance-day')

}
