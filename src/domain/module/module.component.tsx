/** @jsx jsx */
import useBaseUrl from '@docusaurus/useBaseUrl'
import React, { useState } from 'react'
import { Iconised, MarkdownDocument, Theme } from '../../core/markdown-types'
import { RoleType } from '../role/role'
import Role from '../role/role.component'
import M from './module'
import { Modules } from './modules'
import { jsx } from '@emotion/react'

const _base_url = '/docs/modules'
const _base_image_path = '/img/blood-on-the-clocktower/modules'

interface ModuleProps {
    module?: M,
    page?: boolean
    tile?: boolean
}

const Module = ({ page, tile, module, ...other }: ModuleProps) => {
    let [hasImage, setHasImage] = useState(true)
    if (!module)
        module = Modules[Object.keys(other)[0]] as M

    let { iconPath, fabled, roles, path, name, description }: M & MarkdownDocument & Iconised = Iconised(MarkdownDocument({ _base_url, _base_image_path, ...module }))
    iconPath = useBaseUrl(iconPath)
    path = useBaseUrl(path)
    const { color, darkBackgroundColor, lightBackgroundColor }: Theme = Modules[Object.keys(other)[0]]?.theme || { color: 'black', darkBackgroundColor: 'darkgrey', lightBackgroundColor: 'lightgrey' }


    if (!!page)
        return <div>
            {<div style={{ width: '100%', textAlign: 'center' }}><img style={{ width: '300px', height: '300px' }} src={iconPath} alt={name} /></div>}
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
        return <div css={{ width: '100%', maxWidth: '400px', marginBottom: '20px', textAlign: 'center' }}>
            <a href={path}>
                {
                    <React.Fragment>
                        {
                            !!hasImage ?
                                <img css={{ width: '330px', height: '300px', display: '' }} src={iconPath} onError={() => setHasImage(false)} alt={name} />
                                : <h3 css={{ textAlign: 'center' }}>{name}</h3>
                        }
                    </React.Fragment>
                }
            </a>
            <p style={{ padding: '0 10px 0 10px', whiteSpace: 'pre-line' }}>{description}</p>
        </div>
    else return <a href={path} style={{ color }}>{name}</a>
}

Modules.TROUBLE_BREWING.theme = { color: 'red', darkBackgroundColor: '', lightBackgroundColor: '' }
Modules.BAD_MOON_RISING.theme = { color: 'orange', darkBackgroundColor: '', lightBackgroundColor: '' }
Modules.SECTS_AND_VIOLETS.theme = { color: 'darkorchid', darkBackgroundColor: '', lightBackgroundColor: '' }

export default Module
