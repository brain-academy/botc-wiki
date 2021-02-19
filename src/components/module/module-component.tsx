import React from 'react'
import Module from './module'

const ModuleComponent = ({module}: {module: Module}) => (<a href={module.path}>{module.name}</a>)

export const TROUBLEBREWING = () => <ModuleComponent module={Module.TROUBLE_BREWING} />
export const BAD_MOON_RISING = () => <ModuleComponent module={Module.BAD_MOON_RISING} />
export const SECTSANDVIOLETS = () => <ModuleComponent module={Module.SECTS_AND_VIOLETS} />
export const DEADLYPENANCEDAY = () => <ModuleComponent module={Module.DEADLY_PENANCE_DAY} />
