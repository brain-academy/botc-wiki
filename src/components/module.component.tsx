/** @jsx jsx */
import useBaseUrl from '@docusaurus/useBaseUrl'
import React, {useState} from 'react'
import {RoleType} from '../domain/role/role'
import Role from './role.component'
import M from '../domain/module/module'
import {Modules} from '../domain/module/modules'
import {Iconised, MarkdownDocument, Theme} from '../domain/markdown-types'
import {jsx} from '@emotion/react'

const _base_url = '/docs/modules'
const _base_image_path = '/img/blood-on-the-clocktower/modules'

interface ModuleProps {
	module?: M
	page?: boolean
	tile?: boolean
}

const Module = ({page, tile, module, ...other}: ModuleProps) => {

	const [hasImage, setHasImage] = useState(true)

	if (!module) {
		const moduleName = Object.keys(other)[0]
		module = Modules[Object.keys(other)[0]] as M
		if (!module) throw Error(`The module ${moduleName} does not seem to exist. Could there be a typo in the name ?`)
	}

	let {iconPath, fabled, detail, roles, path, name, description}: M & MarkdownDocument & Iconised = Iconised(MarkdownDocument({_base_url, _base_image_path, ...module}))
	iconPath = useBaseUrl(iconPath)
	path = useBaseUrl(path)
	const {color}: Theme = (module as M & {theme: Theme}).theme || {color: ''}

	if (!!page)
		return <div>
			{
				hasImage &&
				<div style={{width: '100%', textAlign: 'center'}}><img style={{width: '300px', height: '300px'}} src={iconPath} onError={() => setHasImage(false)} /></div>
			}
			{(fabled || detail) && <p style={{whiteSpace: 'pre-line', textAlign: 'justify', textJustify: 'inter-word', fontStyle: 'italic', fontSize: 'large', color}}>
				<label>"</label>{fabled || detail}<label>"</label>
			</p>}
			{
				Object.keys(RoleType)
					.filter(isNaN as any)
					.map((type, i) => (
						<React.Fragment key={i}>
							<h1 style={{padding: '20px 0 0 0'}}>{type}</h1>
							<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 180px)'}}>
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
		return <div css={{width: '100%', maxWidth: '400px', marginBottom: '20px', textAlign: 'center'}}>
			<a href={path}>
				{
					<React.Fragment>
						{
							!!hasImage ?
								<img css={{width: '330px', height: '300px', display: ''}} src={iconPath} onError={() => setHasImage(false)} alt={name} />
								: <h3 css={{textAlign: 'center'}}>{name}</h3>
						}
					</React.Fragment>
				}
			</a>
			<p style={{padding: '0 10px 0 10px', whiteSpace: 'pre-line'}}>{description}</p>
		</div>
	else return <a href={path} style={{color}}>{name}</a>
}

Modules.TROUBLE_BREWING.theme = {color: 'red'}
Modules.BAD_MOON_RISING.theme = {color: 'orange'}
Modules.SECTS_AND_VIOLETS.theme = {color: 'darkorchid'}
Modules.DEADLY_PENANCE_DAY.theme = {color: 'blue'}
Modules.LARGELY_UN_FAIRE.theme = {color: 'green'}
Modules['EXPERIMENTAL'].theme = {color: 'yellow'}

export default Module
