import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import {Demon, Etranger, Sbire, Villageois} from '../role/role'
import Role from '../role/role.component'
import {default as M, isModule} from './module'

const types = ['Villageois', 'Etrangers', 'Sbires', 'Démons']

interface ModuleProps {
    module: M
    page?: boolean
    tile?: boolean
}

const Module = ({page, tile, module, ...other}: ModuleProps & any) => {
    if (!module) {
        const validModules: string[] = Object.keys(other).filter(isModule)
        if (validModules.length > 1)
            throw new Error(`Found multiple BOTC modules in the same component: ${validModules.join('|')}`)
        if (validModules.length === 0)
            throw new Error(`Found Module component with no valid BoTC Module (component's attributes: [${Object.keys(other)}])`)
        module = M.fromName(validModules[0])
    }
    const {imageUrl, fabled, roles, path, name, description, theme}: M = module
    const imgUrl = useBaseUrl(imageUrl);
    if (!!page)
        return <div>
            {imgUrl && <div style={{width: '100%', textAlign: 'center'}}><img style={{width: '300px', height: '300px'}} src={imgUrl} alt={name} /></div>}
            {fabled && <p style={{whiteSpace: 'pre-line', textAlign: 'justify', textJustify: 'inter-word', fontStyle: 'italic', fontSize: 'large', color: theme?.color}}>
                <label>"</label>{fabled}<label>"</label>
            </p>}
            {
                [Villageois, Etranger, Sbire, Demon]
                    .map((type, i) => (
                        <React.Fragment>
                            <h1 style={{padding: '20px 0 0 0'}}>{types[i]}</h1>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 180px)'}}>
                                {roles
                                    .filter(role => role instanceof type)
                                    .map(role => <Role role={role} tile />)
                                }
                            </div>
                        </React.Fragment>
                    ))
            }
        </div>
    else if (!!tile)
        return <div style={{width: '100%', maxWidth: '400px', marginBottom: '20px', textAlign: 'center'}}>
            <a href={path}>
                {
                    !!imgUrl
                        ? <img style={{width: '300px', height: '300px'}} src={imgUrl} alt={name} />
                        : <h3 style={{textAlign: 'center'}}>{name}</h3>
                }
            </a>
            <p style={{padding: '0 10px 0 10px', whiteSpace: 'pre-line'}}>{description}</p>
        </div>
    else return <a href={path}>{name}</a>
}

export default Module
