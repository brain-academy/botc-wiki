import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import L, {LORIC} from '../domain/loric/loric'
import {Iconised, MarkdownDocument, Theme} from '../domain/markdown-types'
import {Tile} from './core/tile.component'

const _base_url = '/docs/mythiques'
const _base_image_path = '/img/blood-on-the-clocktower/loric/icons'

interface RoleProps {
    loric: L
    tile?: boolean
    header?: boolean
}

const Loric = ({tile, header, loric, ...other}: RoleProps) => {
    if (!loric) loric = {...LORIC}[Object.keys(other)[0]] as L

    let {name, originalName, path, iconPath}: F & MarkdownDocument & Iconised = Iconised(MarkdownDocument({_base_url, _base_image_path, ...loric}))
    const {color, darkBackgroundColor, lightBackgroundColor}: Theme = {color: 'rgba(67, 156, 49, 1)', darkBackgroundColor: 'rgba(67, 156, 49, 1)', lightBackgroundColor: ''}

    path = useBaseUrl(path)
    iconPath = useBaseUrl(iconPath)

    return !!header ?
        <React.Fragment>
            <img src={iconPath} height='150' />

            <h4>Nom Original : {originalName}</h4>
        </React.Fragment>
        :
        !!tile ?
            <Tile props={{iconPath, name, path, theme: {color, darkBackgroundColor, lightBackgroundColor}}} />
            :
            <a href={path} style={{color, fontWeight: 'bold'}}>{loric.name}</a>
}

export default Loric
