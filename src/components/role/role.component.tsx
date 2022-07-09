import useBaseUrl from '@docusaurus/useBaseUrl'
import React, {Fragment} from 'react'
import Module from '../module/module'
import {default as ModuleComponent} from '../module/module.component'
import {Demon, Etranger, isRole, Role as R, Sbire, Villageois, Voyageur, Legendaire} from './role'
import {RenderClass, RenderWakeUpSchedule} from './type'

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
        <Fragment>
            <h4>Modules : {Module.containing(role).reduce((acc, module, index) => <Fragment>{acc}{index > 0 && ' - '}<ModuleComponent module={module} /></Fragment>, <Fragment></Fragment>)}</h4>
            <h4>Nom Original : {role.originalName}</h4>
            <h4>Alignement : {role.constructor.name} - {alignment(role)}</h4>
            <h4>Classe : {RenderClass[role.class]}</h4>
            <h4>Réveil : {RenderWakeUpSchedule[role.wakeUpSchedule] || role.wakeUpSchedule}</h4>
        </Fragment>
        :
        !!tile ?
            <a href={role.path} style={{border: `5px double ${roleTypeToColor(role)}`, width: '160px', height: '160px', textAlign: 'center'}}>
                <img src={useBaseUrl(`/img/blood-on-the-clocktower/roles/icons/${role.filename}.png`)} height='150' />
                <span style={{position: 'relative', top: '-30%', fontWeight: 'bold', color: roleTypeToColor(role)}}>{role.name}</span>
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
    else if (role instanceof Voyageur)
        return 'rgb(21,94,28)'
    else if (role instanceof Legendaire)
        return 'rgb(168,153,50)'
}

const alignment = (role: R) => {
    if (role instanceof Villageois || role instanceof Etranger)
        return 'Gentil/Bon'
    else if (role instanceof Sbire || role instanceof Demon)
        return 'Maléfique'
}

export default Role
