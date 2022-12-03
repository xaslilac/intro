import { lerpClamp } from "../math";

export type Rgb = readonly [number, number, number];

export const rgb = (hex: number): Rgb => [
	(hex >> 16) & 0xff,
	(hex >> 8) & 0xff,
	(hex >> 0) & 0xff,
];

export const hex = (color: Rgb): number =>
	(color[0] << 16) | (color[1] << 8) | (color[2] << 0);

export const hexToString = (hex: number) => "#" + hex.toString(16).padStart(6, "0");

export function lerpHex(x: number, from: number, to: number): number {
	const fromRgb = rgb(from);
	const toRgb = rgb(to);

	return hex([
		lerpClamp(x, fromRgb[0], toRgb[0]),
		lerpClamp(x, fromRgb[1], toRgb[1]),
		lerpClamp(x, fromRgb[2], toRgb[2]),
	]);
}
