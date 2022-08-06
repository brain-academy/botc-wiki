import MarkdownDocument, { Theme } from '../markdown-document'
import { Role } from '../role/role'

export default class Module extends MarkdownDocument {

    protected _base_url = '/docs/modules'

    readonly roles: Role[]
    readonly imageUrl?: string
    readonly summary?: string
    readonly description?: string
    readonly fabled?: string
    readonly detail?: string
    readonly theme?: Theme

    constructor(
        { name, filename = name.toLowerCase(), roles, imageUrl, summary, description, fabled, detail, theme }:
            { name: string, filename: string, roles: Role[], imageUrl?: string, summary?: string, description?: string, fabled?: string, detail?: string, theme?: Theme }
    ) {
        super(name, filename)
        this.roles = roles
        this.imageUrl = imageUrl
        this.summary = summary
        this.description = description
        this.fabled = fabled
        this.detail = detail
        this.theme = theme
    }

}
