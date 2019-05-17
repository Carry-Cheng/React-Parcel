
import React, { Component } from 'react';
const Style = require('./canvas.less');

interface CanvasProps {
	
}
 
interface CanvasState {
	canvasWidth: number,
	canvasHeigth: number
}

export default class Canvas extends Component<CanvasProps, CanvasState> {
	constructor(props: CanvasProps) {
		super(props);
		this.state = {
			canvasWidth: document.body.clientWidth,
			canvasHeigth: document.body.clientHeight
		}
	}

	render() {
		return (
			<div className={Style['canvas']}>
				<canvas id="canvas" width={this.state.canvasWidth} height={this.state.canvasHeigth}></canvas>
			</div>
		)
	}

	componentDidMount() {
		console.info('con')
	}
}
