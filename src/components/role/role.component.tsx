import React, {Fragment} from 'react'
import Module from '../module/module'
import {default as ModuleComponent} from '../module/module.component'
import {Demon, Etranger, isRole, Role as R, Sbire, Villageois} from './role'

interface RoleProps {
    role: R
    tile?: boolean
    header?: boolean
}

const Role = ({tile, header, role, ...other}: RoleProps) => {
    if (!role) {
        const validRoles: string[] = Object.keys(other).filter(isRole)
        if (validRoles.length > 1)
            throw new Error(`Found multiple BoTC roles in the same component: ${validRoles.join('|')}`)
        if (validRoles.length === 0)
            throw new Error(`Found Role component with no valid BoTC Role (component's attributes: [${Object.keys(other)}])`)
        role = R.fromName(validRoles[0])
    }
    return !!header ?
        <h4>Modules : {Module.containing(role).reduce((acc, module, index) => <Fragment>{acc}{index > 0 && ' - '}<ModuleComponent module={module} /></Fragment>, <Fragment></Fragment>)}</h4>
        :
        !!tile ?
            <a href={role.path}>
                <div style={{border: `5px double ${roleTypeToColor(role)}`, width: '160px', height: '160px', textAlign: 'center'}}>
                    <img src={`/img/blood-on-the-clocktower/roles/icons/${role.filename}.png`} height='150' />
                    <span style={{position: 'relative', top: '-30%', fontWeight: 'bold', color: roleTypeToColor(role)}}>{role.name}</span>
                </div>
            </a>
            :
            <a href={role.path} style={{color: roleTypeToColor(role), fontWeight: 'bold'}}>{role.name}</a>
}

const roleTypeToColor = (role: R) => {
    if (role instanceof Villageois)
        return 'rgb(8,193,255)'
    else if (role instanceof Etranger)
        return 'rgb(23,104,255)'
    else if (role instanceof Sbire)
        return 'rgb(248,2,5)'
    else if (role instanceof Demon)
        return 'rgb(197,0,0)'
}

export default Role
