import { Point } from './canvas';

/**
 * 圆类
 * @export
 * @class CircleHelper
 */
export default class CircleHelper {

	public static getFirstQuadrantPoint(origin: Point, distance: number = 10) {
		// 0° ~ 90°
		let radian = Math.PI*2 / 360 * Math.random() * 90;
		return {
			x: origin.x + distance * Math.cos(radian),
			y: origin.y - distance * Math.sin(radian)
		}
	}
}