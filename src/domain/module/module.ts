import Role from '../role/role'

export default interface Module {
    name: string
    filename: string
    roles: Role[]
    summary?: string
    description?: string
    fabled?: string
    detail?: string
}
