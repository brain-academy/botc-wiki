import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import { Iconised, MarkdownDocument, Theme } from '../../core/markdown-types'
import Role from '../role/role.component'
import M from './module'
import { Modules } from './modules'
import { RoleType } from '../role/role'

const _base_url = '/docs/modules'
const _base_image_path = '/img/blood-on-the-clocktower/modules'

interface ModuleProps {
    module?: M,
    page?: boolean
    tile?: boolean
}

const Module = ({ page, tile, module, ...other }: ModuleProps) => {
    if (!module) {
        const validModules: M[] = Object.keys(other).map(name => Modules[name])
        if (validModules.length > 1)
            throw new Error(`Found multiple BOTC modules in the same component: ${validModules.join('|')}`)
        if (validModules.length === 0)
            throw new Error(`Found Module component with no valid BoTC Module (component's attributes: [${Object.keys(other)}])`)
        module = validModules[0]
    }

    let { iconPath, fabled, roles, path, name, description }: M & MarkdownDocument & Iconised = Iconised(MarkdownDocument({ _base_url, _base_image_path, ...module }))
    iconPath = useBaseUrl(iconPath)
    path = useBaseUrl(path)
    const { color, darkBackgroundColor, lightBackgroundColor }: Theme = ModuleStyles.get(Object.keys(other)[0]) || { color: 'black', darkBackgroundColor: 'darkgrey', lightBackgroundColor: 'lightgrey' }

    if (!!page)
        return <div>
            {iconPath && <div style={{ width: '100%', textAlign: 'center' }}><img style={{ width: '300px', height: '300px' }} src={iconPath} alt={name} /></div>}
            {fabled && <p style={{ whiteSpace: 'pre-line', textAlign: 'justify', textJustify: 'inter-word', fontStyle: 'italic', fontSize: 'large', color }}>
                <label>"</label>{fabled}<label>"</label>
            </p>}
            {
                Object.keys(RoleType)
                    .filter(isNaN as any)
                    .map((type, i) => (
                        <React.Fragment key={i}>
                            <h1 style={{ padding: '20px 0 0 0' }}>{type}</h1>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 180px)' }}>
                                {roles
                                    .filter(role => RoleType[role.type] === type)
                                    .map(role => <Role key={role.name} role={role} tile />)
                                }
                            </div>
                        </React.Fragment>
                    ))
            }
        </div>
    else if (!!tile)
        return <div style={{ width: '100%', maxWidth: '400px', marginBottom: '20px', textAlign: 'center' }}>
            <a href={path}>
                {
                    !!iconPath
                        ? <img style={{ width: '330px', height: '300px' }} src={iconPath} alt={name} />
                        : <h3 style={{ textAlign: 'center' }}>{name}</h3>
                }
            </a>
            <p style={{ padding: '0 10px 0 10px', whiteSpace: 'pre-line' }}>{description}</p>
        </div>
    else return <a href={path} style={{ color }}>{name}</a>
}

export default Module

const ModuleStyles = new Map<string, Theme>([
    ['TROUBLE_BREWING', { color: 'red', darkBackgroundColor: '', lightBackgroundColor: '' }],
    ['BAD_MOON_RISING', { color: 'orange', darkBackgroundColor: '', lightBackgroundColor: '' }],
    ['SECTS_AND_VIOLETS', { color: 'darkorchid', darkBackgroundColor: '', lightBackgroundColor: '' }]
])