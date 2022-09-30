/** @jsx jsx */
import Fabled from "../../domain/fabled/fabled"
import FabledComponent from "../fabled.component"
import {jsx} from '@emotion/react'

export const PageTile = ({elements}: {elements: Fabled[]}) => {
	return <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 180px)'}}>
		{elements.map((fabled: Fabled) => <FabledComponent key={fabled.name} fabled={fabled} tile />)}
	</div>
}
