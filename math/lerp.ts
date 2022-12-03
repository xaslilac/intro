import { clamp } from "./clamp";

export function lerp(x: number, min: number, max: number) {
	return min + x * (max - min);
}

export function lerpClamp(x: number, min: number, max: number) {
	const trueMin = Math.min(min, max);
	const trueMax = Math.max(min, max);
	return clamp(lerp(x, min, max), trueMin, trueMax);
}

export function invlerp(x: number, min: number, max: number) {
	return x / (max - min) - min;
}

export function translate(
	x: number,
	prevMin: number,
	prevMax: number,
	nextMin: number,
	nextMax: number,
) {
	return lerp(invlerp(x, prevMin, prevMax), nextMin, nextMax);
}
