import { Extent, Point, rect } from "./geometry";

export interface RenderInput {
	x: number;
	y: number;
	t: number;
}

export interface RenderOutput {
	color: string;
	activation: number;
}

// Rainbow gradient
// export function shader(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const color = `hsl(${(((x + y + t * 10) / 53) * 360).toPrecision(5)}, 100%, 50%)`;
// 	return { color, activation: 1 };
// }

// Rainbow gradient, but FAST
// export function shader(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const color = `hsl(${(((x + y + t * 100) / 100) * 360).toPrecision(5)}, 100%, 50%)`;
// 	return { color, activation: 1 };
// }

// Monochrome gradient
// export function shader(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const luminance = ((((x - y + t * 10) / 53) * 100) % 100).toPrecision(5);
// 	const color = `hsl(0, 0%, ${luminance}%)`;
// 	return { color, activation: 1 };
// }

// Monochrome gradient v2
// export function shader(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const position = (((x - y + t * 10) / 53) * 100) % 200;
// 	const luminance = position > 100 ? 200 - position : position;
// 	const color = `hsl(0, 0%, ${luminance.toPrecision(5)}%)`;
// 	return { color, activation: 1 };
// }

// Pink uwu
// export function shader(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const position = (((x + y + t * 10) / 53) * 100) % 100;
// 	const luminance = position > 50 ? 100 - position : position;
// 	const color = `hsl(309, 100%, ${(luminance + 20).toPrecision(5)}%)`;
// 	return { color, activation: 1 };
// }

// Square
export function shader(input: RenderInput): RenderOutput {
	const isEdge = rect(input, Point(1, 1), Extent(12, 5));
	return { color: isEdge ? "#8d1bd2" : "#333", activation: 1 };
}

// Checkered, marching
// export function shader(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const h = (x + t) % 10 >= 5;
// 	const v = (y + t) % 10 >= 5;
// 	return { color: h ^ v ? "#fff" : "#333", activation: 1 };
// }

// Checkered, marching but FAST
// export function shader(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const h = (x + t * 20) % 10 >= 5;
// 	const v = (y + t * 20) % 10 >= 5;
// 	return { color: h ^ v ? "#fff" : "#333", activation: 1 };
// }

// Checkered, marching but FAST *and* rainbox
// export function shader(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const h = (x + t * 20) % 10 >= 5;
// 	const v = (y + t * 20) % 10 >= 5;
// 	const color = `hsl(${(((x - y + t * 100) / 100) * 360).toPrecision(5)}, 100%, 50%)`;
// 	return { color: h ^ v ? color : "#333", activation: 1 };
// }
