import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import { Tile } from './core/tile.component'
import { Iconised, MarkdownDocument, Theme } from '../domain/markdown-types'
import Module from '../domain/module/module'
import { Modules } from '../domain/module/modules'
import R, { RoleType, WakeUpSchedule } from '../domain/role/role'
import { Roles } from '../domain/role/roles'
import { default as ModuleComponent } from './module.component'

const _base_url = '/docs/roles'
const _base_image_path = '/img/blood-on-the-clocktower/roles/icons'

interface RoleProps {
    role: R
    tile?: boolean
    header?: boolean
}

const Role = ({ tile, header, role, ...other }: RoleProps) => {
    if (!role)
        role = { ...Roles.VILLAGEOIS, ...Roles.ETRANGER, ...Roles.SBIRE, ...Roles.DEMON, ...Roles.VOYAGEUR }[Object.keys(other)[0]] as typeof role

    let { name, type, originalName, path, iconPath, clazz, wakeUpSchedule }: R & MarkdownDocument & Iconised = Iconised(MarkdownDocument({ _base_url, _base_image_path, ...role }))
    const { color, darkBackgroundColor, lightBackgroundColor }: Theme = RoleStyles.get(type) || { color: 'black', darkBackgroundColor: 'darkgrey', lightBackgroundColor: 'lightgrey' }

    path = useBaseUrl(path)
    iconPath = useBaseUrl(iconPath)

    return !!header ?
        <React.Fragment>
            <img src={iconPath} height='150' />

            <h4>Modules : {(Modules.containing(role) as Module[]).reduce((acc, module, index) => <React.Fragment>{acc}{index > 0 && ' - '}<ModuleComponent module={module} /></React.Fragment>, <React.Fragment></React.Fragment>)}</h4>
            <h4>Nom Original : {originalName}</h4>
            <h4>Alignement : {RoleType[type]} - {alignment(type)}</h4>
            <h4>Classe : {clazz}</h4>
            <h4>Réveil : {WakeUpSchedule[wakeUpSchedule] || wakeUpSchedule}</h4>
        </React.Fragment>
        :
        !!tile ?
            <Tile props={{ iconPath, name, path, theme: { color, darkBackgroundColor, lightBackgroundColor } }} />
            :
            <a href={path} style={{ color, fontWeight: 'bold' }}>{role.name}</a>
}

/** Function returning the team that each Player type belongs to */
const alignment = (roleType: RoleType) => {
    if (roleType === RoleType.Villageois || roleType === RoleType.Etranger)
        return 'Gentil/Bon'
    else if (roleType === RoleType.Sbire || roleType === RoleType.Demon)
        return 'Maléfique'
}

export default Role

const RoleStyles = new Map<RoleType, Theme>([
    [RoleType.Villageois, { color: 'rgb(8, 193, 255)', darkBackgroundColor: 'rgb(4, 30, 39)', lightBackgroundColor: 'rgb(173, 234, 255)' }],
    [RoleType.Etranger, { color: 'rgb(23, 104, 255)', darkBackgroundColor: 'rgb(20, 20, 49)', lightBackgroundColor: 'rgb(164, 196, 255)' }],
    [RoleType.Sbire, { color: 'rgb(248, 2, 5)', darkBackgroundColor: 'rgb(71, 7, 7)', lightBackgroundColor: 'rgb(243, 174, 176)' }],
    [RoleType.Demon, { color: 'rgb(197, 0, 0)', darkBackgroundColor: 'rgb(41, 12, 12)', lightBackgroundColor: 'rgb(190, 145, 145)' }],
    [RoleType.Voyageur, { color: 'rgb(154, 77, 159)', darkBackgroundColor: 'rgb(58, 31, 59)', lightBackgroundColor: 'rgb(232, 189, 235)' }]
])
