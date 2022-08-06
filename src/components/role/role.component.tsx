import React, {Fragment} from 'react'
import Module from '../module/module'
import {default as ModuleComponent} from '../module/module.component'
import { modules } from '../module/modules'
import {Role as R, WakeUpSchedule} from './role'
import { Demon, Etranger, roles, Sbire, Villageois } from './roles'

interface RoleProps {
    role: R
    tile?: boolean
    header?: boolean
}

const Role = ({tile, header, role, ...other}: RoleProps) => {
    if (!role) {
        const validRoles: R[] = Object.keys(other).map(name => roles[name])
        if (validRoles.length > 1)
            throw new Error(`Found multiple BoTC roles in the same component: ${validRoles.join('|')}`)
        if (validRoles.length === 0)
            throw new Error(`Found Role component with no valid BoTC Role (component's attributes: [${Object.keys(other)}])`)
        role = validRoles[0]
    }

    const {name, originalName, path, iconPath, type, class: clazz, theme: {color}, wakeUpSchedule} = role

    return !!header ?
        <Fragment>
            <img src={iconPath} height='150' />

            <h4>Modules : {(modules.containing(role) as Module[]).reduce((acc, module, index) => <Fragment>{acc}{index > 0 && ' - '}<ModuleComponent module={module} /></Fragment>, <Fragment></Fragment>)}</h4>
            <h4>Nom Original : {originalName}</h4>
            <h4>Alignement : {type} - {alignment(role)}</h4>
            <h4>Classe : {clazz}</h4>
            <h4>Réveil : {WakeUpSchedule[wakeUpSchedule] || wakeUpSchedule}</h4>
        </Fragment>
        :
        !!tile ?
            <a href={path} style={{border: `5px double ${color}`, width: '160px', height: '160px', textAlign: 'center'}}>
                <img src={iconPath} height='150' />
                <span style={{position: 'relative', top: '-30%', fontWeight: 'bold', color}}>{name}</span>
            </a>
            :
            <a href={path} style={{color, fontWeight: 'bold'}}>{role.name}</a>
}

const alignment = (role: R) => {
    if (role instanceof Villageois || role instanceof Etranger)
        return 'Gentil/Bon'
    else if (role instanceof Sbire || role instanceof Demon)
        return 'Maléfique'
}

export default Role
