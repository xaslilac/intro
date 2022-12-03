import type { RenderInput } from "./engine";

interface Point {
	x: number;
	y: number;
}

export const Point = (x: number, y: number) => ({
	x,
	y,
});

interface Extent {
	width: number;
	height: number;
}

export const Extent = (width: number, height: number) => ({
	width,
	height,
});

export function rect(input: RenderInput, origin: Point, dimensions: Extent): boolean {
	const { x, y } = input;
	const top = y === origin.y && x >= origin.x && x <= origin.x + dimensions.width;
	const bottom =
		y === origin.y + dimensions.height &&
		x >= origin.x &&
		x <= origin.x + dimensions.width;
	const left = x === origin.x && y >= origin.y && y <= origin.y + dimensions.height;
	const right =
		x === origin.x + dimensions.width &&
		y >= origin.y &&
		y <= origin.y + dimensions.height;
	return top || bottom || left || right;
}
