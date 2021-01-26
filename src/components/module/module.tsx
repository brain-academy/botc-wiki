import DocComponent from '../doc-component'

export default class Module extends DocComponent {

    protected _base_url = '/docs/modules'

    static readonly TROUBLE_BREWING = new Module('Trouble Brewing', 'trouble-brewing')
    static readonly BAD_MOON_RISING = new Module('Bad Moon Rising', 'bad-moon-rising')
    static readonly SECTS_AND_VIOLETS = new Module('Sects & Violets', 'sects-and-violets')
    static readonly DEADLY_PENANCE_DAY = new Module('Deadly Penance Day', 'deadly-penance-day')

}
