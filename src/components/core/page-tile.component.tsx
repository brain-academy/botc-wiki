/** @jsx jsx */
import Fabled from "../../domain/fabled/fabled"
import FabledComponent from "../fabled.component"
import Loric from "../../domain/loric/loric"
import LoricComponent from "../loric.component"
import {jsx} from '@emotion/react'

export const FabledPageTile = ({elements}: {elements: Fabled[]}) => {
	return <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 180px)'}}>
		{elements.map((fabled: Fabled) => <FabledComponent key={fabled.name} fabled={fabled} tile />)}
	</div>
}

export const LoricPageTile = ({elements}: {elements: Loric[]}) => {
	return <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 180px)'}}>
		{elements.map((loric: Loric) => <LoricComponent key={loric.name} loric={loric} tile />)}
	</div>
}