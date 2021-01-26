export default abstract class DocComponent {

    protected abstract readonly _base_url: string

    protected constructor(readonly name: string, protected readonly _filename: string = name.toLowerCase()) { }

    get path(): string {
        return `${this._base_url}/${this._filename}`
    }

}
