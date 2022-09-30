import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import F, {FABLED} from '../domain/fabled/fabled'
import {Iconised, MarkdownDocument, Theme} from '../domain/markdown-types'
import {Tile} from './core/tile.component'

const _base_url = '/docs/legendaires'
const _base_image_path = '/img/blood-on-the-clocktower/fabled/icons'

interface RoleProps {
	fabled: F
	tile?: boolean
	header?: boolean
}

const Fabled = ({tile, header, fabled, ...other}: RoleProps) => {
	if (!fabled) fabled = {...FABLED}[Object.keys(other)[0]] as F

	let {name, originalName, path, iconPath}: F & MarkdownDocument & Iconised = Iconised(MarkdownDocument({_base_url, _base_image_path, ...fabled}))
	const {color, darkBackgroundColor, lightBackgroundColor}: Theme = {color: 'rgb(168, 153, 50)', darkBackgroundColor: 'rgb(139, 127, 43)', lightBackgroundColor: ''}

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
			<a href={path} style={{color, fontWeight: 'bold'}}>{fabled.name}</a>
}

export default Fabled
