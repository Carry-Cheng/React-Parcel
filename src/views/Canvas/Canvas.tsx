
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
		// this.drawQuadraticCurve()
		this.drawQuadraticCurveHigh()
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

	// 二次贝塞尔曲线
	drawQuadraticCurve = () => {
		this.context.strokeStyle = "#ff0000";
		this.context.beginPath();
		this.context.moveTo(100, 500);
		this.context.quadraticCurveTo(300, 300, 500, 500);
		this.context.stroke();
	}

	// 二次贝塞尔高阶曲线
	drawQuadraticCurveHigh = () => {
		let points = [
			{x: 60, y: 200},{x: 100, y: 320},{x: 160, y: 20},{x: 260, y: 100},{x: 360, y: 250},
			{x: 460, y: 600},{x: 520, y: 300},{x: 660, y: 500},{x: 860, y: 400},{x: 1060, y: 200}
		];
		// 绘制折线
		this.context.strokeStyle = "#ff0000";
		this.context.beginPath();
		points.forEach((element, index) => {
			if (index === 0) {
				this.context.moveTo(element.x, element.y);
			} else {
				this.context.lineTo(element.x, element.y);
			}
		});
		this.context.stroke();
		// 绘制贝塞尔曲线
	}
}
