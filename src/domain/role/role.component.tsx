/** @jsx jsx */
import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import Module from '../module/module'
import { default as ModuleComponent } from '../module/module.component'
import { Modules } from '../module/modules'
import R, { Demon, Etranger, Legendaire, RoleType, Sbire, Villageois, Voyageur, WakeUpSchedule } from './role'
import { ROLES } from './roles'
import { jsx } from '@emotion/react'
import { Iconised, MarkdownDocument, Theme } from '../../core/markdown-types'

const _base_url = '/docs/roles'
const _base_image_path = '/img/blood-on-the-clocktower/roles/icons'

interface RoleProps {
    role: R
    tile?: boolean
    header?: boolean
}

const Role = ({ tile, header, role, ...other }: RoleProps) => {
    if (!role) {
        const validRoles: R[] = Object.keys(other).map(name => ROLES[name])
        if (validRoles.length > 1)
            throw new Error(`Found multiple BoTC roles in the same component: ${validRoles.join('|')}`)
        if (validRoles.length === 0)
            throw new Error(`Found Role component with no valid BoTC Role (component's attributes: [${Object.keys(other)}])`)
        role = validRoles[0]
    }
    
    let { name, type, originalName, path, iconPath, clazz, wakeUpSchedule }: R & MarkdownDocument & Iconised = Iconised(MarkdownDocument({_base_url, _base_image_path, ...role}))
    const {color, darkBackgroundColor, lightBackgroundColor}: Theme = RoleStyles.get(role.type) || { color: 'black', darkBackgroundColor: 'darkgrey', lightBackgroundColor: 'lightgrey' }
    path = useBaseUrl(path)
    iconPath = useBaseUrl(iconPath)

    return !!header ?
        <React.Fragment>
            <img src={iconPath} height='150' />

            <h4>Modules : {(Modules.containing(role) as Module[]).reduce((acc, module, index) => <React.Fragment>{acc}{index > 0 && ' - '}<ModuleComponent module={module} /></React.Fragment>, <React.Fragment></React.Fragment>)}</h4>
            <h4>Nom Original : {originalName}</h4>
            <h4>Alignement : {typeof role} - {alignment(role)}</h4>
            <h4>Classe : {clazz}</h4>
            <h4>Réveil : {WakeUpSchedule[wakeUpSchedule] || wakeUpSchedule}</h4>
        </React.Fragment>
        :
        !!tile ?
            <a
                href={path}
                css={{
                    display: 'flex', flexDirection: 'column',
                    border: `5px double ${color}`, width: '160px', height: '160px', textAlign: 'center',
                    '&:hover': { backgroundColor: darkBackgroundColor, textDecoration: 'none' }
                }}
            >
                <img src={iconPath} height='140px' />
                <span css={{ fontWeight: 'bold', position: 'relative', top: '-30px', color }}>{name}</span>
            </a>
            :
            <a href={path} style={{ color, fontWeight: 'bold' }}>{role.name}</a>
}

/** Function returning the team that each Player type belongs to */
const alignment = (role: R) => {
    if (role instanceof Villageois || role instanceof Etranger)
        return 'Gentil/Bon'
    else if (role instanceof Sbire || role instanceof Demon)
        return 'Maléfique'
}

export default Role

//

const RoleStyles = new Map<RoleType, Theme>([
    [RoleType.Villageois, { color: 'rgb(8,193,255)', darkBackgroundColor: 'rgb(4, 30, 39)', lightBackgroundColor: '' }],
    [RoleType.Etranger, { color: 'rgb(23,104,255)', darkBackgroundColor: 'rgb(18, 78, 189)', lightBackgroundColor: '' }],
    [RoleType.Sbire, { color: 'rgb(248,2,5)', darkBackgroundColor: 'rgb(201, 1, 4)', lightBackgroundColor: '' }],
    [RoleType.Demon, { color: 'rgb(197,0,0)', darkBackgroundColor: 'rgb(141, 0, 0)', lightBackgroundColor: '' }],
    [RoleType.Voyageur, { color: 'rgb(154,77,159)', darkBackgroundColor: 'rgb(126, 63, 131)', lightBackgroundColor: '' }],
    [RoleType.Legendaire,{ color: 'rgb(168,153,50)', darkBackgroundColor: 'rgb(139, 127, 43)', lightBackgroundColor: '' }]
])
