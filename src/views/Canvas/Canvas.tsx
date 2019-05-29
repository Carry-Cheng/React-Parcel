
import React, { Component } from 'react';
const Style = require('./canvas.less');

interface CanvasProps {
	
}
 
interface CanvasState {
	readonly canvasWidth: number;
	readonly canvasHeigth: number;
}

export default class Canvas extends Component<CanvasProps, CanvasState> {
	// canvas instance
	canvas: HTMLCanvasElement = undefined;
	context: CanvasRenderingContext2D = undefined;

	constructor(props: CanvasProps) {
		super(props);
		this.state = {
			canvasWidth: document.documentElement.clientWidth,
			canvasHeigth: document.documentElement.clientHeight
		};
	}

	render() {
		return (
			<div className={Style['canvas']}>
				<canvas id="canvas" width={this.state.canvasWidth} height={this.state.canvasHeigth}></canvas>
			</div>
		)
	}

	componentDidMount() {
		this.initCanvas();
	}

	initCanvas = () => {
		this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
		this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
		window.addEventListener('resize', this.windowResizeEvent);
	}

	windowResizeEvent = () => {
		this.setState(() => {
			return {
				canvasWidth: document.documentElement.clientWidth,
				canvasHeigth: document.documentElement.clientHeight
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.windowResizeEvent);
	}

	
}
