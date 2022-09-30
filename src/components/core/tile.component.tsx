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
			display: 'flex', flexDirection: 'column',
			border: `5px double ${color}`, width: '160px', height: '160px', textAlign: 'center',
			'&:hover': {backgroundColor: colorMode === 'dark' ? darkBackgroundColor : lightBackgroundColor, textDecoration: 'none'}
		}}
	>
		<img src={iconPath} height='140px' />
		<span css={{fontWeight: 'bold', position: 'relative', top: '-30px', color}}>{name}</span>
	</a>
}
