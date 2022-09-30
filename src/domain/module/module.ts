import { BotcEntity } from '../botc-entity'
import Role from '../role/role'

export default interface Module extends BotcEntity {
    roles: Role[]
    summary?: string
    description?: string
    fabled?: string
    detail?: string
}
