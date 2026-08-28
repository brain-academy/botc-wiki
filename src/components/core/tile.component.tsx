/** @jsx jsx */
import {useColorMode} from '@docusaurus/theme-common'
import {Theme} from '../../domain/markdown-types'
import {jsx} from '@emotion/react'

interface TileProps {
	props: {
		path: string
		iconPath: string
		name: string
		theme: Theme
	}
}

export const Tile = ({props: {path, iconPath, name, theme: {color, darkBackgroundColor, lightBackgroundColor}}}: TileProps) => {
	const {colorMode} = useColorMode()
	return <a href={path}
		css={{
			display: 'flex', flexDirection: 'column', position: 'relative',
			boxSizing: 'border-box', border: `5px double ${color}`, width: '160px', height: '160px', textAlign: 'center',
			'&:hover': {backgroundColor: colorMode === 'dark' ? darkBackgroundColor : lightBackgroundColor, textDecoration: 'none'}
		}}
	>
		<img src={iconPath} height='130px' css={{flexShrink: 0, objectFit: 'contain'}} />
		<span css={{fontWeight: 'bold', lineHeight: '1.1', position: 'absolute', bottom: '6px', left: '4px', right: '4px', padding: '0 2px 2px', color}}>{name}</span>
	</a>
}
