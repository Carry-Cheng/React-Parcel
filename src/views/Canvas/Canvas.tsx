
import React, { Component } from 'react';
const Style = require('./canvas.less');

interface CanvasProps {
	
}
 
interface CanvasState {
	canvasWidth: number;
	canvasHeigth: number;
	canvas: any;
	context: any;
}

export default class Canvas extends Component<CanvasProps, CanvasState> {
	constructor(props: CanvasProps) {
		super(props);
		this.state = {
			canvasWidth: document.body.clientWidth,
			canvasHeigth: document.body.clientHeight,
			canvas: undefined,
			context: undefined
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
		this.setState((state: CanvasState, props: CanvasProps) => {
			return {
				canvas: document.getElementById('canvas'),
				context: state.canvas.getContext('2d')
			}
		});
	}
}
