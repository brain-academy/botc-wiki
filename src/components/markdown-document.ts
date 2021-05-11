export default abstract class MarkdownDocument {

    protected abstract readonly _base_url: string

    protected constructor(readonly name: string, readonly filename: string = name.toLowerCase()) { }

    get path(): string {
        return `${this._base_url}/${this.filename}`
    }

}
