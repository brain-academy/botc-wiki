import useBaseUrl from '@docusaurus/useBaseUrl'

export default abstract class MarkdownDocument {

    protected abstract readonly _base_url: string

    protected constructor(readonly name: string, readonly filename: string = name.toLowerCase()) { }

    get path(): string {
        return useBaseUrl(`${this._base_url}/${this.filename}`)
    }

    get iconPath(): string {
        return useBaseUrl(`/img/blood-on-the-clocktower/roles/icons/${this.filename}.png`)
    }

}

export type Theme = { color: string }
