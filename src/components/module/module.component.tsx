import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import {Demon, Etranger, Sbire, Villageois} from '../role/role'
import {RoleComponent} from '../role/role.component'
import Module from './module'

const types = ['Villageois', 'Etrangers', 'Sbires', 'Démons']

const ModuleComponent = ({module: {roles, name, path, imageUrl, description, fabled, theme}, page, tile}: {module: Module, page?: boolean, tile?: boolean}) => {
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
                                    .map(role => <RoleComponent role={role} tile />)
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

export const TROUBLEBREWING = ({page, tile}: {page?: boolean, tile?: boolean}) => <ModuleComponent module={Module.TROUBLE_BREWING} page={page} tile={tile} />
export const BADMOONRISING = ({page, tile}: {page?: boolean, tile?: boolean}) => <ModuleComponent module={Module.BAD_MOON_RISING} page={page} tile={tile} />
export const SECTSANDVIOLETS = ({page, tile}: {page?: boolean, tile?: boolean}) => <ModuleComponent module={Module.SECTS_AND_VIOLETS} page={page} tile={tile} />
export const DEADLYPENANCEDAY = ({page, tile}: {page?: boolean, tile?: boolean}) => <ModuleComponent module={Module.DEADLY_PENANCE_DAY} page={page} tile={tile} />
export const LARGELYUNFAIRE = ({page, tile}: {page?: boolean, tile?: boolean}) => <ModuleComponent module={Module.LARGELY_UN_FAIRE} page={page} tile={tile} />
