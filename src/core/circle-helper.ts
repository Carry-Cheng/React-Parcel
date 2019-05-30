import { Point } from './canvas';

/**
 * 圆类
 * @export
 * @class CircleHelper
 */
export default class CircleHelper {

	public static getFirstQuadrantPoint(origin: Point, distance: number = 1000) {
		// 0° ~ 90°
		let radian = Math.PI*2 / Math.random() * 90;
		return {
			x: origin.x + Math.cos(radian),
			y: origin.y + Math.sin(radian)
		}
	}
}