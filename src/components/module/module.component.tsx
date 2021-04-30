import React from 'react'
import {Demon, Etranger, Sbire, Villageois} from '../role/role'
import {RoleComponent} from '../role/role.component'
import Module from './module'

const types = ['Villageois', 'Etrangers', 'Sbires', 'Démons']

const ModuleComponent = ({module, page}: {module: Module, page?: boolean}) => (
    !!page ?
        <div>
            {
                [Villageois, Etranger, Sbire, Demon]
                    .map((type, i) => (
                        <React.Fragment>
                            <h1 style={{padding: '20px 0 0 0'}}>{types[i]}</h1>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 180px)'}}>
                                {module.roles
                                    .filter(role => role instanceof type)
                                    .map(role => <RoleComponent role={role} tile />)
                                }
                            </div>
                        </React.Fragment>
                    ))
            }
        </div>
        :
        <a href={module.path}>{module.name}</a>
)

export const TROUBLEBREWING = ({page}: {page?: boolean}) => <ModuleComponent module={Module.TROUBLE_BREWING} page={page} />
export const BADMOONRISING = ({page}: {page?: boolean}) => <ModuleComponent module={Module.BAD_MOON_RISING} page={page} />
export const SECTSANDVIOLETS = ({page}: {page?: boolean}) => <ModuleComponent module={Module.SECTS_AND_VIOLETS} page={page} />
export const DEADLYPENANCEDAY = ({page}: {page?: boolean}) => <ModuleComponent module={Module.DEADLY_PENANCE_DAY} page={page} />
